import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? '' : 'http://localhost:9001/portal/api',
  // baseURL: process.env.NODE_ENV === "production" ? '' : 'http://blog.lhzzs.top/portal/api',
  
  timeout: 10000,
})

instance.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
)

instance.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error),
)

export default instance
