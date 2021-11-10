<template>
  <div >
    <form @submit="onSubmit">
      <div class="form-row">
        <div class="form-group">
          <label >ID</label>
          <input v-model="id" type="id" class="form-control" id="inputEmail4" placeholder="ID">
        </div>
        <div class="form-group ">
          <label for="inputPassword4">Password</label>
          <input v-model="pw" type="password" class="form-control" id="inputPassword4" placeholder="Password">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group ">
          <label for="inputCity">Email</label>
          <input v-model="email" type="text" class="form-control">
        </div>
        <div class="form-group ">
          <label for="inputState">UnivAuth</label>
          <input v-model="univEmail" type="text" class="form-control">
        </div>
      </div>
      <button type="submit" class="btn btn-outline-primary mt-3">Sign up</button>
    </form>
  
  </div>
  
</template>
<script>
import axios from 'axios';
export default {
  data(){
    return{
      id:"",
      pwd:"",
      email:"",
      univEmail:"",
      univAuth:false,
    }
  },
  methods:{
    onSubmit(event){
      event.preventDefault();
      // post 후 response 성공하면 /home/sign 으로
      var requestBody = {
        id : this.id,
        pw : this.pw,
        email : this.email,
        univAuth : this.univAuth
      }
      axios.post('/api/User/register', requestBody).then(res =>{
        console.log(res)
      })
      this.$router.push('/home/sign')
      console.log(this.email , this.pwd, this.city, this.state)
    }
  }
}
</script>
<style  scoped>
.form-group{
  margin-top: 10%;
}
</style>