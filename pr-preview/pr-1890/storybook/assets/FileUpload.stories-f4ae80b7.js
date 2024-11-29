import{j as a,a as q}from"./responsive-22d1c539.js";import{r as m}from"./index-f0f3a68d.js";import{c as Se,a as ye,u as Ee,o as Ie,C as Ue}from"./object-d684972e.js";import{F as De}from"./FormStack-3173ac7e.js";import{B as Te}from"./Button-1a082b6d.js";import"./ButtonGroup-5c583b5f.js";import{a as je}from"./LoadingBlanket-5db8d8aa.js";import{F as c}from"./FileUpload-e3616255.js";import{c as qe,a as l}from"./test-utils-7ee87c70.js";import"./jsx-runtime-70d19cdc.js";import"./_commonjsHelpers-23102255.js";import"./Stack-e6a92433.js";import"./Box-cc8e6f8e.js";import"./mergeRefs-868b543a.js";import"./Content-a73dd057.js";import"./BaseContent-b4d619b8.js";import"./index-e937ffd1.js";import"./PageContent-28150522.js";import"./SectionContent-238a39dc.js";import"./ContentBleed-4d1b344d.js";import"./Text-03708b2d.js";import"./ExternalLinkCallout-896682bb.js";import"./index-1f6fda92.js";import"./utils-a6902619.js";import"./useId-bf1c3739.js";import"./Field-d96b22a3.js";import"./WebsiteIcon-da68083c.js";import"./UnorderedList-c9f30bac.js";import"./ListItem-aaab0c0d.js";import"./OrderedList-078cc31c.js";import"./SectionAlert-5ae0148c.js";import"./useFocus-833e9cfe.js";import"./getCloseHandler-d347a0fa.js";import"./ag.ds-next-react-icon.cjs-083dd133.js";import"./noop-eb890146.js";import"./utils-9decc09b.js";import"./FileUploadExistingFileList-c797fdcd.js";import"./FileUploadExistingFile-7ec46b1e.js";import"./TextLink-a2918464.js";import"./TextLinkExternal-918028c1.js";import"./FileUploadFileThumbnail-3315b5f7.js";import"./FileUploadFileList-54d4b8a1.js";import"./FileUploadFile-4cdbd66a.js";const ya={title:"forms/FileUpload",component:c,render:function({value:t=[],...i}){const[o,s]=m.useState(t);return a(c,{...i,value:o,onChange:s})},args:{hideThumbnails:!1}},ze=qe(),p={args:{label:"Driver’s licence"}},u={args:{label:"Driver’s licence",value:[ze]}},d={args:{label:"Driver’s licence",required:!0}},g={args:{label:"Driver’s licence",hideOptionalLabel:!0}},f={args:{label:"Driver’s licence",disabled:!0}},h={args:{label:"Driver’s licence",message:"Please choose a valid file",invalid:!0}},v={args:{label:"Identity documents",multiple:!0,maxFiles:5}},b={args:{label:"Identity documents",required:!0,hint:"May include images of your passport, driver’s licence etc.",maxSize:400,accept:["image/gif","image/jpeg","image/png","application/pdf","application/msword","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],multiple:!0,maxFiles:3}},x={args:{label:"Upload JavaScript file",accept:[{mimeType:"text/javascript",extensions:[".js"]}]}},F={args:{label:"Photos from your holiday",maxSize:2e3,maxFiles:3,accept:["image/jpeg","image/png","image/heic"],multiple:!0,value:[l(),l(),l()]}},S={args:{label:"Driver’s licence",hideThumbnails:!0,value:[l(),l(),l()]}},y={args:{label:"Photos from your holiday",multiple:!0,maxFiles:3},render:r=>a(Oe,{...r})},Oe=r=>{const[t,i]=m.useState([]);return a(c,{...r,value:t,onChange:s=>{i(s.map(e=>((!e.status||e.status==="none")&&(e.status="uploading"),e))),setTimeout(()=>{i(s.map(e=>(e.status==="uploading"&&(e.status="success",e.href="#"),e)))},3e3)}})},E={args:{label:"Upload evidence",hint:"General hint information",maxSize:1e5,multiple:!1,required:!0},render:r=>a(Re,{...r})},Re=r=>{const[t,i]=m.useState(!1),o=Se({file:ye().required("Select a file to upload")}).required(),{control:s,handleSubmit:e}=Ee({defaultValues:{file:[]},resolver:Ie(o)});return a("form",{onSubmit:e(async n=>{i(!0),console.log({data:n}),setTimeout(()=>{i(!1)},2e3)},n=>{console.error(n)}),noValidate:!0,children:q(De,{children:[a(Ue,{control:s,name:"file",render:({field:{value:n,onChange:U,onBlur:be,name:xe},fieldState:{invalid:Fe,error:D}})=>q("div",{css:{position:"relative"},children:[a(c,{...r,id:"file",accept:["image/jpeg","image/png"],maxSize:500,multiple:!1,value:n,onChange:U,onBlur:be,name:xe,invalid:Fe,message:D==null?void 0:D.message,required:!0}),t&&a(je,{label:"Uploading file"})]})}),a("div",{children:a(Te,{type:"submit",loading:t,children:"Submit evidence"})})]})})},I={args:{label:"Upload evidence",hint:"General hint information"},render:function(t){const[i,o]=m.useState([]),[s,e]=m.useState([{name:"police-check.pdf",size:1e5},{name:"example.png",size:123456,thumbnailSrc:"https://via.placeholder.com/150",href:"#",meta:{uid:"abc-def",bucketId:"123-456"}}]);function T(j){e(n=>n.filter(({name:U})=>U!==j.name))}return a(c,{...t,value:i,onChange:o,existingFiles:s,onRemoveExistingFile:T})}};var z,O,R;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Driver’s licence'
  }
}`,...(R=(O=p.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var k,C,P;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Driver’s licence',
    value: [exampleFile]
  }
}`,...(P=(C=u.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var V,M,w;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Driver’s licence',
    required: true
  }
}`,...(w=(M=d.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var B,L,A;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Driver’s licence',
    hideOptionalLabel: true
  }
}`,...(A=(L=g.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var G,H,J;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: 'Driver’s licence',
    disabled: true
  }
}`,...(J=(H=f.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var _,W,$;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Driver’s licence',
    message: 'Please choose a valid file',
    invalid: true
  }
}`,...($=(W=h.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var K,N,Q;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    label: 'Identity documents',
    multiple: true,
    maxFiles: 5
  }
}`,...(Q=(N=v.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var X,Y,Z;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: 'Identity documents',
    required: true,
    hint: 'May include images of your passport, driver’s licence etc.',
    maxSize: 400,
    accept: ['image/gif', 'image/jpeg', 'image/png', 'application/pdf', 'application/msword', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
    multiple: true,
    maxFiles: 3
  }
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,re;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    label: 'Upload JavaScript file',
    accept: [{
      mimeType: 'text/javascript',
      extensions: ['.js']
    }]
  }
}`,...(re=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ie,te,se;F.parameters={...F.parameters,docs:{...(ie=F.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    label: 'Photos from your holiday',
    maxSize: 2000,
    maxFiles: 3,
    accept: ['image/jpeg', 'image/png', 'image/heic'],
    multiple: true,
    value: [createExampleImageFile(), createExampleImageFile(), createExampleImageFile()]
  }
}`,...(se=(te=F.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ne,oe,le;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    label: 'Driver’s licence',
    hideThumbnails: true,
    value: [createExampleImageFile(), createExampleImageFile(), createExampleImageFile()]
  }
}`,...(le=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var me,ce,pe;y.parameters={...y.parameters,docs:{...(me=y.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    label: 'Photos from your holiday',
    multiple: true,
    maxFiles: 3
  },
  render: args => <InstantUploadTemplate {...args} />
}`,...(pe=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var ue,de,ge;E.parameters={...E.parameters,docs:{...(ue=E.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    label: 'Upload evidence',
    hint: 'General hint information',
    maxSize: 100000,
    multiple: false,
    required: true
  },
  render: args => <UploadSingleFileOnSubmitTemplate {...args} />
}`,...(ge=(de=E.parameters)==null?void 0:de.docs)==null?void 0:ge.source}}};var fe,he,ve;I.parameters={...I.parameters,docs:{...(fe=I.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    label: 'Upload evidence',
    hint: 'General hint information'
  },
  render: function Render(args) {
    const [value, setValue] = useState<FileWithStatus[]>([]);
    const [existingFiles, setExistingFiles] = useState<ExistingFile[]>([{
      name: 'police-check.pdf',
      size: 100000
    }, {
      name: 'example.png',
      size: 123456,
      thumbnailSrc: 'https://via.placeholder.com/150',
      href: '#',
      // Use the meta key to keep track of any extra file info
      // This can be useful info when deleting the file
      meta: {
        uid: 'abc-def',
        bucketId: '123-456'
      }
    }]);
    function onRemoveExistingFile(fileToRemove: ExistingFile) {
      setExistingFiles(existingFiles => existingFiles.filter(({
        name
      }) => name !== fileToRemove.name));
    }
    return <FileUpload {...args} value={value} onChange={setValue} existingFiles={existingFiles} onRemoveExistingFile={onRemoveExistingFile} />;
  }
}`,...(ve=(he=I.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};const Ea=["Basic","Populated","Required","HideOptionalLabel","Disabled","Invalid","MultipleFiles","OnlyAcceptedFormats","CustomAcceptedFormats","MultipleImages","HiddenThumbnails","InstantUpload","UploadSingleFileOnSubmit","ExistingFiles"];export{p as Basic,x as CustomAcceptedFormats,f as Disabled,I as ExistingFiles,S as HiddenThumbnails,g as HideOptionalLabel,y as InstantUpload,h as Invalid,v as MultipleFiles,F as MultipleImages,b as OnlyAcceptedFormats,u as Populated,d as Required,E as UploadSingleFileOnSubmit,Ea as __namedExportsOrder,ya as default};
