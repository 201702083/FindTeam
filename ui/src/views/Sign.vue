<template>
  <form @submit="onSubmit">
    <div class="form-group mt-5">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    </div>
    <div class="form-group mt-5">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control mt-3" id="exampleInputPassword1" placeholder="Password">
    </div>
    <button type="submit" class="btn btn-primary mt-5">Submit</button>
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