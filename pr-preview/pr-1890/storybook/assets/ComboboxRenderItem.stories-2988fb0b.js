import{j as t,a as l}from"./responsive-22d1c539.js";import{r as v}from"./index-f0f3a68d.js";import{A as z}from"./Avatar-aaef2e20.js";import{N as A}from"./NotificationBadge-5114eb4c.js";import{T as c}from"./Text-03708b2d.js";import{P as C}from"./Popover-4e65a303.js";import{l as B,C as I}from"./ComboboxListItem-78231edd.js";import{C as W}from"./ComboboxRenderItem-89f34ee2.js";import{N as F}from"./test-utils-de1584cc.js";import"./jsx-runtime-70d19cdc.js";import"./_commonjsHelpers-23102255.js";import"./Stack-e6a92433.js";import"./Box-cc8e6f8e.js";import"./index-33ec0502.js";import"./useId-bf1c3739.js";function P(i){return t(C,{as:"ul",css:B,style:{},children:t(I,{"data-combobox-list-item":"interactive",children:t(W,{...i})})})}const Z={title:"forms/Combobox/Primitives/ComboboxRenderItem",component:W,render:i=>t(P,{...i})},e=F[0],a={args:{itemLabel:e.fullName}},o={args:{itemLabel:e.fullName,secondaryText:`Role: ${e.jobTitle}`}},r={args:{itemLabel:e.fullName,secondaryText:`Role: ${e.jobTitle}`,tertiaryText:`Status: ${e.status}`}},n={args:{itemLabel:e.fullName,secondaryText:`Role: ${e.jobTitle}`,tertiaryText:`Status: ${e.status}`,beforeElement:t(z,{name:e.fullName,size:"sm",tone:"action"})}},s={args:{itemLabel:e.fullName,secondaryText:`Role: ${e.jobTitle}`,tertiaryText:`Status: ${e.status}`,beforeElement:t(z,{name:e.fullName,size:"sm",tone:"action"}),endElement:t(A,{value:2,tone:"action"})}},m={args:{itemLabel:e.fullName,secondaryText:l(v.Fragment,{children:[l(c,{color:"muted",fontSize:"xs",children:["Role: ",e.jobTitle]}),l(c,{color:"muted",fontSize:"xs",children:["Status: ",e.status]}),t(c,{color:"muted",fontSize:"xs",children:"Another text line"})]})}};var u,p,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    itemLabel: nameOption.fullName
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var x,T,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    itemLabel: nameOption.fullName,
    secondaryText: \`Role: \${nameOption.jobTitle}\`
  }
}`,...(f=(T=o.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var b,S,g;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:"{\n  args: {\n    itemLabel: nameOption.fullName,\n    secondaryText: `Role: ${nameOption.jobTitle}`,\n    tertiaryText: `Status: ${nameOption.status}`\n  }\n}",...(g=(S=r.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var y,N,O;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    itemLabel: nameOption.fullName,
    secondaryText: \`Role: \${nameOption.jobTitle}\`,
    tertiaryText: \`Status: \${nameOption.status}\`,
    beforeElement: <Avatar name={nameOption.fullName} size="sm" tone="action" />
  }
}`,...(O=(N=n.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var h,E,L;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    itemLabel: nameOption.fullName,
    secondaryText: \`Role: \${nameOption.jobTitle}\`,
    tertiaryText: \`Status: \${nameOption.status}\`,
    beforeElement: <Avatar name={nameOption.fullName} size="sm" tone="action" />,
    endElement: <NotificationBadge value={2} tone="action" />
  }
}`,...(L=(E=s.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var $,j,R;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    itemLabel: nameOption.fullName,
    secondaryText: <Fragment>
                <Text color="muted" fontSize="xs">
                    Role: {nameOption.jobTitle}
                </Text>
                <Text color="muted" fontSize="xs">
                    Status: {nameOption.status}
                </Text>
                <Text color="muted" fontSize="xs">
                    Another text line
                </Text>
            </Fragment>
  }
}`,...(R=(j=m.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};const ee=["Basic","WithSecondaryText","WithTertiaryText","WithBeforeElement","WithEndElement","WithFourLinesText"];export{a as Basic,n as WithBeforeElement,s as WithEndElement,m as WithFourLinesText,o as WithSecondaryText,r as WithTertiaryText,ee as __namedExportsOrder,Z as default};
