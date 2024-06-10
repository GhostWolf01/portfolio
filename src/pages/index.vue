<script setup lang="ts">
import { definePageMeta } from "#imports";
import { timeLine, projects, technologies, programs } from "@/data";
import TimeLine from "@/components/TimeLine.vue";
import Projects from "@/components/projects/Projects.vue";
import Technologies from "@/components/technologies/Technologies.vue";
import Programs from "@/components/programs/Programs.vue";
import LinksBtns from "@/components/links/LinksBtns.vue";
import HandIcon from "@/components/icons/HandIcon.vue";

definePageMeta({
  title: "Home",
});

const favoriteProjects = projects.slice(0, 6);
</script>

<template>
  <v-container class="home">
    <v-row justify="center">
      <v-col cols="12" sm="10" xl="6">
        <v-sheet class="br-b-grey-darken-3 pb-5" color="transparent" tag="section">
          <h1 class="text-sm-h2 text-h3 text-grey-lighten-5 text-center text-md-left">
            Привіт, мене звати Ілля
            <HandIcon size="x-small" />
          </h1>
          <h2 class="text-sm-h2 text-h3 text-light-green-accent-5 text-center text-md-left">
            Front-End Developer
          </h2>
          <LinksBtns />
          <p class="text-h6 text-grey-lighten-4">
            Я людина, яка любить вирішувати проблеми бізнесу та віддана виконанню важливих та
            цікавих завдань. Моє серце б'ється в ритмі викликів, і я завжди готовий зануритися у
            глибини складних задач. Для мене нудьга - це найгірше, тому я завжди шукаю можливості
            розвиватися та рости через виклики, які приводять мене до нових горизонтів.
          </p>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="10" xl="6">
        <v-sheet class="br-b-grey-darken-3 pb-5" color="transparent">
          <TimeLine :time-line="timeLine" />
        </v-sheet>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="10" xl="6">
        <v-sheet class="br-b-grey-darken-3 pb-5" color="transparent">
          <Projects :projects="favoriteProjects" toAll />
        </v-sheet>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="10" xl="6">
        <v-sheet class="br-b-grey-darken-3 pb-5" color="transparent">
          <Technologies :technologies="technologies" />
        </v-sheet>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="10" xl="6">
        <v-sheet class="pb-5" color="transparent">
          <Programs :programs="programs" />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss"></style>
