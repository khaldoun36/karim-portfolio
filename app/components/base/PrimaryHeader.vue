<template>
  <div
    class="full-width content-grid header-container fixed top-0 right-0 left-0 z-10 py-3"
    :class="{ active: isMenuBlurred }"
  >
    <header class="flex items-center justify-between">
      <NuxtLink to="/" aria-label="Home Button">
        <NuxtImg
          src="/logo.jpeg"
          sizes="48px"
          class="aspect-square h-auto w-full max-w-12 rounded-full object-cover"
        />
      </NuxtLink>
      <nav class="flex items-center gap-8" :class="{ active: isMenuOpen }">
        <NuxtLink
          v-for="item in navLinks"
          :key="item.path"
          :to="item.path"
          class="hover:text-primary-500 active:text-primary-600 group flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-600 transition-colors"
          :class="useRoute().path === item.path ? 'text-primary-600' : ''"
        >
          {{ item.name }}
          <div
            v-show="useRoute().path === item.path"
            class="bg-primary-600 aspect-square size-1.5 rounded-full"
          />
        </NuxtLink>
      </nav>
      <button
        class="menu-container z-10"
        :class="{ active: isMenuOpen }"
        @click="isMenuOpen = !isMenuOpen"
      >
        <div class="line line-1" />
        <div class="line line-2" />
      </button>
    </header>
  </div>
  <div
    class="pointer-events-none absolute top-0 right-0 left-0 h-18 w-full bg-transparent"
    ref="headerTracker"
  />
</template>

<script setup>
const headerTracker = ref(null);
const isMenuBlurred = ref(false);
const isMenuOpen = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    isMenuBlurred.value = !entries[0].isIntersecting;
  });

  if (headerTracker.value) {
    observer.observe(headerTracker.value);
  }

  // Cleanup observer on unmount
  onUnmounted(() => {
    observer.disconnect();
  });
});
const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  // {
  //   name: "Writings",
  //   path: "/#writings",
  // },
  // {
  //   name: "Services",
  //   path: "/#services",
  // },
  // {
  //   name: "Projects",
  //   path: "/#projects",
  // },
  // {
  //   name: "Certificates",
  //   path: "/#certificates",
  // },
  {
    name: "About me",
    path: "/about-me",
  },
];
</script>

<style scoped>
.header-container::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  backdrop-filter: blur(12px);
  background: color-mix(in oklab, var(--color-gray-100), transparent 60%);
  /* https://smoothshadows.com/#djEsMSw1LDAuMDgsMjQsMiwwLCMwMzA3MTIsI2YzZjRmNiwjZmZmZmZmLDI%3D */
  box-shadow:
    0px 0px 1px rgba(3, 7, 18, 0.02),
    0px 0px 4px rgba(3, 7, 18, 0.03),
    0px 1px 9px rgba(3, 7, 18, 0.05),
    0px 1px 15px rgba(3, 7, 18, 0.06),
    0px 2px 24px rgba(3, 7, 18, 0.06);

  opacity: 0;
  transition: opacity 100ms ease-in-out;
}

.header-container.active::after {
  opacity: 1;
}
.menu-container {
  display: none;
}

@media screen and (width <= 50rem) {
  nav {
    position: fixed;
    inset: 0;
    height: 100dvh;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    opacity: 0;
    visibility: hidden;
    backdrop-filter: blur(12px);
    background: color-mix(in oklab, var(--color-gray-100), transparent 60%);
    transition:
      opacity 250ms ease,
      visibility 0s linear 250ms;
  }

  nav.active {
    opacity: 1;
    visibility: visible;
    transition: opacity 250ms ease;
  }

  /* Add this for the menu items */
  nav a {
    opacity: 0;
    transform: translateX(-20px);
  }

  nav.active a {
    opacity: 1;
    transform: translateX(0);
    transition: all 400ms ease;
  }

  /* Add staggered delay for each item */
  nav.active a:nth-child(1) {
    transition-delay: 100ms;
  }
  nav.active a:nth-child(2) {
    transition-delay: 200ms;
  }
  nav.active a:nth-child(3) {
    transition-delay: 300ms;
  }
  nav.active a:nth-child(4) {
    transition-delay: 400ms;
  }
  nav.active a:nth-child(5) {
    transition-delay: 500ms;
  }
  nav.active a:nth-child(6) {
    transition-delay: 600ms;
  }
  nav a {
    font-size: var(--text-2xl);
    line-height: var(--text-2xl--line-height);
    font-weight: 400;
  }

  .menu-container {
    height: 2.5rem;
    width: 2.5rem;
    cursor: pointer;
    padding: 4px;
    background-color: transparent;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px; /* Replace manual transforms with gap */
  }

  .menu-container .line {
    height: 4px;
    width: 100%;
    background-color: var(--color-gray-800);
    border-radius: 0.5rem;
    transition: transform 250ms ease; /* Add smooth transition */
  }

  /* Combined transforms for active state */
  .menu-container.active .line-1 {
    transform: translateY(6.5px) rotate(45deg);
  }

  .menu-container.active .line-2 {
    transform: translateY(-6.5px) rotate(-45deg);
  }
}
</style>
