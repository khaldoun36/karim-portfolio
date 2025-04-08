<template>
  <main
    class="hero-section full-width content-grid grid h-[calc(100vh-32px)] place-content-center"
  >
    <NuxtImg
      src="images/heroImage.avif"
      alt="background image"
      width="1440"
      height="800"
      sizes="100vw sm:100vw md:100vw"
      class="full-width border-color absolute top-0 right-0 left-0 -z-1 h-[calc(100vh-32px)] min-w-full border-b opacity-60"
    />
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
        id="email_cta"
        href="mailto:karim@kimzly.com"
        target="_blank"
        rel="noopener noreferrer"
        class="button !min-w-full sm:!min-w-fit"
        variant="primary"
      >
        Contact me
        <Icon name="heroicons-outline:mail" size="1.25rem" />
      </Button>
      <Button
        href="/#services"
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
