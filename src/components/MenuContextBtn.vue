<template>
  <div class="menu__context-btn">
    <div class="menu__context-btn__header" @click="clickBtn" :class="{ 'menu__context-btn__header--active' : activeContextBtn}">
      <p>{{nameBtn}}</p>
      <svg v-if="menuBtns" class="context-svg" :class="{'context-svg--active' : activeContext}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M24 22h-24l12-20z"/>
      </svg>
    </div>
    <MenuBtn
    v-for="MenuBtn in menuBtns"
    :key="MenuBtn.id"
    :nameBtn="MenuBtn.name"
    :activeContextMenu="activeContext"
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
      activeBtn: false,
      activeContext: false,
      activeContextBtn: false
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
          contxMenu.activeContext = false
          contxMenu.activeContextBtn = false
        }
        this.activeBtn = true
        this.activeContext = true
        this.activeContextBtn = true
        for (let i = 0; i < this.$parent.$children.length; i++) {
          if (this._uid === this.$parent.$children[i]._uid) {
            this.$root.$children[0].activeComponent = i
          }
        }
      } else {
        this.activeContext = false
        this.activeBtn = false
        if (this.$children.length !== 0) {
          for (const menuBtn of this.$children) {
            menuBtn.activeBtn = false
          }
        }
        this.$root.$children[0].$children[0].$children[0].activeCompenents = false
      }
    }
  }
}
</script>

<style lang="scss">
$main_text: #808080;
$hovet_text: #ffffff;
$active_text: #ffffffc0;

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
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 28px;
    color: $main_text;
    line-height: 28px;
    transition: all 0.15s linear;
    @media(max-width: 768px)
    {
      font-size: 20px;
      line-height: 20px;
    }
    & p{
      width: 100%;
    }
    &:hover{
      background-color: rgba($color: #c8c8c8, $alpha: 0.2);
      color: $hovet_text;
    }
    &--active{
      background-color: rgba($color: #28a745, $alpha: 0.7);
      color: $active_text;
      &:hover {
        background-color: rgba($color: #28a745, $alpha: 0.8);
        color: $hovet_text;
      }
    }
  }
}
.context-svg{
  width: 15px;
  height: 15px;
  margin-right: 10px;
  transition: all 0.25s ease-in-out;
  filter: invert(100%);
  &--active{
    transform: rotate(180deg);
  }
}
</style>
