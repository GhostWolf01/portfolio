<script setup lang="ts">
import { useSize } from '@/utils/size';
import type { CustomIconProps } from '@/types/customIcon';

const props = defineProps<CustomIconProps>();

const { sizeClasses, sizeStyles } = useSize(props);
</script>

<template>
  <svg
    class="drizzle-icon v-icon"
    :class="`v-icon${sizeClasses}`"
    :style="sizeStyles"
    :fill="props.color"
    viewBox="0 0 72 72"
    xmlns="http://www.w3.org/2000/svg"
    :alt="props.alt"
  >
    <title>{{ props.alt }}</title>
    <rect
      width="5.25365"
      height="22.2834"
      rx="2.62683"
      transform="matrix(0.873028 0.48767 -0.497212 0.867629 16.0791 30.3292)"
    ></rect>
    <rect
      width="5.25365"
      height="22.2834"
      rx="2.62683"
      transform="matrix(0.873028 0.48767 -0.497212 0.867629 34.3301 19)"
    ></rect>
    <rect
      width="5.25365"
      height="22.2834"
      rx="2.62683"
      transform="matrix(0.873028 0.48767 -0.497212 0.867629 62.4131 19.0005)"
    ></rect>
    <rect
      width="5.25365"
      height="22.2834"
      rx="2.62683"
      transform="matrix(0.873028 0.48767 -0.497212 0.867629 44.1562 30.3292)"
    ></rect>
  </svg>
</template>

<style lang="scss"></style>
