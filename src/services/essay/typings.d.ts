declare namespace API {
  /**
   * 文章列表
   * @memberof 入参
   */
  interface IBlogEssayPayload {
    essayState?: number
    essayTag?: string
    essayType?: string
    page?: number
    size?: number
    topPV?: number
  }
  /**
   * 文章列表
   * @memberof 出参
   */
  interface IBlogEssayBody {
    rows: IBlogEssay[]
    total: number
  }

  /**
   * 查看单个文章
   * @memberof 入参
   */
  interface IFindOneEssayPayload {
    id?: string
  }
  /**
   * 查看单个文章
   * @memberof 出参
   */
  interface IFindOneEssayBody {
    post: IBlogEssay
    prev_post: IBlogEssay[]
    next_post: IBlogEssay[]
  }
  interface IBlogEssay {
    essayTagName: string[];
    essayTag: string[];
    _id: string;
    essayType: string;
    markdown: string;
    html: string;
    coverImg: string;
    title: string;
    essayTypeName: string;
    essayState: number;
    pageView: number;
    createTime: string;
    __v: number;
    updateTime: string;
    summary: string;
  }
  /**
 * 文章评论列表
 * @memberof 入参
 */
  interface IEssayRemarkPayload {
    essayId: string
  }
  /**
   * 文章评论列表
   * @memberof 出参
   */
  interface IEssayRemarkBody {
    list: IEssayRemark[],
    total: number
  }
  interface IEssayRemark {
    __v?: number;
    _id?: string;
    avatar?: string;
    browserName?: string;
    children?: [];
    createTime?: string;
    essayId?: string;
    essayTitle?: string;
    isBlogger?: boolean;
    isMarkRead?: boolean;
    osName?: string;
    parentId?: string;
    remark?: string;
    userName?: string;
    replyTo?: string
  }
  /**
 * 文章标签列表
 * @memberof 出参
 */
  interface IEssayTagBody {
    data: TagItem[],
    total: number
  }
  interface TagItem {
    createTime: string;
    _id: string;
    value: string;
    label: string;
    desc: string;
    __v: number;
    updateTime: string;
  }
}
