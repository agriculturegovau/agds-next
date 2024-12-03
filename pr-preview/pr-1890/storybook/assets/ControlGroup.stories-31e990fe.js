import{a as pe,j as o}from"./responsive-22d1c539.js";import{r as k}from"./index-f0f3a68d.js";import{C as q}from"./Checkbox-1a56878a.js";import{R as O}from"./Radio-72d65baa.js";import{C as v}from"./ControlGroup-c2ac8b31.js";import"./jsx-runtime-70d19cdc.js";import"./_commonjsHelpers-23102255.js";import"./useId-bf1c3739.js";import"./mergeRefs-868b543a.js";import"./ControlGroupProvider-afbdf4c1.js";import"./Stack-e6a92433.js";import"./Box-cc8e6f8e.js";import"./WebsiteIcon-03a55100.js";import"./ExternalLinkCallout-896682bb.js";import"./Text-03708b2d.js";import"./Field-ef82e19c.js";const He={title:"forms/ControlGroup",component:v};function n({label:x="Preferred contact method",block:G=!0,...R}){const[S,f]=k.useState([]),r=k.useCallback(e=>()=>f(T=>T.includes(e)?T.filter(le=>le!==e):[...T,e]),[]),a=e=>S.includes(e);return pe(v,{label:x,block:G,...R,children:[o(q,{checked:a("email"),onChange:r("email"),children:"Email"}),o(q,{checked:a("phone"),onChange:r("phone"),children:"Phone"}),o(q,{checked:a("textMessage"),onChange:r("textMessage"),children:"Text message"})]})}const t={args:{},render:n},c={args:{hint:"Select all that apply"},render:n},d={args:{block:!1},render:n},i={args:{required:!0},render:n},p={args:{hideOptionalLabel:!0},render:n},l={args:{message:"Select a preferred contact method",required:!0,invalid:!0},render:n};function s({label:x="Preferred contact method",block:G=!0,...R}){const[S,f]=k.useState(),r=k.useCallback(e=>()=>f(e),[]),a=e=>e===S;return pe(v,{label:x,block:G,...R,children:[o(O,{checked:a("email"),onChange:r("email"),children:"Email"}),o(O,{checked:a("phone"),onChange:r("phone"),children:"Phone"}),o(O,{checked:a("textMessage"),onChange:r("textMessage"),children:"Text message"})]})}const m={args:{},render:s},u={args:{hint:"Select one option"},render:s},h={args:{block:!1},render:s},g={args:{required:!0},render:s},b={args:{hideOptionalLabel:!0},render:s},C={args:{message:"Select a preferred contact method",required:!0,invalid:!0},render:s};var H,I,L;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {},
  render: CheckboxTemplate
}`,...(L=(I=t.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var E,M,P;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    hint: 'Select all that apply'
  },
  render: CheckboxTemplate
}`,...(P=(M=c.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var j,y,F;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    block: false
  },
  render: CheckboxTemplate
}`,...(F=(y=d.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var K,V,_;i.parameters={...i.parameters,docs:{...(K=i.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    required: true
  },
  render: CheckboxTemplate
}`,...(_=(V=i.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var w,z,A;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    hideOptionalLabel: true
  },
  render: CheckboxTemplate
}`,...(A=(z=p.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var B,D,J;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    message: 'Select a preferred contact method',
    required: true,
    invalid: true
  },
  render: CheckboxTemplate
}`,...(J=(D=l.parameters)==null?void 0:D.docs)==null?void 0:J.source}}};var N,Q,U;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {},
  render: RadioTemplate
}`,...(U=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    hint: 'Select one option'
  },
  render: RadioTemplate
}`,...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    block: false
  },
  render: RadioTemplate
}`,...(ee=($=h.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ae,oe;g.parameters={...g.parameters,docs:{...(re=g.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    required: true
  },
  render: RadioTemplate
}`,...(oe=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ne,se,te;b.parameters={...b.parameters,docs:{...(ne=b.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    hideOptionalLabel: true
  },
  render: RadioTemplate
}`,...(te=(se=b.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var ce,de,ie;C.parameters={...C.parameters,docs:{...(ce=C.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    message: 'Select a preferred contact method',
    required: true,
    invalid: true
  },
  render: RadioTemplate
}`,...(ie=(de=C.parameters)==null?void 0:de.docs)==null?void 0:ie.source}}};const Ie=["CheckboxGroup","CheckboxGroupHint","CheckboxGroupInline","CheckboxGroupRequired","CheckboxGroupHideOptionalLabel","CheckboxGroupInvalid","RadioGroup","RadioGroupHint","RadioGroupInline","RadioGroupRequired","RadioGroupHideOptionalLabel","RadioGroupInvalid"];export{t as CheckboxGroup,p as CheckboxGroupHideOptionalLabel,c as CheckboxGroupHint,d as CheckboxGroupInline,l as CheckboxGroupInvalid,i as CheckboxGroupRequired,m as RadioGroup,b as RadioGroupHideOptionalLabel,u as RadioGroupHint,h as RadioGroupInline,C as RadioGroupInvalid,g as RadioGroupRequired,Ie as __namedExportsOrder,He as default};
