<template>
  <div class="mx-auto max-w-[80ch]">
    <main class="pt-[9.5rem] md:pt-[10.5rem] xl:pt-[12.5rem]">
      <time class="text-base text-pretty opacity-70">
        {{
          new Date(page?.last_publication_date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })
        }}
      </time>
      <h1 class="text-4xl md:text-6xl xl:text-7xl">
        {{ page?.data.title }}
      </h1>
      <p class="mt-6 max-w-2xl text-lg text-pretty">
        {{ page?.data.subtitle }}
      </p>
    </main>

    <div class="mt-10 md:mt-12 xl:mt-16">
      <SliceZone :slices="page?.data.slices ?? []" :components="components" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const route = useRoute();
const { data: page } = await useAsyncData(
  `[projectpage-uid-${route.params.uid}]`,
  () => prismic.client.getByUID("projectpage", route.params.uid as string),
);

// useSeoMeta({
//   title: page.value?.data.meta_title,
//   ogTitle: page.value?.data.meta_title,
//   description: page.value?.data.meta_description,
//   ogDescription: page.value?.data.meta_description,
//   ogImage: computed(() => prismic.asImageSrc(page.value?.data.meta_image)),
// });
</script>
