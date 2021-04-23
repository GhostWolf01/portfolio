<template>
  <iframe  class="portfolio__item bg" :src="srcHtml" frameborder="0"></iframe>
</template>

<script>
export default {
  name: 'PortfolioItemActive',
  props: {
    srcHtml: String
  }
}
</script>

<style lang="scss" scope>
.bg{
  background-color: white;
}
</style>
