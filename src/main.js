import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";

// Import Pinia and persistence plugin
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import Primevue from "primevue/config";
import Aura from "@primeuix/themes/aura";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

createApp(App)
  .use(router)
  .use(pinia)
  .use(Primevue, {
    theme: {
      preset: Aura,
    },
  })
  .mount("#app");
