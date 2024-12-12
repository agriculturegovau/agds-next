"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[315],{"./.storybook/stories/DataLoading/DataLoadingWithCards.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Empty:()=>Empty,Error:()=>Error,Final:()=>Final,Loading:()=>Loading,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DataLoadingWithCards_stories});var defineProperty=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),designSystemComponents=__webpack_require__("./docs/components/designSystemComponents.tsx"),stack=__webpack_require__("./packages/react/src/stack/index.ts"),skeleton=__webpack_require__("./packages/react/src/skeleton/index.ts"),src_text=__webpack_require__("./packages/react/src/text/index.ts"),card=__webpack_require__("./packages/react/src/card/index.ts"),columns=__webpack_require__("./packages/react/src/columns/index.ts"),heading=__webpack_require__("./packages/react/src/heading/index.ts"),a11y=__webpack_require__("./packages/react/src/a11y/index.ts"),icon=__webpack_require__("./packages/react/src/icon/index.ts"),src_button=__webpack_require__("./packages/react/src/button/index.ts"),utils=__webpack_require__("./.storybook/stories/DataLoading/utils.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function DataLoadingWithCards({data,loading,error}){return loading?(0,emotion_react_jsx_runtime_browser_esm.Y)(LoadingState,{}):error?(0,emotion_react_jsx_runtime_browser_esm.Y)(ErrorState,{}):data?.results?.length?(0,emotion_react_jsx_runtime_browser_esm.Y)(FinalState,{items:data.results}):(0,emotion_react_jsx_runtime_browser_esm.Y)(EmptyState,{})}function LoadingState(){return(0,emotion_react_jsx_runtime_browser_esm.FD)(stack.Stack,{gap:2,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(heading.Heading,{type:"h1",children:"Star wars planets"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(columns.Columns,{as:"ul",cols:[1,2,3,3],children:Array.from(Array(9).keys()).map((i=>(0,emotion_react_jsx_runtime_browser_esm.Y)(card.Card,{as:"li",shadow:!0,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(card.CardInner,{children:(0,emotion_react_jsx_runtime_browser_esm.FD)(stack.Stack,{gap:1,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(skeleton.I1,{type:"h2",width:"50%"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(skeleton.rr,{fontSize:"sm",width:"25%"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(a11y.s6,{children:"Loading"})]})})},i)))})]})}function ErrorState(){return(0,emotion_react_jsx_runtime_browser_esm.FD)(stack.Stack,{gap:2,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(heading.Heading,{type:"h1",children:"Star wars planets"}),(0,emotion_react_jsx_runtime_browser_esm.FD)(stack.Stack,{gap:2,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(stack.Stack,{gap:1,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(icon.AlertFilledIcon,{color:"error",size:"lg"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(heading.Heading,{type:"h2",fontSize:"lg",children:"Failed to load"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(src_text.Text,{children:"There was an error loading the data. Click retry to try again."})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(src_button.Button,{children:"Retry"})})]})]})}function EmptyState(){return(0,emotion_react_jsx_runtime_browser_esm.FD)(stack.Stack,{gap:2,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(heading.Heading,{type:"h1",children:"Star wars planets"}),(0,emotion_react_jsx_runtime_browser_esm.FD)(stack.Stack,{gap:2,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(stack.Stack,{gap:1,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(icon.NT,{size:"lg",color:"muted"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(heading.Heading,{type:"h2",fontSize:"lg",children:"No planets found"})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(src_button.Button,{children:"Add new planet"})})]})]})}function FinalState({items}){return(0,emotion_react_jsx_runtime_browser_esm.FD)(stack.Stack,{gap:2,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(heading.Heading,{type:"h1",children:"Star wars planets"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(columns.Columns,{as:"ul",cols:[1,2,3,3],children:items.map((item=>(0,emotion_react_jsx_runtime_browser_esm.Y)(card.Card,{as:"li",shadow:!0,clickable:!0,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(card.CardInner,{children:(0,emotion_react_jsx_runtime_browser_esm.FD)(stack.Stack,{gap:1,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(heading.Heading,{as:"h2",type:"h3",children:(0,emotion_react_jsx_runtime_browser_esm.Y)(card.CardLink,{href:"#",children:item.name})}),(0,emotion_react_jsx_runtime_browser_esm.FD)(src_text.Text,{as:"p",children:["Population:"," ","number"==typeof item.population?utils.Eg.format(item.population):"Unknown"]})]})})},item.id)))})]})}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const DataLoadingWithCards_stories={title:"Patterns/Data loading/Cards",component:DataLoadingWithCards,render:args=>(0,emotion_react_jsx_runtime_browser_esm.Y)(designSystemComponents.TKK,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(DataLoadingWithCards,_objectSpread({},args))}),parameters:{layout:"fullscreen"}},Basic={name:"Data loading with Cards",render:function Render(){const{data,loading,error}=(0,utils.LR)();return(0,emotion_react_jsx_runtime_browser_esm.Y)(designSystemComponents.TKK,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(DataLoadingWithCards,{data,loading,error})})}},Loading={name:"Loading state",args:{data:void 0,loading:!0,error:!1}},Error={name:"Error state",args:{data:void 0,loading:!1,error:!0}},Empty={name:"Empty state",args:{data:{results:[]},loading:!1,error:!1}},Final={name:"Final state",args:{data:utils.jw,loading:!1,error:!1}},__namedExportsOrder=["Basic","Loading","Error","Empty","Final"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  name: 'Data loading with Cards',\n  render: function Render() {\n    const {\n      data,\n      loading,\n      error\n    } = useFetchStarWarsAPI();\n    return <PageContent>\n                <DataLoadingWithCards data={data} loading={loading} error={error} />\n            </PageContent>;\n  }\n}",...Basic.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:"{\n  name: 'Loading state',\n  args: {\n    data: undefined,\n    loading: true,\n    error: false\n  }\n}",...Loading.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"{\n  name: 'Error state',\n  args: {\n    data: undefined,\n    loading: false,\n    error: true\n  }\n}",...Error.parameters?.docs?.source}}},Empty.parameters={...Empty.parameters,docs:{...Empty.parameters?.docs,source:{originalSource:"{\n  name: 'Empty state',\n  args: {\n    data: {\n      results: []\n    },\n    loading: false,\n    error: false\n  }\n}",...Empty.parameters?.docs?.source}}},Final.parameters={...Final.parameters,docs:{...Final.parameters?.docs,source:{originalSource:"{\n  name: 'Final state',\n  args: {\n    data: apiData,\n    loading: false,\n    error: false\n  }\n}",...Final.parameters?.docs?.source}}}},"./.storybook/stories/DataLoading/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Eg:()=>numberFormatter,LR:()=>useFetchStarWarsAPI,jw:()=>apiData});var swr__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/swr/dist/index.mjs");const numberFormatter=new Intl.NumberFormat,apiData={results:[{id:1,name:"Tatooine",climate:"Arid",population:2e5},{id:2,name:"Alderaan",climate:"Temperate",population:2e9},{id:3,name:"Yavin IV",climate:"Temperate, Tropical",population:1e3},{id:4,name:"Hoth",climate:"Frozen",population:"unknown"},{id:5,name:"Dagobah",climate:"Murky",population:"unknown"},{id:6,name:"Bespin",climate:"Temperate",population:6e6},{id:7,name:"Endor",climate:"Temperate",population:3e7},{id:8,name:"Naboo",climate:"Temperate",population:45e8},{id:9,name:"Coruscant",climate:"Temperate",population:1e12}]};async function fetcher(){return await new Promise((resolve=>setTimeout(resolve,2500))),apiData}function useFetchStarWarsAPI(){const{data,error}=(0,swr__WEBPACK_IMPORTED_MODULE_0__.Ay)("/api/star-wars-planets",fetcher);return{data,loading:!data&&!error,error}}}}]);