<template>
  <div
    class="full-width content-grid header-container fixed top-0 right-0 left-0 z-10 pt-4 pb-20"
  >
    <header class="flex items-center justify-between">
      <NuxtLink to="/" aria-label="Home Button">
        <NuxtImg
          src="/logo.jpeg"
          sizes="48px"
          class="aspect-square h-auto w-full max-w-12 rounded-full object-cover"
        />
      </NuxtLink>
      <nav class="flex items-center gap-8">
        <NuxtLink
          v-for="item in navLinks"
          :key="item.path"
          :to="item.path"
          class="hover:text-primary-500 active:text-primary-600 group flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-600 transition-colors"
          :class="useRoute().path === item.path ? 'text-primary-600' : ''"
        >
          {{ item.name }}
          <div
            v-show="useRoute().path === item.path"
            class="bg-primary-600 aspect-square size-1.5 rounded-full"
          />
        </NuxtLink>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { NuxtLink } from "#components";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Writings",
    path: "/writings",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Certificates",
    path: "/certificates",
  },
  {
    name: "About me",
    path: "/about-me",
  },
];
</script>

<style scoped>
.header-container::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  backdrop-filter: blur(32px);
  /* background-color: red; */
  mask-image: linear-gradient(to bottom, black 50%, transparent);
}
</style>
