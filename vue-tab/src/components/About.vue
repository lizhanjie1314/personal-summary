<template>
 <div class="about">
   <!--info 是父组件传递到子组件中的值，需要在js中定义props:['info']，来取到该值-->
   <h3>{{info}}</h3>
   <ul class="nav nav-pills">
     <!--v-for这个方法来循环tab标签 @click事件来绑定点击事件，切换tab样式和下面表单的内容，:class这个属性是为当前点击tab加active这个属性-->
     <li role="presentation" @click="toggle(index,tab.view)" :class="{active:active===index}" v-for="(tab,index) in tabs"><a href="#">{{tab.type}}</a></li>
   </ul>
 </div>
</template>

<script>
  export default {
    name:"About",
    props:['info'],//定义父组件传递过来的数据，放在props中
    data () {//定义data中的数据
      return {
        msg:"关于我们vue-demo",
        tabs:[
          {
            type:"首页",
            view:'childTab1'
          },
          {
            type:"关于我们",
            view:'childTab2'
          },
          {
            type:"基本信息",
            view:'childTab3'
          }

        ],
        active:0,

      }
  },
    methods:{
      toggle(index,view){//通过点击事件，来向父组件传递参数
        this.active=index;//改变当前点击的样式
        this.$emit('child-view',view);//通过当前this上的$emit这个方法，来发射数据，'child-view'为定义的数据名称，view为要发送的数据
      }
    }
  }
</script>
<style>
th{text-align: center;}
</style>
