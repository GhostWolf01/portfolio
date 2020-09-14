<template>
  <div class="menu__context-btn">
            <div class="menu__context-btn__header" @click="clickBtn" :class="{ 'menu__context-btn__header--active' : activeBtn}">
                <p>{{nameBtn}}</p>
                <svg v-if="menuBtns" class="context-svg" :class="{'context-svg--active' : activeBtn}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M24 22h-24l12-20z"/>
                </svg>
            </div>
            <MenuBtn
            v-for="MenuBtn in menuBtns"
            :key="MenuBtn.id"
            :nameBtn="MenuBtn.name"
            :activeContextMenu="activeBtn"
            />
        </div>
</template>

<script>
import MenuBtn from './MenuBtn.vue'

export default {
  name: 'MenuContextBtn',
  props: {
    nameBtn: String,
    menuBtns: Array
  },
  components: {
    MenuBtn
  },
  data () {
    return {
      activeBtn: false
    }
  },
  methods: {
    clickBtn () {
      if (this.activeBtn === false) {
        for (const contxMenu of this.$parent.$children) {
          if (contxMenu.$children.length !== 0) {
            for (const menuBtn of contxMenu.$children) {
              menuBtn.activeBtn = false
            }
          }
          contxMenu.activeBtn = false
        }
        this.activeBtn = true
        for (let i = 0; i < this.$parent.$children.length; i++) {
          if (this._uid === this.$parent.$children[i]._uid) {
            this.$root.$children[0].activeComponent = i
          }
        }
      }
    }
  }
}
</script>

<style lang="scss">
.menu__context-btn{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 100%;
    &__header{
        width: 100%;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        margin-bottom: 10px;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 28px;
        color: black;
        line-height: 28px;
        transition: all 0.15s linear;
        & p{
            width: 100%;
        }
        &:hover{
            background-color: rgba($color: #c8c8c8, $alpha: 0.2) ;
        }
        &--active{
            background-color: rgba($color: #28a745, $alpha: 0.7) ;
            &:hover {
                background-color: rgba($color: #28a745, $alpha: 0.8) ;
            }
        }
    }
}
.context-svg{
    width: 20px;
    height: 20px;
    margin-right: 10px;
    transition: all 0.25s ease-in-out;
    &--active{
        transform: rotate(180deg);
    }
}
</style>
