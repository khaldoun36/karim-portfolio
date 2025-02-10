<template>
  <Container classList="full-width">
    <h2 class="mx-auto text-center text-4xl md:text-6xl xl:text-7xl">
      {{ slice.primary.title }}
    </h2>
    <p class="mx-auto mt-6 max-w-2xl text-center text-lg text-pretty">
      {{ slice.primary.body }}
    </p>
    <div id="testimonials-container" class="mt-10 md:mt-12 xl:mt-16">
      <div v-if="slice.primary.testimonial" class="flex items-start gap-8">
        <article
          v-for="item in slice.primary.testimonial"
          :key="item.author"
          class="border-color max-w-prose min-w-[65ch] rounded-lg border bg-white p-8"
        >
          <p class="text-base">{{ item.testimonial?.slice(0, 500) }}</p>
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
              :src="String(item.profile_picture.url)"
              :alt="String(item.profile_picture.alt)"
              :width="item.profile_picture.dimensions?.width"
              :height="item.profile_picture.dimensions?.height"
              sizes="48px"
              class="border-color aspect-square h-auto w-full max-w-12 rounded-full border object-cover"
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
#testimonials-container {
  overflow-x: auto;
  max-width: 100vw;
}
/* #testimonials-container::-webkit-scrollbar {
  display: none;
} */

#testimonials-container > div {
  transform: translateX(1rem);
}

@media screen and (width >= 48rem) {
  #testimonials-container > div {
    transform: translateX(2rem);
  }
}

@media screen and (width >= 64rem) {
  #testimonials-container > div {
    transform: translateX(3rem);
  }
}

@media screen and (width >= 80rem) {
  #testimonials-container > div {
    transform: translateX(calc((100vw - (var(--breakpoint-xl) - 4rem)) / 2));
  }
}

@media screen and (width >= 96rem) {
  #testimonials-container > div {
    transform: translateX(calc((100vw - (var(--breakpoint-2xl) - 4rem)) / 2));
  }
}
</style>
