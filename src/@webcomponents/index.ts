import { defineCustomElement } from "vue";
import Example from "./Example.vue";

// Create the custom element
const ExampleWebComponent = defineCustomElement(Example);

// Register the custom element
customElements.define("example-webcomponent", ExampleWebComponent);

// Export for manual registration if needed
export { ExampleWebComponent };
export { defineCustomElement };

// Export Vue for external usage
export * from "vue";
