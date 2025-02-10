<template>
  <Container>
    <h2 class="text-4xl md:text-6xl xl:text-7xl">
      {{ slice.primary.title }}
    </h2>
    <p class="mt-6 max-w-2xl text-lg text-pretty">
      {{ slice.primary.body }}
    </p>
    <div class="@container mt-10 md:mt-12 xl:mt-16">
      <div class="grid gap-8 @2xl:grid-cols-2 @5xl:grid-cols-3">
        <NuxtLink
          v-for="item in slice.primary.service"
          :key="String(item.title)"
          to="https://www.theverge.com/"
          class="group border-color card relative flex min-w-fit flex-col justify-between rounded-lg border bg-white p-8 pt-16 transition-colors hover:border-gray-300 hover:shadow-sm"
        >
          <div>
            <Icon
              :name="String(item.icon)"
              size="32"
              class="text-gray-800/95"
            />
            <h3 class="mt-6 text-lg font-semibold">{{ item.title }}</h3>
            <p class="mt-4 text-base text-pretty">
              {{ item.description }}
            </p>
          </div>
          <button
            class="text-primary-500 group-hover:text-primary-600 relative mt-6 flex max-w-fit cursor-pointer items-center gap-2 text-base font-medium transition-colors"
          >
            Reach out
            <Icon
              name="heroicons-solid:chevron-right"
              size="20"
              class="mt-0.25"
            />
          </button>
        </NuxtLink>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import Container from "~/components/base/Container.vue";
import type { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ServicesSectionSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<style scoped></style>
