<!-- eslint-disable vue/no-mutating-props -->
<script setup lang="ts">
import type { IProjectImage } from '@/types/types';
import { ref, watch } from 'vue';
interface Props {
  dialog: boolean;
  img: IProjectImage;
}

const props = defineProps<Props>();

interface Emits {
  (e: 'disableFullscreen'): void;
}

const emit = defineEmits<Emits>();

const dialogF = ref<boolean>(props.dialog);

watch(
  () => props.dialog,
  () => {
    dialogF.value = props.dialog;
  },
);

// fa-solid fa-compress
function disableFullscreen() {
  dialogF.value = false;
  emit('disableFullscreen');
}
</script>

<template>
  <v-dialog v-model="dialogF" @update:modelValue="disableFullscreen" fullscreen>
    <v-card class="project-fullscreen-img overflow-auto" width="100%" height="max-content">
      <img
        class="project-fullscreen-img__img"
        :class="{ 'project-fullscreen-img__img--mobile': props.img.mobile }"
        :src="props.img.src"
        :alt="props.img.title"
      />
      <v-btn
        class="project-fullscreen-img__fullscreen-btn"
        color=""
        icon="fa-solid fa-compress"
        @click="disableFullscreen"
      ></v-btn>
    </v-card>
  </v-dialog>
</template>

<style lang="scss">
.project-fullscreen-img {
  &__img {
    width: 100vw;
    height: auto;
    @media (max-width: 959px) {
      width: max-content;
      height: max-content;
    }
    &--mobile {
      margin: 0 auto;
      width: 425px;
      object-position: center top;
      @media (max-width: 959px) {
        width: max-content;
        height: max-content;
      }
    }
  }
  &__fullscreen-btn {
    top: 1rem;
    right: 1rem;
    position: fixed !important;
  }
}
</style>
