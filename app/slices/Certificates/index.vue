<template>
  <Container
    classList="pb-0 md:pb-0 xl:pb-0 full-width content-grid"
    is="section"
  >
    <h2 class="text-center text-base">
      {{ slice.primary.section_title }}
    </h2>
    <div
      class="full-width marquee fade-out-transparent flex max-w-screen gap-8"
    >
      <div class="marquee-track pt-10 md:pt-12 xl:pt-16">
        <div
          v-for="(item, index) in [
            ...slice.primary.certificates,
            ...slice.primary.certificates,
          ]"
          :key="item.title"
          class="marquee-item flex items-center gap-2"
          :aria-hidden="index >= slice.primary.certificates.length"
        >
          <div
            class="border-color aspect-square h-auto w-full max-w-16 min-w-16 overflow-clip rounded-full border p-0.5"
          >
            <NuxtImg
              :src="item.logo.url"
              :alt="item.logo.alt"
              :width="item.logo.dimensions?.width"
              :height="item.logo.dimensions?.height"
              class="aspect-square h-auto w-full rounded-full object-cover"
            />
          </div>
          <span class="whitespace-nowrap">{{ item.title }}</span>
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import type { Content } from "@prismicio/client";
import Container from "~/components/base/Container.vue";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.CertificatesSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<style scoped>
.marquee {
  overflow: hidden; /* Make sure the container hides overflow */
  position: relative; /* For positioning context */
  width: 100%;
}

.marquee-track {
  display: flex;
  gap: 2rem;
  width: max-content;
  animation: marquee-animation 32s linear infinite;
}

@media (hover: hover) {
  .marquee-track:hover {
    animation-play-state: paused;
  }
}

@keyframes marquee-animation {
  0% {
    transform: translateX(0);
  }
  100% {
    /* This should be the full width of your first set of items */
    transform: translateX(calc(-50%));
  }
}
.marquee-track::-webkit-scrollbar {
  display: none;
}

.fade-out-transparent {
  position: relative;
  --edge-width: 1.5rem;
}

.fade-out-transparent::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  backdrop-filter: blur(4px);
  mask-image: linear-gradient(
    to right,
    black,
    transparent var(--edge-width),
    transparent calc(100% - var(--edge-width)),
    black
  );
}

@media screen and (width >= 48rem) {
  .fade-out-transparent {
    --edge-width: 5rem;
  }
}
</style>
