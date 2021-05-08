<template>
  <section class="about">
    <div class="about__block">
      <img class="about__img" src="../assets/imgs/foto.jpg" alt="foto">
      <p class="about__text"><b>ПРИВЕТСВУЮ! :)</b><br>
        Меня зовут Илья занимаюсь веб-разработкой приложений(сайтов) в основном работаю с Vue, VueCli, Webpack, Scss но также хорошо владею Gulp, Jqery, Bootstrap, Sass.<br>
        Работаю 1 год фрилансером, хотелось бы поработать  в компанию с колективом, особено в компании где дают печеньки.<br>
        Поповоду личных качеств неленивый(ну это не точно), готов браться за сложную работу ведь сложная работа == интересная работа.
      </p>
    </div>
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
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: auto;
  &__block{
    margin-top: 5%;
    padding: 20px 20px;
    background-color: rgba($color: #000000, $alpha: 0.6);
    border-radius: 25px;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: max-content;
    @media(max-width: 480px)
    {
      flex-direction: column;
    }
  }

  &__img{
    width: 180px;
    height: 180px;
    background-color: white;
    border-radius: 25px;
    @media(max-width: 768px)
    {
      width: 160px;
      height: 160px;
    }
    @media(max-width: 480px)
    {
      margin-bottom: 10px;
    }
  }
  &__text{
    margin-left: 20px;
    color: $main_text;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 25px;
    line-height: 28px;
    @media(max-width: 768px)
    {
      font-size: 18px;
    }
    & b{
      font-size: 28px;
      line-height: 28px;
      @media(max-width: 768px)
      {
        font-size: 22px;
      }
    }
  }
}
</style>
