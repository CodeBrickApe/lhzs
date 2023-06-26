declare namespace API {
  interface IResponseData<T = {}> {
    [x: string]: any;
    msg: string;
    code?: number
    time?: number
    data: T;
  }

}