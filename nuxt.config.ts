import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 css: ['~/assets/css/main.css'],
                    vite: {
                      plugins: [
                        tailwindcss(),
                        ],
                    },
  compatibilityDate: "2026-05-16",
  devtools: { enabled: true }
})
