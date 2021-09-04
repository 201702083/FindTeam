<template>
  <div >
    <h1>Competition schedule will be shown</h1>
    <b-card v-for="(comp,i) in competitions" :key="i"
      :title="comp.title">
      <a :href="comp.link"><img src="../assets/logo.png"/></a>
    </b-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      competitions:[]
    }
  },
  methods:{

  },
  created(){
    // db 에 등록된 공모전 일정들을 불러와 competitions 에 넣어준다.
    this.competitions = [
      {cid: 0 , title:"한국 조폐공사 빅데이터 공모전"     , img:'' , link:'' , term_begin:'2021-09-01', term_end:'2021-09-11'},
      {cid: 1 , title:"충남대학교 컴퓨터공학과 주최 콜라톤" , img:'' , link:'' , term_begin:'2021-09-03', term_end:'2021-09-10'},
      {cid: 2 , title:"CNU Engineering Pair 공모전"  , img:'' , link:'' , term_begin:'2021-09-15', term_end:'2021-09-25'},
      {cid: 3 , title:"AI BigData 아이디어 공모전"     , img:'' , link:'' , term_begin:'2021-09-01', term_end:'2021-10-01'},
      {cid: 4 , title:"KT 산업아이디어 공모전"          , img:'' , link:'' , term_begin:'2021-10-01', term_end:'2021-10-11'},
      ]
  }
}
</script>
