<template>
  <div >
    <form @submit="onSubmit">
      <div class="form-row">
        <div class="form-group">
          <label >Email</label>
          <input v-model="email" type="email" class="form-control" id="inputEmail4" placeholder="Email">
        </div>
        <div class="form-group ">
          <label for="inputPassword4">Password</label>
          <input v-model="pwd" type="password" class="form-control" id="inputPassword4" placeholder="Password">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group ">
          <label for="inputCity">City</label>
          <input v-model="city" type="text" class="form-control" id="inputCity">
        </div>
        <div class="form-group ">
          <label for="inputState">State</label>
          <select v-model="state" id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
      </div>
      <button type="submit" class="btn btn-outline-primary mt-3">Sign up</button>
    </form>
  
  </div>
  
</template>
<script>
export default {
  data(){
    return{
      email:"",
      pwd:"",
      city:"",
      state:"...",
    }
  },
  methods:{
    onSubmit(event){
      event.preventDefault();
      // post 후 response 성공하면 /home/sign 으로
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