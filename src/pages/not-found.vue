<script setup lang="ts">
import { definePageMeta } from '#imports';
import NotFoundImg from '@/assets/images/404_Not_Found.jpg';
definePageMeta({
  title: '404',
  footer: false,
});
</script>

<template>
  <div class="not-found-page">
    <v-img :src="NotFoundImg" position="top" alt="Not Found Images"></v-img>
  </div>
</template>

<style lang="scss">
.not-found-page {
  height: 100vh;
  background-color: #fcb82f;
}
</style>
