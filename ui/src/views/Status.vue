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
              <li v-for="(prj,i) in projects" :key="i">{{prj.name}} - {{prj.role}} </li>
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
              <li v-for="(issue,i) in issues" :key="i"> Project {{issue.pid}} : {{issue.issue}} </li>              
            </b-card>
          </b-col>
        </b-row>
      </b-col>
      <b-col>
        <b-col>
          <b-col sm="12" class="mt-4">
            <b-card>
              <h5>모집중인 공고</h5>
              <li v-for="(announce,i) in announcements" :key="i">{{announce.pid}} : {{announce.name}} </li>              
              
            </b-card>
          </b-col>
        </b-col>
      </b-col>
    </b-row>
  <!-- <iframe height="430" width="350" src="https://bot.dialogflow.com/e4cb30cd-4b2d-48fc-94b1-f75d6a78d7be"></iframe> -->

  </b-container>
</template>

<script>

  export default {
    data() {
      return {
        error: null,
        projects : [],
        issues : [],
        announcements : [],
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
      this.projects = [{pid:0,name:'포트폴리오' , role:'개발자'},{pid:3,name:'콜라톤',role:'개발자'},{pid:14,name:'사회문제 캡스톤',role:'기획자'}]
      this.issues = [{pid:0, issue:'컴파일 에러가 나요'} , {pid:3, issue : '데이터 연동이 안됩니다.'}]
      this.announcements = [{pid:553,name:'졸업 프로젝트 팀원 구해요'},{pid:554, name:'데이터 분석가 구해요'},{pid:555,name:'디자이너 조언이 필요해요'},{pid:556,name : '재정 관리 담당 찾고 있어요.'}]
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
