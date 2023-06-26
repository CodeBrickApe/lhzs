declare namespace TagGlobal {
  interface TagItem extends ResponseGlobal.ResponseData{
    createTime: string;
    _id: string;
    value: string;
    label: string;
    desc: string;
    __v: number;
    updateTime: string;
  }

  interface Tag extends ResponseGlobal.ResponseData {
    data: TagItem[],
    total: number
  }
}