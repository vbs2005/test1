<template>
  <div id="app">
    <img src="./assets/logo.png"><br>
    //导航
    <div>
    <router-link to="/">首页</router-link>|
    <router-link to="/Hi">Hi页</router-link>|
    <router-link :to="{name:'hi1', params:{username:'zlk',id:'22'}}">Hi1页</router-link>|
    <router-link to="/Hi/hi2">Hi2页</router-link>|
    <router-link to="/params/aaa/vue tec">params页</router-link>|
      <br>
    <router-link to="/gohome">gohome</router-link>|
      <router-link to="/goHi">goHi</router-link>|
    </div>
//路由显示
    <div >
      <router-view></router-view>
      <router-view name="left" style="float: left; width:50%; height: 200px;background-color: aqua"></router-view>
      <router-view name="right" style="float: left; width:50%; height: 200px;background-color:red"></router-view>
    </div>
//传参
    <div>
      <p>{{ $route.name}}</p>

    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    change:function () {
left=hi2;
right=hi1;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
