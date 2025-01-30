<template>
  <Container classList="full-width content-grid bg-gray-800">
    <h2 class="text-4xl text-gray-100 md:text-6xl xl:text-7xl">
      {{ slice.primary.title }}
    </h2>
    <p class="mt-6 max-w-2xl text-lg text-pretty text-gray-400">
      {{ slice.primary.body }}
    </p>
    <div
      class="mt-10 grid gap-8 divide-y divide-gray-200 md:mt-12 xl:mt-16"
      v-if="projects"
    >
      <NuxtLink
        v-for="project in projects"
        :key="project.id"
        :to="`/projects/${project.uid}`"
        class="@container block"
      >
        <article
          class="grid gap-8 @2xl:grid-cols-[1fr_1.2fr] @2xl:place-items-center @2xl:gap-16 @5xl:grid-cols-[1.2fr_1fr]"
        >
          <div>
            <p
              class="max-w-fit rounded-full border border-gray-600 px-4 py-2 text-gray-100"
            >
              {{ project.data.category }}
            </p>
            <div class="mt-8">
              <h3 class="text-2xl text-gray-100 @5xl:text-3xl">
                {{ project.data.title }}
              </h3>
              <p class="mt-4 text-base text-gray-400">
                {{ project.data.subtitle }}
              </p>
            </div>
          </div>
          <div>
            <!-- <div
              v-for="item in project.data.important_metrics"
              class="flex max-w-fit flex-col items-center gap-2 rounded-lg bg-gray-100 p-2"
            >
              <p class="text-xl font-semibold text-gray-800">
                +{{ item.percentage }}%
              </p>
              <p class="text-base">{{ item.description }}</p>
            </div> -->
            <NuxtImg
              :src="String(project.data.main_image.url)"
              :alt="String(project.data.main_image.alt)"
              :width="project.data.main_image.dimensions?.width"
              :height="project.data.main_image.dimensions?.height"
              sizes="380px xl:480px"
              class="aspect-[4/3] h-auto w-full rounded-lg object-cover"
              loading="lazy"
              format="avif"
            />
          </div>
        </article>
      </NuxtLink>
    </div>
  </Container>
</template>

<script setup lang="ts">
import Container from "~/components/base/Container.vue";
import type { Content } from "@prismicio/client";

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

const prismic = usePrismic();

// retrieve a list of the projects
const { data: projects } = await useAsyncData(() =>
  prismic.client.getAllByType("projectpage", {
    orderings: [
      { field: "document.first_publication_date", direction: "desc" },
    ],
  }),
);
</script>
