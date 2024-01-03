import{j as r}from"./responsive-1d67a6a2.js";import{L as C}from"./Logo-5eada8bc.js";import{a as p,A as _}from"./AppLayoutHeader-0e74e662.js";import{e,E as O}from"./test-utils-43218a79.js";import"./index-42611d8b.js";import"./_commonjsHelpers-042e6b4d.js";import"./useTernaryState-6ea40a94.js";import"./utils-2614a59f.js";import"./Stack-43f3e7c4.js";import"./Box-0bbf8d6d.js";import"./Text-d916011d.js";import"./Avatar-994f28fa.js";import"./VisuallyHidden-02be915e.js";import"./Button-e28534e8.js";import"./LoadingBlanket-54fbe64e.js";import"./Content-9704152d.js";import"./BaseContent-14775c7e.js";import"./index-69af556a.js";import"./PageContent-63ae7dc4.js";import"./SectionContent-4758f989.js";import"./ContentBleed-995a257e.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-20aae35f.js";import"./DropdownMenuGroupLink-d177a86e.js";import"./Popover-7f6cfd9c.js";import"./index-7a46b491.js";import"./WebsiteIcon-7b03f042.js";import"./CalendarIcon-791c6fea.js";import"./useClickOutside-f1a14f0e.js";import"./ExternalLinkCallout-f28f2061.js";import"./useId-d335a68c.js";import"./Divider-ce5d5014.js";import"./NotificationBadge-f264d923.js";import"./DropdownMenuDivider-caed35cd.js";const q={name:e.userNames.regular,secondaryText:"My account",dropdown:r(O,{businesses:e.businessNames.regular,selectedBusinessName:e.businessNames.regular[0],onBusinessChange:console.log})},xe={title:"Layout/AppLayout/AppLayoutHeader",component:p,parameters:{layout:"fullscreen"},args:{href:"/",heading:"Export Service",subLine:"Supporting Australian agricultural exports",logo:r(C,{}),badgeLabel:"Beta",accountDetails:q},render:m=>r(_,{focusMode:!1,children:r(p,{...m})})},a={},o={render:m=>r(_,{focusMode:!0,children:r(p,{...m})})},s={args:{badgeLabel:void 0}},t={args:{subLine:void 0}},n={args:{accountDetails:void 0}},c={args:{accountDetails:{name:e.userNames.regular}}},u={args:{accountDetails:{name:e.userNames.regular,secondaryText:e.businessNames.regular[0],href:"#"}}},i={args:{accountDetails:{name:e.userNames.long,secondaryText:e.businessNames.regular[0],href:"#"}}};var d,l,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=a.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var L,h,b;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: props => <AppLayout focusMode={true}>
            <AppLayoutHeader {...props} />
        </AppLayout>
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,D,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    badgeLabel: undefined
  }
}`,...(x=(D=s.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var A,N,y;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    subLine: undefined
  }
}`,...(y=(N=t.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var S,W,B;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    accountDetails: undefined
  }
}`,...(B=(W=n.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var M,T,k;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    accountDetails: {
      name: exampleData.userNames.regular
    }
  }
}`,...(k=(T=c.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var v,w,E;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    accountDetails: {
      name: exampleData.userNames.regular,
      secondaryText: exampleData.businessNames.regular[0],
      href: '#'
    }
  }
}`,...(E=(w=u.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var H,j,F;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    accountDetails: {
      name: exampleData.userNames.long,
      secondaryText: exampleData.businessNames.regular[0],
      href: '#'
    }
  }
}`,...(F=(j=i.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};const Ae=["Basic","FocusMode","WithoutBadge","WithoutSubline","WithoutAccount","WithoutDropdown","WithAccountLink","WithAccountLinkLongName"];export{a as Basic,o as FocusMode,u as WithAccountLink,i as WithAccountLinkLongName,n as WithoutAccount,s as WithoutBadge,c as WithoutDropdown,t as WithoutSubline,Ae as __namedExportsOrder,xe as default};
