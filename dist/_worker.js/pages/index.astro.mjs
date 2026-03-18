globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_D6c3p7-M.mjs';
import { $ as $$Index$1 } from '../chunks/index_Xhk8mPPZ.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_BwPN5SeW.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "HomePage", $$Index$1, {})}`;
}, "D:/jvc-web-ui/src/pages/index.astro", void 0);

const $$file = "D:/jvc-web-ui/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
