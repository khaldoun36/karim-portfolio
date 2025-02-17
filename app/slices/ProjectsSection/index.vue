<template>
  <Container classList="full-width content-grid bg-gray-800" id="projects">
    <h2 class="text-4xl text-gray-100 md:text-6xl xl:text-7xl">
      {{ slice.primary.title }}
    </h2>
    <p class="mt-6 max-w-2xl text-lg text-pretty text-gray-400">
      {{ slice.primary.body }}
    </p>
    <NuxtIsland name="Projects" />
  </Container>
</template>

<script setup lang="ts">
import Container from "~/components/base/Container.vue";
import type { Content } from "@prismicio/client";
import { NuxtIsland } from "#components";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ProjectsSectionSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>
