<template>
  <article class="content">
    <header class="content__header">
        <div class="content__header__btn-menu" @click="clickShowMenu">
            <svg class="content__header__btn-svg" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xml:space="preserve">
                <g>
                    <g id="_x33__32_">
                        <g>
                            <path d="M59.226,88.839C26.513,88.839,0,115.352,0,148.064s26.513,59.226,59.226,59.226s59.226-26.514,59.226-59.226
                                S91.938,88.839,59.226,88.839z M59.226,246.774C26.513,246.774,0,273.288,0,306c0,32.713,26.513,59.226,59.226,59.226
                                s59.226-26.513,59.226-59.226C118.452,273.288,91.938,246.774,59.226,246.774z M59.226,404.71C26.513,404.71,0,431.223,0,463.936
                                c0,32.712,26.513,59.226,59.226,59.226s59.226-26.514,59.226-59.226C118.452,431.223,91.938,404.71,59.226,404.71z
                                    M197.419,187.548h375.096c21.815,0,39.484-17.669,39.484-39.484s-17.669-39.484-39.484-39.484H197.419
                                c-21.815,0-39.484,17.669-39.484,39.484S175.604,187.548,197.419,187.548z M572.516,266.516H197.419
                                c-21.815,0-39.484,17.669-39.484,39.484c0,21.814,17.669,39.484,39.484,39.484h375.096c21.815,0,39.484-17.67,39.484-39.484
                                C612,284.185,594.331,266.516,572.516,266.516z M572.516,424.451H197.419c-21.815,0-39.484,17.67-39.484,39.484
                                s17.669,39.483,39.484,39.483h375.096c21.815,0,39.484-17.669,39.484-39.483S594.331,424.451,572.516,424.451z"/>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
        <h2 class="content__header__text">{{nameTitle.text}}</h2>
    </header>
    <component :is='nameTitle.name'></component>
  </article>
</template>

<script>
import Portfolio from './Portfolio.vue'
import Contacts from './Contacts.vue'

export default {
  name: 'Content',
  components: {
    Portfolio, Contacts
  },
  props: {
    nameTitle: Object
  },
  methods: {
    clickShowMenu () {
      this.$parent.showMenu = !this.$parent.showMenu
    }
  }
}
</script>

<style lang="scss">
.content{
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: rgba($color: #fff, $alpha: 0.9) ;
    &__header{
        display: flex;
        width: 100%;
        justify-content: start;
        align-items: center;
        padding: 10px 5px;
        background-color: rgba($color: #28a745, $alpha: 0.7) ;
        &__btn{
            &-menu{
                height: 40px;
                width: 40px;
                border-radius: 50%;
                background-color: rgba($color: #868e96, $alpha: 0.4);
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                transition: all 0.3s linear;
                &:hover{
                    background-color: rgba($color: #868e96, $alpha: 0.8);
                }
            }
            &-svg{
                height: 26px;
                width: 26px;
            }
        }
        &__text{
            font-family: 'Roboto';
            font-weight: 400;
            margin: 0;
            font-size: 34px;
            color: black;
            line-height: 34px;
            width: 100%;
        }
    }
}
</style>
