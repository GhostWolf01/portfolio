<script setup lang="ts">
import type { IProject } from '@/types/types';
import Project from './ProjectCard.vue';
interface Props {
  projects: IProject[];
  image?: boolean;
  toAll?: boolean;
}
const props = defineProps<Props>();
</script>

<template>
  <div class="projects">
    <div class="projects__header">
      <h3 class="text-h4 text-sm-h3 text-grey-lighten-5 mb-2 text-center text-md-left">Projects</h3>
      <v-btn
        v-if="toAll"
        class="text-body-1 pa-1"
        variant="text"
        color="light-green-accent-5"
        to="/projects"
      >
        All projects
      </v-btn>
    </div>
    <div class="projects__body">
      <Project
        v-for="project in props.projects"
        :key="project.title"
        :project="project"
        :image="props.image"
      />
    </div>
  </div>
</template>

<style lang="scss">
.projects {
  &__header {
    display: flex;
    justify-content: space-between;
  }
  &__body {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 16px;
    column-gap: 16px;
    @media (min-width: 960px) {
      grid-template-columns: 1fr 1fr;
    }
  }
}
</style>
