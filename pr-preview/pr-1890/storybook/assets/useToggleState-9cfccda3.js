import{r as c}from"./index-3b9dd0eb.js";function u(t,o){const[e,r]=c.useState(t),g=c.useCallback(function(){const s=typeof t=="function"?t():t;r(f=>f===s?o:s)},[t,o]);return[e,g]}export{u};
