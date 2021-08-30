<template>
  <b-container fluid>
    <!-- 내 정보 -->
    <b-card class="mt-3">
      <b-row>
        <b-col class="col-sm-5">
          <img src="../assets/logo.png" width=100% height=100%/>
        </b-col>
        <b-col class="col-sm">
          <b-row class="justify-content-end">
            <b-icon-pencil-square></b-icon-pencil-square>
          </b-row>
          <b-row class="mt-1">
            <b-col>Name</b-col>
            <b-col>age</b-col>
          </b-row>
          <b-row class="mt-1">
            <b-col>
              Email
            </b-col>
          </b-row>
          <b-row class="mt-1">
            <b-col>
              평점 : 4.8
            </b-col>

          </b-row>
        </b-col>
      </b-row>
    </b-card>
    <!-- 프로젝트 목록 -->
    <ProjectCard v-for="(prj,i) in projects" :key="i" :project="prj"></ProjectCard>
  </b-container>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue'
export default {
  data(){
    return {
      projects:[],
      deadPrjs:[],
    }
  },
  components:{ProjectCard}
  ,
  created(){
    let vm = this;
    // 사용자 id 조건 검색으로 진행 중인 프로젝트 조회
    vm.projects=[{pid:1,name:'test'},{pid:2,name:'tzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzest2'}]

    // 사용자 id 조건 검색으로 종료된 프로젝트 이력 조회
    vm.deadPrjs=[{pid:1324,name:'result1',result:'은상'},{pid:143,name:'result2222222222222',result:'참여'}]
  }
}
</script>
