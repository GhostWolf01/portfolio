<template>
<section class="portfolio">
    <div class="portfolio__imgs" v-show="!activeCompenents">
      <div class="portfolio__block">
        <img class="portfolio__img" src="../assets/imgs/SmartOrange-img.jpg" alt="Syte">
        <div class="portfolio__block-info">
          <h3 class="portfolio__block-header">SmartOrange</h3>
          <div class="portfolio__block-text-list">
            <ul class="portfolio__block-list">
              <li class="portfolio__block-list-elem">Gulp</li>
              <li class="portfolio__block-list-elem">Jqery</li>
              <li class="portfolio__block-list-elem">Slick</li>
              <li class="portfolio__block-list-elem">Scss</li>
              <li class="portfolio__block-list-elem">BEM</li>
            </ul>
            <p class="portfolio__block-text">
              Афиша дома<br>Реализовано переключение слайдов с помощю slick,
              preloader страница ждет полной загрузки контента, весь функционал реализована на jqery
            </p>
          </div>
          <button class="portfolio__block-btn" @click="open(0)">Посмотреть</button>
        </div>
      </div>
      <div class="portfolio__block">
        <img class="portfolio__img" src="../assets/imgs/Shop-img.jpg" alt="Syte">
        <div class="portfolio__block-info">
          <h3 class="portfolio__block-header">Shop</h3>
          <div class="portfolio__block-text-list">
            <ul class="portfolio__block-list">
              <li class="portfolio__block-list-elem">Vue</li>
              <li class="portfolio__block-list-elem">Scss</li>
              <li class="portfolio__block-list-elem">BEM</li>
            </ul>
            <p class="portfolio__block-text">
              Магазин на планшеты<br>Подгрузка даных товаров с сервера через асинхроный запрос
            </p>
          </div>
          <button class="portfolio__block-btn" @click="open(1)">Посмотреть</button>
        </div>
      </div>
      <div class="portfolio__block">
        <img class="portfolio__img" src="../assets/imgs/ScienceEnjoy-img.jpg" alt="Syte">
        <div class="portfolio__block-info">
          <h3 class="portfolio__block-header">ScienceEnjoy</h3>
          <div class="portfolio__block-text-list">
            <ul class="portfolio__block-list">
              <li class="portfolio__block-list-elem">Bootstrap</li>
            </ul>
            <p class="portfolio__block-text">Афиша сайта дезайнеров<br></p>
          </div>
          <button class="portfolio__block-btn" @click="open(2)">Посмотреть</button>
        </div>
      </div>
      <div class="portfolio__block">
        <img class="portfolio__img" src="../assets/imgs/Viseven-img.jpg" alt="Syte">
        <div class="portfolio__block-info">
          <h3 class="portfolio__block-header">Viseven</h3>
          <div class="portfolio__block-text-list">
            <ul class="portfolio__block-list">
              <li class="portfolio__block-list-elem">Vue</li>
              <li class="portfolio__block-list-elem">VueCli</li>
              <li class="portfolio__block-list-elem">Webpack</li>
              <li class="portfolio__block-list-elem">Scss</li>
            </ul>
            <p class="portfolio__block-text">Афиша фарм компании<br></p>
          </div>
          <button class="portfolio__block-btn" @click="open(3)">Посмотреть</button>
        </div>
      </div>
      <div class="portfolio__block">
        <img class="portfolio__img" src="../assets/imgs/Blog-img.jpg" alt="Syte">
        <div class="portfolio__block-info">
          <h3 class="portfolio__block-header">Blog</h3>
          <div class="portfolio__block-text-list">
            <ul class="portfolio__block-list">
              <li class="portfolio__block-list-elem">Vue</li>
              <li class="portfolio__block-list-elem">VueCli</li>
              <li class="portfolio__block-list-elem">Webpack</li>
              <li class="portfolio__block-list-elem">Scss</li>
              <li class="portfolio__block-list-elem">BEM</li>
            </ul>
            <p class="portfolio__block-text">Веб-блог<br>Просмотр фото реализовано через popup</p>
          </div>
          <button class="portfolio__block-btn" @click="open(4)">Посмотреть</button>
        </div>
      </div>
      <div class="portfolio__block">
        <img class="portfolio__img" src="../assets/imgs/Vintage-img.jpg" alt="Syte">
        <div class="portfolio__block-info">
          <h3 class="portfolio__block-header">Vintage</h3>
          <div class="portfolio__block-text-list">
            <ul class="portfolio__block-list">
              <li class="portfolio__block-list-elem">Vue</li>
              <li class="portfolio__block-list-elem">VueCli</li>
              <li class="portfolio__block-list-elem">Webpack</li>
              <li class="portfolio__block-list-elem">BEM</li>
              <li class="portfolio__block-list-elem">Scss</li>
            </ul>
            <p class="portfolio__block-text">Форма потдержки<br>Отправка формы на сервер для дальнейшей обработки</p>
          </div>
          <button class="portfolio__block-btn" @click="open(5)">Посмотреть</button>
        </div>
      </div>
    </div>
    <component :is='componets[activeComponent]' v-show="activeCompenents"></component>
</section>
</template>

<script>
import SmartOrange from './SmartOrange.vue'
import Shop from './Shop.vue'
import SCIENCEENJOY from './SCIENCEENJOY.vue'
import Viseven from './Viseven.vue'
import Vintage from './Vintage.vue'
import Blog from './Blog.vue'

export default {
  name: 'Portfolio',
  components: { SmartOrange, Shop, SCIENCEENJOY, Viseven, Vintage, Blog },
  data () {
    return {
      activeComponent: 0,
      componets: ['SmartOrange', 'Shop', 'SCIENCEENJOY', 'Viseven', 'Blog', 'Vintage'],
      activeCompenents: false
    }
  },
  methods: {
    open (n) {
      this.activeComponent = n
      this.activeCompenents = true
      const portfolio = this.$root.$children[0].$children[1].$children[1]
      portfolio.activeBtn = true
      portfolio.activeContext = true
      portfolio.activeContextBtn = true
      portfolio.$children[n].activeBtn = true
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
    height: 100%;
    z-index: 1;
  }
  &__block{
    width: 100%;
    height: 200px;
    margin: 2% 0;
    padding: 0 2.5% 0 2.5%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
      &:hover &-info{
        background-color: rgba($color: #000000, $alpha: 0.6);
      }
    &-info{
      padding-top: 10px;
      width: 62.5%;
      border-radius: 25px;
      height: 100%;
      margin-left: 2.5%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
    &-header{
      color: $header_text;
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 28px;
      line-height: 28px;
    }
    &-text-list{
      padding-top: 20px;
      height: 60%;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    }
    &-list{
      margin-left: 4%;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      &-elem{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 18px;
        line-height: 18px;
        color: $list_text;
        margin-bottom: 5px;
      }
    }
    &-text{
      margin: 0 20px 0 15px;
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 18px;
      line-height: 18px;
      color: $list_text;
      width: 100%;
      text-align: center;
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
      background-color: rgba($color: #28a745, $alpha: 0.7);
        &:hover {
        background-color: rgba($color: #28a745, $alpha: 0.8);
      }
    }
  }
}

</style>
