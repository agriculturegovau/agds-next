import{j as e,a as t}from"./responsive-1d67a6a2.js";import{r as b}from"./index-42611d8b.js";import{a as D}from"./ag.ds-next-react-stack.cjs-f6276bf7.js";import{d as Ne,a as We,c as Fe,b as p,e as Pe}from"./ag.ds-next-react-section-alert.cjs-11772a39.js";import{a as De}from"./ag.ds-next-react-checkbox.cjs-9719003c.js";import{a as S}from"./ag.ds-next-react-button.cjs-71677e19.js";import{a as je}from"./ag.ds-next-react-content.cjs-bbff841f.js";import{a as ne}from"./ag.ds-next-react-heading.cjs-9a51b824.js";import{a as Oe}from"./ag.ds-next-react-text-link.cjs-5cee6993.js";import{a as Z}from"./ag.ds-next-react-flex.cjs-f2764eda.js";import{a as Me}from"./ag.ds-next-react-box.cjs-cf28e632.js";import{a as Ye}from"./ag.ds-next-react-text.cjs-93466e6d.js";import{p as V,E as Ve}from"./utils-a6fafbcf.js";import{a as ee,b as qe}from"./ag.ds-next-react-date-picker.cjs-c13fce67.js";import{a as ze}from"./ag.ds-next-react-text-input.cjs-f90490d9.js";import{a as $e}from"./ag.ds-next-react-form-stack.cjs-5f348e3a.js";import{a as Ge}from"./ag.ds-next-react-search-input.cjs-85813de2.js";import{C as ae}from"./Checkbox-984ef468.js";import{V as Ke}from"./VisuallyHidden-02be915e.js";import{T as Qe}from"./Text-d916011d.js";import{T as f}from"./TextLink-364fb860.js";import"./TextLinkExternal-bdbc9763.js";import{S as _}from"./StatusBadge-1a7c0e25.js";import{S as te,F as E}from"./Stack-43f3e7c4.js";import{B as Ue}from"./Box-0bbf8d6d.js";import{H as Xe,a as Je}from"./Heading-1a35fe7d.js";import{T as H,d as $,f as B,h as m,g as c,c as v,e as n,i as L}from"./TableBatchActionsTitle-6a013c05.js";import"./_commonjsHelpers-042e6b4d.js";import"./noop-eb890146.js";import"./Pagination-13569d02.js";import"./PaginationContainer-a1eb2175.js";import"./Button-e28534e8.js";import"./LoadingBlanket-54fbe64e.js";import"./Content-9704152d.js";import"./BaseContent-14775c7e.js";import"./index-69af556a.js";import"./PageContent-63ae7dc4.js";import"./SectionContent-4758f989.js";import"./ContentBleed-995a257e.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-20aae35f.js";import"./WebsiteIcon-7b03f042.js";import"./CalendarIcon-791c6fea.js";import"./PaginationButtons-1e492907.js";import"./TableHeaderSortable-3b07246b.js";import"./Modal-840f929c.js";import"./index-7a46b491.js";import"./useId-d335a68c.js";import"./useAriaModalPolyfill-a67b2f1a.js";import"./Combination-c1ec471a.js";import"./Drawer-659af13e.js";import"./react-spring-web.esm-e3dcc61e.js";import"./usePrefersReducedMotion-fcdf456e.js";import"./SectionAlert-6e8dc1f7.js";import"./ag.ds-next-react-icon.cjs-3a9514e5.js";import"./utils-951ab468.js";import"./Select-40bff57d.js";import"./Field-20b34c68.js";import"./DatePicker-bde30f85.js";import"./useTernaryState-6ea40a94.js";import"./useClickOutside-f1a14f0e.js";import"./Popover-7f6cfd9c.js";import"./Calendar-0f15ac31.js";import"./DatePickerInput-6534a915.js";import"./TextInput-6e29e5bf.js";import"./DateRangePicker-261209cc.js";import"./useWindowSize-fbc787ee.js";import"./FormStack-d8315e9d.js";import"./SearchInput-00bf8c2f.js";import"./ControlGroupProvider-7b13d7d1.js";import"./ExternalLinkCallout-f28f2061.js";function q({isOpen:a,onConfirm:i,onDismiss:l,itemsToDelete:r}){const[s,o]=b.useState(!1);function w(){o(!0),setTimeout(()=>{o(!1),i()},2e3)}const{title:A,description:x}=b.useMemo(()=>Array.isArray(r)?{title:`Are you sure you want to delete ${r.length} ${V(r.length,"certificate","certificates")}?`,description:"Certificates will be deleted immediately. You can not undo this action."}:{title:"Are you sure you want to delete this certificate?",description:`Certificate ${r.certNumber} will be deleted immediately. You can not undo this action.`},[r]);return e(Ne.Modal,{isOpen:a,onDismiss:l,title:A,actions:t(S.ButtonGroup,{children:[e(S.Button,{loading:s,onClick:w,children:"Delete items"}),e(S.Button,{variant:"secondary",onClick:l,children:"Cancel"})]}),children:e(Ye.Text,{as:"p",children:x})})}try{q.displayName="ModalConfirmDelete",q.__docgenInfo={description:"",displayName:"ModalConfirmDelete",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!0,type:{name:"() => void"}},onDismiss:{defaultValue:null,description:"",name:"onDismiss",required:!0,type:{name:"() => void"}},itemsToDelete:{defaultValue:null,description:"",name:"itemsToDelete",required:!0,type:{name:"{ id: string; certNumber: string; exporter: string; status: string; amount: string; } | { id: string; certNumber: string; exporter: string; status: string; amount: string; }[]"}}}}}catch{}function z({isOpen:a,onConfirm:i,onDismiss:l}){const[r,s]=b.useState(),[o,w]=b.useState(!1);function A(){w(!0),setTimeout(()=>{w(!1),i()},2e3)}return e(We.Drawer,{isOpen:a,onDismiss:l,title:"Add tracking number",actions:t(S.ButtonGroup,{children:[e(S.Button,{loading:o,onClick:A,children:"Add tracking number"}),e(S.Button,{variant:"secondary",onClick:l,children:"Cancel"})]}),children:t($e.FormStack,{children:[e(ee.Select,{label:"How was it sent?",placeholder:"Select option",required:!0,options:[{value:"aus-post",label:"Express post"},{value:"fed-ex",label:"Regular post"}],block:!0}),e(ze.TextInput,{label:"Tracking number",required:!0,block:!0}),e(qe.DatePicker,{label:"Date sent",value:r,onChange:s,required:!0,block:!0})]})})}try{z.displayName="ModalAddTrackingNumber",z.__docgenInfo={description:"",displayName:"ModalAddTrackingNumber",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!0,type:{name:"() => void"}},onDismiss:{defaultValue:null,description:"",name:"onDismiss",required:!0,type:{name:"() => void"}}}}}catch{}function Ze({paginatedData:a}){const[i,l]=b.useState([]),r=b.useMemo(()=>{const d=a.map(h=>h.id);return i.filter(h=>d.includes(h.id)).map(h=>h.id)},[a,i]),s=b.useRef(!1);function o(d){return i.some(h=>h.id===d.id)}function w(d){l(h=>i.some(C=>C.id===d.id)?h.filter(C=>C.id!==d.id):[...h,d])}function A(){return a.every(d=>r.includes(d.id))}function x(){return r.length>0}function k(){r.length===0?l(d=>[...d,...a]):l(d=>d.filter(h=>!r.includes(h.id)))}b.useEffect(()=>{function d(h){s.current=h.key==="Shift"}return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[]);const g=i.length>0,T=A(),R=T?!1:x();return{isTableHeaderChecked:T,isTableHeaderIndeterminate:R,selectedItems:i,setSelectedItems:l,isRowSelected:o,toggleRowSelected:w,toggleAllRows:k,hasSelections:g}}function et(){const[a,i]=b.useState();function l(o){i({ref:b.createRef(),dismissed:!1,message:o})}function r(){i(void 0)}function s(){return a&&!a.dismissed?e(Fe.SectionAlert,{ref:a.ref,tabIndex:-1,tone:"success",onDismiss:()=>r(),title:a.message}):null}return b.useLayoutEffect(()=>{var o;(o=a==null?void 0:a.ref.current)==null||o.focus()},[a]),{addNotification:l,renderNotification:s}}function tt(){return t(Z.Flex,{flexDirection:["column","row"],justifyContent:"space-between",gap:1,paddingBottom:1,borderBottom:!0,children:[t(Z.Flex,{gap:1,children:[e(Ge.SearchInput,{label:"Search certificates",hideOptionalLabel:!0}),e(ee.Select,{label:"Status",options:[{label:"All",value:"all"}],hideOptionalLabel:!0})]}),e(ee.Select,{label:"Sort by",options:[{label:"Last modified",value:"last modified"}],hideOptionalLabel:!0})]})}const J=20;function nt(){const[a,i]=b.useState(1),[l,r]=b.useState(Ve),s=l.length?l.slice((a-1)*J,a*J):[],o=Math.ceil(l.length/J),{hasSelections:w,isRowSelected:A,selectedItems:x,setSelectedItems:k,isTableHeaderChecked:g,isTableHeaderIndeterminate:T,toggleAllRows:R,toggleRowSelected:d}=Ze({data:l,paginatedData:s}),{renderNotification:h,addNotification:C}=et(),[G,K]=b.useState(!1),[Be,Q]=b.useState(!1);function ve(){const u=x.length;k([]),K(!1),C(`Successfully added tracking numbers to ${u} ${V(u,"item","items")}.`)}function Le(){const u=x.length;r(U=>U.filter(X=>!x.map(Ie=>Ie.id).includes(X.id))),k([]),Q(!1),C(`Successfully deleted ${u} ${V(u,"item","items")}.`)}function _e(u){r(U=>U.filter(X=>X.id!==u.id)),C(`Successfully deleted certificate ${u.certNumber}.`)}function Ee(u){C(`Successfully added tracking number to certificate ${u.certNumber}.`)}return t(je.PageContent,{children:[t(D.Stack,{gap:1.5,children:[e(ne.H2,{id:"certificates-heading",children:"Certificates"}),t(D.Stack,{gap:1,children:[h(),e(tt,{}),t(D.Stack,{gap:0,children:[e(Me.Box,{paddingLeft:.75,paddingBottom:1,borderBottom:!0,children:e(De.Checkbox,{size:"sm",checked:g,indeterminate:T,onChange:R,children:"Select all rows"})}),s.length?t(D.Stack,{gap:1,children:[t(D.Stack,{gap:.5,children:[e(p.TableWrapper,{children:t(p.Table,{striped:!0,"aria-labelledby":"certificates-heading",children:[e(p.TableHead,{children:t(p.TableRow,{children:[e(p.TableHeader,{scope:"col",width:"6rem",children:"Select"}),e(p.TableHeader,{scope:"col",children:"Certificate number"}),e(p.TableHeader,{scope:"col",children:"Exporter"}),e(p.TableHeader,{scope:"col",children:"Date Issued"}),e(p.TableHeader,{scope:"col",children:"Status"}),e(p.TableHeader,{scope:"col",children:"Amount"}),e(p.TableHeader,{scope:"col",children:"Actions"})]})}),e(p.TableBody,{children:s.map(u=>e(at,{item:u,isRowSelected:A(u),onRowSelectToggle:()=>d(u),addTrackingNumber:()=>Ee(u),deleteRow:()=>_e(u)},u.id))})]})}),w&&t(p.TableBatchActionsBar,{children:[t(p.TableBatchActionsTitle,{children:["Apply action to ",x.length," ",V(x.length,"item","items")]}),t(S.ButtonGroup,{children:[e(S.Button,{variant:"secondary",size:"sm",onClick:()=>K(!0),children:"Add tracking number"}),e(S.Button,{variant:"secondary",size:"sm",onClick:()=>Q(!0),children:"Delete"}),e(S.Button,{variant:"tertiary",size:"sm",onClick:R,children:"Cancel"})]})]})]}),e(Pe.PaginationButtons,{currentPage:a,onChange:i,totalPages:o})]}):e(D.Stack,{paddingY:1,children:e(ne.Heading,{type:"h3",fontSize:"lg",children:"No certificates found"})})]})]})]}),e(q,{itemsToDelete:x,isOpen:Be,onDismiss:()=>Q(!1),onConfirm:Le}),e(z,{isOpen:G,onDismiss:()=>K(!1),onConfirm:ve})]})}function at({item:a,isRowSelected:i,onRowSelectToggle:l,deleteRow:r,addTrackingNumber:s}){const{certNumber:o,exporter:w,status:A,amount:x}=a,[k,g]=b.useState(!1);function T(){g(!0)}function R(){r(),g(!1)}const[d,h]=b.useState(!1);function C(){h(!0)}function G(){h(!1),s()}return t(b.Fragment,{children:[t(p.TableRow,{selected:i,children:[e(p.TableCell,{children:e(De.Checkbox,{size:"sm",checked:i,onChange:l,"aria-label":`Select certificate ${o}`})}),e(p.TableCell,{as:"th",scope:"row",fontWeight:"bold",children:e(Oe.TextLink,{href:"#",children:o})}),e(p.TableCell,{children:w}),e(p.TableCell,{children:"11/02/22 14:06"}),e(p.TableCell,{children:A}),e(p.TableCell,{children:x}),e(p.TableCell,{children:t(Z.Flex,{gap:1,children:[e(S.Button,{variant:"text",onClick:C,children:"Add tracking number"}),e(S.Button,{variant:"text",onClick:T,children:"Delete"})]})})]}),e(q,{itemsToDelete:a,isOpen:k,onDismiss:()=>g(!1),onConfirm:R}),e(z,{isOpen:d,onDismiss:()=>h(!1),onConfirm:G})]})}const Sn={title:"content/Table",component:H,render:a=>e(L,{children:t(H,{...a,children:[e($,{children:"Population of Australian states and territories, December 2015"}),e(B,{children:t(m,{children:[e(c,{scope:"col",children:"Location"}),e(c,{textAlign:"right",scope:"col",children:"Population"}),e(c,{textAlign:"right",scope:"col",children:"Change over previous year %"}),e(c,{textAlign:"right",scope:"col",children:"Change over previous decade %"})]})}),e(v,{children:y.map(({location:i,population:l,growthYear:r,growthDecade:s},o)=>t(m,{children:[e(n,{as:"th",scope:"row",children:i}),e(n,{textAlign:"right",children:I.format(l)}),t(n,{textAlign:"right",children:[r,"%"]}),t(n,{textAlign:"right",children:[s,"%"]})]},o))})]})})},N={args:{}},W={name:"With striped rows",args:{striped:!0}},F={name:"With fixed layout",args:{tableLayout:"fixed"},render:a=>e(L,{children:t(H,{...a,children:[e($,{children:"Population of Australian states and territories, December 2015"}),e(B,{children:t(m,{children:[e(c,{scope:"col",width:{xs:"14rem",md:"40%"},children:"Location"}),e(c,{scope:"col",textAlign:"right",width:{xs:"10rem",md:"20%"},children:"Population"}),e(c,{scope:"col",textAlign:"right",width:{xs:"14rem",md:"20%"},children:"Change over previous year %"}),e(c,{scope:"col",textAlign:"right",width:{xs:"14rem",md:"20%"},children:"Change over previous decade %"})]})}),e(v,{children:y.map(({location:i,population:l,growthYear:r,growthDecade:s},o)=>t(m,{children:[e(n,{as:"th",scope:"row",children:i}),e(n,{textAlign:"right",children:I.format(l)}),t(n,{textAlign:"right",children:[r,"%"]}),t(n,{textAlign:"right",children:[s,"%"]})]},o))})]})})},P={name:"With aria-rowcount",render:a=>e(L,{children:t(H,{"aria-rowcount":y.length+1,...a,children:[e($,{children:"Population of Australian states and territories, December 2015"}),e(B,{children:t(m,{"aria-rowindex":1,children:[e(c,{scope:"col",width:{xs:"14rem",md:"40%"},children:"Location"}),e(c,{scope:"col",textAlign:"right",width:{xs:"10rem",md:"20%"},children:"Population"}),e(c,{scope:"col",textAlign:"right",width:{xs:"14rem",md:"20%"},children:"Change over previous year %"}),e(c,{scope:"col",textAlign:"right",width:{xs:"14rem",md:"20%"},children:"Change over previous decade %"})]})}),e(v,{children:y.map(({location:i,population:l,growthYear:r,growthDecade:s},o)=>t(m,{"aria-rowindex":o+2,children:[e(n,{as:"th",scope:"row",children:i}),e(n,{textAlign:"right",children:I.format(l)}),t(n,{textAlign:"right",children:[r,"%"]}),t(n,{textAlign:"right",children:[s,"%"]})]},o))})]})})},j={name:"With heading",args:{},render:a=>t(te,{gap:1,children:[e(Xe,{id:"table-heading",children:"Population"}),e(Qe,{id:"table-description",children:"Population of Australian states and territories, December 2015."}),e(L,{children:t(H,{"aria-labelledby":"table-heading","aria-describedby":"table-description",...a,children:[e(B,{children:t(m,{children:[e(c,{scope:"col",children:"Location"}),e(c,{textAlign:"right",scope:"col",children:"Population"}),e(c,{textAlign:"right",scope:"col",children:"Change over previous year %"}),e(c,{textAlign:"right",scope:"col",children:"Change over previous decade %"})]})}),e(v,{children:y.map(({location:i,population:l,growthYear:r,growthDecade:s},o)=>t(m,{children:[e(n,{as:"th",scope:"row",children:i}),e(n,{textAlign:"right",children:I.format(l)}),t(n,{textAlign:"right",children:[r,"%"]}),t(n,{textAlign:"right",children:[s,"%"]})]},o))})]})})]})},O={name:"With row actions",args:{},render:a=>e(L,{children:t(H,{...a,children:[e($,{children:"Applications"}),e(B,{children:t(m,{children:[e(c,{scope:"col",children:"Reference"}),e(c,{scope:"col",children:"Date submitted"}),e(c,{scope:"col",children:"Status"}),e(c,{scope:"col",children:"Actions"})]})}),t(v,{children:[t(m,{children:[e(n,{as:"th",scope:"row",fontWeight:"bold",children:e(f,{href:"#",children:"REF-AB3CD4EF"})}),e(n,{children:"20/06/2024"}),e(n,{children:e(_,{weight:"subtle",tone:"info",label:"In progress"})}),e(n,{children:t(E,{gap:1,children:[e(f,{href:"#",children:"Edit"}),e(f,{href:"#",children:"Download"})]})})]}),t(m,{children:[e(n,{as:"th",scope:"row",fontWeight:"bold",children:e(f,{href:"#",children:"REF-5GH6IJ7K"})}),e(n,{children:"25/06/2024"}),e(n,{children:e(_,{weight:"subtle",tone:"info",label:"In progress"})}),e(n,{children:t(E,{gap:1,children:[e(f,{href:"#",children:"Edit"}),e(f,{href:"#",children:"Download"})]})})]}),t(m,{children:[e(n,{as:"th",scope:"row",fontWeight:"bold",children:e(f,{href:"#",children:"REF-M8NO9PQR"})}),e(n,{children:"02/07/2024"}),e(n,{children:e(_,{weight:"subtle",tone:"success",label:"Completed"})}),e(n,{children:t(E,{gap:1,children:[e(f,{href:"#",children:"Edit"}),e(f,{href:"#",children:"Download"})]})})]}),t(m,{children:[e(n,{as:"th",scope:"row",fontWeight:"bold",children:e(f,{href:"#",children:"REF-S1TU2VWX"})}),e(n,{children:"05/08/2024"}),e(n,{children:e(_,{weight:"subtle",tone:"info",label:"In progress"})}),e(n,{children:t(E,{gap:1,children:[e(f,{href:"#",children:"Edit"}),e(f,{href:"#",children:"Download"})]})})]}),t(m,{children:[e(n,{as:"th",scope:"row",fontWeight:"bold",children:e(f,{href:"#",children:"REF-Y3ZA4B5C"})}),e(n,{children:"19/10/2024"}),e(n,{children:e(_,{weight:"subtle",tone:"success",label:"Completed"})}),e(n,{children:t(E,{gap:1,children:[e(f,{href:"#",children:"Edit"}),e(f,{href:"#",children:"Download"})]})})]})]})]})})},M={name:"With selectable rows",render:function(i){const[l,r]=b.useState([]);function s(g){return l.includes(g)}function o(g){r(T=>T.includes(g)?T.filter(R=>R!==g):[...T,g])}const w=l.length===y.length,A=w?!1:l.length>0;function x(){const g=l.length===0;r(g?y.map(T=>T.id):[])}const k="table-heading";return t(te,{gap:1.5,children:[e(Je,{id:k,children:"Basic selectable table"}),t(te,{gap:0,children:[e(Ue,{paddingLeft:.75,paddingBottom:.75,borderBottom:!0,children:e(ae,{size:"sm",checked:w,indeterminate:A,onChange:x,children:"Select all rows"})}),e(L,{children:t(H,{...i,"aria-labelledby":k,children:[e(B,{children:t(m,{children:[e(c,{scope:"col",children:"Select"}),e(c,{scope:"col",children:"Location"}),e(c,{textAlign:"right",scope:"col",children:"Population"}),e(c,{textAlign:"right",scope:"col",children:"Change over previous year %"}),e(c,{textAlign:"right",scope:"col",children:"Change over previous decade %"})]})}),e(v,{children:y.map(({id:g,location:T,population:R,growthYear:d,growthDecade:h})=>{const C=s(g);return t(m,{selected:C,children:[e(n,{children:e(ae,{size:"sm",checked:C,onChange:()=>o(g),children:t(Ke,{children:["Select ",T]})})}),e(n,{as:"th",scope:"row",children:T}),e(n,{textAlign:"right",children:I.format(R)}),t(n,{textAlign:"right",children:[d,"%"]}),t(n,{textAlign:"right",children:[h,"%"]})]},g)})})]})})]})]})}},Y={name:"With selectable rows and batch actions",render:nt},y=[{id:"nsw",location:"New South Wales",population:7670700,growthYear:3.1,growthDecade:12.9},{id:"vic",location:"Victoria",population:5996400,growthYear:2.5,growthDecade:9.3},{id:"qld",location:"Queensland",population:4808800,growthYear:1.7,growthDecade:13.3},{id:"wa",location:"Western Australia",population:2603900,growthYear:2.3,growthDecade:11.6},{id:"sa",location:"South Australia",population:1702800,growthYear:2,growthDecade:6.8},{id:"tas",location:"Tasmania",population:517400,growthYear:4,growthDecade:5.3},{id:"nt",location:"Northern Territory",population:244400,growthYear:1.2,growthDecade:4.5},{id:"act",location:"Australian Capital Territory",population:393e3,growthYear:2.4,growthDecade:9.6}],I=new Intl.NumberFormat("en-AU");var le,re,ie;N.parameters={...N.parameters,docs:{...(le=N.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {}
}`,...(ie=(re=N.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var oe,ce,se;W.parameters={...W.parameters,docs:{...(oe=W.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'With striped rows',
  args: {
    striped: true
  }
}`,...(se=(ce=W.parameters)==null?void 0:ce.docs)==null?void 0:se.source}}};var de,he,pe;F.parameters={...F.parameters,docs:{...(de=F.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(pe=(he=F.parameters)==null?void 0:he.docs)==null?void 0:pe.source}}};var ge,be,ue;P.parameters={...P.parameters,docs:{...(ge=P.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ue=(be=P.parameters)==null?void 0:be.docs)==null?void 0:ue.source}}};var me,Te,fe;j.parameters={...j.parameters,docs:{...(me=j.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(fe=(Te=j.parameters)==null?void 0:Te.docs)==null?void 0:fe.source}}};var xe,we,Ce;O.parameters={...O.parameters,docs:{...(xe=O.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
                            <StatusBadge weight="subtle" tone="info" label="In progress" />
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
                            <StatusBadge weight="subtle" tone="info" label="In progress" />
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
                            <StatusBadge weight="subtle" tone="success" label="Completed" />
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
                            <StatusBadge weight="subtle" tone="info" label="In progress" />
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
                            <StatusBadge weight="subtle" tone="success" label="Completed" />
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
}`,...(Ce=(we=O.parameters)==null?void 0:we.docs)==null?void 0:Ce.source}}};var Se,Ae,Re;M.parameters={...M.parameters,docs:{...(Se=M.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
      // When no rows are selected, select every row
      // When any row is selected, deselect every row
      const noRowsSelected = selectedRowIds.length === 0;
      setSelectedRowIds(noRowsSelected ? exampleData.map(i => i.id) : []);
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
}`,...(Re=(Ae=M.parameters)==null?void 0:Ae.docs)==null?void 0:Re.source}}};var ke,ye,He;Y.parameters={...Y.parameters,docs:{...(ke=Y.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  name: 'With selectable rows and batch actions',
  render: SelectableTableBatchActions
}`,...(He=(ye=Y.parameters)==null?void 0:ye.docs)==null?void 0:He.source}}};const An=["Basic","Striped","FixedLayout","AriaRowcount","WithHeading","Actions","SelectableBasic","SelectableWithBatchActions"];export{O as Actions,P as AriaRowcount,N as Basic,F as FixedLayout,M as SelectableBasic,Y as SelectableWithBatchActions,W as Striped,j as WithHeading,An as __namedExportsOrder,Sn as default};
