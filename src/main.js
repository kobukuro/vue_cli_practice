import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/*
上面的$mount('#app')等於el:'#app'
new Vue({
  el:'#app',
  router,
  store,
  render: h => h(App)
})
*/

//test6