import { repositoryName, apiEndpoint } from "./slicemachine.config.json";
import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    componentIslands: true,
  },
  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      title: "Prismic + Nuxt Minimal Starter",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  modules: [
    "@nuxt/eslint",
    "@nuxtjs/prismic",
    "@nuxt/icon",
    "@vueuse/nuxt",
    "@nuxt/image",
  ],

  prismic: {
    endpoint: apiEndpoint || repositoryName,
    // preview: "/api/preview",
    preview: false,
    toolbar: false,
    clientConfig: {
      routes: [
        {
          type: "page",
          path: "/:uid",
        },
        {
          type: "page",
          uid: "home",
          path: "/",
        },
      ],
    },
  },

  image: {
    prismic: {
      format: ["avif", "webp"],
    },
  },

  compatibilityDate: "2025-01-06",
});
