<template>
  <component
    :is="component"
    :to="href"
    :class="[
      'button inline-flex min-w-fit cursor-pointer items-center justify-center gap-2 rounded-lg border-0 px-5 py-2.5 text-center text-sm font-medium text-gray-900',
      `button--${variant}`,
    ]"
  >
    <slot />
  </component>
</template>

<script setup>
const props = defineProps({
  href: String,
  variant: {
    type: String,
    default: "primary",
    validator: (value) => ["primary", "secondary"].includes(value),
  },
});

const component = computed(() => {
  if (props.href) return resolveComponent("NuxtLink");
  return "button";
});
</script>

<style scoped>
/* ------------------- */
/* Base Button Styles  */
/* ------------------- */
.button {
  /* Animation */
  transition:
    filter 150ms ease-in-out,
    transform 150ms ease-in-out;
}

/* ------------------- */
/* Button Variants     */
/* ------------------- */

/* Primary Button */
.button--primary {
  /* Colors */
  color: var(--color-gray-100);
  background: linear-gradient(
    180deg,
    var(--color-primary-500) 0%,
    var(--color-primary-600) 100%
  );

  /* Shadows */
  box-shadow:
    rgba(255, 255, 255, 0.2) 0 1px 1px 0 inset,
    0 1px 3px 0 color-mix(in oklab, var(--color-primary-800), transparent 90%),
    0 1px 2px 0 color-mix(in oklab, var(--color-primary-800), transparent 94%),
    color-mix(in oklab, var(--color-primary-800), transparent 10%) 0px 0px 0px
      1px;
}

/* Secondary Button */
.button--secondary {
  /* Colors */
  color: var(--color-gray-800);
  background: linear-gradient(
    180deg,
    var(--color-gray-50) 0%,
    var(--color-gray-100) 100%
  );

  /* Shadows */
  box-shadow:
    rgba(255, 255, 255, 0.2) 0 1px 1px 0 inset,
    0 1px 3px 0 color-mix(in oklab, var(--color-gray-300), transparent 90%),
    0 1px 2px 0 color-mix(in oklab, var(--color-gray-300), transparent 94%),
    color-mix(in oklab, var(--color-gray-300), transparent 10%) 0px 0px 0px 1px;
}

/* ------------------- */
/* Interactive States  */
/* ------------------- */

/* Hover - Only on devices that support hover */
@media (hover: hover) {
  .button:hover {
    filter: brightness(0.9);
  }
}

/* Active State */
.button:active {
  transform: scale(0.95);
}
</style>
