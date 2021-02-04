// import { reactive, onMounted, toRefs, } from 'vue'
import { ElMessage, ElNotification } from 'element-plus'

/** 自定义notification */
const notification = (type: any, message: string) => {
  ElNotification({
    type: type,
    message: message,
    duration: 3000,
    position: 'bottom-right'
  })
}

/** 自定义message */
const $message = (type: any, msg: string) => {
  const options = {
    type: type,
    message: msg,
    duration: 3000,
    position: 'bottom-right'
  }
  ElMessage(options)
}

export function useMessage() {
  return {
    notification: notification,
    $message: $message
  }
}
