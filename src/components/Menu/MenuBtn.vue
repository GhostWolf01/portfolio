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
    nameUrl: String,
    activeContextMenu: Boolean,
    activeBtn: Boolean
  },
  methods: {
    clickBtn () {
      this.$router.push({ name: 'PortfolioItem', params: { name: this.nameUrl } })
      this.$emit('click-btn', this.nameBtn)
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
.menu__btn--open{
  animation: open 0.6s;
}
</style>

<style lang="scss">
$main_text: #808080;
$hovet_text: #ffffff;
$active_text: #ffffffc0;

.menu__btn{
  cursor: pointer;
  width: 100%;
  height: 48px;
  border-radius: 10px;
  margin-bottom: 10px;
  padding-left: 10px;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 28px;
  color: $main_text;
  line-height: 28px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.15s linear;
  @media(max-width: 768px)
  {
    font-size: 20px;
    line-height: 20px;
  }
  &:hover{
    background-color: rgba($color: #c8c8c8, $alpha: 0.2) ;
    color: $hovet_text;
  }
  &--active{
      background-color: rgba($color: #28a745, $alpha: 0.7) ;
      color: $active_text;
      &:hover {
        background-color: rgba($color: #28a745, $alpha: 0.8) ;
        color: $hovet_text;
      }
  }
  &--close{
    transition: all 0.4s linear;
    margin-top: -48px;
    margin-bottom: 0;
    opacity: 0;
    z-index: -1;
  }
}
</style>
