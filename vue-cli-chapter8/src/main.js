import Vue from 'vue'
//import App from './App.vue'
import User from './User.vue'

export const eventBus = new Vue({
  data: {

  },
  methods : {
    changeAge(age) {
      this.$emit('ageWasEdited', age);
    }
  }

});
  
new Vue({
  el: '#app',
  render: h => h(User)
});

