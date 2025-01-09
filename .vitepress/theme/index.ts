import { h } from 'vue'
import { type Theme } from 'vitepress'
import PiniaLogo from './components/PiniaLogo.vue'
import DefaultTheme from 'vitepress/theme'
import './styles/vars.css'

const theme: Theme = {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-image': () => h('div', { class: 'image-src' }, h(PiniaLogo)),
    })
  }
}

export default theme