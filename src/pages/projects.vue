<script setup lang="ts">
import { definePageMeta } from '#imports';
import Projects from '@/components/projects/Projects.vue';
import { projects } from '@/data';
definePageMeta({
  title: 'Projects',
});
</script>

<template>
  <v-container class="projects-page">
    <v-row justify="center">
      <v-col cols="12" sm="10" xl="6">
        <v-sheet class="pb-5" color="transparent">
          <Projects :projects="projects" image></Projects>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss"></style>
