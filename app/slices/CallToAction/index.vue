<template>
  <section
    class="border-color relative grid aspect-[5/4] h-auto max-h-[400px] w-full max-w-full place-content-center overflow-clip rounded-lg border p-8"
  >
    <NuxtImg
      src="images/heroImage.avif"
      alt="background image"
      loading="lazy"
      width="1440"
      height="800"
      class="border-color absolute inset-0 -z-1 min-h-full min-w-full border-b opacity-60"
    />
    <span class="block text-3xl md:text-center md:text-5xl xl:text-6xl">
      <PrismicRichText :field="slice.primary.title" />
    </span>
    <Button
      v-for="item in slice.primary.link"
      id="email_cta"
      :key="item.link_field"
      :href="`mailto:${item.link_field}`"
      class="mt-8 max-w-min md:mx-auto"
      >{{ item.text }}</Button
    >
  </section>
</template>

<script setup lang="ts">
import type { Content } from "@prismicio/client";
import Button from "~/components/base/Button.vue";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.CallToActionSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<style scoped></style>
