<script setup lang="ts">
import { ref } from 'vue';
import ProjectImgFullScreen from './ProjectImgFullScreen.vue';
import type { IProjectImage } from '@/types/types';
interface Props {
  img: IProjectImage;
  width?: string | number;
  height?: string | number;
}
const props = defineProps<Props>();

const dialog = ref<boolean>(false);
// fa-solid fa-compress
function fullscreen() {
  dialog.value = true;
}

function disableFullscreen() {
  dialog.value = false;
}
</script>

<template>
  <div class="project-img" :class="{ 'project-img--mobile': props.img.mobile }">
    <v-img
      class="mx-auto"
      :width="props.width"
      :height="props.height"
      cover
      rounded="xl"
      :src="props.img.src"
      position="top"
      :alt="props.img.title"
    ></v-img>
    <v-btn
      class="project-img__fullscreen-btn"
      color=""
      icon="fa-solid fa-expand"
      @click="fullscreen"
    ></v-btn>
    <ProjectImgFullScreen
      :dialog="dialog"
      :img="props.img"
      @disableFullscreen="disableFullscreen"
    />
  </div>
</template>

<style lang="scss">
.project-img {
  position: relative;
  &--mobile {
    .v-img__img {
      object-fit: scale-down;
    }
  }
  &__fullscreen-btn {
    top: 1rem;
    right: 1rem;
    position: absolute;
  }
}
</style>
