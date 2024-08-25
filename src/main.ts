import { createApp } from 'vue'

import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router'

import lazyPlugin from './directive/lazyLoading'
import 'vant/lib/index.css'

import './assets/common.scss'
import {
  Tabbar,
  TabbarItem,
  Toast,
  Icon,
  Loading,
  Skeleton,
  Tabs,
  Tab,
  Sticky,
  NavBar,
  Form,
  CellGroup,
  Field,
  Button,
  ActionSheet,
  Sidebar,
  SidebarItem,
  Popup,
  Checkbox,
  CheckboxGroup,
} from 'vant'
const app = createApp(App)
app.use(Tabbar).use(TabbarItem).use(Toast).use(Icon).use(Loading).use(Skeleton).use(Tabs).use(Tab).use(Sticky)

app.use(NavBar)
app.use(Form)
app.use(CellGroup)
app.use(Field)
app.use(Button)
app.use(ActionSheet)
app.use(Sidebar)
app.use(SidebarItem)
app.use(Popup)
app.use(Checkbox)
app.use(CheckboxGroup)
app.use(lazyPlugin)

app.use(createPinia())
app.use(router)

const rootValue = 16
const rootWidth = 390

const deviceWidth = document.documentElement.clientWidth

document.documentElement.style.fontSize = (deviceWidth * rootValue) / rootWidth + 'px'

app.mount('#app')
