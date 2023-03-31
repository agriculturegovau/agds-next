import{r as i}from"./index-42611d8b.js";function w(){const[n,t]=i.useState({windowWidth:void 0,windowHeight:void 0});return i.useEffect(()=>{const e=()=>t({windowWidth:window.innerWidth,windowHeight:window.innerHeight});return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),n}export{w as u};
//# sourceMappingURL=useWindowSize-fbc787ee.js.map
