<template>
  <div
    class="grid gap-8 pt-[9.5rem] md:pt-[10.5rem] lg:grid-cols-[1.5fr_1fr] lg:gap-16 xl:pt-[12.5rem]"
  >
    <main class="mt-10 md:mt-12 lg:mt-0">
      <h1 class="text-4xl md:text-6xl xl:text-7xl">
        {{ slice.primary.primary_title[0]?.text }}
      </h1>
      <div class="prose prose-p:text-gray-600/75 mt-10 md:mt-12 xl:mt-16">
        <PrismicRichText :field="slice.primary.body" />
      </div>
    </main>
    <aside class="row-start-1 lg:row-start-auto">
      <div
        class="bg-primary-200 border-color aspect-square h-auto w-full max-w-[600px] rotate-1 rounded-lg"
      />
      <div class="mt-10 md:mt-12 xl:mt-16">
        <NuxtLink
          v-for="item in slice.primary.social_links"
          :key="item?.link?.url"
          :to="item.link.url"
          class="flex items-center gap-3 text-base font-medium text-gray-800/95 last-of-type:mt-8"
        >
          <Icon :name="item.icon" size="24px" />
          <span>{{ item.link.text }}</span>
        </NuxtLink>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import type { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.AboutMeSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>
