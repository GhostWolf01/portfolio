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
      const src = this.getSrcHtmlName(this.$route.params.name)
      if (src !== null) {
        return src
      }
      this.pushNoNFound()
      return ''
    }
  },
  methods: {
    pushNoNFound () {
      this.$router.push({ name: 'notFound' })
    }
  }
}
</script>

<style lang="scss" scope>
.bg{
  background-color: white;
}
</style>
