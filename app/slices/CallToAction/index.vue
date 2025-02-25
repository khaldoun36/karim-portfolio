<template>
  <section
    class="border-color relative mt-20 grid aspect-[5/4] h-auto max-h-[400px] w-full place-content-center rounded-lg border p-8 md:mt-24 xl:mt-32"
  >
    <span class="block text-2xl md:text-center md:text-4xl xl:text-5xl">
      <PrismicRichText :field="slice.primary.title" />
    </span>
    <Button
      v-for="item in slice.primary.link"
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

<style scoped>
section::after {
  content: "";
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: url("@/assets/images/heroImage.avif") no-repeat center center /
    cover;
  opacity: 0.55;
  border-radius: var(--radius-lg);
}
</style>
