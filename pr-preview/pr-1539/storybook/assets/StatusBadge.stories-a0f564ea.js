import{j as e,a as T}from"./responsive-1d67a6a2.js";import{i as ae,d as ne,f as se,h,g as r,c as te,e as a,T as oe}from"./TableBatchActionsTitle-6a013c05.js";import"./TableHeaderSortable-3b07246b.js";import{T as le}from"./TextLink-364fb860.js";import"./TextLinkExternal-bdbc9763.js";import{S as X}from"./StatusBadge-1a7c0e25.js";import"./index-42611d8b.js";import"./_commonjsHelpers-042e6b4d.js";import"./Stack-43f3e7c4.js";import"./Box-0bbf8d6d.js";import"./Text-d916011d.js";import"./ag.ds-next-react-box.cjs-cf28e632.js";import"./noop-eb890146.js";import"./index-69af556a.js";import"./ag.ds-next-react-stack.cjs-f6276bf7.js";import"./Button-e28534e8.js";import"./LoadingBlanket-54fbe64e.js";import"./Content-9704152d.js";import"./BaseContent-14775c7e.js";import"./PageContent-63ae7dc4.js";import"./SectionContent-4758f989.js";import"./ContentBleed-995a257e.js";import"./VisuallyHidden-02be915e.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-20aae35f.js";import"./WebsiteIcon-7b03f042.js";import"./CalendarIcon-791c6fea.js";import"./ExternalLinkCallout-f28f2061.js";const Be={title:"content/StatusBadge",component:X},n={args:{tone:"info",label:"In progress"}},s={args:{weight:"subtle",tone:"info",label:"Resolved"}},t={args:{tone:"success",label:"Resolved"}},o={args:{weight:"subtle",tone:"success",label:"Resolved"}},l={args:{tone:"error",label:"Rejected"}},i={args:{weight:"subtle",tone:"error",label:"Rejected"}},c={args:{tone:"warning",label:"Attention"}},u={args:{weight:"subtle",tone:"warning",label:"Attention"}},d={args:{tone:"neutral",label:"Draft"}},p={args:{weight:"subtle",tone:"neutral",label:"Draft"}},b=()=>{const Y=[{id:"RE4321–2201–03",businessName:"Orange Meat Works",type:"Record keeping—Minor",status:"Pending"},{id:"RE4321–2201–02",businessName:"Orange Meat Works",type:"Hygiene—Major",status:"Open"},{id:"RE4321–2201–01",businessName:"Molong Meat Works",type:"Record keeping—Minor",status:"Open"},{id:"RE4321–2201–00",businessName:"Orange Meat Works",type:"Record keeping—Minor",status:"Closed"}],Z={Closed:"success",Open:"warning",Pending:"info",Draft:"neutral"};return e(ae,{children:T(oe,{children:[e(ne,{children:"Corrective action requests (CAR)"}),e(se,{children:T(h,{children:[e(r,{children:"CAR number"}),e(r,{children:"Establishment name"}),e(r,{children:"Activity and severity"}),e(r,{children:"Status"}),e(r,{children:"Actions"})]})}),e(te,{children:Y.map(({id:m,businessName:ee,status:g,type:re})=>T(h,{children:[e(a,{children:m}),e(a,{children:ee}),e(a,{children:re}),e(a,{children:e(X,{weight:"subtle",tone:Z[g],label:g})}),e(a,{children:e(le,{href:`#${m}`,children:g=="Closed"?"View":"Manage"})})]},m))})]})})};var R,S,C;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    tone: 'info',
    label: 'In progress'
  }
}`,...(C=(S=n.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var w,f,M;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    weight: 'subtle',
    tone: 'info',
    label: 'Resolved'
  }
}`,...(M=(f=s.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var y,k,H;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    tone: 'success',
    label: 'Resolved'
  }
}`,...(H=(k=t.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var E,W,N;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    weight: 'subtle',
    tone: 'success',
    label: 'Resolved'
  }
}`,...(N=(W=o.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var O,v,A;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    tone: 'error',
    label: 'Rejected'
  }
}`,...(A=(v=l.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var j,I,x;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    weight: 'subtle',
    tone: 'error',
    label: 'Rejected'
  }
}`,...(x=(I=i.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var B,D,P;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    tone: 'warning',
    label: 'Attention'
  }
}`,...(P=(D=c.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var L,q,V;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    weight: 'subtle',
    tone: 'warning',
    label: 'Attention'
  }
}`,...(V=(q=u.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var _,$,z;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    tone: 'neutral',
    label: 'Draft'
  }
}`,...(z=($=d.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var F,G,J;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    weight: 'subtle',
    tone: 'neutral',
    label: 'Draft'
  }
}`,...(J=(G=p.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
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
                    <TableRow>
                        <TableHeader>CAR number</TableHeader>
                        <TableHeader>Establishment name</TableHeader>
                        <TableHeader>Activity and severity</TableHeader>
                        <TableHeader>Status</TableHeader>
                        <TableHeader>Actions</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(({
          id,
          businessName,
          status,
          type
        }) => <TableRow key={id}>
                            <TableCell>{id}</TableCell>
                            <TableCell>{businessName}</TableCell>
                            <TableCell>{type}</TableCell>
                            <TableCell>
                                <StatusBadge weight="subtle" tone={toneMapper[status]} label={status} />
                            </TableCell>
                            <TableCell>
                                <TextLink href={\`#\${id}\`}>
                                    {status == 'Closed' ? 'View' : 'Manage'}
                                </TextLink>
                            </TableCell>
                        </TableRow>)}
                </TableBody>
            </Table>
        </TableWrapper>;
}`,...(U=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const De=["Info","InfoSubtle","Success","SuccessSubtle","Error","ErrorSubtle","Warning","WarningSubtle","Neutral","NeutralSubtle","InTable"];export{l as Error,i as ErrorSubtle,b as InTable,n as Info,s as InfoSubtle,d as Neutral,p as NeutralSubtle,t as Success,o as SuccessSubtle,c as Warning,u as WarningSubtle,De as __namedExportsOrder,Be as default};
