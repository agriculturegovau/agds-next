import{a as n,j as e}from"./responsive-22d1c539.js";import{r as s}from"./index-f0f3a68d.js";import{a as Ge}from"./Button-1a082b6d.js";import{B as Le}from"./ButtonGroup-5c583b5f.js";import{s as M,L as D,a7 as g,M as G,a3 as Oe,C as Ve,E as Ne}from"./WebsiteIcon-03a55100.js";import{I as O}from"./IndicatorDot-72a667d4.js";import{N as l}from"./NotificationBadge-5114eb4c.js";import{S as V}from"./Stack-e6a92433.js";import{V as p}from"./ExternalLinkCallout-896682bb.js";import{D as i,a as u,c as o,b as c,u as He,d as m,e as w,h as L,f as a,g as h}from"./DropdownMenuGroupLink-c628e7eb.js";import"./jsx-runtime-70d19cdc.js";import"./_commonjsHelpers-23102255.js";import"./LoadingBlanket-5db8d8aa.js";import"./Content-a73dd057.js";import"./BaseContent-b4d619b8.js";import"./index-e937ffd1.js";import"./Box-cc8e6f8e.js";import"./PageContent-28150522.js";import"./SectionContent-238a39dc.js";import"./ContentBleed-4d1b344d.js";import"./Text-03708b2d.js";import"./mergeRefs-868b543a.js";import"./Popover-4e65a303.js";import"./index-33ec0502.js";import"./Divider-6f447906.js";import"./useClickOutside-ca5d6845.js";import"./useId-bf1c3739.js";const Dn={title:"layout/DropdownMenu"},I={render:function(){return n(i,{children:[e(u,{children:"Toggle dropdown menu"}),n(c,{children:[e(o,{onClick:()=>console.log("Profile"),children:"Profile"}),e(o,{onClick:()=>console.log("Messages"),children:"Messages"}),e(o,{onClick:()=>console.log("Account settings"),children:"Account settings"})]})]})}},f={render:function(){return e(i,{children:({isMenuOpen:r})=>n(s.Fragment,{children:[e(u,{children:r?"Close dropdown menu":"Open dropdown menu"}),n(c,{children:[e(o,{children:"Profile"}),e(o,{children:"Messages"}),e(o,{children:"Account settings"})]})]})})}},k={render:function(){const r=["md","sm"],t=["primary","secondary","tertiary","text"];return e(V,{gap:1,children:r.map(N=>e(Le,{children:t.map(H=>n(i,{children:[e(u,{variant:H,size:N,children:"Actions"}),n(c,{children:[e(o,{children:"Item A"}),e(o,{children:"Item B"}),e(o,{children:"Item C"})]})]},H))},N))})}},x={render:function(){return n(i,{children:[e(ze,{}),n(c,{children:[e(o,{children:"Item A"}),e(o,{children:"Item B"}),e(o,{children:"Item C"})]})]})}};function ze(){const d=He();return e(Ge,{...d,children:"Unstyled button"})}const A={render:function(){return e(V,{gap:2,alignItems:"center",children:["bottom-start","bottom-end","bottom"].map(t=>n(i,{popoverPlacement:t,children:[e(u,{variant:"primary",children:t}),n(c,{children:[e(o,{children:"Profile"}),e(o,{children:"Messages"}),e(o,{children:"Account settings"})]})]},t))})}},P={render:function(){return n(i,{children:[e(u,{children:"Toggle dropdown menu"}),n(c,{children:[e(o,{icon:M,children:"Profile"}),e(o,{icon:D,endElement:n(s.Fragment,{children:[e(l,{value:100,max:99,tone:"action","aria-hidden":!0}),e(p,{children:", 99 plus unread"})]}),children:"Messages"}),e(o,{icon:g,children:"Account settings"})]})]})}},B={render:function(){return n(i,{children:[e(u,{children:"Toggle dropdown menu"}),n(c,{children:[e(o,{onClick:()=>console.log("Profile"),icon:M,children:"Profile"}),e(o,{onClick:()=>console.log("Messages"),icon:D,endElement:n(s.Fragment,{children:[e(l,{value:100,max:99,tone:"action","aria-hidden":!0}),e(p,{children:", 99 plus unread"})]}),children:"Messages"}),e(o,{onClick:()=>console.log("Account settings"),icon:g,children:"Account settings"}),e(m,{}),e(o,{onClick:()=>console.log("Account settings"),icon:G,children:"Sign out"})]})]})}},y={render:function(){return n(i,{children:[e(u,{children:"Toggle dropdown menu"}),n(c,{children:[n(w,{label:"Services",children:[e(o,{icon:Oe,children:"Print online"}),e(o,{icon:Ve,children:"Scheduler"})]}),e(m,{}),n(w,{label:"Account",children:[e(o,{icon:M,children:"Profile"}),e(o,{icon:D,endElement:n(s.Fragment,{children:[e(l,{value:100,max:99,tone:"action","aria-hidden":!0}),e(p,{children:", 99 plus unread"})]}),children:"Messages"}),e(o,{icon:g,children:"Account settings"})]}),e(m,{}),e(o,{icon:G,children:"Sign out"})]})]})}},C={render:function(){return n(i,{children:[e(u,{children:"Toggle dropdown menu"}),n(c,{children:[e(L,{href:"#link-1",children:"Link 1"}),e(L,{href:"#link-2",children:"Link 2"}),e(L,{href:"https://www.agriculture.gov.au",target:"_blank",icon:Ne,children:"External link"})]})]})}},S={render:function(){const[r,t]=s.useState("Antfix");return n(i,{children:[e(u,{children:"Toggle dropdown menu"}),e(c,{children:n(w,{label:"Businesses",children:[e(a,{checked:r==="Antfix",onClick:()=>t("Antfix"),children:"Antfix"}),e(a,{checked:r==="Produce Fresh",onClick:()=>t("Produce Fresh"),children:"Produce Fresh"}),e(a,{checked:r==="Organic Co",onClick:()=>t("Organic Co"),children:"Organic Co"}),e(h,{href:"#",children:"View all"})]})})]})}},R={render:function(){const[r,t]=s.useState("Antfix");return n(i,{children:[e(u,{children:"Toggle dropdown menu"}),e(c,{children:n(w,{label:"Businesses",children:[e(a,{secondaryText:"Sydney",checked:r==="Antfix",onClick:()=>t("Antfix"),children:"Antfix"}),e(a,{secondaryText:"Brisbane",checked:r==="Produce Fresh",onClick:()=>t("Produce Fresh"),children:"Produce Fresh"}),e(a,{secondaryText:"Canberra",checked:r==="Organic Co",onClick:()=>t("Organic Co"),children:"Organic Co"}),e(h,{href:"#",children:"View all"})]})})]})}},v={render:function(){const[r,t]=s.useState("Antfix");return n(i,{children:[e(u,{children:"Toggle dropdown menu"}),e(c,{children:n(w,{label:"Businesses",children:[e(a,{secondaryText:"Sydney",checked:r==="Antfix",onClick:()=>t("Antfix"),endElement:e(O,{}),children:"Antfix"}),e(a,{secondaryText:"Brisbane",checked:r==="Produce Fresh",onClick:()=>t("Produce Fresh"),endElement:n(s.Fragment,{children:[e(l,{value:100,max:99,tone:"action","aria-hidden":!0}),e(p,{children:", 100 notifications"})]}),children:"Produce Fresh"}),e(a,{secondaryText:"Canberra",checked:r==="Organic Co",onClick:()=>t("Organic Co"),children:"Organic Co"}),e(h,{href:"#",children:"View all"})]})})]})}},T={render:function(){return n(V,{gap:2,alignItems:"flex-start",children:[n(i,{children:[e(u,{children:"Toggle dropdown menu (without max height)"}),e(c,{children:Array.from(Array(20).keys()).map(r=>n(o,{children:["Item ",r+1]},r))})]}),n(i,{popoverMaxHeight:288,children:[e(u,{children:"Toggle dropdown menu (with max height)"}),e(c,{children:Array.from(Array(20).keys()).map(r=>n(o,{children:["Item ",r+1]},r))})]})]})}},b={render:function(){return n(i,{popoverOffset:-8,children:[e(u,{variant:"primary",children:"Toggle dropdown menu"}),n(c,{children:[e(o,{onClick:()=>console.log("Profile"),children:"Profile"}),e(o,{onClick:()=>console.log("Messages"),children:"Messages"}),e(o,{onClick:()=>console.log("Account settings"),children:"Account settings"})]})]})}},F={render:function(){return n(i,{children:[e(u,{children:"Toggle dropdown menu"}),n(c,{children:[n(w,{label:"Businesses",children:[e(a,{checked:!0,secondaryText:"ABN 00 000 000 000",endElement:e(O,{}),children:"Antfix"}),e(a,{checked:!1,secondaryText:"ABN 00 000 000 000",endElement:n(s.Fragment,{children:[e(l,{value:100,max:99,tone:"action","aria-hidden":!0}),e(p,{children:", 100 notifications"})]}),children:"Ashfield"}),e(a,{checked:!1,secondaryText:"ABN 00 000 000 000",children:"Redfern"}),e(h,{href:"#",children:"View all"})]}),e(m,{}),e(o,{icon:M,children:"Profile"}),e(o,{icon:D,endElement:n(s.Fragment,{children:[e(l,{value:100,max:99,tone:"action","aria-hidden":!0}),e(p,{children:", 99 plus unread"})]}),children:"Messages"}),e(o,{icon:g,children:"Account settings"}),e(m,{}),e(o,{icon:G,children:"Sign out"})]})]})}},E={render:function(){return n(i,{children:[e(u,{children:"Toggle dropdown menu"}),n(c,{children:[n(w,{label:"Businesses",children:[["Blandit iaculis iaculis quis ante diam viverra elementum ui risus nec luctus purus tortor lacus malesuada consectetur","Iaculis tortor duis ante nec risus elementum id ui","APurus tortor lacus malesuada phasellus ipsum ex duis libero ante id"].map(t=>e(a,{checked:!0,secondaryText:"ABN 00 000 000 000",endElement:e(O,{}),children:t},t)),e(h,{href:"#",children:"View all"})]}),e(m,{}),e(o,{icon:M,children:"Phasellus ipsum ex duis libero ante"}),e(o,{icon:D,endElement:n(s.Fragment,{children:[e(l,{value:100,max:99,tone:"action","aria-hidden":!0}),e(p,{children:", 99 plus unread"})]}),children:"APurus tortor lacus malesuada phasellus ipsum ex duis libero ante"}),e(o,{icon:g,children:"Account settings"}),e(m,{}),e(o,{icon:G,children:"Sign out"})]})]})}};var z,_,j;I.parameters={...I.parameters,docs:{...(z=I.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(j=(_=I.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var U,q,J;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(J=(q=f.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,W;k.parameters={...k.parameters,docs:{...(K=k.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: function Render() {
    const sizes = ['md', 'sm'] as const;
    const variants = ['primary', 'secondary', 'tertiary', 'text'] as const;
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
}`,...(W=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var X,Y,Z;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ne;A.parameters={...A.parameters,docs:{...($=A.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: function Render() {
    const placements = ['bottom-start', 'bottom-end', 'bottom'] as const;
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
}`,...(ne=(ee=A.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var oe,re,te;P.parameters={...P.parameters,docs:{...(oe=P.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: function Render() {
    return <DropdownMenu>
                <DropdownMenuButton>Toggle dropdown menu</DropdownMenuButton>
                <DropdownMenuPanel>
                    <DropdownMenuItem icon={AvatarIcon}>Profile</DropdownMenuItem>
                    <DropdownMenuItem icon={EmailIcon} endElement={<Fragment>
                                <NotificationBadge value={100} max={99} tone="action" aria-hidden />
                                <VisuallyHidden>, 99 plus unread</VisuallyHidden>
                            </Fragment>}>
                        Messages
                    </DropdownMenuItem>
                    <DropdownMenuItem icon={SettingsIcon}>
                        Account settings
                    </DropdownMenuItem>
                </DropdownMenuPanel>
            </DropdownMenu>;
  }
}`,...(te=(re=P.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var de,ie,ce;B.parameters={...B.parameters,docs:{...(de=B.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: function Render() {
    return <DropdownMenu>
                <DropdownMenuButton>Toggle dropdown menu</DropdownMenuButton>
                <DropdownMenuPanel>
                    <DropdownMenuItem onClick={() => console.log('Profile')} icon={AvatarIcon}>
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => console.log('Messages')} icon={EmailIcon} endElement={<Fragment>
                                <NotificationBadge value={100} max={99} tone="action" aria-hidden />
                                <VisuallyHidden>, 99 plus unread</VisuallyHidden>
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
}`,...(ce=(ie=B.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var ue,ae,se;y.parameters={...y.parameters,docs:{...(ue=y.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
                                    <VisuallyHidden>, 99 plus unread</VisuallyHidden>
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
}`,...(se=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var le,pe,me;C.parameters={...C.parameters,docs:{...(le=C.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(me=(pe=C.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var we,Me,De;S.parameters={...S.parameters,docs:{...(we=S.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(De=(Me=S.parameters)==null?void 0:Me.docs)==null?void 0:De.source}}};var ge,he,Ie;R.parameters={...R.parameters,docs:{...(ge=R.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(Ie=(he=R.parameters)==null?void 0:he.docs)==null?void 0:Ie.source}}};var fe,ke,xe;v.parameters={...v.parameters,docs:{...(fe=v.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(xe=(ke=v.parameters)==null?void 0:ke.docs)==null?void 0:xe.source}}};var Ae,Pe,Be;T.parameters={...T.parameters,docs:{...(Ae=T.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Be=(Pe=T.parameters)==null?void 0:Pe.docs)==null?void 0:Be.source}}};var ye,Ce,Se;b.parameters={...b.parameters,docs:{...(ye=b.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Se=(Ce=b.parameters)==null?void 0:Ce.docs)==null?void 0:Se.source}}};var Re,ve,Te;F.parameters={...F.parameters,docs:{...(Re=F.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
                                <VisuallyHidden>, 99 plus unread</VisuallyHidden>
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
}`,...(Te=(ve=F.parameters)==null?void 0:ve.docs)==null?void 0:Te.source}}};var be,Fe,Ee;E.parameters={...E.parameters,docs:{...(be=E.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
                                <VisuallyHidden>, 99 plus unread</VisuallyHidden>
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
}`,...(Ee=(Fe=E.parameters)==null?void 0:Fe.docs)==null?void 0:Ee.source}}};const gn=["Basic","AccessingState","Triggers","UnstyledTrigger","Placement","IconsAndBadges","Divider","Groups","Links","RadioGroups","RadioGroupsSecondary","RadioGroupsSecondaryBadges","Overflow","Offset","Complex","LongLabels"];export{f as AccessingState,I as Basic,F as Complex,B as Divider,y as Groups,P as IconsAndBadges,C as Links,E as LongLabels,b as Offset,T as Overflow,A as Placement,S as RadioGroups,R as RadioGroupsSecondary,v as RadioGroupsSecondaryBadges,k as Triggers,x as UnstyledTrigger,gn as __namedExportsOrder,Dn as default};
