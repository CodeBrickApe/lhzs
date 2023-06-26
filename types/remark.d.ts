declare namespace RemarkGlobal {
  interface Children {
    _id: string;
    avatar: string;
    osName: string;
    browserName: string;
    userName: string;
    remark: string;
    parentId: string;
    replyTo: string;
    essayId: string;
    essayTitle: string;
    isMarkRead: boolean;
    isBlogger: boolean;
    createTime: string;
    __v: number;
  }

  interface RemarkItem extends ResponseGlobal.ResponseData {
    _id: string;
    avatar: string;
    osName: string;
    browserName: string;
    parentId: string;
    isMarkRead: boolean;
    isBlogger: boolean;
    essayId: string;
    essayTitle: string;
    userName: string;
    remark: string;
    createTime: string;
    __v: number;
    children?: Children[];
  }
  interface Remark extends ResponseGlobal.ResponseData{
    data: RemarkItem[],
    total: number
  }
}
