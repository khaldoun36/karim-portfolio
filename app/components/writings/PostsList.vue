<template>
  <ul
    v-if="postsList"
    class="relative flex flex-col before:absolute before:top-0 before:bottom-0 before:left-0 before:h-[calc(100%-4rem)] before:w-px before:bg-[var(--color-color)] before:opacity-0 before:content-[''] md:before:opacity-100"
  >
    <li
      v-for="post in postsList"
      :key="post.id"
      class="mb-10 md:mb-12 xl:mb-16"
    >
      <NuxtLink :to="`/writings/${post.uid}`" class="@container block">
        <article
          class="flex max-w-3xl flex-col gap-4 rounded-r-lg hover:bg-gray-200/50 @2xl:flex-row @2xl:items-baseline @2xl:gap-16 @2xl:p-8"
        >
          <time
            class="text-base text-pretty opacity-70"
            style="white-space: nowrap"
          >
            {{
              new Date(post.last_publication_date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })
            }}
          </time>

          <div class="space-y-3">
            <h2 class="text-2xl md:text-4xl xl:text-5xl">
              {{ post.data.primary_title }}
            </h2>
            <p class="text-base text-pretty">
              {{ post.data.primary_subtitle }}
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
        </article>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const prismic = usePrismic();

// retrieve a list of the projects
const { data: postsList } = await useAsyncData(() =>
  prismic.client.getAllByType("blog_post", {
    orderings: [
      { field: "document.first_publication_date", direction: "desc" },
    ],
  }),
);
</script>

<style scoped></style>
