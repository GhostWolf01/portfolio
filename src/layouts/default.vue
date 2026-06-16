<script setup lang="ts">
import { watch } from '#imports';
import { useRouter } from '#imports';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

import { useHead } from '#imports';

const route = useRouter().currentRoute;

watch(
  route,
  () => {
    const title = route.value.meta.title ?? 'Home';
    useHead({
      title: `${title} — Portfolio Getmanchuk Illya`,
      meta: [
        {
          name: 'description',
          content: `Portfolio Front-End Developer Getmanchuk Illya ${title} Page`,
        },
      ],
    });
  },
  {
    immediate: true,
  },
);

function isFooterActive() {
  return route.value.meta.footer ?? true;
}
</script>

<template>
  <v-app>
    <v-layout full-height class="layout flex-column bg-grey-darken-4">
      <Header />
      <v-main class="h-100">
        <slot />
      </v-main>
      <Footer v-if="isFooterActive()" />
    </v-layout>
  </v-app>
</template>

<style lang="scss">
.layout {
  min-height: 100dvh;
}
</style>
