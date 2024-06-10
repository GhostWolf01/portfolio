<script setup lang="ts">
import colors from "@/utils/colors";
import type { ITag } from "@/types/types";
import type { PredefinedSizes } from "@/types/size.mjs";
import TechnologyIcon from "@/components/icons/TechnologyIcon.vue";

interface Props {
  tag: ITag;
  size?: PredefinedSizes;
}
const props = defineProps<Props>();
</script>

<template>
  <v-chip class="tag" variant="elevated" :size="props.size" :color="colors.grey.darken6">
    <TechnologyIcon
      v-if="props.tag.icon"
      class="mr-2"
      :color="colors.lightGreen.accent5"
      :technology="tag"
      :size="props.size"
    />
    <span class="tag__text">{{ tag.title }}</span>
  </v-chip>
</template>

<style lang="scss">
.tag {
  &__text {
  }
}
</style>
