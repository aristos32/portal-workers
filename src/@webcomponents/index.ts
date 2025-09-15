import { defineCustomElement } from "vue";
import Example from "./Example.vue";
import AlertBox from "./AlertBox.vue";
import Tabs from "./Tabs.vue";

// Create the custom elements
const ExampleWebComponent = defineCustomElement(Example);
const AlertBoxWebComponent = defineCustomElement(AlertBox);
const TabsWebComponent = defineCustomElement(Tabs);

// Register the custom elements
customElements.define("example-webcomponent", ExampleWebComponent);
customElements.define("alert-box", AlertBoxWebComponent);
customElements.define("tabs-component", TabsWebComponent);

// Export for manual registration if needed
export { ExampleWebComponent, AlertBoxWebComponent, TabsWebComponent };
export { defineCustomElement };

// Export Vue for external usage
export * from "vue";
