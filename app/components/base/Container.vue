<template>
  <component :is="tag" :class="['py-20 md:py-24 xl:py-32', classList]">
    <slot />
  </component>
</template>

<script setup lang="ts">
const { tag = "div", classList = "" } = defineProps<{
  tag?: string;
  classList?: string;
}>();
</script>

<style></style>
