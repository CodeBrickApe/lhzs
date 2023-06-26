declare namespace EssayGlobal {
  interface EssayItem extends ResponseGlobal.ResponseData {
    essayTagName?: string[];
    essayTag?: string[];
    _id?: string;
    essayType?: string;
    markdown?: string;
    html?: string;
    coverImg?: string;
    title?: string;
    essayTypeName?: string;
    essayState?: number;
    pageView?: number;
    createTime?: string;
    __v?: number;
    updateTime?: string;
  }

  interface Essay extends ResponseGlobal.ResponseData {
    data: EssayItem[],
    total: number
  }
}