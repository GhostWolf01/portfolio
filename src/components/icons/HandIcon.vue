<script setup lang="ts">
import type { CustomIconProps } from '@/types/customIcon';
import colors from '@/utils/colors';

const props = defineProps<CustomIconProps>();
</script>

<template>
  <v-icon
    class="hand-icon"
    :color="props.color ?? colors.lightGreen.accent5"
    :size="props.size"
    :alt="props.alt"
    icon="fas fa-solid fa-hand"
  ></v-icon>
</template>

<style lang="scss">
.hand-icon {
}
</style>
