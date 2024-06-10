<script setup lang="ts">
import type { ITechnology } from '@/types/types';
import TechnologyIcon from '../icons/TechnologyIcon.vue';

interface Props {
  technology: ITechnology;
}
const props = defineProps<Props>();
</script>

<template>
  <v-card class="technology" color="grey-darken-3">
    <v-card-text class="pa-5 text-h-6 d-flex flex-column justify-center align-center">
      <TechnologyIcon :technology :size="52" />
      <p class="project__title mt-1 text-h5 text-grey-lighten-5">{{ technology.title }}</p>
    </v-card-text>
  </v-card>
</template>

<style lang="scss">
.technology {
}
</style>
