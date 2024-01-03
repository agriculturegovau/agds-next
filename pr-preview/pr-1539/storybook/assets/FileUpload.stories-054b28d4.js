import{j as a,a as q}from"./responsive-1d67a6a2.js";import{r as l}from"./index-42611d8b.js";import{c as Fe,f as ye,u as Ee,o as Ue,C as Ie}from"./object-8948e8e4.js";import{F as De}from"./FormStack-d8315e9d.js";import{B as Te}from"./Button-e28534e8.js";import"./ButtonGroup-20aae35f.js";import{L as je}from"./LoadingBlanket-54fbe64e.js";import{F as c}from"./FileUpload-472baa0a.js";import{c as qe,a as D}from"./test-utils-bb61fe25.js";import"./_commonjsHelpers-042e6b4d.js";import"./mapValues-9b563f04.js";import"./Stack-43f3e7c4.js";import"./Box-0bbf8d6d.js";import"./mergeRefs-868b543a.js";import"./Content-9704152d.js";import"./BaseContent-14775c7e.js";import"./index-69af556a.js";import"./PageContent-63ae7dc4.js";import"./SectionContent-4758f989.js";import"./ContentBleed-995a257e.js";import"./Text-d916011d.js";import"./VisuallyHidden-02be915e.js";import"./index-4d501b15.js";import"./tslib.es6-44ce41f1.js";import"./Field-20b34c68.js";import"./useId-d335a68c.js";import"./WebsiteIcon-7b03f042.js";import"./CalendarIcon-791c6fea.js";import"./FileUploadRejectedFileList-938f07cc.js";import"./FileUploadRejectedFile-91fdc7b1.js";import"./FileUploadFileThumbnail-be543fe8.js";import"./FileUploadFileList-69a1b783.js";import"./FileUploadFile-4515e4e3.js";import"./TextLink-364fb860.js";import"./TextLinkExternal-bdbc9763.js";import"./ExternalLinkCallout-f28f2061.js";import"./FileUploadExistingFileList-acc74ac4.js";import"./FileUploadExistingFile-d5538e17.js";const ha={title:"forms/FileUpload",component:c,render:function({value:s=[],...t}){const[o,i]=l.useState(s);return a(c,{...t,value:o,onChange:i})},args:{hideThumbnails:!1}},ze=qe(),m={args:{label:"Drivers licence"}},p={args:{label:"Drivers licence",value:[ze]}},u={args:{label:"Drivers licence",required:!0}},d={args:{label:"Drivers licence",hideOptionalLabel:!0}},g={args:{label:"Drivers licence",disabled:!0}},f={args:{label:"Drivers licence",message:"Please choose a valid file",invalid:!0}},b={args:{label:"Identity documents",multiple:!0}},h={args:{label:"Identity documents",required:!0,hint:"May include images of your passport, drivers licence etc.",maxSize:200,accept:["image/jpeg","image/png","application/pdf","application/msword","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],multiple:!0}},v={args:{label:"Upload JavaScript file",accept:[{mimeType:"text/javascript",extensions:[".js"]}]}},x={args:{label:"Photos from your holiday",maxSize:2e3,maxFiles:3,accept:["image/jpeg","image/png","image/heic"],multiple:!0,value:[D(),D(),D()]}},S={args:{label:"Drivers licence",hideThumbnails:!0}},F={args:{label:"Photos from your holiday",multiple:!0,maxFiles:3},render:r=>a(Oe,{...r})},Oe=r=>{const[s,t]=l.useState([]);return a(c,{...r,value:s,onChange:i=>{t(i.map(e=>((!e.status||e.status==="none")&&(e.status="uploading"),e))),setTimeout(()=>{t(i.map(e=>(e.status==="uploading"&&(e.status="success",e.href="#"),e)))},3e3)}})},y={args:{label:"Upload evidence",hint:"General hint information",maxSize:1e5,multiple:!1,required:!0},render:r=>a(Re,{...r})},Re=r=>{const[s,t]=l.useState(!1),o=Fe({file:ye().required("Select a file to upload")}).required(),{control:i,handleSubmit:e}=Ee({defaultValues:{file:[]},resolver:Ue(o)});return a("form",{onSubmit:e(async n=>{t(!0),console.log({data:n}),setTimeout(()=>{t(!1)},2e3)},n=>{console.error(n)}),noValidate:!0,children:q(De,{children:[a(Ie,{control:i,name:"file",render:({field:{value:n,onChange:U,onBlur:ve,name:xe},fieldState:{invalid:Se,error:I}})=>q("div",{css:{position:"relative"},children:[a(c,{...r,id:"file",accept:["image/jpeg","image/png"],maxSize:500,multiple:!1,value:n,onChange:U,onBlur:ve,name:xe,invalid:Se,message:I==null?void 0:I.message,required:!0}),s&&a(je,{label:"Uploading file"})]})}),a("div",{children:a(Te,{type:"submit",loading:s,children:"Submit evidence"})})]})})},E={args:{label:"Upload evidence",hint:"General hint information"},render:function(s){const[t,o]=l.useState([]),[i,e]=l.useState([{name:"police-check.pdf",size:1e5},{name:"another-document.pdf",size:1e5,meta:{uid:"abc-def",bucketId:"123-456"}}]);function T(j){e(n=>n.filter(({name:U})=>U!==j.name))}return a(c,{...s,value:t,onChange:o,existingFiles:i,onRemoveExistingFile:T})}};var z,O,R;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Drivers licence'
  }
}`,...(R=(O=m.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var k,C,P;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Drivers licence',
    value: [exampleFile]
  }
}`,...(P=(C=p.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var V,L,M;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Drivers licence',
    required: true
  }
}`,...(M=(L=u.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var w,B,A;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Drivers licence',
    hideOptionalLabel: true
  }
}`,...(A=(B=d.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var G,H,J;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: 'Drivers licence',
    disabled: true
  }
}`,...(J=(H=g.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var _,W,$;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Drivers licence',
    message: 'Please choose a valid file',
    invalid: true
  }
}`,...($=(W=f.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var K,N,Q;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    label: 'Identity documents',
    multiple: true
  }
}`,...(Q=(N=b.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var X,Y,Z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: 'Identity documents',
    required: true,
    hint: 'May include images of your passport, drivers licence etc.',
    maxSize: 200,
    accept: ['image/jpeg', 'image/png', 'application/pdf', 'application/msword', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
    multiple: true
  }
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,re;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    label: 'Upload JavaScript file',
    accept: [{
      mimeType: 'text/javascript',
      extensions: ['.js']
    }]
  }
}`,...(re=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,se,ie;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    label: 'Photos from your holiday',
    maxSize: 2000,
    maxFiles: 3,
    accept: ['image/jpeg', 'image/png', 'image/heic'],
    multiple: true,
    value: [createExampleImageFile(), createExampleImageFile(), createExampleImageFile()]
  }
}`,...(ie=(se=x.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ne,oe,le;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    label: 'Drivers licence',
    hideThumbnails: true
  }
}`,...(le=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ce,me,pe;F.parameters={...F.parameters,docs:{...(ce=F.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    label: 'Photos from your holiday',
    multiple: true,
    maxFiles: 3
  },
  render: args => <InstantUploadTemplate {...args} />
}`,...(pe=(me=F.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ue,de,ge;y.parameters={...y.parameters,docs:{...(ue=y.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    label: 'Upload evidence',
    hint: 'General hint information',
    maxSize: 100000,
    multiple: false,
    required: true
  },
  render: args => <UploadSingleFileOnSubmitTemplate {...args} />
}`,...(ge=(de=y.parameters)==null?void 0:de.docs)==null?void 0:ge.source}}};var fe,be,he;E.parameters={...E.parameters,docs:{...(fe=E.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
      name: 'another-document.pdf',
      size: 100000,
      // Use the \`meta\` key to keep track of any extra file information
      // This can be useful when deleting the file
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
}`,...(he=(be=E.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};const va=["Basic","Populated","Required","HideOptionalLabel","Disabled","Invalid","MultipleFiles","OnlyAcceptedFormats","CustomAcceptedFormats","MultipleImages","HiddenThumbnails","InstantUpload","UploadSingleFileOnSubmit","ExistingFiles"];export{m as Basic,v as CustomAcceptedFormats,g as Disabled,E as ExistingFiles,S as HiddenThumbnails,d as HideOptionalLabel,F as InstantUpload,f as Invalid,b as MultipleFiles,x as MultipleImages,h as OnlyAcceptedFormats,p as Populated,u as Required,y as UploadSingleFileOnSubmit,va as __namedExportsOrder,ha as default};
