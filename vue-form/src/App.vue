<template>
  <form v-on:submit.prevent="submitForm"><!--.prevent로 기본적인 이벤트의 동작을 막음-->
    <div>
      <label for="username">id: </label> <!--해당 레이블의 for에 의해서 id가 동일한 input을 바라보게됨-->
      <input id="username" type="text" v-model="username"> <!--v-model을 통해서 data의 username과 폼의 입력되는 데이터 연결-->
    </div>
    <div>
      <label for="password">pw: </label> 
      <input id="password" type="text" v-model="password">
    </div>
    <button type="submit">login</button> <!--button에서 submit 발생 시 form으로 이벤트가 올라감-->
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data: function(){
    return{
      username: '',
      password: ''
    }
  },
  methods:{
    submitForm: function(){//form 기본이 새로고침이기에 이를 방지하기 위해 event인자를 받아서 //여기서 event는 submit
      //event.preventDefault();   //새로고침을 막을 수 있다. //해다 문법은 바닐라 js 이고 vue에서는 line1처럼
      console.log(this.username, this.password);
      var url = 'https://jsonplaceholder.typicode.com/users'
      var data = {
        username: this.username,
        password: this.password
      }
      axios.post(url, data)
      .then(res => console.log(res))
      .catch(error => console.log(error))
    }
  }
}
</script>

<style>

</style>