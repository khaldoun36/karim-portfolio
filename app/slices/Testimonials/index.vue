<template>
  <Container classList="full-width content-grid">
    <h2 class="mx-auto text-center text-4xl md:text-6xl xl:text-7xl">
      {{ slice.primary.title }}
    </h2>
    <p class="mx-auto mt-6 max-w-2xl text-center text-lg text-pretty">
      {{ slice.primary.body }}
    </p>
    <div
      class="full-width marquee fade-out-transparent mt-10 max-w-screen overflow-clip md:mt-12 xl:mt-16"
    >
      <div v-if="slice.primary.testimonial" class="marquee-track">
        <article
          v-for="(item, index) in [
            ...slice.primary.testimonial,
            ...slice.primary.testimonial,
          ]"
          :key="String(item.author)"
          class="border-color marquee-item mx-2 flex h-auto w-[calc(100vw-1rem)] max-w-[calc(100vw-1rem)] flex-col justify-between rounded-lg border bg-white p-8 md:max-w-[80ch] md:min-w-[80ch]"
          :aria-hidden="index >= slice.primary.testimonial.length"
        >
          <p class="text-base">
            {{ item.testimonial?.slice(0, 500) }}
          </p>
          <div class="mt-8 flex items-center justify-between">
            <div class="flex flex-col items-start gap-2">
              <p class="text-sm font-semibold text-gray-800">
                {{ item.author }}
              </p>

              <p class="text-sm">
                {{ item.position }} -
                <span class="font-semibold text-gray-800">{{
                  item.company
                }}</span>
              </p>
            </div>
            <NuxtImg
              v-if="item.profile_picture.url"
              :src="String(item.profile_picture.url)"
              :alt="String(item.profile_picture.alt)"
              :width="item.profile_picture.dimensions?.width"
              :height="item.profile_picture.dimensions?.height"
              sizes="48px"
              class="border-color aspect-square h-auto w-full max-w-12 overflow-clip rounded-full border object-cover"
            />
            <div
              v-else
              class="border-color aspect-square h-auto w-full max-w-12 overflow-clip rounded-full border bg-gray-200"
            />
          </div>
        </article>
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
  getSliceComponentProps<Content.TestimonialsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<style scoped>
.marquee-track {
  display: flex;
  width: max-content;
  overflow-x: scroll;
  animation: marquee-animation 32s linear infinite;
}

@media (hover: hover) {
  .marquee-track:hover {
    animation-play-state: paused;
  }
}
@keyframes marquee-animation {
  to {
    transform: translateX(-50%);
  }
}

.marquee-track::-webkit-scrollbar {
  display: none;
}

.fade-out-transparent {
  --edge-width: 1.5rem;
  mask-image: linear-gradient(
    to right,
    transparent,
    black var(--edge-width),
    black calc(100% - var(--edge-width)),
    transparent
  );
}

@media screen and (width >= 48rem) {
  .fade-out-transparent {
    --edge-width: 5rem;
  }
}
</style>
