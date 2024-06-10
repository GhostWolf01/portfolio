<script setup lang="ts">
import type { ITimeLine } from '@/types/types';

interface Props {
  timeLine: ITimeLine[];
}

const props = defineProps<Props>();
</script>

<template>
  <section class="time-line">
    <h3 class="text-h4 text-sm-h3 text-grey-lighten-5 mb-2 text-center text-md-left">
      My timeline
    </h3>
    <v-timeline truncate-line="both" align="center" side="end" line-color="grey-lighten-5">
      <v-timeline-item
        size="x-small"
        dot-color="grey-lighten-5"
        fill-dot
        v-for="(item, index) in props.timeLine"
        :key="index"
      >
        <template #opposite>
          <div v-if="item.left.date" class="d-flex justify-end align-center">
            <div>
              <p class="text-right text-subtitle-2 text-grey-lighten-1">
                {{ item.left.date }}
              </p>
              <p class="text-right text-h6 text-grey-lighten-5">{{ item.left.text }}</p>
            </div>
            <v-icon class="ml-2" :icon="item.left.icon"></v-icon>
          </div>
        </template>
        <div v-if="item.right.date" class="d-flex justify-start align-center">
          <v-icon class="mr-2" :icon="item.right.icon"></v-icon>
          <div>
            <p class="text-subtitle-2 text-grey-lighten-1">{{ item.right.date }}</p>
            <p class="text-h6 text-grey-lighten-5">{{ item.right.text }}</p>
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </section>
</template>

<style lang="scss">
.time-line {
}
</style>
