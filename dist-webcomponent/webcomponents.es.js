import { defineComponent as o, ref as n, createElementBlock as m, openBlock as p, toDisplayString as r, defineCustomElement as l } from "vue";
export * from "vue";
import { defineCustomElement as d } from "vue";
const c = /* @__PURE__ */ o({
  __name: "Example",
  setup(i) {
    const e = n(0);
    return (u, t) => (p(), m("button", {
      onClick: t[0] || (t[0] = (f) => e.value++)
    }, "You clicked me " + r(e.value) + " times.", 1));
  }
}), s = l(c);
customElements.define("example-webcomponent", s);
export {
  s as ExampleWebComponent,
  d as defineCustomElement
};
