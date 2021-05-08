<template>
  <div class="portfolio__block">
      <img class="portfolio__img" :src="imgSrc" :alt="imgAlt">
      <div class="portfolio__block-info">
        <h3 class="portfolio__block-header">{{nameItem}}</h3>
        <div class="portfolio__block-text-list">
          <ul class="portfolio__block-list">
            <li class="portfolio__block-list-elem"
            v-for="list in listArray"
            :key = list.id
            >{{list}}</li>
          </ul>
          <p class="portfolio__block-text">{{text}}</p>
        </div>
        <button class="portfolio__block-btn"
          @click="open">
          Посмотреть
        </button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'PortfolioItem',
  props: {
    id: Number,
    imgSrc: String,
    imgAlt: String,
    nameItem: String,
    nameUrl: String,
    listArray: Array,
    text: String
  },
  methods: {
    open () {
      this.$router.push({ name: 'PortfolioItem', params: { name: this.nameUrl } })
    }
  }
}
</script>

<style lang="scss">

</style>
