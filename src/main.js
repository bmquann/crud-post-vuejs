import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import JwPagination from 'jw-vue-pagination';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faPlus,faPen,faTrashCan } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faPlus,faPen,faTrashCan)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component('jw-pagination', JwPagination);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
