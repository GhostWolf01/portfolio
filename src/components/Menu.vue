<script setup lang="ts">
import { ref } from "vue";
import type { IMenuItem } from "@/types/types";
import colors from "../utils/colors";
import { routerPaths } from "@/router/paths";
import { useResize } from "@/composables/useResize";

const activeMenu = ref(false);

const menuItems = ref<IMenuItem[]>([
  {
    icon: "fas fa-solid fa-house",
    title: "Home",
    link: routerPaths.home,
    value: "home",
  },
  {
    icon: "fas fa-solid fa-user",
    title: "About",
    link: routerPaths.about,
    value: "about",
  },
  {
    icon: "fas fa-solid fa-briefcase",
    title: "Projects",
    link: routerPaths.projects,
    value: "projects",
  },
  {
    icon: "fas fa-solid fa-image-portrait",
    title: "Contacts",
    link: routerPaths.contacts,
    value: "contacts",
  },
]);

const showBtnScrollTop = ref(false);

function onScroll(event: WheelEvent) {
  const target = event.currentTarget as Window;
  if (target.scrollY > 100) showBtnScrollTop.value = true;
  else showBtnScrollTop.value = false;
}

function scrollTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

const isMobile = useResize();
function onResize() {
  isMobile.value = useResize().value;
}
</script>

<template>
  <nav
    class="navigation rounded-pill d-flex align-center justify-end justify-md-start"
    v-resize="onResize"
  >
    <v-list
      class="navigation__list d-flex flex-column align-end align-md-start"
      bg-color="transparent"
      :lines="false"
      density="compact"
      width="max-content"
      nav
    >
      <v-btn
        :class="{ 'mb-0': !activeMenu }"
        :color="colors.grey.darken6"
        @click="() => (activeMenu = !activeMenu)"
        :icon="activeMenu ? 'fa-solid fa-ellipsis-vertical' : '$menu'"
      >
      </v-btn>
      <div
        class="navigation__links d-flex flex-column align-end align-md-start"
        :class="{
          'navigation__links--hidden': !activeMenu,
          'navigation__links--show': activeMenu,
        }"
      >
        <v-btn
          class="d-flex justify-end justify-md-start align-center navigation__btn"
          :class="{ 'navigation__btn--hidden': !activeMenu }"
          v-for="item in menuItems"
          :key="item.value"
          :to="item.link"
          :href="item.link"
          :value="item.value"
          :color="colors.grey.darken6"
          height="48"
          width="max-content"
          rounded="pill"
          min-width="48"
        >
          <template #prepend>
            <v-icon v-if="!isMobile" :icon="item.icon" size="large"></v-icon>
          </template>
          {{ item.title }}
          <template #append>
            <v-icon v-if="isMobile" :icon="item.icon" size="large"></v-icon>
          </template>
        </v-btn>
      </div>
      <v-btn
        v-show="showBtnScrollTop"
        v-scroll="onScroll"
        :color="colors.grey.darken6"
        @click="scrollTop"
        icon="fa-solid fa-chevron-up"
      ></v-btn>
    </v-list>
  </nav>
</template>

<style lang="scss">
@use "../assets/styles/variables.scss";
.navigation {
  overflow: visible;
  z-index: 999;
  position: fixed;
  top: 20px;
  right: 4px;
  width: 48px + 16px;
  background-color: variables.$grey-darken-6;
  @media (min-width: 960px) {
    top: 100px;
    left: 20px;
  }
  &__list {
    overflow: visible !important;
  }

  &__links {
    max-height: 250px;
    margin: 4px 0;
    overflow: hidden;
    & > :nth-child(n) {
      margin-bottom: 4px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    &--show {
      @media (max-width: 959px) {
        animation: 0.28s cubic-bezier(0.4, 0, 0.2, 1) 0s normal forwards running showLinks;
        & > .navigation__btn {
          transition-delay: 0.21s !important;
        }
      }
    }
    &--hidden {
      @media (max-width: 959px) {
        animation: 0.28s cubic-bezier(0.4, 0, 0.2, 1) 0.22s normal forwards running hiddenLinks;
      }
    }
    @keyframes showLinks {
      0% {
        max-height: 0;
        margin: 4px 0;
      }
      100% {
        max-height: 250px;
      }
    }
    @keyframes hiddenLinks {
      0% {
        max-height: 250px;
        margin: 4px 0;
      }
      99% {
        margin: 4px 0;
      }
      100% {
        max-height: 0;
        margin: 4px 0 0 0;
      }
    }
  }
  &__btn {
    max-width: 100% !important;
    transition-property: box-shadow, transform, opacity, background, max-width !important;
    // transition:  0.5s ease-in-out ;
    & > .v-btn__content {
      overflow: hidden;
      justify-content: end;
    }
    @media (min-width: 960px) {
      & > .v-btn__content {
        justify-content: start;
      }
    }
    & > .v-btn__prepend > .v-icon {
      height: 24px;
      width: 24px;
    }
    & > .v-btn__append > .v-icon {
      height: 24px;
      width: 24px;
    }
    &--hidden {
      max-width: 48px !important;
    }
  }
}
</style>
