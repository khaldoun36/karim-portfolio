<template>
  <div
    class="grid gap-8 pt-[9.5rem] md:pt-[10.5rem] lg:grid-cols-[1.5fr_1fr] lg:gap-16 xl:pt-[12.5rem]"
  >
    <!-- Main content section -->
    <main class="mt-10 md:mt-12 lg:mt-0">
      <!-- Title -->
      <div class="text-4xl text-balance md:text-6xl xl:text-7xl">
        <PrismicRichText :field="slice.primary.primary_title" />
      </div>

      <!-- Subtitle and mobile image -->
      <div class="prose prose-p:text-gray-600/75 mt-6">
        <PrismicRichText :field="slice.primary.primary_subtitle" />
        <NuxtImg
          v-if="hasMainImage"
          :src="mainImage.url"
          :alt="mainImage.alt"
          :width="mainImage.dimensions?.width"
          :height="mainImage.dimensions?.height"
          class="bg-primary-200 border-color aspect-square h-auto w-full max-w-[600px] rounded-lg border object-cover lg:hidden lg:rotate-1"
        />
      </div>

      <!-- Body content -->
      <div
        v-if="slice.primary.body"
        class="prose prose-p:text-gray-600/75 mt-10 md:mt-12 xl:mt-16"
      >
        <PrismicRichText :field="slice.primary.body" />
      </div>
    </main>

    <!-- Sidebar with image and social links -->
    <aside v-if="hasMainImage">
      <!-- Desktop image -->
      <NuxtImg
        :src="mainImage.url"
        :alt="mainImage.alt"
        :width="mainImage.dimensions?.width"
        :height="mainImage.dimensions?.height"
        class="bg-primary-200 border-color hidden aspect-square h-auto w-full max-w-[600px] rounded-lg border object-cover lg:block lg:rotate-1"
      />

      <!-- Social links -->
      <div v-if="socialLinks.length" class="mt-10 md:mt-12 xl:mt-16">
        <NuxtLink
          v-for="(item, index) in socialLinks"
          :id="isEmail(item.link) ? 'email_cta' : 'linkedin_cta'"
          :key="index"
          :to="isEmail(item.link) ? `mailto:${item.link}` : item.link"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-primary-600 flex items-center gap-3 text-base font-medium text-gray-800/95 transition-colors duration-200"
          :class="{ 'mt-8': index > 0 }"
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

// Computed properties for cleaner template
const mainImage = computed(() => props.slice.primary.main_image || {});
const hasMainImage = computed(() => !!props.slice.primary.main_image);
const socialLinks = computed(() => props.slice.primary.social_links || []);

// Helper function to check if link is an email
const isEmail = (link?: string) => link?.includes("@") ?? false;

// SEO metadata
useSeoMeta({
  title: `${props.slice.primary.primary_title[0]?.text}`,
  ogTitle: `${props.slice.primary.primary_title[0]?.text}`,
  description: `${props.slice.primary.primary_subtitle[0]?.text}`,
  ogDescription: `${props.slice.primary.primary_subtitle[0]?.text}`,
  ogImage: mainImage.value?.url,
});
</script>
