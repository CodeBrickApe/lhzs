import useSWR from 'swr';
import request from '../../utils/request'


// 查看单个文章
export const getEssayFindOne = (data?: any) => request.post('/blog/essay/findOne', data) as Promise<API.IResponseData<API.IFindOneEssayBody>>

// 文章评论列表
export const useEssayRemarkList = (payload: API.IEssayRemarkPayload) => {
  const { data, mutate, isValidating } = useSWR(
    [`/blog/remark/notes`, { ...payload }],
    (key, options) =>
      request.post<API.IResponseData<API.IEssayRemarkBody>>(key, options)
        .then((res) => res.data)
  );
  return [data, { mutate, isValidating }] as const;
}
// 新增文章评论
export const postAddEssayRemark = (data?: any) => request.post('/blog/remark/add', data) as Promise<API.IResponseData<API.IFindOneEssayBody>>

// 文章列表
export const postEssayList = (data?: API.IBlogEssayPayload) => request.post('/blog/essay/list', data) as Promise<API.IResponseData<API.IBlogEssayBody>>


export const useEssayList = (payload: API.IBlogEssayPayload) => {
  const { data, mutate, isValidating } = useSWR(
    [`/blog/essay/list`, { ...payload }],
    (key, options) =>
      request.post<API.IResponseData<API.IBlogEssayBody>>(key, options)
        .then((res) => res.data)
  );
  return [data, { mutate, isValidating }] as const;
}
// 文章标签列表
export const useEssayTag = (payload: any) => {
  const { data, mutate, isValidating } = useSWR(
    [`/blog/tag/list`, { ...payload }],
    (key, options) =>
      request.post<API.IResponseData<API.IEssayTagBody>>(key, options)
        .then((res) => res.data)
  );
  return [data, { mutate, isValidating }] as const;
}


