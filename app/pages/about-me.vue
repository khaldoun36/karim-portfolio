<template>
  <SliceZone
    v-if="status === 'success'"
    :slices="page?.data?.slices ?? []"
    :components="components"
  />
</template>

<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const { data: page, status } = await useAsyncData("index", () =>
  prismic.client.getByUID("page", "about-me"),
);

// Move the head management to a watch effect to properly handle async state
watchEffect(() => {
  if (status.value === "success" && page.value?.data?.title) {
    useHead({
      title: prismic.asText(page.value.data.title),
    });
  }
});
</script>
