<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">

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

</style>
