<template>
  <div class="content-grid">
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
body {
  background-color: var(--color-gray-100);
}
</style>
