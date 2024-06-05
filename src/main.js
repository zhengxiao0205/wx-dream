import './uni.promisify.adaptor'

import App from './App'
import Vue from 'vue'
import uView from 'uview-ui'

Vue.config.productionTip = false
// https://uviewui.com/components/intro.html
Vue.use(uView)
App.mpType = 'app'

const app = new Vue({
  ...App,
})
app.$mount()
