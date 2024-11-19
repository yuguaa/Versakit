import type { App } from "vue";
import VerContainer from "./index.vue";

VerContainer.install = (app: App) => {
  app.component("VerContainer", VerContainer);
};

export default VerContainer;
