<script setup lang="ts">
import { definePageMeta } from '#imports';
import { timeLine } from '@/data';
import personImage from '@/assets/images/IMG_20220502_205711.jpg';
import LinksBtns from '@/components/links/LinksBtns.vue';
import TimeLine from '@/components/TimeLine.vue';
import HandIcon from '@/components/icons/HandIcon.vue';

definePageMeta({
  title: 'About',
});
</script>

<template>
  <v-container class="about">
    <v-row justify="center">
      <v-col cols="12" sm="10" xl="6">
        <v-sheet class="br-b-grey-darken-3 pb-5" color="transparent">
          <h2 class="text-sm-h2 text-h3 text-grey-lighten-5 text-center text-sm-left">
            Привіт, мене звати Ілля
            <HandIcon size="x-small" />
          </h2>
          <h2 class="text-sm-h3 text-h4 text-light-green-accent-5 mb-2 text-center text-sm-left">
            Front-End/Fullstack Node.js Developer
          </h2>
          <div class="d-flex justify-center">
            <v-img
              class="flex-0-1 mx-auto"
              rounded="xl"
              cover
              :src="personImage"
              width="300"
              height="400"
              alt="Getmanchuk Illya Photo"
            ></v-img>
          </div>
          <LinksBtns />
          <div class="mb-1">
            <p class="text-h5 text-grey-lighten-5 mb-2">
              я
              <span class="text-h5 text-light-green-accent-5">
                Front-End/Fullstack Node.js Developer</span
              >, людина, яка любить вирішувати проблеми бізнесу та віддана виконанню важливих та
              цікавих завдань. Моє серце б'ється в ритмі викликів, і я завжди готовий зануритися у
              глибини складних задач. Для мене нудьга - це найгірше, тому я завжди шукаю можливості
              розвиватися та рости через виклики, які приводять мене до нових горизонтів.
            </p>
            <p class="text-h5 text-grey-lighten-5 mb-2">
              Виконання важкої роботи - це не просто завдання, а справжня радість для мене. Я люблю,
              коли кожен крок приносить нові вдосконалення та знання. Відчуття досягнення після
              вирішення складної проблеми надає мені енергії для подолання наступного виклику.
            </p>
            <p class="text-h5 text-grey-lighten-5 mb-2">
              Моя мета - не лише виконати завдання, а й робити це з натхненям та відданістю. Я вірю,
              що тільки виконуючи важку та цікаву роботу, ми можемо досягти великих результатів і
              розвиватися як професіонали та особистості. Тож, я готовий взяти на себе виклики та
              подорожувати шляхом самовдосконалення.
            </p>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="10" xl="6">
        <v-sheet class="pb-5" color="transparent">
          <TimeLine :time-line="timeLine" />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss"></style>
