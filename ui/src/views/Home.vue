<template>
  <div class="home">
      <b-navbar toggleable="lg" type="dark" variant="primary" >
        <div class="d-flex justify-content-between">

          <b-navbar-brand href="/ui/view">FindTeam</b-navbar-brand>
          <b-button variant="light" class="float-right">Login</b-button>
        <!-- right aligned contents from here -->
        <b-navbar-nav class="ml-auto">
        </b-navbar-nav>
        </div>
      </b-navbar>
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
              <b-col><b-list-group-item><router-link class="text-reset home-nav" to="/home/event">Event</router-link></b-list-group-item></b-col>
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
};
</script>
<style>
.home-nav{ text-decoration: none; }

</style>