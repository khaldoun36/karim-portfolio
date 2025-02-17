<template>
  <div class="content-grid grid-rows-[auto_1fr]">
    <PrimaryHeader />
    <NuxtPage />
  </div>
</template>

<script setup>
import "@/assets/css/theme.css";
import "@/assets/css/main.css";

import PrimaryHeader from "./components/base/PrimaryHeader.vue";
</script>

<style>
html,
body,
#__nuxt {
  scroll-behavior: smooth;
}
body {
  background-color: var(--color-gray-100);
}
</style>
