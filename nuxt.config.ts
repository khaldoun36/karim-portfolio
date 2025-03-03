import { repositoryName, apiEndpoint } from "./slicemachine.config.json";
import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      title: "Karim",
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
    "@nuxtjs/seo",
  ],

  prismic: {
    endpoint: apiEndpoint || repositoryName,
    // preview: "/api/preview",
    preview: false,
    toolbar: false,
    clientConfig: {
      routes: [
        {
          type: "blog_post",
          path: "/writings/:uid",
        },
        {
          type: "projectpage",
          path: "/projects/:uid",
        },
        {
          type: "page",
          uid: "home",
          path: "/",
        },
        {
          type: "about_me",
          path: "/about-me",
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

  routeRules: {
    // Homepage pre-rendered at build time
    "/": { prerender: true },
    "/blog": { isr: 86400 },
    // Blog post page generated on demand once until next deployment, cached on CDN
    "/blog/**": { isr: true },
    "/case-studies": { isr: 86400 },
    // Blog post page generated on demand once until next deployment, cached on CDN
    "/case-studies/**": { isr: true },
  },
});
