<template>
  <div v-if="projects" class="mt-10 grid md:mt-12 xl:mt-16">
    <NuxtLink
      v-for="project in projects.length <= 3 ? projects : projects.slice(0, 3)"
      :key="project.id"
      :to="`/projects/${project.uid}`"
      class="@container block py-4 last-of-type:border-0 md:border-b md:border-gray-600/80 md:py-6 xl:py-8"
    >
      <article
        class="group grid gap-8 @2xl:grid-cols-[1fr_1.2fr] @2xl:place-items-center @2xl:gap-16 @5xl:grid-cols-[1.2fr_1fr]"
      >
        <div>
          <p
            class="max-w-fit rounded-full border border-gray-600 px-4 py-2 text-gray-100 group-hover:brightness-85"
          >
            {{ project.data.category }}
          </p>
          <div class="mt-8 group-hover:brightness-85">
            <h3 class="text-2xl text-gray-100 @5xl:text-3xl">
              {{ project.data.title }}
            </h3>
            <p class="mt-4 text-base text-gray-400">
              {{ project.data.subtitle }}
            </p>
            <button
              class="text-primary-500 group-hover:text-primary-600 relative mt-6 flex max-w-fit cursor-pointer items-center gap-2 text-base font-medium transition-colors"
            >
              Read more
              <Icon
                name="heroicons-solid:chevron-right"
                size="20"
                class="mt-0.25"
              />
            </button>
          </div>
        </div>
        <div>
          <NuxtImg
            :src="String(project.data.main_image.url)"
            :alt="String(project.data.main_image.alt)"
            :width="project.data.main_image.dimensions?.width"
            :height="project.data.main_image.dimensions?.height"
            sizes="380px xl:480px"
            class="aspect-[3/3] h-auto w-full rounded-lg object-cover"
            loading="lazy"
          />
        </div>
      </article>
    </NuxtLink>
  </div>
</template>

<script setup>
const prismic = usePrismic();

// retrieve a list of the projects
const { data: projects } = await useAsyncData(() =>
  prismic.client.getAllByType("projectpage", {
    orderings: [
      { field: "document.first_publication_date", direction: "desc" },
    ],
  }),
);
</script>

<style scoped></style>
