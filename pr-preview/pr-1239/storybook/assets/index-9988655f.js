import{a as o}from"./iframe-1ec3ea8b.js";import"../sb-preview/runtime.mjs";const u=o.createContext({});function l(t){return e;function e(r){const n=i(r.components);return o.createElement(t,{...r,allComponents:n})}}function i(t){const e=o.useContext(u);return o.useMemo(()=>typeof t=="function"?t(e):{...e,...t},[e,t])}const c={};function C({components:t,children:e,disableParentContext:r}){let n;return r?n=typeof t=="function"?t({}):t||c:n=i(t),o.createElement(u.Provider,{value:n},e)}export{u as MDXContext,C as MDXProvider,i as useMDXComponents,l as withMDXComponents};
//# sourceMappingURL=index-9988655f.js.map
