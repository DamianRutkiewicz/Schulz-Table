import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faPlus, faMinus, faPlayCircle, faStopCircle, faCropAlt, faEdit, faSearchPlus, faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import { faClone } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee, faPlus, faMinus, faPlayCircle, faStopCircle, faClone, faCropAlt, faEdit, faSearchPlus, faSyncAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
