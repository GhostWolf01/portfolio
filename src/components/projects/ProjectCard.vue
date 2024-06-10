<script setup lang="ts">
import type { IProject } from "@/types/types";
import TechnologyIcon from "../icons/TechnologyIcon.vue";

interface Props {
  project: IProject;
  image?: boolean;
}
const props = defineProps<Props>();
</script>

<template>
  <v-card class="project" color="grey-darken-3">
    <v-card-title class="pa-5 pb-2 text-h4 text-grey-lighten-5">{{ project.title }}</v-card-title>
    <v-card-text class="pa-5 pt-0 text-body-1">
      <div class="project__body">
        <v-img
          class="mb-1 mx-auto"
          cover
          rounded="xl"
          :src="project.titleImg"
          height="200"
          position="top"
          :alt="`Main screen ${project.title}`"
        ></v-img>
        <p class="project__body-text mb-1 text-grey-lighten-4">
          {{ project.description }}
        </p>
        <v-btn
          class="text-body-1 pa-0"
          variant="text"
          color="light-green-accent-5"
          :to="project.link"
        >
          read more >
        </v-btn>
        <div class="project__body-technologies mt-1">
          <TechnologyIcon
            class="mb-1"
            v-for="tech in props.project.technologies"
            :key="tech.icon"
            :technology="tech"
            size="x-large"
          />
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<style lang="scss">
.project {
  // height:;
  &__body {
    &-text {
      height: 90px;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &-technologies {
      & > * {
        margin-right: 10px;
      }
      & > :last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
