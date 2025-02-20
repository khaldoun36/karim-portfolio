<script setup lang="ts">
import type { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.RichTextSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <section
    class="prose prose-p:text-gray-600/75 max-w-[80ch] pb-10 md:pb-12 xl:pb-16"
  >
    <PrismicRichText :field="slice.primary.project_body" />
  </section>
</template>
