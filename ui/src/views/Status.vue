<template>
  <b-container fluid>
    <b-alert show v-show="error" variant="danger">
      {{ error }}
    </b-alert>

    <b-row class="mt-4">
      <!-- Left column -->
      <b-col sm="12" md="6">
        <b-row>

          <b-col sm="12" class="mb-4">
            <b-card>
              <h5>진행중인 프로젝트</h5>
            </b-card>
          </b-col>

        </b-row>
      </b-col>
      <!-- Right column -->
      <b-col sm="12" md="6">
        <b-row>

          <b-col sm="12" >
            <b-card>
              <h5>이슈</h5>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
      <b-col>
        <b-col>
          <b-col sm="12" class="mt-4">
            <b-card>
              <h5>모집중인 공고</h5>
            </b-card>
          </b-col>
        </b-col>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>

  export default {
    data() {
      return {
        error: null,
      }
    },
    components: {

    },
    computed: {
    },
    methods: {
      onError(error) {
        this.error = error;
      },
    },
    created() {
    },
  }
</script>

<style>
.chart-container {
  height: 15em;
}

.chart-fill {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
