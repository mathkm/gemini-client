import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/index.css'

import firebase from 'firebase'

Vue.config.productionTip = false
Vue.use(ElementUI,{locale})

var config = {
  apiKey: "***********************",
  authDomain: "*********************",
  databaseURL: "https://**************",
  projectId: "**************",
  storageBucket: "***************",
  messagingSenderId: "**********"
};
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
