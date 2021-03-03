<template>
  <section class="contacts">
    <div class="contacts__email">
      <svg class="contacts__email-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" xml:space="preserve" width="64" height="64">
      <g class="nc-icon-wrapper" fill="#000000">
        <path fill="#000000" d="M61,9H3c-1.105,0-2,0.895-2,2v42c0,1.105,0.895,2,2,2h58c1.105,0,2-0.895,2-2V11C63,9.895,62.105,9,61,9z M57.562,15.827l-25,17C32.393,32.942,32.196,33,32,33s-0.393-0.058-0.563-0.173l-25-17c-0.456-0.311-0.575-0.933-0.265-1.39 c0.311-0.455,0.932-0.575,1.39-0.265L32,30.791l24.437-16.618c0.456-0.311,1.079-0.19,1.39,0.265 C58.138,14.895,58.019,15.517,57.562,15.827z"/>
      </g>
      </svg>
      <a class="contacts__email-text" href="mailto:wolf0101@yandex.ua">email: wolf0101@yandex.ua</a>
    </div>
    <div class="contacts__telegram">
      <svg class="contacts__telegram-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" xml:space="preserve" width="64" height="64">
        <g class="nc-icon-wrapper" fill="#000000">
          <path fill="#000000" d="M61.707,2.293c-0.273-0.275-0.683-0.365-1.048-0.233l-58,21c-0.378,0.137-0.638,0.488-0.658,0.89 c-0.02,0.402,0.203,0.777,0.566,0.952l20.886,10.025l18.866-13.945c0.462-0.341,1.041,0.238,0.699,0.699L29.074,40.547 l10.025,20.886C39.266,61.78,39.617,62,40,62c0.017,0,0.033,0,0.05-0.001c0.402-0.021,0.753-0.28,0.891-0.658l21-58 C62.072,2.976,61.981,2.567,61.707,2.293z"/>
        </g>
      </svg>
      <a class="contacts__telegram-text" href="https://t.me/GhostWolf01">telegram: GhostWolf01</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contacts'
}
</script>

<style lang="scss">
$main_text: #ffffff;

.contacts{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 20px;
    &__email{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      &-svg{
        width: 28px;
        height: 28px;
        filter: invert(100%);
      }
      &-text{
        margin-left: 10px;
        text-decoration: none;
        color: $main_text;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 28px;
        line-height: 28px;
      }
    }
    &__telegram{
      display: flex;
      justify-content: center;
      align-items: center;
      &-svg{
        width: 28px;
        height: 28px;
        filter: invert(100%);
      }
      &-text{
        margin-left: 10px;
        text-decoration: none;
        color: $main_text;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 28px;
        line-height: 28px;
      }
    }
}
</style>
