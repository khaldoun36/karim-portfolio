<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const route = useRoute();
const uid = route.params.uid as string;

const { data: page } = await useAsyncData(uid, () =>
  prismic.client.getByUID("projectpage", uid),
);

// useHead({
//   title: prismic.asText(page.value?.data.title),
// });
</script>

<template>
  <div v-if="page">
    {{ page.data }}
    <SliceZone :slices="page?.data.slices ?? []" :components="components" />
  </div>
  <div v-else>
    <h1>404</h1>
  </div>
</template>
