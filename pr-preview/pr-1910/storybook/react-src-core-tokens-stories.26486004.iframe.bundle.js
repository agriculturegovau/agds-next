/*! For license information please see react-src-core-tokens-stories.26486004.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[9970],{"./packages/react/src/core/tokens.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Backgrounds:()=>Backgrounds,Color:()=>Color,Shadow:()=>Shadow,Space:()=>Space,__namedExportsOrder:()=>__namedExportsOrder,default:()=>tokens_stories});var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),box=__webpack_require__("./packages/react/src/box/index.ts"),flex=__webpack_require__("./packages/react/src/flex/index.ts"),stack=__webpack_require__("./packages/react/src/stack/index.ts"),src_text=__webpack_require__("./packages/react/src/text/index.ts"),card=__webpack_require__("./packages/react/src/card/index.ts"),heading=__webpack_require__("./packages/react/src/heading/index.ts"),prose=__webpack_require__("./packages/react/src/prose/index.ts"),columns=__webpack_require__("./packages/react/src/columns/index.ts"),ag_ds_next_react_flex_cjs=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./packages/react/box/dist/ag.ds-next-react-box.cjs.js"),__webpack_require__("./packages/react/flex/dist/ag.ds-next-react-flex.cjs.js")),ag_ds_next_react_columns_cjs=(__webpack_require__("./packages/react/stack/dist/ag.ds-next-react-stack.cjs.js"),__webpack_require__("./packages/react/columns/dist/ag.ds-next-react-columns.cjs.js")),ag_ds_next_react_core_cjs=__webpack_require__("./packages/react/core/dist/ag.ds-next-react-core.cjs.js"),ag_ds_next_react_prose_cjs=__webpack_require__("./packages/react/prose/dist/ag.ds-next-react-prose.cjs.js"),ag_ds_next_react_text_cjs=__webpack_require__("./packages/react/text/dist/ag.ds-next-react-text.cjs.js"),emotion_react_jsx_runtime_browser_esm=(__webpack_require__("./packages/react/table/dist/ag.ds-next-react-table.cjs.js"),__webpack_require__("./docs/components/designSystemComponents.tsx"),__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"));const ShadowTokenChart=()=>{const shadowTokens=Object.entries(ag_ds_next_react_core_cjs.tokens.shadow);return(0,emotion_react_jsx_runtime_browser_esm.Y)(ag_ds_next_react_columns_cjs.Columns,{cols:3,gap:1.5,className:ag_ds_next_react_prose_cjs.proseBlockClassname,children:shadowTokens.map((([token,shadow])=>(0,emotion_react_jsx_runtime_browser_esm.FD)(ag_ds_next_react_flex_cjs.Flex,{paddingX:1,paddingY:2,rounded:!0,flexDirection:"column",css:(0,emotion_react_browser_esm.AH)({boxShadow:shadow},"",""),children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(ag_ds_next_react_text_cjs.Text,{fontWeight:"bold",children:token}),(0,emotion_react_jsx_runtime_browser_esm.Y)(ag_ds_next_react_text_cjs.Text,{fontSize:"xs",children:shadow})]},token)))})};var core_boxPalette=__webpack_require__("./packages/react/src/core/boxPalette.ts"),core_tokens=__webpack_require__("./packages/react/src/core/tokens.ts");const tokens_stories={title:"foundations/Core/Tokens"},Color=()=>{const boxPaletteTokens=Object.keys(core_boxPalette.r5);return(0,emotion_react_jsx_runtime_browser_esm.Y)(stack.Stack,{gap:1.5,children:["light","dark"].map((palette=>(0,emotion_react_jsx_runtime_browser_esm.FD)(stack.Stack,{gap:2,padding:1.5,palette,background:"body",children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(heading.H2,{children:palette}),(0,emotion_react_jsx_runtime_browser_esm.Y)(columns.Columns,{as:"ul",cols:{xs:1,sm:2,md:3,lg:4,xl:6},children:boxPaletteTokens.map((token=>(0,emotion_react_jsx_runtime_browser_esm.FD)(card.Card,{as:"li",shadow:!0,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{width:"100%",height:"6rem",background:"body",css:(0,emotion_react_browser_esm.AH)({backgroundColor:core_boxPalette.r5[token]},"","")}),(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{borderColor:"muted",borderTop:!0,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(card.CardInner,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(src_text.Text,{fontSize:"xs",children:token})})})]},token)))})]},palette)))})},BackgroundRow=({palette})=>(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,{palette,width:"100%",children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,{padding:2,background:"body",flexGrow:1,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{flexGrow:1,color:"text",paddingY:2,paddingX:1,children:"backgroundBody"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{flexGrow:1,color:"text",paddingY:2,paddingX:1,background:"shade",children:"backgroundShade"})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,{padding:2,background:"bodyAlt",flexGrow:1,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{flexGrow:1,color:"text",paddingY:2,paddingX:1,children:"backgroundBodyAlt"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{flexGrow:1,color:"text",paddingY:2,paddingX:1,background:"shadeAlt",children:"backgroundShadeAlt"})]})]}),Backgrounds=()=>(0,emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK,{children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(prose.Prose,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("h2",{children:"Backgrounds"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("p",{children:"A visualisation of how body and shade backgrounds work together."})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(BackgroundRow,{palette:"light"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(BackgroundRow,{palette:"dark"})]}),Space=()=>(0,emotion_react_jsx_runtime_browser_esm.Y)(stack.Stack,{as:"ul",gap:1,fontSize:"xs",children:[0,.25,.5,.75,1,1.5,2,3,4,5,6].map((token=>(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,{as:"li",gap:1,alignItems:"center",children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{height:"1rem",background:"bodyAlt",width:(0,core_tokens.Q)(token)}),(0,emotion_react_jsx_runtime_browser_esm.FD)(src_text.Text,{fontSize:"xs",children:[token," (",(0,core_tokens.Q)(token),")"]})]},token)))}),Shadow=()=>(0,emotion_react_jsx_runtime_browser_esm.Y)(ShadowTokenChart,{}),__namedExportsOrder=["Color","Backgrounds","Space","Shadow"];Color.parameters={...Color.parameters,docs:{...Color.parameters?.docs,source:{originalSource:'() => {\n  const palettes = [\'light\', \'dark\'] as const;\n  const boxPaletteTokens = Object.keys(boxPalette) as (keyof typeof boxPalette)[];\n  return <Stack gap={1.5}>\n            {palettes.map(palette => <Stack key={palette} gap={2} padding={1.5} palette={palette} background="body">\n                    <H2>{palette}</H2>\n                    <Columns as="ul" cols={{\n        xs: 1,\n        sm: 2,\n        md: 3,\n        lg: 4,\n        xl: 6\n      }}>\n                        {boxPaletteTokens.map(token => <Card key={token} as="li" shadow>\n                                <Box width="100%" height="6rem" background="body" css={{\n            backgroundColor: boxPalette[token]\n          }} />\n                                <Box borderColor="muted" borderTop>\n                                    <CardInner>\n                                        <Text fontSize="xs">{token}</Text>\n                                    </CardInner>\n                                </Box>\n                            </Card>)}\n                    </Columns>\n                </Stack>)}\n        </Stack>;\n}',...Color.parameters?.docs?.source}}},Backgrounds.parameters={...Backgrounds.parameters,docs:{...Backgrounds.parameters?.docs,source:{originalSource:'() => {\n  return <>\n            <Prose>\n                <h2>Backgrounds</h2>\n                <p>A visualisation of how body and shade backgrounds work together.</p>\n            </Prose>\n            <BackgroundRow palette="light" />\n            <BackgroundRow palette="dark" />\n        </>;\n}',...Backgrounds.parameters?.docs?.source}}},Space.parameters={...Space.parameters,docs:{...Space.parameters?.docs,source:{originalSource:'() => {\n  const tokens: Spacing[] = [0, 0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 5, 6];\n  return <Stack as="ul" gap={1} fontSize="xs">\n            {tokens.map(token => <Flex key={token} as="li" gap={1} alignItems="center">\n                    <Box height="1rem" background="bodyAlt" width={mapSpacing(token)} />\n                    <Text fontSize="xs">\n                        {token} ({mapSpacing(token)})\n                    </Text>\n                </Flex>)}\n        </Stack>;\n}',...Space.parameters?.docs?.source}}},Shadow.parameters={...Shadow.parameters,docs:{...Shadow.parameters?.docs,source:{originalSource:"() => <ShadowTokenChart />",...Shadow.parameters?.docs?.source}}}},"./node_modules/date-fns/esm/subMonths/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>subMonths});var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js"),_addMonths_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/date-fns/esm/addMonths/index.js"),_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");function subMonths(dirtyDate,dirtyAmount){(0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.A)(2,arguments);var amount=(0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.A)(dirtyAmount);return(0,_addMonths_index_js__WEBPACK_IMPORTED_MODULE_2__.A)(dirtyDate,-amount)}},"./node_modules/react-keyed-flatten-children/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>flattenChildren});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_is__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-keyed-flatten-children/node_modules/react-is/index.js");function flattenChildren(children,depth,keys){return void 0===depth&&(depth=0),void 0===keys&&(keys=[]),react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).reduce((function(acc,node,nodeIndex){return(0,react_is__WEBPACK_IMPORTED_MODULE_1__.isFragment)(node)?acc.push.apply(acc,flattenChildren(node.props.children,depth+1,keys.concat(node.key||nodeIndex))):(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(node)?acc.push((0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(node,{key:keys.concat(String(node.key)).join(".")})):"string"!=typeof node&&"number"!=typeof node||acc.push(node),acc}),[])}},"./node_modules/react-keyed-flatten-children/node_modules/react-is/cjs/react-is.production.min.js":(__unused_webpack_module,exports)=>{var u,b=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),t=Symbol.for("react.offscreen");function v(a){if("object"==typeof a&&null!==a){var r=a.$$typeof;switch(r){case b:switch(a=a.type){case d:case f:case e:case m:case n:return a;default:switch(a=a&&a.$$typeof){case k:case h:case l:case q:case p:case g:return a;default:return r}}case c:return r}}}u=Symbol.for("react.module.reference"),exports.isFragment=function(a){return v(a)===d}},"./node_modules/react-keyed-flatten-children/node_modules/react-is/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react-keyed-flatten-children/node_modules/react-is/cjs/react-is.production.min.js")},"./node_modules/use-debounce/dist/index.module.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{YQ:()=>c});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function c(u,e,c){var i=this,a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),v=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(u),p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!0);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){d.current=u}),[u]);var g=!e&&0!==e&&"undefined"!=typeof window;if("function"!=typeof u)throw new TypeError("Expected a function");e=+e||0;var w=!!(c=c||{}).leading,s=!("trailing"in c)||!!c.trailing,x="maxWait"in c,y=x?Math.max(+c.maxWait||0,e):null;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){return p.current=!0,function(){p.current=!1}}),[]);var h=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){var r=function(r){var n=l.current,t=m.current;return l.current=m.current=null,o.current=r,v.current=d.current.apply(t,n)},n=function(r,n){g&&cancelAnimationFrame(f.current),f.current=g?requestAnimationFrame(r):setTimeout(r,n)},t=function(r){if(!p.current)return!1;var n=r-a.current;return!a.current||n>=e||n<0||x&&r-o.current>=y},u=function(n){return f.current=null,s&&l.current?r(n):(l.current=m.current=null,v.current)},c=function r(){var c=Date.now();if(t(c))return u(c);if(p.current){var i=e-(c-a.current),f=x?Math.min(i,y-(c-o.current)):i;n(r,f)}},h=function(){var u=Date.now(),d=t(u);if(l.current=[].slice.call(arguments),m.current=i,a.current=u,d){if(!f.current&&p.current)return o.current=a.current,n(c,e),w?r(a.current):v.current;if(x)return n(c,e),r(a.current)}return f.current||n(c,e),v.current};return h.cancel=function(){f.current&&(g?cancelAnimationFrame(f.current):clearTimeout(f.current)),o.current=0,l.current=a.current=m.current=f.current=null},h.isPending=function(){return!!f.current},h.flush=function(){return f.current?u(Date.now()):v.current},h}),[w,x,e,y,s,g]);return h}}}]);