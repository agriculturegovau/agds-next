import{j as m,a as t}from"./Box-e652c7f2.js";import{T as o}from"./TextLink-99cf0354.js";import"./TextLinkExternal-ed8d4b34.js";import{F as l,S as g}from"./Stack-4546232d.js";import"./index-42611d8b.js";import"./_commonjsHelpers-042e6b4d.js";import"./VisuallyHidden-315ab967.js";import"./WebsiteIcon-f0b253fc.js";import"./CalendarIcon-16f5268f.js";function r({children:e}){return m(l,{as:"dt",fontWeight:"bold",width:["100%","30%"],flexShrink:0,minWidth:"200px",fontSize:"sm",color:"text",children:e})}function i({children:e}){return m(l,{as:"dd",flexGrow:1,fontSize:"sm",color:"text",children:e})}function a({children:e}){return m(l,{as:"dd",children:e})}function s({children:e}){return m(l,{as:"dl",width:"100%",borderTop:!0,borderColor:"muted",flexDirection:"column",children:e})}function n({children:e}){return m(l,{borderBottom:!0,borderColor:"muted",flexDirection:["column","row"],gap:.25,paddingY:.75,children:e})}try{r.displayName="SummaryListItemTerm",r.__docgenInfo={description:"SummaryListItemTerm should be nested as the first child of SummaryListItem",displayName:"SummaryListItemTerm",props:{}}}catch{}try{i.displayName="SummaryListItemDescription",i.__docgenInfo={description:"SummaryListItemTerm should be nested as the second child of SummaryListItem, after SummaryListItemTerm",displayName:"SummaryListItemDescription",props:{}}}catch{}try{a.displayName="SummaryListItemAction",a.__docgenInfo={description:"SummaryListItemAction should be nested as the last child of SummaryListItem, and should wrap a Link component",displayName:"SummaryListItemAction",props:{}}}catch{}try{s.displayName="SummaryList",s.__docgenInfo={description:"SummaryList displays a list of terms and descriptions as key value pairs.\nIt is similar to a two-column table, but renders a HTML Description List (`<dl>`) element.",displayName:"SummaryList",props:{}}}catch{}try{n.displayName="SummaryListItem",n.__docgenInfo={description:"SummaryListItem should be nested as a child of SummaryList",displayName:"SummaryListItem",props:{}}}catch{}const F={title:"Content/SummaryList",component:s},y=()=>t(s,{children:[t(n,{children:[m(r,{children:"First name"}),m(i,{children:"Will"})]}),t(n,{children:[m(r,{children:"Last name"}),m(i,{children:"Power"})]}),t(n,{children:[m(r,{children:"Contact information"}),t(i,{children:["+61 9912 3456",m("br",{}),"will.power@example.com"]})]}),t(n,{children:[m(r,{children:"Date of birth"}),m(i,{children:"09/06/1995"})]})]}),c=e=>t(g,{gap:1.5,children:[t(s,{...e,children:[t(n,{children:[m(r,{children:"First name"}),m(i,{children:"Will"})]}),t(n,{children:[m(r,{children:"Last name"}),m(i,{children:"Power"})]}),t(n,{children:[m(r,{children:"Contact information"}),t(i,{children:["+61 9912 3456",m("br",{}),"will.power@example.com"]})]}),t(n,{children:[m(r,{children:"Date of birth"}),m(i,{children:"09/06/1995"})]})]}),m(o,{href:"#",children:"Change all"})]});c.storyName='With "Change all" action';const u=()=>t(s,{children:[t(n,{children:[m(r,{children:"First name"}),m(i,{children:"Will"}),m(a,{children:m(o,{href:"#",children:"Change"})})]}),t(n,{children:[m(r,{children:"Last name"}),m(i,{children:"Power"}),m(a,{children:m(o,{href:"#",children:"Change"})})]}),t(n,{children:[m(r,{children:"Contact information"}),t(i,{children:["+61 9912 3456",m("br",{}),"will.power@example.com"]}),m(a,{children:m(o,{href:"#",children:"Change"})})]}),t(n,{children:[m(r,{children:"Date of birth"}),m(i,{children:"09/06/1995"}),m(a,{children:m(o,{href:"#",children:"Change"})})]})]});u.storyName='With individual "Change" actions';var L,d,S;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`() => <SummaryList>
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
    </SummaryList>`,...(S=(d=y.parameters)==null?void 0:d.docs)==null?void 0:S.source}}};var p,h,I;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`args => <Stack gap={1.5}>
        <SummaryList {...args}>
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
    </Stack>`,...(I=(h=c.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var f,T,_;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`() => <SummaryList>
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
    </SummaryList>`,...(_=(T=u.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};const P=["Basic","WithChangeLink","WithItemChangeLink"];export{y as Basic,c as WithChangeLink,u as WithItemChangeLink,P as __namedExportsOrder,F as default};
//# sourceMappingURL=SummaryList.stories-7bfb2bad.js.map
