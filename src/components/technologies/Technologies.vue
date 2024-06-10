<script setup lang="ts">
import type { ITechnology } from '@/types/types';
import Technology from './Technology.vue';
interface Props {
  technologies: ITechnology[];
}
const props = defineProps<Props>();
</script>

<template>
  <section class="technologies">
    <h3 class="text-h4 text-sm-h3 text-grey-lighten-5 mb-2 text-center text-sm-left">
      Technologies
    </h3>
    <div class="technologies__body">
      <Technology
        v-for="technology in props.technologies"
        :key="technology.title"
        :technology="technology"
      />
    </div>
  </section>
</template>

<style lang="scss">
.technologies {
  &__body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 16px;
    column-gap: 16px;
    @media (min-width: 600px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}
</style>
