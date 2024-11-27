import{j as e,a as t}from"./responsive-123a9343.js";import{r as p}from"./index-3b9dd0eb.js";import{F as y,S as k}from"./Stack-938d29d6.js";import{T as D,b as v,c as b,d as l,e as L,g as B,h as Pe,i as Me,f as a,a as $}from"./TableBatchActionsTitle-d76aa898.js";import"./TableHeaderSortable-b35199b4.js";import{C as z}from"./Checkbox-e7edf2bf.js";import{B as R}from"./Button-12960031.js";import{B as J}from"./ButtonGroup-399a126c.js";import"./Content-1f109ee5.js";import{P as Ne}from"./PageContent-a0776569.js";import"./SectionContent-49d65950.js";import"./ContentBleed-8062a65d.js";import{b as Re,a as Ye,H as Oe}from"./Heading-53d486d1.js";import{T as g}from"./TextLink-7c30dfcc.js";import"./TextLinkExternal-a7dcdcef.js";import"./Pagination-9e8bf9a5.js";import{P as _e}from"./PaginationButtons-63e5a631.js";import{B as ye}from"./Box-c8c0d4bd.js";import{T as He}from"./Text-ade3e1ab.js";import{M as qe}from"./Modal-e6ecc885.js";import{p as q,E as ze}from"./utils-a6fafbcf.js";import{S as U}from"./Select-acea0bca.js";import{T as $e}from"./TextInput-b3ca105d.js";import{F as Ve}from"./FormStack-e2872dc8.js";import{D as Xe}from"./Drawer-61a2c6fb.js";import{D as je}from"./DatePicker-93991371.js";import"./DateRangePicker-598bd9f9.js";import{S as Ge}from"./SectionAlert-44073781.js";import{S as Ke}from"./SearchInput-aac8eec7.js";import{V as Qe}from"./ExternalLinkCallout-dac509ef.js";import{S as I}from"./StatusBadge-8b772923.js";import"./jsx-runtime-a3291550.js";import"./_commonjsHelpers-de833af9.js";import"./theme-79017997.js";import"./Logo-8cc18c6c.js";import"./WebsiteIcon-a62a72af.js";import"./useId-1d8fde67.js";import"./mergeRefs-868b543a.js";import"./ControlGroupProvider-93e131c1.js";import"./LoadingBlanket-1bc581e5.js";import"./BaseContent-45e1bca4.js";import"./index-1c0ca288.js";import"./PaginationItemsPerPageSelect-d9935cfc.js";import"./index-5ccf1b6b.js";import"./useAriaModalPolyfill-d662b49c.js";import"./getCloseHandler-d347a0fa.js";import"./ModalDialog-280e8bb2.js";import"./Combination-826c8940.js";import"./Field-b78d080b.js";import"./react-spring-web.esm-eb8db2cf.js";import"./usePrefersReducedMotion-a214df03.js";import"./DrawerDialog-c0f47540.js";import"./useTernaryState-a0ca107e.js";import"./useClickOutside-f5418014.js";import"./Popover-91e83479.js";import"./Calendar-3a06276d.js";import"./index-67ce947c.js";import"./DatePickerInput-eb469809.js";import"./useWindowSize-52831703.js";import"./useFocus-81953b1d.js";import"./ag.ds-next-react-icon.cjs-f700de9d.js";import"./noop-eb890146.js";import"./utils-21727715.js";function Z({isOpen:r,onConfirm:o,onClose:i,itemsToDelete:n}){const[d,c]=p.useState(!1);function T(){c(!0),setTimeout(()=>{c(!1),o()},2e3)}const{title:x,description:f}=p.useMemo(()=>Array.isArray(n)?{title:`Are you sure you want to delete ${n.length} ${q(n.length,"certificate","certificates")}?`,description:"Certificates will be deleted immediately. You can not undo this action."}:{title:"Are you sure you want to delete this certificate?",description:`Certificate ${n.certNumber} will be deleted immediately. You can not undo this action.`},[n]);return e(qe,{isOpen:r,onClose:i,title:x,actions:t(J,{children:[e(R,{loading:d,onClick:T,children:"Delete items"}),e(R,{variant:"secondary",onClick:i,children:"Cancel"})]}),children:e(He,{as:"p",children:f})})}Z.__docgenInfo={description:"",methods:[],displayName:"ModalConfirmDelete",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onConfirm:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},itemsToDelete:{required:!0,tsType:{name:"union",raw:"RowData | RowData[]",elements:[{name:"unknown[number]",raw:"(typeof EXAMPLE_DATA)[number]"},{name:"Array",elements:[{name:"unknown[number]",raw:"(typeof EXAMPLE_DATA)[number]"}],raw:"RowData[]"}]},description:""}}};function ee({isOpen:r,onConfirm:o,onClose:i}){const[n,d]=p.useState(),[c,T]=p.useState(!1);function x(){T(!0),setTimeout(()=>{T(!1),o()},2e3)}return e(Xe,{isOpen:r,onClose:i,title:"Add tracking number",actions:t(J,{children:[e(R,{loading:c,onClick:x,children:"Add tracking number"}),e(R,{variant:"secondary",onClick:i,children:"Cancel"})]}),children:t(Ve,{children:[e(U,{label:"How was it sent?",placeholder:"Select option",required:!0,options:[{value:"aus-post",label:"Express post"},{value:"fed-ex",label:"Regular post"}],block:!0}),e($e,{label:"Tracking number",required:!0,block:!0}),e(je,{label:"Date sent",value:n,onChange:d,required:!0,block:!0})]})})}ee.__docgenInfo={description:"",methods:[],displayName:"ModalAddTrackingNumber",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onConfirm:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};function Ue({paginatedData:r}){const[o,i]=p.useState([]),n=p.useMemo(()=>{const u=r.map(s=>s.id);return o.filter(s=>u.includes(s.id)).map(s=>s.id)},[r,o]),d=p.useRef(!1);function c(u){return o.some(s=>s.id===u.id)}function T(u){i(s=>o.some(C=>C.id===u.id)?s.filter(C=>C.id!==u.id):[...s,u])}function x(){return r.every(u=>n.includes(u.id))}function f(){return n.length>0}function S(){i(x()?[]:r)}p.useEffect(()=>{function u(s){d.current=s.key==="Shift"}return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[]);const h=o.length>0,w=x(),A=w?!1:f();return{isTableHeaderChecked:w,isTableHeaderIndeterminate:A,selectedItems:o,setSelectedItems:i,isRowSelected:c,toggleRowSelected:T,toggleAllRows:S,hasSelections:h}}function Je(){const[r,o]=p.useState();function i(c){o({ref:p.createRef(),dismissed:!1,message:c})}function n(){o(void 0)}function d(){return r&&!r.dismissed?e(Ge,{ref:r.ref,tabIndex:-1,tone:"success",onClose:()=>n(),title:r.message}):null}return p.useLayoutEffect(()=>{var c;(c=r==null?void 0:r.ref.current)==null||c.focus()},[r]),{addNotification:i,renderNotification:d}}function De(){return t(y,{flexDirection:["column","row"],justifyContent:"space-between",gap:1,paddingBottom:1,borderBottom:!0,children:[t(y,{gap:1,children:[e(Ke,{label:"Search certificates",hideOptionalLabel:!0}),e(U,{label:"Status",options:[{label:"All",value:"all"}],hideOptionalLabel:!0})]}),e(U,{label:"Sort by",options:[{label:"Last modified",value:"last modified"}],hideOptionalLabel:!0})]})}De.__docgenInfo={description:"",methods:[],displayName:"TableFilters"};const Q=20;function ve(){const[r,o]=p.useState(1),[i,n]=p.useState(ze),d=i.length?i.slice((r-1)*Q,r*Q):[],c=Math.ceil(i.length/Q),{hasSelections:T,isRowSelected:x,selectedItems:f,setSelectedItems:S,isTableHeaderChecked:h,isTableHeaderIndeterminate:w,toggleAllRows:A,toggleRowSelected:u}=Ue({data:i,paginatedData:d}),{renderNotification:s,addNotification:C}=Je(),[V,X]=p.useState(!1),[Le,j]=p.useState(!1);function Be(){const m=f.length;S([]),X(!1),C(`Successfully added tracking numbers to ${m} ${q(m,"item","items")}.`)}function Ie(){const m=f.length;n(G=>G.filter(K=>!f.map(Fe=>Fe.id).includes(K.id))),S([]),j(!1),C(`Successfully deleted ${m} ${q(m,"item","items")}.`)}function We(m){n(G=>G.filter(K=>K.id!==m.id)),C(`Successfully deleted certificate ${m.certNumber}.`)}function Ee(m){C(`Successfully added tracking number to certificate ${m.certNumber}.`)}return t(Ne,{children:[t(k,{gap:1.5,children:[e(Re,{id:"certificates-heading",children:"Certificates"}),t(k,{gap:1,children:[s(),e(De,{}),t(k,{gap:0,children:[e(ye,{paddingLeft:.75,paddingBottom:1,borderBottom:!0,children:e(z,{size:"sm",checked:h,indeterminate:w,onChange:A,children:"Select all rows"})}),d.length?t(k,{gap:1,children:[t(k,{gap:.5,children:[e(B,{children:t(D,{striped:!0,"aria-labelledby":"certificates-heading",children:[e(v,{children:t(b,{children:[e(l,{scope:"col",width:"6rem",children:"Select"}),e(l,{scope:"col",children:"Certificate number"}),e(l,{scope:"col",children:"Exporter"}),e(l,{scope:"col",children:"Date Issued"}),e(l,{scope:"col",children:"Status"}),e(l,{scope:"col",children:"Amount"}),e(l,{scope:"col",children:"Actions"})]})}),e(L,{children:d.map(m=>e(Ze,{item:m,isRowSelected:x(m),onRowSelectToggle:()=>u(m),addTrackingNumber:()=>Ee(m),deleteRow:()=>We(m)},m.id))})]})}),T&&t(Pe,{children:[t(Me,{children:["Apply action to ",f.length," ",q(f.length,"item","items")]}),t(J,{children:[e(R,{variant:"secondary",size:"sm",onClick:()=>X(!0),children:"Add tracking number"}),e(R,{variant:"secondary",size:"sm",onClick:()=>j(!0),children:"Delete"}),e(R,{variant:"tertiary",size:"sm",onClick:A,children:"Cancel"})]})]})]}),e(_e,{currentPage:r,onChange:o,totalPages:c})]}):e(k,{paddingY:1,children:e(Ye,{type:"h3",fontSize:"lg",children:"No certificates found"})})]})]})]}),e(Z,{itemsToDelete:f,isOpen:Le,onClose:()=>j(!1),onConfirm:Ie}),e(ee,{isOpen:V,onClose:()=>X(!1),onConfirm:Be})]})}function Ze({item:r,isRowSelected:o,onRowSelectToggle:i,deleteRow:n,addTrackingNumber:d}){const{certNumber:c,exporter:T,status:x,amount:f}=r,[S,h]=p.useState(!1);function w(){h(!0)}function A(){n(),h(!1)}const[u,s]=p.useState(!1);function C(){s(!0)}function V(){s(!1),d()}return t(p.Fragment,{children:[t(b,{selected:o,children:[e(a,{children:e(z,{size:"sm",checked:o,onChange:i,"aria-label":`Select certificate ${c}`})}),e(a,{as:"th",scope:"row",fontWeight:"bold",children:e(g,{href:"#",children:c})}),e(a,{children:T}),e(a,{children:"11/02/22 14:06"}),e(a,{children:x}),e(a,{children:f}),e(a,{children:t(y,{gap:1,children:[e(R,{variant:"text",onClick:C,children:"Add tracking number"}),e(R,{variant:"text",onClick:w,children:"Delete"})]})})]}),e(Z,{itemsToDelete:r,isOpen:S,onClose:()=>h(!1),onConfirm:A}),e(ee,{isOpen:u,onClose:()=>s(!1),onConfirm:V})]})}ve.__docgenInfo={description:"",methods:[],displayName:"SelectableTableBatchActions"};const da={title:"content/Table",component:D,render:r=>e(B,{children:t(D,{...r,children:[e($,{children:"Population of Australian states and territories, December 2015"}),e(v,{children:t(b,{children:[e(l,{scope:"col",children:"Location"}),e(l,{textAlign:"right",scope:"col",children:"Population"}),e(l,{textAlign:"right",scope:"col",children:"Change over previous year %"}),e(l,{textAlign:"right",scope:"col",children:"Change over previous decade %"})]})}),e(L,{children:H.map(({location:o,population:i,growthYear:n,growthDecade:d},c)=>t(b,{children:[e(a,{as:"th",scope:"row",children:o}),e(a,{textAlign:"right",children:W.format(i)}),t(a,{textAlign:"right",children:[n,"%"]}),t(a,{textAlign:"right",children:[d,"%"]})]},c))})]})})},E={args:{}},F={name:"With striped rows",args:{striped:!0}},P={name:"With fixed layout",args:{tableLayout:"fixed"},render:r=>e(B,{children:t(D,{...r,children:[e($,{children:"Population of Australian states and territories, December 2015"}),e(v,{children:t(b,{children:[e(l,{scope:"col",width:{xs:"14rem",md:"40%"},children:"Location"}),e(l,{scope:"col",textAlign:"right",width:{xs:"10rem",md:"20%"},children:"Population"}),e(l,{scope:"col",textAlign:"right",width:{xs:"14rem",md:"20%"},children:"Change over previous year %"}),e(l,{scope:"col",textAlign:"right",width:{xs:"14rem",md:"20%"},children:"Change over previous decade %"})]})}),e(L,{children:H.map(({location:o,population:i,growthYear:n,growthDecade:d},c)=>t(b,{children:[e(a,{as:"th",scope:"row",children:o}),e(a,{textAlign:"right",children:W.format(i)}),t(a,{textAlign:"right",children:[n,"%"]}),t(a,{textAlign:"right",children:[d,"%"]})]},c))})]})})},M={name:"With aria-rowcount",render:r=>e(B,{children:t(D,{"aria-rowcount":H.length+1,...r,children:[e($,{children:"Population of Australian states and territories, December 2015"}),e(v,{children:t(b,{"aria-rowindex":1,children:[e(l,{scope:"col",width:{xs:"14rem",md:"40%"},children:"Location"}),e(l,{scope:"col",textAlign:"right",width:{xs:"10rem",md:"20%"},children:"Population"}),e(l,{scope:"col",textAlign:"right",width:{xs:"14rem",md:"20%"},children:"Change over previous year %"}),e(l,{scope:"col",textAlign:"right",width:{xs:"14rem",md:"20%"},children:"Change over previous decade %"})]})}),e(L,{children:H.map(({location:o,population:i,growthYear:n,growthDecade:d},c)=>t(b,{"aria-rowindex":c+2,children:[e(a,{as:"th",scope:"row",children:o}),e(a,{textAlign:"right",children:W.format(i)}),t(a,{textAlign:"right",children:[n,"%"]}),t(a,{textAlign:"right",children:[d,"%"]})]},c))})]})})},N={name:"With heading",args:{},render:r=>t(k,{gap:1,children:[e(Oe,{id:"table-heading",children:"Population"}),e(He,{id:"table-description",children:"Population of Australian states and territories, December 2015."}),e(B,{children:t(D,{"aria-labelledby":"table-heading","aria-describedby":"table-description",...r,children:[e(v,{children:t(b,{children:[e(l,{scope:"col",children:"Location"}),e(l,{textAlign:"right",scope:"col",children:"Population"}),e(l,{textAlign:"right",scope:"col",children:"Change over previous year %"}),e(l,{textAlign:"right",scope:"col",children:"Change over previous decade %"})]})}),e(L,{children:H.map(({location:o,population:i,growthYear:n,growthDecade:d},c)=>t(b,{children:[e(a,{as:"th",scope:"row",children:o}),e(a,{textAlign:"right",children:W.format(i)}),t(a,{textAlign:"right",children:[n,"%"]}),t(a,{textAlign:"right",children:[d,"%"]})]},c))})]})})]})},Y={name:"With row actions",args:{},render:r=>e(B,{children:t(D,{...r,children:[e($,{children:"Applications"}),e(v,{children:t(b,{children:[e(l,{scope:"col",children:"Reference"}),e(l,{scope:"col",children:"Date submitted"}),e(l,{scope:"col",children:"Status"}),e(l,{scope:"col",children:"Actions"})]})}),t(L,{children:[t(b,{children:[e(a,{as:"th",scope:"row",fontWeight:"bold",children:e(g,{href:"#",children:"REF-AB3CD4EF"})}),e(a,{children:"20/06/2024"}),e(a,{children:e(I,{appearance:"subtle",tone:"infoMedium",label:"In progress"})}),e(a,{children:t(y,{gap:1,children:[e(g,{href:"#",children:"Edit"}),e(g,{href:"#",children:"Download"})]})})]}),t(b,{children:[e(a,{as:"th",scope:"row",fontWeight:"bold",children:e(g,{href:"#",children:"REF-5GH6IJ7K"})}),e(a,{children:"25/06/2024"}),e(a,{children:e(I,{appearance:"subtle",tone:"infoMedium",label:"In progress"})}),e(a,{children:t(y,{gap:1,children:[e(g,{href:"#",children:"Edit"}),e(g,{href:"#",children:"Download"})]})})]}),t(b,{children:[e(a,{as:"th",scope:"row",fontWeight:"bold",children:e(g,{href:"#",children:"REF-M8NO9PQR"})}),e(a,{children:"02/07/2024"}),e(a,{children:e(I,{appearance:"subtle",tone:"successMedium",label:"Completed"})}),e(a,{children:t(y,{gap:1,children:[e(g,{href:"#",children:"Edit"}),e(g,{href:"#",children:"Download"})]})})]}),t(b,{children:[e(a,{as:"th",scope:"row",fontWeight:"bold",children:e(g,{href:"#",children:"REF-S1TU2VWX"})}),e(a,{children:"05/08/2024"}),e(a,{children:e(I,{appearance:"subtle",tone:"infoMedium",label:"In progress"})}),e(a,{children:t(y,{gap:1,children:[e(g,{href:"#",children:"Edit"}),e(g,{href:"#",children:"Download"})]})})]}),t(b,{children:[e(a,{as:"th",scope:"row",fontWeight:"bold",children:e(g,{href:"#",children:"REF-Y3ZA4B5C"})}),e(a,{children:"19/10/2024"}),e(a,{children:e(I,{appearance:"subtle",tone:"successMedium",label:"Completed"})}),e(a,{children:t(y,{gap:1,children:[e(g,{href:"#",children:"Edit"}),e(g,{href:"#",children:"Download"})]})})]})]})]})})},O={name:"With selectable rows",render:function(o){const[i,n]=p.useState([]);function d(h){return i.includes(h)}function c(h){n(w=>w.includes(h)?w.filter(A=>A!==h):[...w,h])}const T=i.length===H.length,x=T?!1:i.length>0;function f(){n(T?[]:H.map(h=>h.id))}const S="table-heading";return t(k,{gap:1.5,children:[e(Re,{id:S,children:"Basic selectable table"}),t(k,{gap:0,children:[e(ye,{paddingLeft:.75,paddingBottom:.75,borderBottom:!0,children:e(z,{size:"sm",checked:T,indeterminate:x,onChange:f,children:"Select all rows"})}),e(B,{children:t(D,{...o,"aria-labelledby":S,children:[e(v,{children:t(b,{children:[e(l,{scope:"col",children:"Select"}),e(l,{scope:"col",children:"Location"}),e(l,{textAlign:"right",scope:"col",children:"Population"}),e(l,{textAlign:"right",scope:"col",children:"Change over previous year %"}),e(l,{textAlign:"right",scope:"col",children:"Change over previous decade %"})]})}),e(L,{children:H.map(({id:h,location:w,population:A,growthYear:u,growthDecade:s})=>{const C=d(h);return t(b,{selected:C,children:[e(a,{children:e(z,{size:"sm",checked:C,onChange:()=>c(h),children:t(Qe,{children:["Select ",w]})})}),e(a,{as:"th",scope:"row",children:w}),e(a,{textAlign:"right",children:W.format(A)}),t(a,{textAlign:"right",children:[u,"%"]}),t(a,{textAlign:"right",children:[s,"%"]})]},h)})})]})})]})]})}},_={name:"With selectable rows and batch actions",render:ve},H=[{id:"nsw",location:"New South Wales",population:7670700,growthYear:3.1,growthDecade:12.9},{id:"vic",location:"Victoria",population:5996400,growthYear:2.5,growthDecade:9.3},{id:"qld",location:"Queensland",population:4808800,growthYear:1.7,growthDecade:13.3},{id:"wa",location:"Western Australia",population:2603900,growthYear:2.3,growthDecade:11.6},{id:"sa",location:"South Australia",population:1702800,growthYear:2,growthDecade:6.8},{id:"tas",location:"Tasmania",population:517400,growthYear:4,growthDecade:5.3},{id:"nt",location:"Northern Territory",population:244400,growthYear:1.2,growthDecade:4.5},{id:"act",location:"Australian Capital Territory",population:393e3,growthYear:2.4,growthDecade:9.6}],W=new Intl.NumberFormat("en-AU");var te,ae,re;E.parameters={...E.parameters,docs:{...(te=E.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {}
}`,...(re=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var le,ie,oe;F.parameters={...F.parameters,docs:{...(le=F.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'With striped rows',
  args: {
    striped: true
  }
}`,...(oe=(ie=F.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var ne,ce,de;P.parameters={...P.parameters,docs:{...(ne=P.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'With fixed layout',
  args: {
    tableLayout: 'fixed'
  },
  render: args => <TableWrapper>
            <Table {...args}>
                <TableCaption>
                    Population of Australian states and territories, December 2015
                </TableCaption>
                <TableHead>
                    <TableRow>
                        <TableHeader scope="col" width={{
            xs: '14rem',
            md: '40%'
          }}>
                            Location
                        </TableHeader>
                        <TableHeader scope="col" textAlign="right" width={{
            xs: '10rem',
            md: '20%'
          }}>
                            Population
                        </TableHeader>
                        <TableHeader scope="col" textAlign="right" width={{
            xs: '14rem',
            md: '20%'
          }}>
                            Change over previous year %
                        </TableHeader>
                        <TableHeader scope="col" textAlign="right" width={{
            xs: '14rem',
            md: '20%'
          }}>
                            Change over previous decade %
                        </TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {exampleData.map(({
          location,
          population,
          growthYear,
          growthDecade
        }, index) => <TableRow key={index}>
                                <TableCell as="th" scope="row">
                                    {location}
                                </TableCell>
                                <TableCell textAlign="right">
                                    {numberFormatter.format(population)}
                                </TableCell>
                                <TableCell textAlign="right">{growthYear}%</TableCell>
                                <TableCell textAlign="right">{growthDecade}%</TableCell>
                            </TableRow>)}
                </TableBody>
            </Table>
        </TableWrapper>
}`,...(de=(ce=P.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var se,he,pe;M.parameters={...M.parameters,docs:{...(se=M.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'With aria-rowcount',
  render: args => <TableWrapper>
            <Table aria-rowcount={exampleData.length + 1} {...args}>
                <TableCaption>
                    Population of Australian states and territories, December 2015
                </TableCaption>
                <TableHead>
                    <TableRow aria-rowindex={1}>
                        <TableHeader scope="col" width={{
            xs: '14rem',
            md: '40%'
          }}>
                            Location
                        </TableHeader>
                        <TableHeader scope="col" textAlign="right" width={{
            xs: '10rem',
            md: '20%'
          }}>
                            Population
                        </TableHeader>
                        <TableHeader scope="col" textAlign="right" width={{
            xs: '14rem',
            md: '20%'
          }}>
                            Change over previous year %
                        </TableHeader>
                        <TableHeader scope="col" textAlign="right" width={{
            xs: '14rem',
            md: '20%'
          }}>
                            Change over previous decade %
                        </TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {exampleData.map(({
          location,
          population,
          growthYear,
          growthDecade
        }, index) => <TableRow key={index} aria-rowindex={index + 2}>
                                <TableCell as="th" scope="row">
                                    {location}
                                </TableCell>
                                <TableCell textAlign="right">
                                    {numberFormatter.format(population)}
                                </TableCell>
                                <TableCell textAlign="right">{growthYear}%</TableCell>
                                <TableCell textAlign="right">{growthDecade}%</TableCell>
                            </TableRow>)}
                </TableBody>
            </Table>
        </TableWrapper>
}`,...(pe=(he=M.parameters)==null?void 0:he.docs)==null?void 0:pe.source}}};var ue,be,me;N.parameters={...N.parameters,docs:{...(ue=N.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'With heading',
  args: {},
  render: args => <Stack gap={1}>
            <H1 id="table-heading">Population</H1>
            <Text id="table-description">
                Population of Australian states and territories, December 2015.
            </Text>
            <TableWrapper>
                <Table aria-labelledby="table-heading" aria-describedby="table-description" {...args}>
                    <TableHead>
                        <TableRow>
                            <TableHeader scope="col">Location</TableHeader>
                            <TableHeader textAlign="right" scope="col">
                                Population
                            </TableHeader>
                            <TableHeader textAlign="right" scope="col">
                                Change over previous year %
                            </TableHeader>
                            <TableHeader textAlign="right" scope="col">
                                Change over previous decade %
                            </TableHeader>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {exampleData.map(({
            location,
            population,
            growthYear,
            growthDecade
          }, index) => <TableRow key={index}>
                                    <TableCell as="th" scope="row">
                                        {location}
                                    </TableCell>
                                    <TableCell textAlign="right">
                                        {numberFormatter.format(population)}
                                    </TableCell>
                                    <TableCell textAlign="right">{growthYear}%</TableCell>
                                    <TableCell textAlign="right">{growthDecade}%</TableCell>
                                </TableRow>)}
                    </TableBody>
                </Table>
            </TableWrapper>
        </Stack>
}`,...(me=(be=N.parameters)==null?void 0:be.docs)==null?void 0:me.source}}};var ge,Te,fe;Y.parameters={...Y.parameters,docs:{...(ge=Y.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: 'With row actions',
  args: {},
  render: args => <TableWrapper>
            <Table {...args}>
                <TableCaption>Applications</TableCaption>
                <TableHead>
                    <TableRow>
                        <TableHeader scope="col">Reference</TableHeader>
                        <TableHeader scope="col">Date submitted</TableHeader>
                        <TableHeader scope="col">Status</TableHeader>
                        <TableHeader scope="col">Actions</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell as="th" scope="row" fontWeight="bold">
                            <TextLink href="#">REF-AB3CD4EF</TextLink>
                        </TableCell>
                        <TableCell>20/06/2024</TableCell>
                        <TableCell>
                            <StatusBadge appearance="subtle" tone="infoMedium" label="In progress" />
                        </TableCell>
                        <TableCell>
                            <Flex gap={1}>
                                <TextLink href="#">Edit</TextLink>
                                <TextLink href="#">Download</TextLink>
                            </Flex>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell as="th" scope="row" fontWeight="bold">
                            <TextLink href="#">REF-5GH6IJ7K</TextLink>
                        </TableCell>
                        <TableCell>25/06/2024</TableCell>
                        <TableCell>
                            <StatusBadge appearance="subtle" tone="infoMedium" label="In progress" />
                        </TableCell>
                        <TableCell>
                            <Flex gap={1}>
                                <TextLink href="#">Edit</TextLink>
                                <TextLink href="#">Download</TextLink>
                            </Flex>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell as="th" scope="row" fontWeight="bold">
                            <TextLink href="#">REF-M8NO9PQR</TextLink>
                        </TableCell>
                        <TableCell>02/07/2024</TableCell>
                        <TableCell>
                            <StatusBadge appearance="subtle" tone="successMedium" label="Completed" />
                        </TableCell>
                        <TableCell>
                            <Flex gap={1}>
                                <TextLink href="#">Edit</TextLink>
                                <TextLink href="#">Download</TextLink>
                            </Flex>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell as="th" scope="row" fontWeight="bold">
                            <TextLink href="#">REF-S1TU2VWX</TextLink>
                        </TableCell>
                        <TableCell>05/08/2024</TableCell>
                        <TableCell>
                            <StatusBadge appearance="subtle" tone="infoMedium" label="In progress" />
                        </TableCell>
                        <TableCell>
                            <Flex gap={1}>
                                <TextLink href="#">Edit</TextLink>
                                <TextLink href="#">Download</TextLink>
                            </Flex>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell as="th" scope="row" fontWeight="bold">
                            <TextLink href="#">REF-Y3ZA4B5C</TextLink>
                        </TableCell>
                        <TableCell>19/10/2024</TableCell>
                        <TableCell>
                            <StatusBadge appearance="subtle" tone="successMedium" label="Completed" />
                        </TableCell>
                        <TableCell>
                            <Flex gap={1}>
                                <TextLink href="#">Edit</TextLink>
                                <TextLink href="#">Download</TextLink>
                            </Flex>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableWrapper>
}`,...(fe=(Te=Y.parameters)==null?void 0:Te.docs)==null?void 0:fe.source}}};var we,Ce,xe;O.parameters={...O.parameters,docs:{...(we=O.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: 'With selectable rows',
  render: function Render(props) {
    const [selectedRowIds, setSelectedRowIds] = useState<string[]>([]);
    function isRowSelected(rowId: string) {
      return selectedRowIds.includes(rowId);
    }
    function toggleRow(rowId: string) {
      setSelectedRowIds(selectedRowIds => {
        if (selectedRowIds.includes(rowId)) {
          return selectedRowIds.filter(i => i !== rowId);
        } else {
          return [...selectedRowIds, rowId];
        }
      });
    }
    const allRowsSelected = selectedRowIds.length === exampleData.length;
    const isIndeterminate = allRowsSelected ? false : selectedRowIds.length > 0;
    function toggleAllRows() {
      // When no rows are selected or we're indeterminate, on toggle we'll select all rows to match the screen reader announcement
      setSelectedRowIds(allRowsSelected ? [] : exampleData.map(i => i.id));
    }

    // The TableCaption\` component can not be used with selectable tables due to a11y reasons
    // So we need to connect the heading with the table via \`aria-labelledby\`
    const headingId = 'table-heading';
    return <Stack gap={1.5}>
                <H2 id={headingId}>Basic selectable table</H2>
                <Stack gap={0}>
                    <Box paddingLeft={0.75} paddingBottom={0.75} borderBottom>
                        <Checkbox size="sm" checked={allRowsSelected} indeterminate={isIndeterminate} onChange={toggleAllRows}>
                            Select all rows
                        </Checkbox>
                    </Box>
                    <TableWrapper>
                        <Table {...props} aria-labelledby={headingId}>
                            <TableHead>
                                <TableRow>
                                    <TableHeader scope="col">Select</TableHeader>
                                    <TableHeader scope="col">Location</TableHeader>
                                    <TableHeader textAlign="right" scope="col">
                                        Population
                                    </TableHeader>
                                    <TableHeader textAlign="right" scope="col">
                                        Change over previous year %
                                    </TableHeader>
                                    <TableHeader textAlign="right" scope="col">
                                        Change over previous decade %
                                    </TableHeader>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {exampleData.map(({
                id,
                location,
                population,
                growthYear,
                growthDecade
              }) => {
                const isSelected = isRowSelected(id);
                return <TableRow key={id} selected={isSelected}>
                                                <TableCell>
                                                    <Checkbox size="sm" checked={isSelected} onChange={() => toggleRow(id)}>
                                                        <VisuallyHidden>Select {location}</VisuallyHidden>
                                                    </Checkbox>
                                                </TableCell>
                                                <TableCell as="th" scope="row">
                                                    {location}
                                                </TableCell>
                                                <TableCell textAlign="right">
                                                    {numberFormatter.format(population)}
                                                </TableCell>
                                                <TableCell textAlign="right">{growthYear}%</TableCell>
                                                <TableCell textAlign="right">{growthDecade}%</TableCell>
                                            </TableRow>;
              })}
                            </TableBody>
                        </Table>
                    </TableWrapper>
                </Stack>
            </Stack>;
  }
}`,...(xe=(Ce=O.parameters)==null?void 0:Ce.docs)==null?void 0:xe.source}}};var Ae,Se,ke;_.parameters={..._.parameters,docs:{...(Ae=_.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  name: 'With selectable rows and batch actions',
  render: SelectableTableBatchActions
}`,...(ke=(Se=_.parameters)==null?void 0:Se.docs)==null?void 0:ke.source}}};const sa=["Basic","Striped","FixedLayout","AriaRowcount","WithHeading","Actions","SelectableBasic","SelectableWithBatchActions"];export{Y as Actions,M as AriaRowcount,E as Basic,P as FixedLayout,O as SelectableBasic,_ as SelectableWithBatchActions,F as Striped,N as WithHeading,sa as __namedExportsOrder,da as default};
