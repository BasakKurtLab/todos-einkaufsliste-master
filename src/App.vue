<template>
  <div id="app">
    
    <Header></Header>
    <transition>

  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</transition>
    
  </div>
</template>


<script>
import Header from "./components/Header.vue";
export default {
  data(){
    
  },
  components:{
   Header
  }
}
</script>


<style>
*{
  box-sizing: border-box;
}
body{
  margin:0;
  padding:0;
  height: 100vh;
  overflow: hidden;
  
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

</style>
