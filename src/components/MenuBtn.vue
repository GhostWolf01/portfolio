<template>
  <div class='menu__btn' @click="clickBtn" :class="{'menu__btn--active': activeBtn, 'menu__btn--open' :activeContextMenu, 'menu__btn--close' :!activeContextMenu}">
    <p>{{nameBtn}}</p>
  </div>
</template>

<script>
export default {
  name: 'MenuBtn',
  props: {
    nameBtn: String,
    activeContextMenu: Boolean
  },
  data () {
    return {
      activeBtn: false
    }
  },
  methods: {
    clickBtn () {
      for (const child of this.$parent.$children) {
        child.activeBtn = false
      }
      this.activeBtn = !this.activeBtn
    }
  }
}
</script>

<style lang='scss' scoped>
    @keyframes open {
        from {
            margin-top: -50px;
            margin-bottom: 0;
            opacity: 0;
            }
        to {
            margin-top: 0;
            margin-bottom: 10px;
            opacity: 1;
        }
    }
    .menu__btn{
        cursor: pointer;
        width: 100%;
        height: 48px;
        border-radius: 10px;
        margin-bottom: 10px;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 28px;
        color: black;
        line-height: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.15s linear;
        &:hover{
            background-color: rgba($color: #c8c8c8, $alpha: 0.2) ;
        }
        &--active{
            background-color: rgba($color: #28a745, $alpha: 0.7) ;
            &:hover {
                background-color: rgba($color: #28a745, $alpha: 0.8) ;
            }
        }
        &--open{
            animation: open 0.5s;
        }
        &--close{
            transition: all 0.5s linear;
            margin-top: -50px;
            margin-bottom: 0;
            opacity: 0;
            z-index: -1;
        }
    }
</style>
