<template>
  <!-- pb-20 md:pb-24 xl:pb-32 pt-40 md:pt-48 xl:pt-32 -->
  <main
    class="hero-section full-width content-grid border-color relative grid h-[calc(100vh-32px)] place-content-center border-b"
  >
    <div class="mx-auto">
      <h1
        class="mx-auto max-w-4xl text-center text-4xl md:text-6xl xl:text-7xl"
      >
        {{ slice.primary.title }}
      </h1>
      <p class="mx-auto mt-6 max-w-2xl text-center text-lg text-pretty">
        {{ slice.primary.body }}
      </p>
    </div>
    <div
      class="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8"
    >
      <Button
        href="https://www.theverge.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="button !min-w-full sm:!min-w-fit"
        variant="primary"
      >
        Contact me
        <Icon name="heroicons-outline:mail" size="1.25rem" />
      </Button>
      <Button
        href="https://www.theverge.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="button !min-w-full sm:!min-w-fit"
        variant="secondary"
      >
        Learn more
        <Icon
          name="heroicons-outline:arrow-sm-right"
          size="1.25rem"
          class="rotate-45"
        />
      </Button>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { Content } from "@prismicio/client";
import Button from "@/components/base/Button.vue";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.HeroSectionSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<style>
.hero-section::after {
  content: "";
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: url("@/assets/images/hero-image-desktop.avif") no-repeat center
    center / cover;
  opacity: 0.6;
}
</style>
