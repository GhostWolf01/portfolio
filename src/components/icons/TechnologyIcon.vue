<script setup lang="ts">
import type { PredefinedSizes } from '@/types/size.mjs';
import type { IProgram, ITechnology, ITag } from '@/types/types';
import { defineAsyncComponent, type Component } from 'vue';
import colors from '@/utils/colors';

interface IComponents {
  [key: string]: Component;
}

const components: IComponents = {
  NuxtIcon: defineAsyncComponent(() => import('./NuxtIcon.vue')),
  TauriIcon: defineAsyncComponent(() => import('./TauriIcon.vue')),
  NestIcon: defineAsyncComponent(() => import('./NestIcon.vue')),
  VSCodeIcon: defineAsyncComponent(() => import('./VSCodeIcon.vue')),
  PostgresIcon: defineAsyncComponent(() => import('./PostgresIcon.vue')),
  TypeOrmIcon: defineAsyncComponent(() => import('./TypeOrmIcon.vue')),
  MongoDBIcon: defineAsyncComponent(() => import('./MongoDBIcon.vue')),
  PhotoshopIcon: defineAsyncComponent(() => import('./PhotoshopIcon.vue')),
  DrizzleOrmIcon: defineAsyncComponent(() => import('./DrizzleOrmIcon.vue')),
  QuasarIcon: defineAsyncComponent(() => import('./QuasarIcon.vue')),
  ElectronIcon: defineAsyncComponent(() => import('./ElectronIcon.vue')),
  BunIcon: defineAsyncComponent(() => import('./BunIcon.vue')),
  NextIcon: defineAsyncComponent(() => import('./NextIcon.vue')),
};

interface Props {
  technology: ITechnology | IProgram | ITag;
  color?: string;
  size?: PredefinedSizes;
}
const props = defineProps<Props>();
</script>

<template>
  <component
    v-if="props.technology.custom"
    class="technology-icon"
    :is="components[props.technology.icon]"
    :color="color ?? colors.grey.lighten5"
    :size="props.size"
    :alt="props.technology.title"
  />
  <v-icon
    v-else
    class="technology-icon"
    :color="color"
    :icon="props.technology.icon"
    :size="props.size"
    :alt="props.technology.title"
  />
</template>

<style lang="scss">
.technology-icon {
}
</style>
~/utils/size.mjs
