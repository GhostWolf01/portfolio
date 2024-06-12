<script setup lang="ts">
import type { ITag } from '@/types/types';
import Tag from './Tag.vue';
interface Props {
  tags: ITag[];
}
const props = defineProps<Props>();
</script>

<template>
  <div class="tags d-flex align-center flex-wrap">
    <Tag class="tags__tag" v-for="tag in props.tags" :key="tag.title" :tag="tag" size="default" />
  </div>
</template>

<style lang="scss">
.tags {
  gap: 8px 8px;
  &__tag {
  }
}
</style>
