declare namespace ClassifyGlobal {
  interface ClassifyItem extends ResponseGlobal.ResponseData {
    createTime: string;
    _id: string;
    value: string;
    label: string;
    __v: number;
  }

  interface Classify extends ResponseGlobal.ResponseData {
    data: ClassifyItem[],
    total: number
  }
}