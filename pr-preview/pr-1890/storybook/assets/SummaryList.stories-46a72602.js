import{a as e,j as m}from"./responsive-22d1c539.js";import{V as n}from"./ExternalLinkCallout-896682bb.js";import{T as a}from"./TextLink-a2918464.js";import"./TextLinkExternal-af289221.js";import{S as D}from"./Stack-e6a92433.js";import{S as u,a as t,b as i,c as r,d as s}from"./SummaryList-5eaecf8c.js";import"./index-f0f3a68d.js";import"./_commonjsHelpers-23102255.js";import"./jsx-runtime-70d19cdc.js";import"./Box-cc8e6f8e.js";import"./WebsiteIcon-03a55100.js";const P={title:"Content/SummaryList",component:u},c={render:()=>e(u,{children:[e(t,{children:[m(i,{children:"First name"}),m(r,{children:"Will"})]}),e(t,{children:[m(i,{children:"Last name"}),m(r,{children:"Power"})]}),e(t,{children:[m(i,{children:"Contact information"}),e(r,{children:["+61 9912 3456",m("br",{}),"will.power@example.com"]})]}),e(t,{children:[m(i,{children:"Date of birth"}),m(r,{children:"09/06/1995"})]})]})},o={name:'With "Change all" action',render:()=>e(D,{gap:1.5,children:[e(u,{children:[e(t,{children:[m(i,{children:"First name"}),m(r,{children:"Will"})]}),e(t,{children:[m(i,{children:"Last name"}),m(r,{children:"Power"})]}),e(t,{children:[m(i,{children:"Contact information"}),e(r,{children:["+61 9912 3456",m("br",{}),"will.power@example.com"]})]}),e(t,{children:[m(i,{children:"Date of birth"}),m(r,{children:"09/06/1995"})]})]}),m(a,{href:"#",children:"Change all"})]})},l={name:'With individual "Change" actions',render:()=>e(u,{children:[e(t,{children:[m(i,{children:"First name"}),m(r,{children:"Will"}),m(s,{children:e(a,{href:"#",children:["Change ",m(n,{children:"first name"})]})})]}),e(t,{children:[m(i,{children:"Last name"}),m(r,{children:"Power"}),m(s,{children:e(a,{href:"#",children:["Change ",m(n,{children:"last name"})]})})]}),e(t,{children:[m(i,{children:"Contact information"}),e(r,{children:["+61 9912 3456",m("br",{}),"will.power@example.com"]}),m(s,{children:e(a,{href:"#",children:["Change ",m(n,{children:"contact information"})]})})]}),e(t,{children:[m(i,{children:"Date of birth"}),m(r,{children:"09/06/1995"}),m(s,{children:e(a,{href:"#",children:["Change ",m(n,{children:"date of birth"})]})})]})]})};var L,y,S;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <SummaryList>
            <SummaryListItem>
                <SummaryListItemTerm>First name</SummaryListItemTerm>
                <SummaryListItemDescription>Will</SummaryListItemDescription>
            </SummaryListItem>
            <SummaryListItem>
                <SummaryListItemTerm>Last name</SummaryListItemTerm>
                <SummaryListItemDescription>Power</SummaryListItemDescription>
            </SummaryListItem>
            <SummaryListItem>
                <SummaryListItemTerm>Contact information</SummaryListItemTerm>
                <SummaryListItemDescription>
                    +61 9912 3456
                    <br />
                    will.power@example.com
                </SummaryListItemDescription>
            </SummaryListItem>
            <SummaryListItem>
                <SummaryListItemTerm>Date of birth</SummaryListItemTerm>
                <SummaryListItemDescription>09/06/1995</SummaryListItemDescription>
            </SummaryListItem>
        </SummaryList>
}`,...(S=(y=c.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var h,d,I;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'With "Change all" action',
  render: () => <Stack gap={1.5}>
            <SummaryList>
                <SummaryListItem>
                    <SummaryListItemTerm>First name</SummaryListItemTerm>
                    <SummaryListItemDescription>Will</SummaryListItemDescription>
                </SummaryListItem>
                <SummaryListItem>
                    <SummaryListItemTerm>Last name</SummaryListItemTerm>
                    <SummaryListItemDescription>Power</SummaryListItemDescription>
                </SummaryListItem>
                <SummaryListItem>
                    <SummaryListItemTerm>Contact information</SummaryListItemTerm>
                    <SummaryListItemDescription>
                        +61 9912 3456
                        <br />
                        will.power@example.com
                    </SummaryListItemDescription>
                </SummaryListItem>
                <SummaryListItem>
                    <SummaryListItemTerm>Date of birth</SummaryListItemTerm>
                    <SummaryListItemDescription>09/06/1995</SummaryListItemDescription>
                </SummaryListItem>
            </SummaryList>
            <TextLink href="#">Change all</TextLink>
        </Stack>
}`,...(I=(d=o.parameters)==null?void 0:d.docs)==null?void 0:I.source}}};var p,T,f;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'With individual "Change" actions',
  render: () => <SummaryList>
            <SummaryListItem>
                <SummaryListItemTerm>First name</SummaryListItemTerm>
                <SummaryListItemDescription>Will</SummaryListItemDescription>
                <SummaryListItemAction>
                    <TextLink href="#">
                        Change <VisuallyHidden>first name</VisuallyHidden>
                    </TextLink>
                </SummaryListItemAction>
            </SummaryListItem>
            <SummaryListItem>
                <SummaryListItemTerm>Last name</SummaryListItemTerm>
                <SummaryListItemDescription>Power</SummaryListItemDescription>
                <SummaryListItemAction>
                    <TextLink href="#">
                        Change <VisuallyHidden>last name</VisuallyHidden>
                    </TextLink>
                </SummaryListItemAction>
            </SummaryListItem>
            <SummaryListItem>
                <SummaryListItemTerm>Contact information</SummaryListItemTerm>
                <SummaryListItemDescription>
                    +61 9912 3456
                    <br />
                    will.power@example.com
                </SummaryListItemDescription>
                <SummaryListItemAction>
                    <TextLink href="#">
                        Change <VisuallyHidden>contact information</VisuallyHidden>
                    </TextLink>
                </SummaryListItemAction>
            </SummaryListItem>
            <SummaryListItem>
                <SummaryListItemTerm>Date of birth</SummaryListItemTerm>
                <SummaryListItemDescription>09/06/1995</SummaryListItemDescription>
                <SummaryListItemAction>
                    <TextLink href="#">
                        Change <VisuallyHidden>date of birth</VisuallyHidden>
                    </TextLink>
                </SummaryListItemAction>
            </SummaryListItem>
        </SummaryList>
}`,...(f=(T=l.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};const j=["Basic","WithChangeLink","WithItemChangeLink"];export{c as Basic,o as WithChangeLink,l as WithItemChangeLink,j as __namedExportsOrder,P as default};
