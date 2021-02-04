import { toRefs, reactive, onMounted, onUnmounted } from 'vue'
import { MouseState } from './type'

/**获取鼠标位置 */
export function useMouse() {
  const state = reactive<MouseState>({
    x: 0,
    y: 0,
  })

  const update = (e: any) => {
    state.x = e.pageX
    state.y = e.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })

  return toRefs(state)
}
