<template>
  <div
    class="grid gap-8 pt-[9.5rem] md:pt-[10.5rem] lg:grid-cols-[1.5fr_1fr] lg:gap-16 xl:pt-[12.5rem]"
  >
    <main class="mt-10 md:mt-12 lg:mt-0">
      <div class="text-4xl text-balance md:text-6xl xl:text-7xl">
        <PrismicRichText :field="slice.primary.primary_title" />
      </div>
      <div class="prose prose-p:text-gray-600/75 mt-10 md:mt-12 xl:mt-16">
        <PrismicRichText
          v-if="slice.primary.body"
          :field="slice.primary.body"
        />
      </div>
    </main>
    <aside v-if="slice.primary.main_image">
      <NuxtImg
        :src="slice.primary.main_image?.url"
        :alt="slice.primary.main_image?.alt"
        :width="slice.primary.main_image.dimensions?.width"
        :height="slice.primary.main_image.dimensions?.height"
        class="bg-primary-200 border-color aspect-square h-auto w-full max-w-[600px] rounded-lg border object-cover lg:rotate-1"
      />
      <div class="mt-10 md:mt-12 xl:mt-16">
        <NuxtLink
          v-for="item in slice.primary.social_links"
          :key="item.link"
          :to="item.link?.includes('@') ? `mailto:${item.link}` : item.link"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-primary-600 flex items-center gap-3 text-base font-medium text-gray-800/95 transition-colors duration-200"
          :class="{ 'mt-8': isLastItem(item) }"
        >
          <Icon v-if="item?.icon" :name="item.icon" class="h-6 w-6" />
          <span>{{ item.link_text }}</span>
        </NuxtLink>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import type { Content } from "@prismicio/client";

interface Props {
  slice: Content.AboutMeSlice;
  index?: number;
  slices?: unknown[];
  context?: unknown;
}

const props = defineProps<Props>();

const isLastItem = (item: any) => {
  const socialLinks = props.slice.primary.social_links || [];
  return socialLinks[socialLinks.length - 1] === item;
};
</script>
