<script setup lang="ts">
import type { IProgram } from '@/types/types';
import Program from './Program.vue';
interface Props {
  programs: IProgram[];
}
const props = defineProps<Props>();
</script>

<template>
  <section class="programs">
    <h3 class="text-h4 text-sm-h3 text-sm-h3 text-grey-lighten-5 mb-2 text-center text-sm-left">
      Programs
    </h3>
    <div class="programs__body">
      <Program v-for="program in props.programs" :key="program.title" :program />
    </div>
  </section>
</template>

<style lang="scss">
.programs {
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
