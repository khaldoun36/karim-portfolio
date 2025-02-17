<template>
  <footer
    class="border-color flex flex-col items-start justify-between gap-8 border-t py-5 md:items-center lg:flex-row"
  >
    <nav
      class="flex flex-col items-start justify-start gap-8 md:flex-row md:justify-center"
    >
      <NuxtLink
        v-for="item in navLinks.navLinks"
        :key="item.path"
        :to="item.path"
        class="hover:text-primary-500 active:text-primary-600 gap-2 px-4 py-2.5 ps-0 text-sm font-medium text-gray-600 transition-colors md:ps-4"
      >
        {{ item.name }}
      </NuxtLink>
    </nav>
    <p class="flex items-center gap-[0.25em] text-base">
      <span>&copy;</span>
      <span>{{ new Date().getFullYear() }}</span>
      <span>Karim El Kadri. All rights reserved.</span>
    </p>
  </footer>
</template>

<script setup>
import navLinks from "../base/data/navLinks.json";
</script>

<style scoped></style>
