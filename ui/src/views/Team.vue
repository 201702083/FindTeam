<template>
  <div class="mb-5">
    <b-card class="mt-3 mb-3">

      <b-row>
        <b-col>
          <h5>Search Projects</h5>
        </b-col>
        <b-col class="right-col" @click="option_hide = !option_hide">
          <span v-show="option_hide">
            hide <b-icon-chevron-up/>
          </span>
          <span v-show="!option_hide">
            show <b-icon-chevron-down/>
          </span>
        </b-col>
      </b-row>

      <b-collapse id="advanced-search" v-model="option_hide">

      <b-form-group label="Scale" class=""
                    label-cols-sm="2" content-cols="12">
        <b-form-select v-model="scale" :options="scale_options"/>
      </b-form-group>
      <b-form-group label="Category"
                    label-cols-sm="2" content-cols="">
        <b-form-select v-model="category" :options="category_options"/>
      </b-form-group>
      <b-form-group label="Name"
                    label-cols-sm="2" content-cols="">
        <b-form-input v-model="name" class="m-2"/>
        <b-form-checkbox v-model="name_exact">Exact match</b-form-checkbox>
      </b-form-group>
      <b-form-group label="Job"
                    label-cols-sm="2" content-cols="">
        <b-form-select v-model="job" :options="job_options"/>
      </b-form-group>
      <b-form-group label="Term"
                    label-cols-sm="2" content-cols="">
        <b-form-select v-model="term" :options="term_options"/>
      </b-form-group>

      <b-row class="">
        <b-col class="right-col">
          <b-button variant="primary" size="sm" >
            <b-icon-search/> Search
          </b-button>
        </b-col>
      </b-row>

      </b-collapse>

      
    </b-card>

    
    <div v-for="project in teams" :key="project">
      <b-card border-variant="dark" :header="project.title" class="text-center m-2">
        <b-card-text>{{project.description}}</b-card-text>
        <b-button variant="outline-primary" size="sm">신청</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>

var scale_options = [
  {value:"", text:"Any"},
  {value:"location", text:"City/Province"},
  {value:"domestic", text:"Nation Competition"},
  {value:"international", text:"World Competition"},

]
var category_options = [
  {value:"", text:"Any"},
  {value:"start-up", text:"Start-Up"},
  {value:"tech", text:"Technological"},
  {value:"social", text:"Social"},
  {value:"art", text:"Art"},
  {value:"physical", text:"Physical"},
  {value:"echonomic", text:"Economic"},
  {value:"marketing", text:"Marketing"},
  {value:"", text:""},
]
var job_options = [
  {value:"",text:"Any"},
  {value:"pm",text:"Product Manager"},
  {value:"designer",text:"Designer"},
  {value:"developer",text:"Developer"},
  {value:"marketter",text:"Marketter"},
  {value:"technician",text:"Technician"},
  
]
var term_options = [
  {value:"",text:"Any"},
  {value:"month",text:" ~ 1 month"},
  {value:"halfyear",text:" ~ 6 month"},
  {value:"year",text:" ~ 12 month"},
  {value:"continue",text:"Continuous"},


]
export default {
  data(){
    return {
      scale:"",
      category:"",
      job:"",
      term:"",
      name:"",
      option_hide:false,
      scale_options:scale_options,
      category_options:category_options,
      job_options:job_options,
      term_options:term_options,
      teams:[]
    }
  },
  created(){
    let vm = this;
    //mock teams data
    vm.teams = [
        {title:"디자인 웹 포트폴리오",description:"간단한 졸작용으로 하실 분 구합니다."},
        {title:"사회문제 캡스톤",description:"2학기 사회문제 캡스톤 팀원 구합니다."},
        {title:"창업 경진 대회",description:"교내 규모 창업 경민 대회 PM / 개발자 모집"},
        {title:"콜라톤",description:"콜라톤 디자이너 급구"},
        {title:"딥러닝 졸프",description:"데브옵스 / 딥러닝 파트 구합니다"},
        
      ]
  }
}
</script>
