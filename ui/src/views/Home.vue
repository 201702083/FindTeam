<template>
  <div class="home">
      <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="/ui/view">KangaLock</b-navbar-brand>

      <!-- right aligned contents from here -->
      <b-navbar-nav class="ml-auto">
      </b-navbar-nav>
    </b-navbar>
    <b-container fluid id="home-container">
      <b-row>
        <b-col sm="2">
          <b-list-group>
            <b-list-group-item><router-link class="text-reset home-nav" to="/home/dashboard">Dashboard</router-link></b-list-group-item>
            <b-list-group-item><router-link class="text-reset home-nav" to="/home/store">Store</router-link></b-list-group-item>
            <b-list-group-item><router-link class="text-reset home-nav" to="/home/history">History</router-link></b-list-group-item>
            <b-list-group-item><router-link class="text-reset home-nav" to="/home/mypage">Mypage</router-link></b-list-group-item>
          </b-list-group>
        </b-col>

        <b-col>
          <router-view/>
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
