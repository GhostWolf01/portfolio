<template>
<nav class="menu" :class="{ 'menu--open' : showMenu, 'menu--close' : !showMenu}">
    <header class="menu__header">
        <img class="menu__header__img" src="../assets/logo.png" alt="icon">
        <h1 class="menu__header__text">Гетманчук Ілля<br>Портфолио</h1>
    </header>
    <div class="menu__btns">
        <MenuContextBtn nameBtn="Портфолио" :menuBtns="portfolioBtns"></MenuContextBtn>
        <MenuContextBtn nameBtn="Контакты" :menuBtns="null"></MenuContextBtn>
    </div>
</nav>
</template>

<script>
import MenuContextBtn from './MenuContextBtn.vue'

export default {
  name: 'Menu',
  components: {
    MenuContextBtn
  },
  props: {
    showMenu: Boolean
  },
  data () {
    return {
      portfolioBtns: [{ name: '1' }, { name: '2' }, { name: '3' }]
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes open {
        from {
            margin-left: -30%;
        }
        to {
            margin-left: 0;
        }
    }
.menu{
    display: flex;
    width: 30%;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 20px 10px;
    background-color: rgba($color: #212120, $alpha: 0.8) ;
    &__header{
        display: flex;
        width: 100%;
        justify-content: space-around;
        align-items: center;
        padding: 10px 0;
        border-top: 2px solid rgba($color: #606061, $alpha: 0.7);
        border-bottom: 2px solid rgba($color: #606061, $alpha: 0.7);
        margin-bottom: 10px;
        &__img{
            height: 50px;
            width: 50px;
            border-radius: 50%;
            background-color: rgba($color: #868e96, $alpha: 0.6);
        }
        &__text{
            font-family: 'Roboto';
            font-weight: 400;
            margin: 0;
            font-size: 28px;
            color: black;
            line-height: 28px;
        }
    }
    &__btns{
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        padding: 10px 0;
        width: 100%;
        transition: all 0.2s linear;
    }
    &--open{
        animation: open 0.6s;
    }
    &--close{
        transition: all 0.4s linear;
        margin-left: -30%;
        padding: 20px 0;
        z-index: -1;
    }
}
</style>
