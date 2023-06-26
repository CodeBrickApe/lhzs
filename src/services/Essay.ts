import request from '../utils/request'
import useSWR from "swr";
// 文章列表
export const getBlogEssayList = (data?: any) => request.post(`/blog/essay/list`, data) as Promise<EssayGlobal.Essay>


// 文章标签列表
export const getTagList = (data?: any) => request.post('/blog/tag/list', data) as Promise<TagGlobal.Tag>

// 单个文章标签列表
export const getTagFindOne = (data?: any) => request.post('/blog/tag/findOne', data) as Promise<TagGlobal.TagItem>

// 查看单个文章
export const getEssayFindOne = (data?: any) => request.post('/blog/essay/findOne', data) as Promise<EssayGlobal.EssayItem>

// 新增文章评论
export const postAddEssayRemark = (data?: any) => request.post('/blog/remark/add', data)

// 文章评论列表
export const postEssayRemarkList = (data?: any) => request.post('/blog/remark/notes', data) as Promise<RemarkGlobal.Remark>

