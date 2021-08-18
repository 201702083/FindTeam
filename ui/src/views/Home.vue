<template>
  <div class="home">
    <nav class="navbar navbar-dark bg-primary justify-content-between">
      <a class="navbar-brand m-1" href="/ui/view">FindTeam</a>
      <b-button variant="light" class="float-right m-1" @click="toSign">Login</b-button>
    </nav>

    <b-container fluid id="home-container">
      <b-row>
        

        <b-col>
          <router-view/>
        </b-col>
      </b-row>
      <b-row >
        <b-col class="fixed-bottom">
          <b-list-group class="">
            <div class="d-flex">
              <b-col><b-list-group-item><router-link  class="text-reset home-nav" to="/home/status">Status</router-link></b-list-group-item></b-col>
              <b-col><b-list-group-item><router-link class="text-reset home-nav" to="/home/team">Team</router-link></b-list-group-item></b-col>
              <b-col><b-list-group-item><router-link class="text-reset home-nav" to="/home/schedule">Schedule</router-link></b-list-group-item></b-col>
              <b-col><b-list-group-item><router-link class="text-reset home-nav" to="/home/mypage">Mypage</router-link></b-list-group-item></b-col>
            </div>
          </b-list-group>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {
  },
  methods:{
    toSign(){
      this.$router.push('/home/sign')
    }
  }
};
</script>
<style>
.home-nav{ text-decoration: none; }

</style>