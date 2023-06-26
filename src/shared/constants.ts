import { sociaMedia, SnackbarOrigin } from "./types";

export const SNACKBAR_ANCHOR_ORIGIN: SnackbarOrigin = {
  vertical: 'top',
  horizontal: 'center',
}

export const SNACKBAR_MAX_NUM = 1

export const SNACKBAR_AUTO_HIDE_DURATION = 3000

export const BACK_TO_TOP_THRESHOLD = 800
export const SOCIAL_MEDIA: sociaMedia = {
  gitHub: {
    url: 'https://github.com/luhaizhou',
    icon: 'github'
  },
  wechat: {
    url: 'images/wxpay.jpg',
    icon: 'wechat'
  },
  lark: {
    url: 'https://www.feishu.cn/invitation/page/add_contact/?token=87boa15f-e27b-459b-a9e3-fac93177436c',
    icon: 'lark'
  },
  email: {
    url: 'mailto:luhz163@163.com',
    icon: 'email'
  },
  wxpay: {
    url: 'images/wxpay.jpg',
    icon: 'wxpay'
  },
  zfbpay: {
    url: 'images/wxpay.jpg',
    icon: 'zfbpay'
  },
}