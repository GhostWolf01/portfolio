<script setup lang="ts">
import { definePageMeta } from "#imports";
import { links } from "@/data";
import colors from "@/utils/colors";

definePageMeta({
  title: "Contacts",
});
</script>

<template>
  <v-container class="contacts py-15">
    <v-row justify="center" align-content="center" v-for="item in links" :key="item.key">
      <v-col class="d-flex justify-center" cols="12" sm="6">
        <v-btn
          link
          :href="item.link"
          :color="colors.grey.darken6"
          class="text-sm-h5 text-body-1"
          rounded="pill"
          size="large"
        >
          <template #prepend>
            <v-icon :color="colors.lightGreen.accent5" :icon="item.icon" size="large"></v-icon>
          </template>
          {{ item.fullText }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss"></style>
