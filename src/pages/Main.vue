<template>
  <div class="main">
    <router-view></router-view>
    <Menu/>
  </div>
</template>

<script>
import Menu from '../components/Menu/Menu.vue'

export default {
  name: 'Main',
  components: {
    Menu
  }
}
</script>

<style lang='scss'>
  .main{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    overflow-x: hidden;
    justify-content: center;
    height: 100vh;
    overflow-x: hidden;
    justify-content: center;
    height: 100vh;
  }
</style>
