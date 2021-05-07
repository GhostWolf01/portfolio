<template>
  <section class="portfolio">
      <div class="portfolio__imgs" v-show="!activeComponents">
        <PortfolioItem v-for="portfolioComponent in portfolioComponents"
        :key=portfolioComponent.id
        :id=portfolioComponent.id
        :nameItem=portfolioComponent.name
        :nameUrl=portfolioComponent.nameUrl
        :text=portfolioComponent.text
        :imgSrc=portfolioComponent.imgSrc
        :imgAlt=portfolioComponent.imgAlt
        :listArray=portfolioComponent.listArray
        />
      </div>
      <router-view v-show="activeComponents"></router-view>
  </section>
</template>

<script>
import PortfolioItem from '../components/Portfolio/Item/PortfolioItem.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Portfolio',
  components: { PortfolioItem },
  computed: {
    ...mapGetters({
      getPortfolioActiveComponents: 'portfolio/getPortfolioActiveComponents',
      getPortfolioComponents: 'portfolio/getPortfolioComponents'
    }),
    activeComponents () {
      return this.getPortfolioActiveComponents
    },
    portfolioComponents () {
      return this.getPortfolioComponents
    }
  }
}
</script>

<style lang="scss">
$header_text: #ffffff;
$list_text: #ffffff;
$btn_text: #ffffff;

.portfolio{
  overflow: hidden;
  width: 100%;
  height: 100%;
  &__item{
    width: 100%;
    height: 100%;
  }
  &__imgs{
    width: 100%;
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  &__img{
    max-width: 380px;
    width: 35%;
    max-height: 220px;
    height: 100%;
    z-index: 1;
    @media(max-width: 480px) {
      width: 100%;
      margin-bottom: 10px;
    }
  }
  &__block{
    width: 100%;
    min-height: 200px;
    height: max-content;
    margin: 2% 0;
    padding: 0 2.5% 0 2.5%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-shrink: 0;
    @media(max-width: 480px) {
      flex-direction: column;
    }
      &:hover &-info{
        background-color: rgba($color: #000000, $alpha: 0.6);
      }
    &-info{
      padding-top: 10px;
      padding-bottom: 10px;
      width: 62.5%;
      border-radius: 25px;
      height: max-content;
      min-height: 200px;
      margin-left: 2.5%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      flex-shrink: 0;
      @media(max-width: 480px) {
        width: 100%;
        margin: 0 3%;
        background-color: rgba($color: #000000, $alpha: 0.6);
      }
    }
    &-header{
      color: $header_text;
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 28px;
      line-height: 28px;
      @media(max-width: 768px)
      {
        font-size: 24px;
      }
    }
    &-text-list{
      padding-top: 20px;
      min-height: 200px*0.6;
      height: max-content;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      margin-bottom: 10px;
    }
    &-list{
      margin-left: 3%;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      flex-shrink: 0;
      height: 100%;
      width: max-content;
      &-elem{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 18px;
        line-height: 18px;
        color: $list_text;
        margin-bottom: 5px;
        margin-left: 10px;
        @media(max-width: 768px)
        {
          font-size: 16px;
        }
      }
    }
    &-text{
      margin: 0 20px 0 3%;
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 18px;
      line-height: 18px;
      color: $list_text;
      width: 100%;
      text-align: center;
      @media(max-width: 768px)
      {
        font-size: 16px;
      }
    }
    &-btn{
      align-self: flex-end;
      margin-right: 3%;
      cursor: pointer;
      height: 40px;
      padding: 5px 10px;
      border: none;
      border-radius: 10px;
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 20px;
      color: $btn_text;
      @media(max-width: 768px)
      {
        font-size: 18px;
      }
      background-color: rgba($color: #28a745, $alpha: 0.7);
        &:hover {
        background-color: rgba($color: #28a745, $alpha: 0.8);
      }
    }
  }
}

</style>
