// @ts-nocheck
import type { App } from 'vue';
import SvgIcon from '@/common/components/SvgIcon/index.vue'// svg component

const app = createApp(App)

// register globally
app.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
