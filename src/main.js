// Vue
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// media
import VuePlyr from "vue-plyr";
import "vue-plyr/dist/vue-plyr.css";
import AspectRatio from 'v-aspect-ratio'

import "./scss/main.scss";
import Verte from 'verte';
import 'verte/dist/verte.css';

Vue.use(AspectRatio)
Vue.component('verte', Verte);
Vue.use(VuePlyr, {
  plyr: {},
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
