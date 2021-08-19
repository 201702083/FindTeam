<template>
  <form @submit="onSubmit" >
   
    <div class="form-group mt-5">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control mt-3" id="Email" aria-describedby="emailHelp" placeholder="Enter email">
    </div>
    <div class="form-group mt-5">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control mt-3" id="exampleInputPassword1" placeholder="Password">
    </div>
    <button type="submit" class="btn btn-outline-primary m-5">Sign in</button>
    <div>
      <router-link style="text-decoration:none" class="m-3" to="/home/find">Find</router-link>
      <router-link style="text-decoration:none" class="m-3" to="/home/signup">Sign Up</router-link>
    </div>

  </form>
</template>

<script>
import {Got_Cookie} from "./Home.vue";
Got_Cookie;
export default {
  setup() {
    

  },
  methods:{
    onSubmit(event){
      event.preventDefault();
      // get 후 response 성공하면 쿠키 생성 후 home/status로
      this.$router.push('/home/status')
      this.Got_Cookie = true;
    }
  }
}
</script>
<style scoped>
#sform{
  text-align: center;
}
</style>