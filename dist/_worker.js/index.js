globalThis.process ??= {}; globalThis.process.env ??= {};
import { r as renderers } from './chunks/_@astro-renderers_BwPN5SeW.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_n-uS71Mu.mjs';
import { manifest } from './manifest_CErrdABp.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/admin.astro.mjs');
const _page3 = () => import('./pages/api/admin/appointments/_id_.astro.mjs');
const _page4 = () => import('./pages/api/admin/appointments.astro.mjs');
const _page5 = () => import('./pages/api/appointments.astro.mjs');
const _page6 = () => import('./pages/api/contact.astro.mjs');
const _page7 = () => import('./pages/contact.astro.mjs');
const _page8 = () => import('./pages/home/sections/book-appointment.astro.mjs');
const _page9 = () => import('./pages/home/sections/hero.astro.mjs');
const _page10 = () => import('./pages/home/sections/our-services.astro.mjs');
const _page11 = () => import('./pages/home/sections/pet-gallery.astro.mjs');
const _page12 = () => import('./pages/home/sections/testimonials.astro.mjs');
const _page13 = () => import('./pages/home/sections/visit-us.astro.mjs');
const _page14 = () => import('./pages/home/sections/why-choose.astro.mjs');
const _page15 = () => import('./pages/home.astro.mjs');
const _page16 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/@astrojs+cloudflare@12.6.0__7bec129791222de814ab0298c905388c/node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js", _page0],
    ["src/pages/about/index.astro", _page1],
    ["src/pages/admin/index.astro", _page2],
    ["src/pages/api/admin/appointments/[id].ts", _page3],
    ["src/pages/api/admin/appointments.ts", _page4],
    ["src/pages/api/appointments.ts", _page5],
    ["src/pages/api/contact.ts", _page6],
    ["src/pages/contact/index.astro", _page7],
    ["src/pages/home/sections/book-appointment.astro", _page8],
    ["src/pages/home/sections/hero.astro", _page9],
    ["src/pages/home/sections/our-services.astro", _page10],
    ["src/pages/home/sections/pet-gallery.astro", _page11],
    ["src/pages/home/sections/testimonials.astro", _page12],
    ["src/pages/home/sections/visit-us.astro", _page13],
    ["src/pages/home/sections/why-choose.astro", _page14],
    ["src/pages/home/index.astro", _page15],
    ["src/pages/index.astro", _page16]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
