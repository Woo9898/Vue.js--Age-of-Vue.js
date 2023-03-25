import Vue from 'vue'
import App from './App.vue' //컴포넌트를 불러옴

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


/* 
  var App = {
    컴포넌트 속성정의
  }

  new Vue({
  el: "#app",
  components:{
    'app': App
  }
  render: (h) => h(App),
}); */