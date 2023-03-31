import{j as t,a as h,t as v,m,B as T,G as I}from"./Box-e652c7f2.js";import{a as c}from"./Button-ffb9a9d6.js";import{B as S}from"./ButtonGroup-75f04ad3.js";import{r as u}from"./index-42611d8b.js";import{u as w}from"./useTernaryState-6ea40a94.js";import{T as C}from"./Text-51e6146a.js";import{r as D}from"./index-7a46b491.js";import{F as N}from"./Combination-c1ec471a.js";import{a as E,u as q,b as V}from"./react-spring-web.esm-92c11c75.js";import{S as A}from"./Stack-4546232d.js";import{c as G}from"./WebsiteIcon-f0b253fc.js";import"./CalendarIcon-16f5268f.js";import{u as R}from"./useId-9773510a.js";import"./LoadingBlanket-2ea81d60.js";import"./Content-e54e3b95.js";import"./BaseContent-1f85429f.js";import"./PageContent-3fd36d19.js";import"./SectionContent-a2643fbb.js";import"./ContentBleed-5b1d8d06.js";import"./VisuallyHidden-315ab967.js";import"./mergeRefs-868b543a.js";import"./_commonjsHelpers-042e6b4d.js";const b=u.forwardRef(function({children:a},o){return t("div",{ref:o,css:{position:"fixed",top:0,left:0,bottom:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.8)",zIndex:100,overflowY:"auto"},children:a})});try{b.displayName="ModalCover",b.__docgenInfo={description:"",displayName:"ModalCover",props:{}}}catch{}const _=({children:e,id:a})=>t(C,{as:"h2",fontSize:"lg",fontWeight:"bold",lineHeight:"heading",id:a,"data-autofocus":!0,focus:!0,tabIndex:-1,children:e});try{_.displayName="ModalTitle",_.__docgenInfo={description:"",displayName:"ModalTitle",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const F=()=>({titleId:`modal-${R()}-title`}),O=E(A),M=({actions:e,children:a,title:o,onDismiss:l})=>{const{titleId:p}=F(),d=q(),n=V({from:{y:20,opacity:0},to:{y:0,opacity:1},immediate:d});return t(N,{returnFocus:!0,children:h(O,{role:"dialog","aria-modal":"true",background:"body","aria-labelledby":p,rounded:!0,focus:!0,padding:1.5,paddingTop:4,gap:1,maxWidth:v.maxWidth.modalDialog,css:{position:"relative",margin:"0 auto",minHeight:"100vh",[v.mediaQuery.min.sm]:{margin:`${m(6)} auto ${m(1)}`,minHeight:"auto"}},style:n,children:[t(_,{id:p,children:o}),t(T,{children:a}),e?t(T,{paddingTop:1,css:{marginTop:"auto"},children:e}):null,t(c,{variant:"tertiary","aria-label":"Close modal",onClick:l,iconAfter:G,css:{position:"absolute",top:m(.5),right:m(.5)},children:"Close"})]})})};try{M.displayName="ModalDialog",M.__docgenInfo={description:"",displayName:"ModalDialog",props:{actions:{defaultValue:null,description:"The actions to display at the bottom of the modal panel. Typically a `ButtonGroup`.",name:"actions",required:!1,type:{name:"ReactNode"}},onDismiss:{defaultValue:null,description:"Function to be called when the modal is closed.",name:"onDismiss",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"The title of the modal dialog. It can span lines but should not be too long.",name:"title",required:!0,type:{name:"string"}}}}}catch{}const y=({actions:e,children:a,isOpen:o=!1,onDismiss:l,title:p})=>{const d=u.useRef(null);return u.useEffect(()=>{const n=i=>{o&&i.code==="Escape"&&(i.preventDefault(),i.stopPropagation(),l())};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[o,l]),u.useEffect(()=>{if(!o||!d.current)return;const n=[],i=[];return document.querySelectorAll("body > *").forEach(function(r){if(r===d.current)return;const s=r.getAttribute("aria-hidden");s!==null&&s!=="false"||(n.push(r),i.push(s),r.setAttribute("aria-hidden","true"))}),()=>{n.forEach((r,s)=>{const g=i[s];g===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",g)})}},[o]),o?D.createPortal(h(u.Fragment,{children:[t(H,{}),t(b,{ref:d,children:t(M,{onDismiss:l,title:p,actions:e,children:a})})]}),document.body):null},H=()=>t(I,{styles:{body:{overflow:"hidden"}}});try{y.displayName="Modal",y.__docgenInfo={description:"",displayName:"Modal",props:{actions:{defaultValue:null,description:"The actions to display at the bottom of the modal panel. Typically a `ButtonGroup`.",name:"actions",required:!1,type:{name:"ReactNode"}},onDismiss:{defaultValue:null,description:"Function to be called when the modal is closed.",name:"onDismiss",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"The title of the modal dialog. It can span lines but should not be too long.",name:"title",required:!0,type:{name:"string"}},isOpen:{defaultValue:{value:"false"},description:"If true, the modal will be rendered.",name:"isOpen",required:!1,type:{name:"boolean"}}}}}catch{}const st={title:"content/Modal",component:y},f=()=>{const[e,a,o]=w(!1);return h("div",{children:[t(c,{onClick:a,children:"Open modal"}),t(y,{isOpen:e,onDismiss:o,title:"This is the title of the modal dialog, it can span lines but should not be too long.",actions:h(S,{children:[t(c,{onClick:o,children:"Primary button"}),t(c,{variant:"secondary",onClick:o,children:"Secondary button"}),t(c,{variant:"tertiary",onClick:o,children:"Tertiary button"})]}),children:t(C,{as:"p",children:"This is the Modal Body paragraph, it provides detailed instruction and context for the the modal action. It can also span lines but long form content should be avoided."})})]})};var B,k,x;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const [isModalOpen, openModal, closeModal] = useTernaryState(false);
  return <div>
            <Button onClick={openModal}>Open modal</Button>
            <Modal isOpen={isModalOpen} onDismiss={closeModal} title="This is the title of the modal dialog, it can span lines but should not be too long." actions={<ButtonGroup>
                        <Button onClick={closeModal}>Primary button</Button>
                        <Button variant="secondary" onClick={closeModal}>
                            Secondary button
                        </Button>
                        <Button variant="tertiary" onClick={closeModal}>
                            Tertiary button
                        </Button>
                    </ButtonGroup>}>
                <Text as="p">
                    This is the Modal Body paragraph, it provides detailed instruction and
                    context for the the modal action. It can also span lines but long form
                    content should be avoided.
                </Text>
            </Modal>
        </div>;
}`,...(x=(k=f.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const ct=["Basic"];export{f as Basic,ct as __namedExportsOrder,st as default};
//# sourceMappingURL=Modal.stories-4b176e84.js.map
