<template>
  <div>
    {{str}}
    <app-header v-bind:propsdata="str" v-on:reNew="reNewString"></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'; 

export default {
  data: function(){ //기존의 데이터를 정의시에는 함수형태로 안했지만 데이터 재사용을 높이기 위해 cli에서는 func/return으로 정의해야 한다.
    return{
      str: 'Header!!!'
    }
  },
  components:{
    'app-header': AppHeader
  },
  methods:{
    reNewString: function(){
      this.str = 'hi it is changed';
    }
  }
}
</script>

<style>

</style>