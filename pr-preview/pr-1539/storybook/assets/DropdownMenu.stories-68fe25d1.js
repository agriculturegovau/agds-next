import{a as e,j as n}from"./responsive-1d67a6a2.js";import{r as s}from"./index-42611d8b.js";import{a as Ln}from"./Button-e28534e8.js";import{B as On}from"./ButtonGroup-20aae35f.js";import{g as M,t as D,V as g,u as G,Q as Vn,v as Nn}from"./WebsiteIcon-7b03f042.js";import{C as Hn}from"./CalendarIcon-791c6fea.js";import{I as O}from"./IndicatorDot-85b541f4.js";import{N as l}from"./NotificationBadge-f264d923.js";import{S as V}from"./Stack-43f3e7c4.js";import{V as p}from"./VisuallyHidden-02be915e.js";import{D as i,a,e as o,h as c,u as zn,c as m,f as L,g as u,d as h}from"./DropdownMenuGroupLink-d177a86e.js";import{D as w}from"./DropdownMenuDivider-caed35cd.js";import"./_commonjsHelpers-042e6b4d.js";import"./LoadingBlanket-54fbe64e.js";import"./Content-9704152d.js";import"./BaseContent-14775c7e.js";import"./index-69af556a.js";import"./Box-0bbf8d6d.js";import"./PageContent-63ae7dc4.js";import"./SectionContent-4758f989.js";import"./ContentBleed-995a257e.js";import"./Text-d916011d.js";import"./mergeRefs-868b543a.js";import"./Popover-7f6cfd9c.js";import"./index-7a46b491.js";import"./useClickOutside-f1a14f0e.js";import"./ExternalLinkCallout-f28f2061.js";import"./useId-d335a68c.js";import"./Divider-ce5d5014.js";const he={title:"layout/DropdownMenu"},I={render:function(){return e(i,{children:[n(a,{children:"Toggle dropdown menu"}),e(c,{children:[n(o,{onClick:()=>console.log("Profile"),children:"Profile"}),n(o,{onClick:()=>console.log("Messages"),children:"Messages"}),n(o,{onClick:()=>console.log("Account settings"),children:"Account settings"})]})]})}},f={render:function(){return n(i,{children:({isMenuOpen:r})=>e(s.Fragment,{children:[n(a,{children:r?"Close dropdown menu":"Open dropdown menu"}),e(c,{children:[n(o,{children:"Profile"}),n(o,{children:"Messages"}),n(o,{children:"Account settings"})]})]})})}},k={render:function(){const r=["md","sm"],t=["primary","secondary","tertiary","text"];return n(V,{gap:1,children:r.map(N=>n(On,{children:t.map(H=>e(i,{children:[n(a,{variant:H,size:N,children:"Actions"}),e(c,{children:[n(o,{children:"Item A"}),n(o,{children:"Item B"}),n(o,{children:"Item C"})]})]},H))},N))})}},x={render:function(){return e(i,{children:[n(_n,{}),e(c,{children:[n(o,{children:"Item A"}),n(o,{children:"Item B"}),n(o,{children:"Item C"})]})]})}};function _n(){const d=zn();return n(Ln,{...d,children:"Unstyled button"})}const A={render:function(){return n(V,{gap:2,alignItems:"center",children:["bottom-start","bottom-end","bottom"].map(t=>e(i,{popoverPlacement:t,children:[n(a,{variant:"primary",children:t}),e(c,{children:[n(o,{children:"Profile"}),n(o,{children:"Messages"}),n(o,{children:"Account settings"})]})]},t))})}},P={render:function(){return e(i,{children:[n(a,{children:"Toggle dropdown menu"}),e(c,{children:[n(o,{icon:M,children:"Profile"}),n(o,{icon:D,endElement:e(s.Fragment,{children:[n(l,{value:100,max:99,tone:"action","aria-hidden":!0}),n(p,{children:", 100 unread"})]}),children:"Messages"}),n(o,{icon:g,children:"Account settings"})]})]})}},B={render:function(){return e(i,{children:[n(a,{children:"Toggle dropdown menu"}),e(c,{children:[n(o,{onClick:()=>console.log("Profile"),icon:M,children:"Profile"}),n(o,{onClick:()=>console.log("Messages"),icon:D,endElement:e(s.Fragment,{children:[n(l,{value:100,max:99,tone:"action","aria-hidden":!0}),n(p,{children:", 100 unread"})]}),children:"Messages"}),n(o,{onClick:()=>console.log("Account settings"),icon:g,children:"Account settings"}),n(w,{}),n(o,{onClick:()=>console.log("Account settings"),icon:G,children:"Sign out"})]})]})}},y={render:function(){return e(i,{children:[n(a,{children:"Toggle dropdown menu"}),e(c,{children:[e(m,{label:"Services",children:[n(o,{icon:Vn,children:"Print online"}),n(o,{icon:Hn,children:"Scheduler"})]}),n(w,{}),e(m,{label:"Account",children:[n(o,{icon:M,children:"Profile"}),n(o,{icon:D,endElement:e(s.Fragment,{children:[n(l,{value:100,max:99,tone:"action","aria-hidden":!0}),n(p,{children:", 100 unread"})]}),children:"Messages"}),n(o,{icon:g,children:"Account settings"})]}),n(w,{}),n(o,{icon:G,children:"Sign out"})]})]})}},C={render:function(){return e(i,{children:[n(a,{children:"Toggle dropdown menu"}),e(c,{children:[n(L,{href:"#link-1",children:"Link 1"}),n(L,{href:"#link-2",children:"Link 2"}),n(L,{href:"https://www.agriculture.gov.au",target:"_blank",icon:Nn,children:"External link"})]})]})}},S={render:function(){const[r,t]=s.useState("Antfix");return e(i,{children:[n(a,{children:"Toggle dropdown menu"}),n(c,{children:e(m,{label:"Businesses",children:[n(u,{checked:r==="Antfix",onClick:()=>t("Antfix"),children:"Antfix"}),n(u,{checked:r==="Produce Fresh",onClick:()=>t("Produce Fresh"),children:"Produce Fresh"}),n(u,{checked:r==="Organic Co",onClick:()=>t("Organic Co"),children:"Organic Co"}),n(h,{href:"#",children:"View all"})]})})]})}},R={render:function(){const[r,t]=s.useState("Antfix");return e(i,{children:[n(a,{children:"Toggle dropdown menu"}),n(c,{children:e(m,{label:"Businesses",children:[n(u,{secondaryText:"Sydney",checked:r==="Antfix",onClick:()=>t("Antfix"),children:"Antfix"}),n(u,{secondaryText:"Brisbane",checked:r==="Produce Fresh",onClick:()=>t("Produce Fresh"),children:"Produce Fresh"}),n(u,{secondaryText:"Canberra",checked:r==="Organic Co",onClick:()=>t("Organic Co"),children:"Organic Co"}),n(h,{href:"#",children:"View all"})]})})]})}},v={render:function(){const[r,t]=s.useState("Antfix");return e(i,{children:[n(a,{children:"Toggle dropdown menu"}),n(c,{children:e(m,{label:"Businesses",children:[n(u,{secondaryText:"Sydney",checked:r==="Antfix",onClick:()=>t("Antfix"),endElement:n(O,{}),children:"Antfix"}),n(u,{secondaryText:"Brisbane",checked:r==="Produce Fresh",onClick:()=>t("Produce Fresh"),endElement:e(s.Fragment,{children:[n(l,{value:100,max:99,tone:"action","aria-hidden":!0}),n(p,{children:", 100 notifications"})]}),children:"Produce Fresh"}),n(u,{secondaryText:"Canberra",checked:r==="Organic Co",onClick:()=>t("Organic Co"),children:"Organic Co"}),n(h,{href:"#",children:"View all"})]})})]})}},T={render:function(){return e(V,{gap:2,alignItems:"flex-start",children:[e(i,{children:[n(a,{children:"Toggle dropdown menu (without max height)"}),n(c,{children:Array.from(Array(20).keys()).map(r=>e(o,{children:["Item ",r+1]},r))})]}),e(i,{popoverMaxHeight:288,children:[n(a,{children:"Toggle dropdown menu (with max height)"}),n(c,{children:Array.from(Array(20).keys()).map(r=>e(o,{children:["Item ",r+1]},r))})]})]})}},b={render:function(){return e(i,{popoverOffset:-8,children:[n(a,{variant:"primary",children:"Toggle dropdown menu"}),e(c,{children:[n(o,{onClick:()=>console.log("Profile"),children:"Profile"}),n(o,{onClick:()=>console.log("Messages"),children:"Messages"}),n(o,{onClick:()=>console.log("Account settings"),children:"Account settings"})]})]})}},F={render:function(){return e(i,{children:[n(a,{children:"Toggle dropdown menu"}),e(c,{children:[e(m,{label:"Businesses",children:[n(u,{checked:!0,secondaryText:"ABN 00 000 000 000",endElement:n(O,{}),children:"Antfix"}),n(u,{checked:!1,secondaryText:"ABN 00 000 000 000",endElement:e(s.Fragment,{children:[n(l,{value:100,max:99,tone:"action","aria-hidden":!0}),n(p,{children:", 100 notifications"})]}),children:"Ashfield"}),n(u,{checked:!1,secondaryText:"ABN 00 000 000 000",children:"Redfern"}),n(h,{href:"#",children:"View all"})]}),n(w,{}),n(o,{icon:M,children:"Profile"}),n(o,{icon:D,endElement:e(s.Fragment,{children:[n(l,{value:100,max:99,tone:"action","aria-hidden":!0}),n(p,{children:", 100 unread"})]}),children:"Messages"}),n(o,{icon:g,children:"Account settings"}),n(w,{}),n(o,{icon:G,children:"Sign out"})]})]})}},E={render:function(){return e(i,{children:[n(a,{children:"Toggle dropdown menu"}),e(c,{children:[e(m,{label:"Businesses",children:[["Blandit iaculis iaculis quis ante diam viverra elementum ui risus nec luctus purus tortor lacus malesuada consectetur","Iaculis tortor duis ante nec risus elementum id ui","APurus tortor lacus malesuada phasellus ipsum ex duis libero ante id"].map(t=>n(u,{checked:!0,secondaryText:"ABN 00 000 000 000",endElement:n(O,{}),children:t},t)),n(h,{href:"#",children:"View all"})]}),n(w,{}),n(o,{icon:M,children:"Phasellus ipsum ex duis libero ante"}),n(o,{icon:D,endElement:e(s.Fragment,{children:[n(l,{value:100,max:99,tone:"action","aria-hidden":!0}),n(p,{children:", 100 unread"})]}),children:"APurus tortor lacus malesuada phasellus ipsum ex duis libero ante"}),n(o,{icon:g,children:"Account settings"}),n(w,{}),n(o,{icon:G,children:"Sign out"})]})]})}};var z,_,j;I.parameters={...I.parameters,docs:{...(z=I.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: function Render() {
    return <DropdownMenu>
                <DropdownMenuButton>Toggle dropdown menu</DropdownMenuButton>
                <DropdownMenuPanel>
                    <DropdownMenuItem onClick={() => console.log('Profile')}>
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => console.log('Messages')}>
                        Messages
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => console.log('Account settings')}>
                        Account settings
                    </DropdownMenuItem>
                </DropdownMenuPanel>
            </DropdownMenu>;
  }
}`,...(j=(_=I.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var U,q,Q;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: function Render() {
    return <DropdownMenu>
                {({
        isMenuOpen
      }) => <Fragment>
                        <DropdownMenuButton>
                            {isMenuOpen ? 'Close dropdown menu' : 'Open dropdown menu'}
                        </DropdownMenuButton>
                        <DropdownMenuPanel>
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Messages</DropdownMenuItem>
                            <DropdownMenuItem>Account settings</DropdownMenuItem>
                        </DropdownMenuPanel>
                    </Fragment>}
            </DropdownMenu>;
  }
}`,...(Q=(q=f.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};var J,K,W;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: function Render() {
    const sizes = (['md', 'sm'] as const);
    const variants = (['primary', 'secondary', 'tertiary', 'text'] as const);
    return <Stack gap={1}>
                {sizes.map(size => <ButtonGroup key={size}>
                        {variants.map(variant => <DropdownMenu key={variant}>
                                <DropdownMenuButton variant={variant} size={size}>
                                    Actions
                                </DropdownMenuButton>
                                <DropdownMenuPanel>
                                    <DropdownMenuItem>Item A</DropdownMenuItem>
                                    <DropdownMenuItem>Item B</DropdownMenuItem>
                                    <DropdownMenuItem>Item C</DropdownMenuItem>
                                </DropdownMenuPanel>
                            </DropdownMenu>)}
                    </ButtonGroup>)}
            </Stack>;
  }
}`,...(W=(K=k.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};var X,Y,Z;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: function Render() {
    return <DropdownMenu>
                <DropdownMenuCustomTrigger />
                <DropdownMenuPanel>
                    <DropdownMenuItem>Item A</DropdownMenuItem>
                    <DropdownMenuItem>Item B</DropdownMenuItem>
                    <DropdownMenuItem>Item C</DropdownMenuItem>
                </DropdownMenuPanel>
            </DropdownMenu>;
  }
}`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,nn,en;A.parameters={...A.parameters,docs:{...($=A.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: function Render() {
    const placements = (['bottom-start', 'bottom-end', 'bottom'] as const);
    return <Stack gap={2} alignItems="center">
                {placements.map(placement => <DropdownMenu key={placement} popoverPlacement={placement}>
                        <DropdownMenuButton variant="primary">
                            {placement}
                        </DropdownMenuButton>
                        <DropdownMenuPanel>
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Messages</DropdownMenuItem>
                            <DropdownMenuItem>Account settings</DropdownMenuItem>
                        </DropdownMenuPanel>
                    </DropdownMenu>)}
            </Stack>;
  }
}`,...(en=(nn=A.parameters)==null?void 0:nn.docs)==null?void 0:en.source}}};var on,rn,tn;P.parameters={...P.parameters,docs:{...(on=P.parameters)==null?void 0:on.docs,source:{originalSource:`{
  render: function Render() {
    return <DropdownMenu>
                <DropdownMenuButton>Toggle dropdown menu</DropdownMenuButton>
                <DropdownMenuPanel>
                    <DropdownMenuItem icon={AvatarIcon}>Profile</DropdownMenuItem>
                    <DropdownMenuItem icon={EmailIcon} endElement={<Fragment>
                                <NotificationBadge value={100} max={99} tone="action" aria-hidden />
                                <VisuallyHidden>, 100 unread</VisuallyHidden>
                            </Fragment>}>
                        Messages
                    </DropdownMenuItem>
                    <DropdownMenuItem icon={SettingsIcon}>
                        Account settings
                    </DropdownMenuItem>
                </DropdownMenuPanel>
            </DropdownMenu>;
  }
}`,...(tn=(rn=P.parameters)==null?void 0:rn.docs)==null?void 0:tn.source}}};var dn,cn,an;B.parameters={...B.parameters,docs:{...(dn=B.parameters)==null?void 0:dn.docs,source:{originalSource:`{
  render: function Render() {
    return <DropdownMenu>
                <DropdownMenuButton>Toggle dropdown menu</DropdownMenuButton>
                <DropdownMenuPanel>
                    <DropdownMenuItem onClick={() => console.log('Profile')} icon={AvatarIcon}>
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => console.log('Messages')} icon={EmailIcon} endElement={<Fragment>
                                <NotificationBadge value={100} max={99} tone="action" aria-hidden />
                                <VisuallyHidden>, 100 unread</VisuallyHidden>
                            </Fragment>}>
                        Messages
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => console.log('Account settings')} icon={SettingsIcon}>
                        Account settings
                    </DropdownMenuItem>
                    <DropdownMenuDivider />
                    <DropdownMenuItem onClick={() => console.log('Account settings')} icon={ExitIcon}>
                        Sign out
                    </DropdownMenuItem>
                </DropdownMenuPanel>
            </DropdownMenu>;
  }
}`,...(an=(cn=B.parameters)==null?void 0:cn.docs)==null?void 0:an.source}}};var un,sn,ln;y.parameters={...y.parameters,docs:{...(un=y.parameters)==null?void 0:un.docs,source:{originalSource:`{
  render: function Render() {
    return <DropdownMenu>
                <DropdownMenuButton>Toggle dropdown menu</DropdownMenuButton>
                <DropdownMenuPanel>
                    <DropdownMenuGroup label="Services">
                        <DropdownMenuItem icon={PrintIcon}>Print online</DropdownMenuItem>
                        <DropdownMenuItem icon={CalendarIcon}>Scheduler</DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuDivider />
                    <DropdownMenuGroup label="Account">
                        <DropdownMenuItem icon={AvatarIcon}>Profile</DropdownMenuItem>
                        <DropdownMenuItem icon={EmailIcon} endElement={<Fragment>
                                    <NotificationBadge value={100} max={99} tone="action" aria-hidden />
                                    <VisuallyHidden>, 100 unread</VisuallyHidden>
                                </Fragment>}>
                            Messages
                        </DropdownMenuItem>
                        <DropdownMenuItem icon={SettingsIcon}>
                            Account settings
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuDivider />
                    <DropdownMenuItem icon={ExitIcon}>Sign out</DropdownMenuItem>
                </DropdownMenuPanel>
            </DropdownMenu>;
  }
}`,...(ln=(sn=y.parameters)==null?void 0:sn.docs)==null?void 0:ln.source}}};var pn,mn,wn;C.parameters={...C.parameters,docs:{...(pn=C.parameters)==null?void 0:pn.docs,source:{originalSource:`{
  render: function Render() {
    return <DropdownMenu>
                <DropdownMenuButton>Toggle dropdown menu</DropdownMenuButton>
                <DropdownMenuPanel>
                    <DropdownMenuItemLink href="#link-1">Link 1</DropdownMenuItemLink>
                    <DropdownMenuItemLink href="#link-2">Link 2</DropdownMenuItemLink>
                    <DropdownMenuItemLink href="https://www.agriculture.gov.au" target="_blank" icon={ExternalLinkIcon}>
                        External link
                    </DropdownMenuItemLink>
                </DropdownMenuPanel>
            </DropdownMenu>;
  }
}`,...(wn=(mn=C.parameters)==null?void 0:mn.docs)==null?void 0:wn.source}}};var Mn,Dn,gn;S.parameters={...S.parameters,docs:{...(Mn=S.parameters)==null?void 0:Mn.docs,source:{originalSource:`{
  render: function Render() {
    const [selectedItem, setSelectedItem] = useState<string>('Antfix');
    return <DropdownMenu>
                <DropdownMenuButton>Toggle dropdown menu</DropdownMenuButton>
                <DropdownMenuPanel>
                    <DropdownMenuGroup label="Businesses">
                        <DropdownMenuItemRadio checked={selectedItem === 'Antfix'} onClick={() => setSelectedItem('Antfix')}>
                            Antfix
                        </DropdownMenuItemRadio>
                        <DropdownMenuItemRadio checked={selectedItem === 'Produce Fresh'} onClick={() => setSelectedItem('Produce Fresh')}>
                            Produce Fresh
                        </DropdownMenuItemRadio>
                        <DropdownMenuItemRadio checked={selectedItem === 'Organic Co'} onClick={() => setSelectedItem('Organic Co')}>
                            Organic Co
                        </DropdownMenuItemRadio>
                        <DropdownMenuGroupLink href="#">View all</DropdownMenuGroupLink>
                    </DropdownMenuGroup>
                </DropdownMenuPanel>
            </DropdownMenu>;
  }
}`,...(gn=(Dn=S.parameters)==null?void 0:Dn.docs)==null?void 0:gn.source}}};var hn,In,fn;R.parameters={...R.parameters,docs:{...(hn=R.parameters)==null?void 0:hn.docs,source:{originalSource:`{
  render: function Render() {
    const [selectedItem, setSelectedItem] = useState<string>('Antfix');
    return <DropdownMenu>
                <DropdownMenuButton>Toggle dropdown menu</DropdownMenuButton>
                <DropdownMenuPanel>
                    <DropdownMenuGroup label="Businesses">
                        <DropdownMenuItemRadio secondaryText="Sydney" checked={selectedItem === 'Antfix'} onClick={() => setSelectedItem('Antfix')}>
                            Antfix
                        </DropdownMenuItemRadio>
                        <DropdownMenuItemRadio secondaryText="Brisbane" checked={selectedItem === 'Produce Fresh'} onClick={() => setSelectedItem('Produce Fresh')}>
                            Produce Fresh
                        </DropdownMenuItemRadio>
                        <DropdownMenuItemRadio secondaryText="Canberra" checked={selectedItem === 'Organic Co'} onClick={() => setSelectedItem('Organic Co')}>
                            Organic Co
                        </DropdownMenuItemRadio>
                        <DropdownMenuGroupLink href="#">View all</DropdownMenuGroupLink>
                    </DropdownMenuGroup>
                </DropdownMenuPanel>
            </DropdownMenu>;
  }
}`,...(fn=(In=R.parameters)==null?void 0:In.docs)==null?void 0:fn.source}}};var kn,xn,An;v.parameters={...v.parameters,docs:{...(kn=v.parameters)==null?void 0:kn.docs,source:{originalSource:`{
  render: function Render() {
    const [selectedItem, setSelectedItem] = useState<string>('Antfix');
    return <DropdownMenu>
                <DropdownMenuButton>Toggle dropdown menu</DropdownMenuButton>
                <DropdownMenuPanel>
                    <DropdownMenuGroup label="Businesses">
                        <DropdownMenuItemRadio secondaryText="Sydney" checked={selectedItem === 'Antfix'} onClick={() => setSelectedItem('Antfix')} endElement={<IndicatorDot />}>
                            Antfix
                        </DropdownMenuItemRadio>
                        <DropdownMenuItemRadio secondaryText="Brisbane" checked={selectedItem === 'Produce Fresh'} onClick={() => setSelectedItem('Produce Fresh')} endElement={<Fragment>
                                    <NotificationBadge value={100} max={99} tone="action" aria-hidden />
                                    <VisuallyHidden>, 100 notifications</VisuallyHidden>
                                </Fragment>}>
                            Produce Fresh
                        </DropdownMenuItemRadio>
                        <DropdownMenuItemRadio secondaryText="Canberra" checked={selectedItem === 'Organic Co'} onClick={() => setSelectedItem('Organic Co')}>
                            Organic Co
                        </DropdownMenuItemRadio>
                        <DropdownMenuGroupLink href="#">View all</DropdownMenuGroupLink>
                    </DropdownMenuGroup>
                </DropdownMenuPanel>
            </DropdownMenu>;
  }
}`,...(An=(xn=v.parameters)==null?void 0:xn.docs)==null?void 0:An.source}}};var Pn,Bn,yn;T.parameters={...T.parameters,docs:{...(Pn=T.parameters)==null?void 0:Pn.docs,source:{originalSource:`{
  render: function Render() {
    return <Stack gap={2} alignItems="flex-start">
                <DropdownMenu>
                    <DropdownMenuButton>
                        Toggle dropdown menu (without max height)
                    </DropdownMenuButton>
                    <DropdownMenuPanel>
                        {Array.from(Array(20).keys()).map(i => <DropdownMenuItem key={i}>Item {i + 1}</DropdownMenuItem>)}
                    </DropdownMenuPanel>
                </DropdownMenu>
                <DropdownMenu popoverMaxHeight={288}>
                    <DropdownMenuButton>
                        Toggle dropdown menu (with max height)
                    </DropdownMenuButton>
                    <DropdownMenuPanel>
                        {Array.from(Array(20).keys()).map(i => <DropdownMenuItem key={i}>Item {i + 1}</DropdownMenuItem>)}
                    </DropdownMenuPanel>
                </DropdownMenu>
            </Stack>;
  }
}`,...(yn=(Bn=T.parameters)==null?void 0:Bn.docs)==null?void 0:yn.source}}};var Cn,Sn,Rn;b.parameters={...b.parameters,docs:{...(Cn=b.parameters)==null?void 0:Cn.docs,source:{originalSource:`{
  render: function Render() {
    return <DropdownMenu popoverOffset={-8}>
                <DropdownMenuButton variant="primary">
                    Toggle dropdown menu
                </DropdownMenuButton>
                <DropdownMenuPanel>
                    <DropdownMenuItem onClick={() => console.log('Profile')}>
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => console.log('Messages')}>
                        Messages
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => console.log('Account settings')}>
                        Account settings
                    </DropdownMenuItem>
                </DropdownMenuPanel>
            </DropdownMenu>;
  }
}`,...(Rn=(Sn=b.parameters)==null?void 0:Sn.docs)==null?void 0:Rn.source}}};var vn,Tn,bn;F.parameters={...F.parameters,docs:{...(vn=F.parameters)==null?void 0:vn.docs,source:{originalSource:`{
  render: function Render() {
    return <DropdownMenu>
                <DropdownMenuButton>Toggle dropdown menu</DropdownMenuButton>
                <DropdownMenuPanel>
                    <DropdownMenuGroup label="Businesses">
                        <DropdownMenuItemRadio checked={true} secondaryText="ABN 00 000 000 000" endElement={<IndicatorDot />}>
                            Antfix
                        </DropdownMenuItemRadio>
                        <DropdownMenuItemRadio checked={false} secondaryText="ABN 00 000 000 000" endElement={<Fragment>
                                    <NotificationBadge value={100} max={99} tone="action" aria-hidden />
                                    <VisuallyHidden>, 100 notifications</VisuallyHidden>
                                </Fragment>}>
                            Ashfield
                        </DropdownMenuItemRadio>
                        <DropdownMenuItemRadio checked={false} secondaryText="ABN 00 000 000 000">
                            Redfern
                        </DropdownMenuItemRadio>
                        <DropdownMenuGroupLink href="#">View all</DropdownMenuGroupLink>
                    </DropdownMenuGroup>
                    <DropdownMenuDivider />
                    <DropdownMenuItem icon={AvatarIcon}>Profile</DropdownMenuItem>
                    <DropdownMenuItem icon={EmailIcon} endElement={<Fragment>
                                <NotificationBadge value={100} max={99} tone="action" aria-hidden />
                                <VisuallyHidden>, 100 unread</VisuallyHidden>
                            </Fragment>}>
                        Messages
                    </DropdownMenuItem>
                    <DropdownMenuItem icon={SettingsIcon}>
                        Account settings
                    </DropdownMenuItem>
                    <DropdownMenuDivider />
                    <DropdownMenuItem icon={ExitIcon}>Sign out</DropdownMenuItem>
                </DropdownMenuPanel>
            </DropdownMenu>;
  }
}`,...(bn=(Tn=F.parameters)==null?void 0:Tn.docs)==null?void 0:bn.source}}};var Fn,En,Gn;E.parameters={...E.parameters,docs:{...(Fn=E.parameters)==null?void 0:Fn.docs,source:{originalSource:`{
  render: function Render() {
    const businessNames = ['Blandit iaculis iaculis quis ante diam viverra elementum ui risus nec luctus purus tortor lacus malesuada consectetur', 'Iaculis tortor duis ante nec risus elementum id ui', 'APurus tortor lacus malesuada phasellus ipsum ex duis libero ante id'];
    return <DropdownMenu>
                <DropdownMenuButton>Toggle dropdown menu</DropdownMenuButton>
                <DropdownMenuPanel>
                    <DropdownMenuGroup label="Businesses">
                        {businessNames.map(name => <DropdownMenuItemRadio key={name} checked={true} secondaryText="ABN 00 000 000 000" endElement={<IndicatorDot />}>
                                {name}
                            </DropdownMenuItemRadio>)}
                        <DropdownMenuGroupLink href="#">View all</DropdownMenuGroupLink>
                    </DropdownMenuGroup>
                    <DropdownMenuDivider />
                    <DropdownMenuItem icon={AvatarIcon}>
                        Phasellus ipsum ex duis libero ante
                    </DropdownMenuItem>
                    <DropdownMenuItem icon={EmailIcon} endElement={<Fragment>
                                <NotificationBadge value={100} max={99} tone="action" aria-hidden />
                                <VisuallyHidden>, 100 unread</VisuallyHidden>
                            </Fragment>}>
                        APurus tortor lacus malesuada phasellus ipsum ex duis libero ante
                    </DropdownMenuItem>
                    <DropdownMenuItem icon={SettingsIcon}>
                        Account settings
                    </DropdownMenuItem>
                    <DropdownMenuDivider />
                    <DropdownMenuItem icon={ExitIcon}>Sign out</DropdownMenuItem>
                </DropdownMenuPanel>
            </DropdownMenu>;
  }
}`,...(Gn=(En=E.parameters)==null?void 0:En.docs)==null?void 0:Gn.source}}};const Ie=["Basic","AccessingState","Triggers","UnstyledTrigger","Placement","IconsAndBadges","Divider","Groups","Links","RadioGroups","RadioGroupsSecondary","RadioGroupsSecondaryBadges","Overflow","Offset","Complex","LongLabels"];export{f as AccessingState,I as Basic,F as Complex,B as Divider,y as Groups,P as IconsAndBadges,C as Links,E as LongLabels,b as Offset,T as Overflow,A as Placement,S as RadioGroups,R as RadioGroupsSecondary,v as RadioGroupsSecondaryBadges,k as Triggers,x as UnstyledTrigger,Ie as __namedExportsOrder,he as default};
