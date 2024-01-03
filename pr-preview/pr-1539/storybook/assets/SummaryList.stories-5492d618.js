import{a as e,j as m}from"./responsive-1d67a6a2.js";import{T as n}from"./TextLink-364fb860.js";import"./TextLinkExternal-bdbc9763.js";import{S as D}from"./Stack-43f3e7c4.js";import{S as L,a as t,d as r,c as i,b as a}from"./SummaryList-68a69a7c.js";import"./index-42611d8b.js";import"./_commonjsHelpers-042e6b4d.js";import"./Box-0bbf8d6d.js";import"./ExternalLinkCallout-f28f2061.js";import"./VisuallyHidden-02be915e.js";import"./WebsiteIcon-7b03f042.js";import"./CalendarIcon-791c6fea.js";const v={title:"Content/SummaryList",component:L},s={render:()=>e(L,{children:[e(t,{children:[m(r,{children:"First name"}),m(i,{children:"Will"})]}),e(t,{children:[m(r,{children:"Last name"}),m(i,{children:"Power"})]}),e(t,{children:[m(r,{children:"Contact information"}),e(i,{children:["+61 9912 3456",m("br",{}),"will.power@example.com"]})]}),e(t,{children:[m(r,{children:"Date of birth"}),m(i,{children:"09/06/1995"})]})]})},c={name:'With "Change all" action',render:()=>e(D,{gap:1.5,children:[e(L,{children:[e(t,{children:[m(r,{children:"First name"}),m(i,{children:"Will"})]}),e(t,{children:[m(r,{children:"Last name"}),m(i,{children:"Power"})]}),e(t,{children:[m(r,{children:"Contact information"}),e(i,{children:["+61 9912 3456",m("br",{}),"will.power@example.com"]})]}),e(t,{children:[m(r,{children:"Date of birth"}),m(i,{children:"09/06/1995"})]})]}),m(n,{href:"#",children:"Change all"})]})},o={name:'With individual "Change" actions',render:()=>e(L,{children:[e(t,{children:[m(r,{children:"First name"}),m(i,{children:"Will"}),m(a,{children:m(n,{href:"#",children:"Change"})})]}),e(t,{children:[m(r,{children:"Last name"}),m(i,{children:"Power"}),m(a,{children:m(n,{href:"#",children:"Change"})})]}),e(t,{children:[m(r,{children:"Contact information"}),e(i,{children:["+61 9912 3456",m("br",{}),"will.power@example.com"]}),m(a,{children:m(n,{href:"#",children:"Change"})})]}),e(t,{children:[m(r,{children:"Date of birth"}),m(i,{children:"09/06/1995"}),m(a,{children:m(n,{href:"#",children:"Change"})})]})]})};var u,S,l;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(l=(S=s.parameters)==null?void 0:S.docs)==null?void 0:l.source}}};var y,h,I;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(I=(h=c.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var d,p,T;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'With individual "Change" actions',
  render: () => <SummaryList>
            <SummaryListItem>
                <SummaryListItemTerm>First name</SummaryListItemTerm>
                <SummaryListItemDescription>Will</SummaryListItemDescription>
                <SummaryListItemAction>
                    <TextLink href="#">Change</TextLink>
                </SummaryListItemAction>
            </SummaryListItem>
            <SummaryListItem>
                <SummaryListItemTerm>Last name</SummaryListItemTerm>
                <SummaryListItemDescription>Power</SummaryListItemDescription>
                <SummaryListItemAction>
                    <TextLink href="#">Change</TextLink>
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
                    <TextLink href="#">Change</TextLink>
                </SummaryListItemAction>
            </SummaryListItem>
            <SummaryListItem>
                <SummaryListItemTerm>Date of birth</SummaryListItemTerm>
                <SummaryListItemDescription>09/06/1995</SummaryListItemDescription>
                <SummaryListItemAction>
                    <TextLink href="#">Change</TextLink>
                </SummaryListItemAction>
            </SummaryListItem>
        </SummaryList>
}`,...(T=(p=o.parameters)==null?void 0:p.docs)==null?void 0:T.source}}};const B=["Basic","WithChangeLink","WithItemChangeLink"];export{s as Basic,c as WithChangeLink,o as WithItemChangeLink,B as __namedExportsOrder,v as default};
