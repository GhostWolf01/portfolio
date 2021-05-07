<template>
  <section class="content">
    <div class="content-bg">
      <div class="content__header">
          <h2 class="content__header__text">{{nameTitle}}</h2>
          <div class="content__header__btn-menu" @click="clickShowMenu">
              <svg class="content__header__btn-svg" v-if="!activeMenu" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xml:space="preserve">
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
              <svg  class="content__header__btn-svg" v-if="activeMenu" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 408 408" style="enable-background:new 0 0 408 408;" xml:space="preserve">
                <g>
                  <g id="more-vert">
                    <path d="M204,102c28.05,0,51-22.95,51-51S232.05,0,204,0s-51,22.95-51,51S175.95,102,204,102z M204,153c-28.05,0-51,22.95-51,51
                      s22.95,51,51,51s51-22.95,51-51S232.05,153,204,153z M204,306c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51
                      S232.05,306,204,306z"/>
                  </g>
                </g>
              </svg>
          </div>
      </div>
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Content',
  data () {
    return {
      activeMenu: true
    }
  },
  computed: {
    ...mapGetters({
      getNameTitle: 'menu/getNameTitle'
    }),
    nameTitle () {
      return this.getNameTitle
    }
  },
  methods: {
    ...mapActions({
      clickShowMenu: 'menu/clickShowMenu',
      activeMenuBtns: 'menu/activeMenuBtns'
    })
  },
  created () {
    if (this.$route.name === 'content') {
      this.$router.push({ name: 'about' })
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      const arrPath = to.path.split('/')
      vm.activeMenuBtns({
        nameUrl: arrPath[1],
        nameUrlContextBtn: arrPath[2]
      })
    })
  },
  beforeRouteUpdate (to, from, next) {
    const arrPath = to.path.split('/')
    this.activeMenuBtns({
      nameUrl: arrPath[1],
      nameUrlContextBtn: arrPath[2]
    })
    if (to.name === 'content') {
      next({ name: from.name })
    } else {
      next()
    }
  }
}
</script>

<style lang="scss">
$main_text: #ffffff;

.content{
    width: 100%;
    height: 100%;
    background-image: url('../assets/imgs/bg-conten.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
    &-bg{
      width: 100%;
      height: 100%;
      background-color: rgba($color: #000000, $alpha: 0.2) ;
      display: flex;
      flex-direction: column;
    }
    &__header{
      padding: 10px 5px;
      background-color: rgba($color: #66615b, $alpha: 0.6);
      background-size: 100%;
      background-position: 50%;
      background-repeat: no-repeat;
      display: flex;
      width: 100%;
      justify-content: flex-start;
      align-items: center;
      &__btn{
          &-menu{
              height: 40px;
              width: 40px;
              border-radius: 50%;
              background-color: rgba($color: #66615b, $alpha: 0.4);
              display: flex;
              justify-content: center;
              align-items: center;
              flex-shrink: 0;
              cursor: pointer;
              transition: all 0.3s linear;
              &:hover{
                background-color: rgba($color: #66615b, $alpha: 0.8);
              }
          }
          &-svg{
            height: 26px;
            width: 26px;
            filter: invert(100%);
          }
      }
      &__text{
        font-family: 'Roboto';
        font-weight: 400;
        margin: 0;
        color: $main_text;
        font-size: 34px;
        line-height: 34px;
        width: 100%;
        @media(max-width: 480px){
          font-size: 22px;
          line-height: 22px;
        }
      }
    }
}
</style>
