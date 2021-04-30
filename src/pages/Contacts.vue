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
    <div class="contacts__linkedin">
      <svg class="contacts__linkedin-svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 512.003 512.003" style="enable-background:new 0 0 512.003 512.003;" xml:space="preserve">
        <g transform="translate(0 -1)">
          <g>
            <g>
              <path d="M68.762,5.195h-0.06c-18.261,0-35.482,7.1-48.478,19.985C7.185,38.1,0,55.243,0,73.453
                c-0.009,18.611,7.33,36.053,20.625,49.092c12.894,12.629,30.481,19.721,47.531,19.311c0.495,0.009,0.99,0.017,1.493,0.017
                c17.092,0,34.014-6.963,46.618-19.251c13.286-12.945,20.625-30.319,20.668-48.922c0.043-18.193-7.074-35.362-20.019-48.358
                C103.979,12.363,86.878,5.212,68.762,5.195z"/>
              <path d="M102.403,158.941H33.411c-13.713,0-24.875,11.511-24.875,25.651v298.615c0,13.841,11.725,25.532,25.6,25.532h68.267
                c13.875,0,25.6-11.46,25.6-25.011V184.541C128.003,170.666,116.279,158.941,102.403,158.941z"/>
              <path d="M393.645,150.408h-17.98c-33.135,0-64.922,14.114-85.53,37.427v-11.827c0-8.457-8.619-17.067-17.067-17.067h-85.333
                c-7.893,0-17.067,6.997-17.067,16.017v318.404c0,9.054,8.994,15.369,17.067,15.377l93.867,0.026
                c8.073,0,17.067-6.315,17.067-15.377V309.435c0-27.75,20.574-49.724,46.839-50.022c13.355-0.299,25.975,4.966,35.422,14.43
                c7.808,7.808,11.605,19.208,11.605,34.859v183.04c0,8.457,8.619,17.067,17.067,17.067h85.333c8.448,0,17.067-8.61,17.067-17.067
                V271.496C512.003,203.596,460.009,150.408,393.645,150.408z"/>
            </g>
          </g>
        </g>
      </svg>
      <a class="contacts__linkedin-text" href="https://www.linkedin.com/in/getmanchuk-illya-1235181b3/">linkedin: Getmanchuk Illya</a>
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
  overflow: auto;
  &__email{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    &-svg{
      width: 28px;
      height: 28px;
      filter: invert(100%);
      @media(max-width: 768px){
        width: 24px;
        height: 24px;
      }
      @media(max-width: 480px){
        width: 20px;
        height: 20px;
      }
    }
    &-text{
      margin-left: 10px;
      text-decoration: none;
      color: $main_text;
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 28px;
      line-height: 28px;
      @media(max-width: 768px){
        font-size: 24px;
        line-height: 24px;
      }
      @media(max-width: 480px){
        font-size: 20px;
        line-height: 20px;
      }
    }
  }
  &__telegram{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    &-svg{
      width: 28px;
      height: 28px;
      filter: invert(100%);
      @media(max-width: 768px){
        width: 24px;
        height: 24px;
      }
      @media(max-width: 480px){
        width: 20px;
        height: 20px;
      }
    }
    &-text{
      margin-left: 10px;
      text-decoration: none;
      color: $main_text;
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 28px;
      line-height: 28px;
      @media(max-width: 768px){
        font-size: 24px;
        line-height: 24px;
      }
      @media(max-width: 480px){
        font-size: 20px;
        line-height: 20px;
      }
    }
  }
  &__linkedin{
    display: flex;
    justify-content: center;
    align-items: center;
    &-svg{
      width: 28px;
      height: 28px;
      filter: invert(100%);
      @media(max-width: 768px){
        width: 24px;
        height: 24px;
      }
      @media(max-width: 480px){
        width: 20px;
        height: 20px;
      }
    }
    &-text{
      margin-left: 10px;
      text-decoration: none;
      color: $main_text;
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 28px;
      line-height: 28px;
      @media(max-width: 768px){
        font-size: 24px;
        line-height: 24px;
      }
      @media(max-width: 480px){
        font-size: 20px;
        line-height: 20px;
      }
    }
  }
}
</style>
