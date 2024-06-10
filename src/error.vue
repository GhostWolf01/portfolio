<script setup lang="ts">
import { useHead, navigateTo } from "#imports";
import NotFoundImg from "@/assets/images/404_Not_Found.jpg";

import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});

useHead({
  title: "404 — Portfolio Getmanchuk Illya",
  meta: [
    {
      name: "description",
      content: "Portfolio Front-End Developer Getmanchuk Illya 404 Page",
    },
  ],
});

console.log(props.error);

navigateTo("/not-found");
</script>

<template>
  <div class="not-found-page">
    <v-img :src="NotFoundImg" position="top" alt="Not Found Images"></v-img>
  </div>
</template>
