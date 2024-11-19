import type { App } from "vue";
import VerLink from "./index.vue";

VerLink.install = (app: App) => {
  app.component("VerLink", VerLink);
};

export default VerLink;
