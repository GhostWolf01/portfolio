<template>
  <div id="app">
    <Content :nameTitle="componts[activeComponent]"></Content>
    <Menu :showMenu="showMenu"></Menu>
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
          name: 'About',
          text: 'Обо мне'
        },
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

html, body {
  scrollbar-color: rgba(#66615b, 0.8) rgba(#ffffff, 0);
}
::-webkit-scrollbar{
  background-color: rgba(#ffffff, 0);
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-thumb{
  border-radius: 5px;
  background-color: rgba(#66615b, 0.8);
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scrollbar-width: thin;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  overflow-x: hidden;
  justify-content: center;
  height: 100vh;
}
</style>
