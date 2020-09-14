<template>
  <div id="app">
    <Menu :showMenu="showMenu"></Menu>
    <Content :nameTitle="componts[activeComponent]"></Content>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Content from './components/Сontent.vue'

export default {
  name: 'App',
  components: {
    Menu, Content
  },
  data () {
    return {
      showMenu: true,
      activeComponent: 0,
      componts: [
        {
          name: 'Portfolio',
          text: 'Портфолио'
        },
        {
          name: 'Contacts',
          text: 'Контакты'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import url('./assets/fonts.scss');

*{
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
}
</style>
