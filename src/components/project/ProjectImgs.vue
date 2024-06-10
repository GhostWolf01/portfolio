<script setup lang="ts">
import type { IProjectImage } from '@/types/types';
import ProjectImg from './ProjectImg.vue';

interface Props {
  images: IProjectImage[];
}
const props = defineProps<Props>();
</script>

<template>
  <section class="project-imgs">
    <h3 class="text-h4 text-sm-h3 text-grey-lighten-5 mb-2 text-center text-sm-left">
      Project Images
    </h3>
    <v-carousel
      class="rounded-xl"
      theme="dark"
      color="white"
      height="604"
      hide-delimiter-background
      hide-delimiters
    >
      <v-carousel-item v-for="img in props.images" :key="img.title">
        <div class="d-flex flex-column">
          <p class="text-h4 text-center text-grey-lighten-5 mb-1">{{ img.title }}</p>
          <div class="project-imgs__img pa-1 bg-grey-darken-3 rounded-xl">
            <ProjectImg height="552" :img="img" />
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </section>
</template>

<style lang="scss">
.project-imgs {
  &__img {
    height: 560px;
    overflow: hidden;
  }
  .v-carousel__controls {
    overflow-y: scroll;
    @media (max-width: 959px) {
      display: none;
    }
    margin: 0 auto;
    & > .v-carousel__controls__item {
      // height: 24px !important;
      // width: 24px !important;
      margin: 0 4px;
      @media (max-width: 959px) {
        height: 24px !important;
        width: 24px !important;
      }
    }
  }
}
</style>
