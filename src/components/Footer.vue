<script setup lang="ts">
import logo from '@/assets/images/logo.jpg';
const date = new Date();
</script>

<template>
  <v-footer class="footer bg-grey-darken-4 br-t-grey-darken-3 flex flex-0-0 justify-center">
    <v-avatar :image="logo" size="48"></v-avatar>
    <p class="ml-5 text-h6">© Getmanchuk Illya — {{ date.getFullYear() }}</p>
  </v-footer>
</template>

<style lang="scss" scoped>
// @use 'sass:map';
// @import 'vuetify/styles/settings/_colors.scss';
// .footer {
//   border-top: 1px solid map.get($indigo, 'darken-3');
// }
</style>
