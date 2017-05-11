<!--hello 相当于父组件，而about相当于子组件-->
<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <!-- :info="currentTab" 为父组件向子组件传递值 ，将父组件数据以v-bind形式绑定到子组件标签上，这样子组件就可以拿到父组件的值了-->
        <!-- @child-view="get" 子组件通过发射器emit发射过来的数据函数名称，后面的get是在父组件中定义的函数，参数就是子组件发过来的数据-->
        <About :info="currentTab" @child-view="get"></About>
        <!--下面是动态组件，根据:is这个属性来判定是那个组件-->
        <component :is="currentTab" ></component>
      </div>
    </div>
  </div>
</template>

<script>
  //引入子组件并且命名
  import About from '@/components/About'
export default {
  name: 'hello',
  components : {
    About,//导入的子组件
    childTab1:{
      template: ` <table class="table table-bordered">
        <thead>
        <tr><th>序号</th><th>姓名</th><th>手机号码</th></tr>
        </thead>
        <tbody>
        <tr v-for="(list,index) in lists">
          <td>{{index+1}}</td>
          <td>{{list.name}}</td>
          <td>{{list.tel}}</td>
        </tr>
        </tbody>
      </table>`,
      data(){
          return{
              lists:[
                {name:'张三',tel:'15601361666'},
                {name:'李四',tel:'15601361777'},
                {name:'王五',tel:'15601361888'},
              ]
          }
      }
    } ,
    childTab2:{
      template: ` <table class="table table-bordered">
        <thead>
        <tr><th>性别</th><th>身高</th><th>年龄</th></tr>
        </thead>
        <tbody>
        <tr v-for="(list,index) in lists">
          <td>{{index%2==0?'男':'女'}}</td>
          <td>{{list.height}}</td>
          <td>{{list.age}}</td>
        </tr>
        </tbody>
      </table>`,
      data(){
        return{
          lists:[
            {height:'180',age:'16'},
            {height:'185',age:'17'},
            {height:'175',age:'18'},
          ]
        }
      }
    } ,
    childTab3:{
      template: ` <table class="table table-bordered">
        <thead>
        <tr><th>体重</th><th>爱好</th><th>学历</th></tr>
        </thead>
        <tbody>
        <tr v-for="(list,index) in lists">
          <td>{{list.weight}}</td>
          <td>{{list.hobby}}</td>
          <td>{{list.education}}</td>
        </tr>
        </tbody>
      </table>`,
      data(){
        return{
          lists:[
            {weight:'60',hobby:'电影',education:'研究生'},
            {weight:'70',hobby:'音乐',education:'博士'},
            {weight:'65',hobby:'跑步',education:'博士后'},
          ]
        }
      }
    }
  },
  mounted () {
    const _this = this;
    //通过axios这个方法获取到数据，在config中定义好，是可以实现跨越的
    this.axios('/api/movie/in_theaters')
      .then(function(res) {
//          _this.movieArr=res.data.subjects;
        console.log(res,35);
      })
      .catch(function(err) {
        console.log(err);
      })
  },
  data () {
    return {
      currentTab:'childTab1'
    }
  },
//  定义方法，定义get这个方法，根据子组件获取，在父组件要显示的子组件
  methods:{
    get(view){
        this.currentTab=view;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
table{margin-top: 20px;}
</style>
