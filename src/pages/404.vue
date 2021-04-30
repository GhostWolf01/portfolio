<template>
  <div class="not-found">
    <img class="not-found__img" src="../assets/imgs/404 Not Found.jpg" alt="404 Not Found">
    <button class="not-found__btn" @click="clickBtn">
      На главную
    </button>
  </div>
</template>

<script>
export default {
  name: '404',
  methods: {
    clickBtn () {
      this.$router.push({ name: 'content' })
    }
  }
}
</script>

<style lang="scss" scoped>
  .not-found {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #fcb82f;
    &__img {
      width: 80%;
      height: 100%;
      @media(max-width: 768px) {
        width: 90%;
      }
      @media(max-width: 480px) {
        width: 100%;
        height: auto;
      }
    }
    &__btn {
      cursor: pointer;
      border: 5px solid black;
      border-radius: 50px;
      color: rgba($color: #ffffff, $alpha: 0.8);
      padding: 5px 10px;
      font-size: 70px;
      margin-top: 10px;
      margin-bottom: 20px;
      font-family: 'Roboto';
      font-weight: 400;
      background-color: #fcb82f;
      &:hover {
        background-color: #ffaa00;
        color: rgba($color: #ffffff, $alpha: 1);
        border-color: white;
      }
      @media(max-width: 768px) {
        font-size: 50px;
      }
      @media(max-width: 480px) {
        font-size: 30px;
      }
    }
  }
</style>
