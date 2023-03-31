import{a as n,j as e}from"./Box-e652c7f2.js";import{S as t,F as M}from"./Stack-4546232d.js";import{T as O,a as y,b as R,c as s,d as A,e as r,f as H}from"./TableWrapper-929f22f3.js";import{T as E}from"./TextLink-99cf0354.js";import"./TextLinkExternal-ed8d4b34.js";import{S as a}from"./StatusBadge-31570fd0.js";import"./index-42611d8b.js";import"./_commonjsHelpers-042e6b4d.js";import"./Text-51e6146a.js";import"./VisuallyHidden-315ab967.js";import"./WebsiteIcon-f0b253fc.js";import"./CalendarIcon-16f5268f.js";const $={title:"content/Badge/StatusBadge",component:a},I=c=>e(a,{...c}),l=I.bind({});l.args={tone:"info",label:"In progress"};const o=()=>n(M,{flexWrap:"wrap",gap:1,children:[n(t,{gap:.5,alignItems:"flex-start",children:[e(a,{tone:"success",label:"Approved"}),e(a,{tone:"success",label:"Accepted"}),e(a,{tone:"success",label:"Online"}),e(a,{tone:"success",label:"Open"}),e(a,{tone:"success",label:"Available"}),e(a,{tone:"success",label:"Success"})]}),n(t,{gap:.5,alignItems:"flex-start",children:[e(a,{tone:"info",label:"In progress"}),e(a,{tone:"info",label:"Pending"}),e(a,{tone:"info",label:"New"})]}),n(t,{gap:.5,alignItems:"flex-start",children:[e(a,{tone:"warning",label:"Due"}),e(a,{tone:"warning",label:"Alert"}),e(a,{tone:"warning",label:"Attention"})]}),n(t,{gap:.5,alignItems:"flex-start",children:[e(a,{tone:"error",label:"Rejected"}),e(a,{tone:"error",label:"Outage"}),e(a,{tone:"error",label:"Overdue"}),e(a,{tone:"error",label:"Error"})]}),e(t,{gap:.5,alignItems:"flex-start",children:e(a,{tone:"neutral",label:"Draft"})})]}),i=()=>{const c=[{id:"RE4321–2201–03",businessName:"Orange Meat Works",type:"Record keeping—Minor",status:"Pending"},{id:"RE4321–2201–02",businessName:"Orange Meat Works",type:"Hygiene—Major",status:"Open"},{id:"RE4321–2201–01",businessName:"Molong Meat Works",type:"Record keeping—Minor",status:"Open"},{id:"RE4321–2201–00",businessName:"Orange Meat Works",type:"Record keeping—Minor",status:"Closed"}],B={Closed:"success",Open:"warning",Pending:"info",Draft:"neutral"};return e(O,{children:n(H,{children:[e(y,{children:"Corrective action requests (CAR)"}),e(R,{children:n("tr",{children:[e(s,{children:"CAR number"}),e(s,{children:"Establishment name"}),e(s,{children:"Activity and severity"}),e(s,{children:"Status"}),e(s,{children:"Actions"})]})}),e(A,{children:c.map(({id:d,businessName:C,status:p,type:x})=>n("tr",{children:[e(r,{children:d}),e(r,{children:C}),e(r,{children:x}),e(r,{children:e(a,{tone:B[p],label:p})}),e(r,{children:e(E,{href:`#${d}`,children:p=="Closed"?"View":"Manage"})})]},d))})]})})};var b,g,u;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:"args => <StatusBadge {...args} />",...(u=(g=l.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var m,T,S;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <Flex flexWrap="wrap" gap={1}>
            <Stack gap={0.5} alignItems="flex-start">
                <StatusBadge tone="success" label="Approved" />
                <StatusBadge tone="success" label="Accepted" />
                <StatusBadge tone="success" label="Online" />
                <StatusBadge tone="success" label="Open" />
                <StatusBadge tone="success" label="Available" />
                <StatusBadge tone="success" label="Success" />
            </Stack>

            <Stack gap={0.5} alignItems="flex-start">
                <StatusBadge tone="info" label="In progress" />
                <StatusBadge tone="info" label="Pending" />
                <StatusBadge tone="info" label="New" />
            </Stack>

            <Stack gap={0.5} alignItems="flex-start">
                <StatusBadge tone="warning" label="Due" />
                <StatusBadge tone="warning" label="Alert" />
                <StatusBadge tone="warning" label="Attention" />
            </Stack>

            <Stack gap={0.5} alignItems="flex-start">
                <StatusBadge tone="error" label="Rejected" />
                <StatusBadge tone="error" label="Outage" />
                <StatusBadge tone="error" label="Overdue" />
                <StatusBadge tone="error" label="Error" />
            </Stack>

            <Stack gap={0.5} alignItems="flex-start">
                <StatusBadge tone="neutral" label="Draft" />
            </Stack>
        </Flex>;
}`,...(S=(T=o.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var f,k,h;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const data = ([{
    id: 'RE4321–2201–03',
    businessName: 'Orange Meat Works',
    type: 'Record keeping—Minor',
    status: 'Pending'
  }, {
    id: 'RE4321–2201–02',
    businessName: 'Orange Meat Works',
    type: 'Hygiene—Major',
    status: 'Open'
  }, {
    id: 'RE4321–2201–01',
    businessName: 'Molong Meat Works',
    type: 'Record keeping—Minor',
    status: 'Open'
  }, {
    id: 'RE4321–2201–00',
    businessName: 'Orange Meat Works',
    type: 'Record keeping—Minor',
    status: 'Closed'
  }] as const);
  const toneMapper = ({
    Closed: 'success',
    Open: 'warning',
    Pending: 'info',
    Draft: 'neutral'
  } as const);
  return <TableWrapper>
            <Table>
                <TableCaption>Corrective action requests (CAR)</TableCaption>
                <TableHead>
                    <tr>
                        <TableHeader>CAR number</TableHeader>
                        <TableHeader>Establishment name</TableHeader>
                        <TableHeader>Activity and severity</TableHeader>
                        <TableHeader>Status</TableHeader>
                        <TableHeader>Actions</TableHeader>
                    </tr>
                </TableHead>
                <TableBody>
                    {data.map(({
          id,
          businessName,
          status,
          type
        }) => <tr key={id}>
                            <TableCell>{id}</TableCell>
                            <TableCell>{businessName}</TableCell>
                            <TableCell>{type}</TableCell>
                            <TableCell>
                                <StatusBadge tone={toneMapper[status]} label={status} />
                            </TableCell>
                            <TableCell>
                                <TextLink href={\`#\${id}\`}>
                                    {status == 'Closed' ? 'View' : 'Manage'}
                                </TextLink>
                            </TableCell>
                        </tr>)}
                </TableBody>
            </Table>
        </TableWrapper>;
}`,...(h=(k=i.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};const z=["Basic","LanguageExamples","InTable"];export{l as Basic,i as InTable,o as LanguageExamples,z as __namedExportsOrder,$ as default};
//# sourceMappingURL=StatusBadge.stories-8bdf00ee.js.map
