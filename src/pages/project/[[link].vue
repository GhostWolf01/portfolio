<script setup lang="ts">
import { definePageMeta, useRouter, useHead, navigateTo } from '#imports';
import Technologies from '@/components/technologies/Technologies.vue';
import Tags from '@/components/project/Tags.vue';
import ProjectImgs from '@/components/project/ProjectImgs.vue';
import { getProject } from '@/data';

definePageMeta({
  title: 'Project',
});

const route = useRouter().currentRoute;
const project = getProject(route.value.params.link as string);

if (!project.slug) navigateTo('/not-found');

route.value.meta.title = project.title;

useHead({
  title: `${project.title} — Portfolio Getmanchuk Illya`,
  meta: [
    {
      name: 'description',
      content: `Portfolio Front-End Developer Getmanchuk Illya ${project.title} Page`,
    },
  ],
});
</script>

<template>
  <v-container class="project-page">
    <v-row justify="center">
      <v-col cols="12" sm="10" xl="6">
        <v-sheet class="br-b-grey-darken-3 pb-5" color="transparent" tag="section">
          <h2
            class="project-page__title pt-5 pb-2 text-sm-h2 text-h3 text-grey-lighten-5 text-center text-sm-left"
          >
            {{ project.title }}
          </h2>
          <Tags class="pb-2" :tags="project.tags" />
          <p class="project-page__description text-body-1 text-grey-lighten-4">
            {{ project.description }}
          </p>
          <p v-if="project.ps" class="project-page__description text-body-1 text-grey-lighten-4">
            PS із-за NDA не всі сторінки показано, інформація змінена.
          </p>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="10" xl="6">
        <v-sheet class="br-b-grey-darken-3 pb-5" color="transparent">
          <ProjectImgs :images="project.images" />
        </v-sheet>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="10" xl="6">
        <v-sheet class="pb-5" color="transparent">
          <Technologies :technologies="project.technologies" />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss"></style>
