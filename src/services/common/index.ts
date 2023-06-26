import request from '../../utils/request'

// 新增访问记录
export const postAddVisit = (data: any) => request.post('/visit', data)