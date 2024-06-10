<script setup lang="ts">
import colors from '@/utils/colors';
import { links } from '@/data';
</script>

<template>
  <div class="links-btns d-flex align-center justify-center justify-sm-start flex-wrap my-3">
    <v-btn
      v-for="item in links"
      :key="item.key"
      :href="item.link"
      :color="colors.grey.darken6"
      rounded="pill"
      size="large"
    >
      <template #prepend>
        <v-icon :color="colors.lightGreen.accent5" :icon="item.icon" size="large"></v-icon>
      </template>
      {{ item.text }}
    </v-btn>
  </div>
</template>

<style lang="scss">
.links-btns {
  gap: 8px 8px;
  & > :last-child {
    margin-right: 0 !important;
  }
}
</style>
