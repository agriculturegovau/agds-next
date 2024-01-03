import{j as t,a as l}from"./responsive-1d67a6a2.js";import{r as z}from"./index-42611d8b.js";import{A as V}from"./Avatar-994f28fa.js";import{N as W}from"./NotificationBadge-f264d923.js";import{T as u}from"./Text-d916011d.js";import{P as A}from"./Popover-7f6cfd9c.js";import{C as v,a as I}from"./ComboboxListItem-0acb222d.js";import{N as B}from"./test-utils-de1584cc.js";import"./_commonjsHelpers-042e6b4d.js";import"./Stack-43f3e7c4.js";import"./Box-0bbf8d6d.js";import"./index-7a46b491.js";import"./useId-d335a68c.js";function C(m){return t(A,{as:"ul",style:{},children:t(I,{isActiveItem:!1,isInteractive:!0,children:t(v,{...m})})})}const U={title:"forms/Combobox/Primitives/ComboboxRenderItem",component:v,render:m=>t(C,{...m,isActiveItem:!1})},e=B[0],a={args:{inputValue:"",itemLabel:e.fullName}},n={args:{inputValue:"",itemLabel:e.fullName,secondaryText:`Role: ${e.jobTitle}`}},o={args:{inputValue:"",itemLabel:e.fullName,secondaryText:`Role: ${e.jobTitle}`,tertiaryText:`Status: ${e.status}`}},r={args:{inputValue:"",itemLabel:e.fullName,secondaryText:`Role: ${e.jobTitle}`,tertiaryText:`Status: ${e.status}`,beforeElement:t(V,{name:e.fullName,size:"sm",tone:"action"})}},s={args:{inputValue:"",itemLabel:e.fullName,secondaryText:`Role: ${e.jobTitle}`,tertiaryText:`Status: ${e.status}`,beforeElement:t(V,{name:e.fullName,size:"sm",tone:"action"}),endElement:t(W,{value:2,tone:"action"})}},i={args:{inputValue:"",itemLabel:e.fullName,secondaryText:l(z.Fragment,{children:[l(u,{color:"muted",fontSize:"xs",children:["Role: ",e.jobTitle]}),l(u,{color:"muted",fontSize:"xs",children:["Status: ",e.status]}),t(u,{color:"muted",fontSize:"xs",children:"Another text line"})]})}};var c,p,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    inputValue: '',
    itemLabel: nameOption.fullName
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var x,T,f;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    inputValue: '',
    itemLabel: nameOption.fullName,
    secondaryText: \`Role: \${nameOption.jobTitle}\`
  }
}`,...(f=(T=n.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var b,g,S;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    inputValue: '',
    itemLabel: nameOption.fullName,
    secondaryText: \`Role: \${nameOption.jobTitle}\`,
    tertiaryText: \`Status: \${nameOption.status}\`
  }
}`,...(S=(g=o.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var N,y,O;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    inputValue: '',
    itemLabel: nameOption.fullName,
    secondaryText: \`Role: \${nameOption.jobTitle}\`,
    tertiaryText: \`Status: \${nameOption.status}\`,
    beforeElement: <Avatar name={nameOption.fullName} size="sm" tone="action" />
  }
}`,...(O=(y=r.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};var h,E,L;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    inputValue: '',
    itemLabel: nameOption.fullName,
    secondaryText: \`Role: \${nameOption.jobTitle}\`,
    tertiaryText: \`Status: \${nameOption.status}\`,
    beforeElement: <Avatar name={nameOption.fullName} size="sm" tone="action" />,
    endElement: <NotificationBadge value={2} tone="action" />
  }
}`,...(L=(E=s.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var $,j,R;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    inputValue: '',
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
}`,...(R=(j=i.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};const X=["Basic","WithSecondaryText","WithTertiaryText","WithBeforeElement","WithEndElement","WithFourLinesText"];export{a as Basic,r as WithBeforeElement,s as WithEndElement,i as WithFourLinesText,n as WithSecondaryText,o as WithTertiaryText,X as __namedExportsOrder,U as default};
