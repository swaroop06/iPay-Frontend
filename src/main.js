import Vue from 'vue'
import App from './App.vue'
import bootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import VModal from 'vue-js-modal'
import VueResource from 'vue-resource'
import Icon from 'vue-awesome/components/Icon.vue'
import VeeValidate from 'vee-validate'
import VueSession from 'vue-session'

export const bus = new Vue();

require('vue-awesome/icons')
Vue.component('icon', Icon);
Vue.use(VueSession);
Vue.use(VueResource);
Vue.use(VeeValidate);
Vue.use(VModal);
Vue.use(VueRouter);
Vue.use(bootstrapVue);
const router = new VueRouter({
 routes:Routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
