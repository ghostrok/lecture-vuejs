import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
//import Link from './Link.vue'

//Vue.component('app-server-status', Home);

/*
Vue.component({
  'app-server-status' : Home
});
*/

new Vue({
  el: '#app',
  render: h => h(App)
})
