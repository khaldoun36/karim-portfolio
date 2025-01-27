<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const { data: page, status } = await useAsyncData("index", () =>
  prismic.client.getByUID("page", "home"),
);

if (status.value === "success") {
  useHead({
    title: prismic.asText(page.value?.data.title),
  });
}
</script>

<template>
  <SliceZone
    v-if="status === 'success'"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>
