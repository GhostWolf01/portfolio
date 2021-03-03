<template>
  <section class="about">
    <img class="about__img" src="../assets/imgs/foto.jpg" alt="foto">
    <p class="about__text"><b>ПРИВЕТСВУЮ! :)</b><br>
      Меня зовут Илья занимаюсь веб-разработкой приложений(сайтов) в основном работаю с Vue, VueCli, Webpack, Scss но также хорошо владею Gulp, Jqery, Bootstrap, Sass.<br>
      Работаю 1 год фрилансером, хотелось бы поработать  в компанию с колективом, особено в компании где дают печеньки.<br>
      Поповоду личных качествуй неленивый(ну это не точно), готов браться за сложную работу ведь сложная работа == интересная работа.
    </p>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss">
$main_text: #ffffff;

.about{
  margin: 5% auto 0 auto;
  padding: 20px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba($color: #000000, $alpha: 0.6);
  border-radius: 25px;
  width: 90%;
  &__img{
    width: 180px;
    height: 180px;
    background-color: white;
    border-radius: 25px;
  }
  &__text{
    margin-left: 20px;
    color: $main_text;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 25px;
    line-height: 28px;
    & b{
      font-size: 28px;
      line-height: 28px;
    }
  }
}
</style>
