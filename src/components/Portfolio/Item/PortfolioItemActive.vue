<template>
  <iframe  class="portfolio__item bg" :src="srcHtml" frameborder="0"></iframe>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PortfolioItemActive',
  computed: {
    ...mapGetters({
      getSrcHtmlName: 'portfolio/getSrcHtmlName'
    }),
    srcHtml () {
      return this.getSrcHtmlName(this.$route.params.name)
    }
  }
}
</script>

<style lang="scss" scope>
.bg{
  background-color: white;
}
</style>
