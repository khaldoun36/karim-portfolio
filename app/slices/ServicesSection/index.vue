<template>
  <Container id="services">
    <h2 class="text-4xl md:text-6xl xl:text-7xl">
      {{ slice.primary.title }}
    </h2>
    <p class="mt-6 max-w-2xl text-lg text-pretty">
      {{ slice.primary.body }}
    </p>

    <div class="@container mt-10 md:mt-12 xl:mt-16">
      <div
        v-if="slice.primary.service"
        class="grid gap-8 @2xl:grid-cols-2 @5xl:grid-cols-3"
      >
        <NuxtLink
          v-for="item in slice.primary.service"
          :key="item.title!"
          to="mailto:karim@kimzly.com"
          target="_blank"
          rel="noopener noreferrer"
          class="group card border-color flex flex-col justify-between rounded-lg border bg-white p-8 pt-16 transition hover:border-gray-300 hover:shadow-sm"
        >
          <div>
            <Icon :name="item.icon!" size="32" class="text-gray-800/95" />
            <h3 class="mt-6 text-lg font-semibold">
              {{ item.title }}
            </h3>
            <p class="mt-4 text-base text-pretty">
              {{ item.description }}
            </p>
          </div>

          <button
            class="text-primary-500 group-hover:text-primary-600 mt-6 flex items-center gap-2 text-base font-medium transition"
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

defineProps(
  getSliceComponentProps<Content.ServicesSectionSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>
