import{j as e,a as S,m as ue}from"./Box-3d8e40b9.js";import{F as se}from"./FormStack-cc440f95.js";import{C as R}from"./Checkbox-a009bf0c.js";import{R as G}from"./Radio-d3aa5c88.js";import{S as pe,F as he}from"./Stack-88a94cf9.js";import{u as ke}from"./useId-9773510a.js";import"./index-42611d8b.js";import{a as me,b as be,c as Ce,d as fe}from"./Field-e0f2f949.js";import{c as ge}from"./ControlGroupProvider-9647b10c.js";import"./_commonjsHelpers-042e6b4d.js";import"./Text-76115ace.js";import"./WebsiteIcon-80d17c8d.js";import"./CalendarIcon-ece56b40.js";import"./VisuallyHidden-9a073e6e.js";const m=({block:o=!1,children:u,hint:p,id:y,invalid:r=!1,label:I,hideOptionalLabel:de,message:x,required:te=!1})=>{const{groupId:le,hintId:_,messageId:F}=q(y),v=[r&&x?F:null,p?_:null].filter(Boolean),ie=v.length?v.join(" "):void 0;return e(ge,{messageId:r&&x?F:void 0,invalid:r,children:e(me,{invalid:r,id:le,children:S("fieldset",{"aria-describedby":ie,css:{padding:0,margin:0,border:"none"},children:[I?e(be,{as:"legend",required:te,hideOptionalLabel:de,children:I}):null,S(pe,{gap:.5,css:{marginTop:I?ue(.5):void 0},children:[p?e(Ce,{id:_,children:p}):null,x&&r?e(fe,{id:F,children:x}):null,e(he,{gap:1,flexDirection:o?"column":"row",width:"100%",paddingTop:.5,children:u})]})]})})})},q=o=>{const u=ke(o),p=o||`control-group-${u}`,y=`control-group-${u}-hint`,r=`control-group-${u}-message`;return{groupId:p,hintId:y,messageId:r}};try{m.displayName="ControlGroup",m.__docgenInfo={description:"",displayName:"ControlGroup",props:{block:{defaultValue:{value:"false"},description:"If true, children will be stacked vertically.",name:"block",required:!1,type:{name:"boolean"}},hint:{defaultValue:null,description:"Provides extra information about the field.",name:"hint",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Defines an identifier (ID) which must be unique.",name:"id",required:!1,type:{name:"string"}},invalid:{defaultValue:{value:"false"},description:"If true, the invalid state will be rendered.",name:"invalid",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Describes the purpose of the field.",name:"label",required:!1,type:{name:"string"}},hideOptionalLabel:{defaultValue:null,description:'If true, "(optional)" will never be appended to the label.',name:"hideOptionalLabel",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"Message to show when the field is invalid.",name:"message",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:'If false, "(optional)" will be appended to the label.',name:"required",required:!1,type:{name:"boolean"}}}}}catch{}try{q.displayName="useControlGroupIds",q.__docgenInfo={description:"",displayName:"useControlGroupIds",props:{}}}catch{}const Ne={title:"forms/ControlGroup",component:m},b=o=>e(se,{children:S(m,{...o,children:[e(R,{checked:!0,children:"SMS"}),e(R,{checked:!1,children:"Phone call"}),e(R,{checked:!1,children:"Email"}),e(R,{checked:!1,children:"Mail"})]})}),C={label:"Choose your contact preferences",hint:"Select all that apply",block:!0},a=b.bind({});a.args={...C,block:!1};a.storyName="Checkbox Group Inline";const c=b.bind({});c.args={...C};c.storyName="Checkbox Group Block";const n=b.bind({});n.args={...C,required:!0};n.storyName="Checkbox Group Required";const s=b.bind({});s.args={...C,hideOptionalLabel:!0};s.storyName="Checkbox Group Hide Optional Label";const h=b.bind({});h.args={...C,message:"Please select an interest",required:!0,invalid:!0};const f=o=>e(se,{children:S(m,{...o,children:[e(G,{checked:!0,children:"Dog"}),e(G,{checked:!1,children:"Cat"}),e(G,{checked:!1,children:"Cow"}),e(G,{checked:!1,disabled:!0,children:"Other"})]})}),g={label:"What type of pet do you have?",hint:"Select all that apply",block:!0},d=f.bind({});d.args={...g,block:!1};d.storyName="Radio Group Inline";const t=f.bind({});t.args={...g};t.storyName="Radio Group Block";const l=f.bind({});l.args={...g,required:!0};l.storyName="Radio Group Required";const i=f.bind({});i.args={...g,hideOptionalLabel:!0};i.storyName="Radio Group Hide Optional Label";const k=f.bind({});k.args={...g,message:"You must choose at least one option",required:!0,invalid:!0};var O,w,M;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  return <FormStack>
            <ControlGroup {...args}>
                <Checkbox checked>SMS</Checkbox>
                <Checkbox checked={false}>Phone call</Checkbox>
                <Checkbox checked={false}>Email</Checkbox>
                <Checkbox checked={false}>Mail</Checkbox>
            </ControlGroup>
        </FormStack>;
}`,...(M=(w=a.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var D,N,L;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  return <FormStack>
            <ControlGroup {...args}>
                <Checkbox checked>SMS</Checkbox>
                <Checkbox checked={false}>Phone call</Checkbox>
                <Checkbox checked={false}>Email</Checkbox>
                <Checkbox checked={false}>Mail</Checkbox>
            </ControlGroup>
        </FormStack>;
}`,...(L=(N=c.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var B,V,E;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  return <FormStack>
            <ControlGroup {...args}>
                <Checkbox checked>SMS</Checkbox>
                <Checkbox checked={false}>Phone call</Checkbox>
                <Checkbox checked={false}>Email</Checkbox>
                <Checkbox checked={false}>Mail</Checkbox>
            </ControlGroup>
        </FormStack>;
}`,...(E=(V=n.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var H,P,j;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  return <FormStack>
            <ControlGroup {...args}>
                <Checkbox checked>SMS</Checkbox>
                <Checkbox checked={false}>Phone call</Checkbox>
                <Checkbox checked={false}>Email</Checkbox>
                <Checkbox checked={false}>Mail</Checkbox>
            </ControlGroup>
        </FormStack>;
}`,...(j=(P=s.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var T,$,A;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  return <FormStack>
            <ControlGroup {...args}>
                <Checkbox checked>SMS</Checkbox>
                <Checkbox checked={false}>Phone call</Checkbox>
                <Checkbox checked={false}>Email</Checkbox>
                <Checkbox checked={false}>Mail</Checkbox>
            </ControlGroup>
        </FormStack>;
}`,...(A=($=h.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var W,Y,z;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  return <FormStack>
            <ControlGroup {...args}>
                <Radio checked>Dog</Radio>
                <Radio checked={false}>Cat</Radio>
                <Radio checked={false}>Cow</Radio>
                <Radio checked={false} disabled>
                    Other
                </Radio>
            </ControlGroup>
        </FormStack>;
}`,...(z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:z.source}}};var J,K,Q;t.parameters={...t.parameters,docs:{...(J=t.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
  return <FormStack>
            <ControlGroup {...args}>
                <Radio checked>Dog</Radio>
                <Radio checked={false}>Cat</Radio>
                <Radio checked={false}>Cow</Radio>
                <Radio checked={false} disabled>
                    Other
                </Radio>
            </ControlGroup>
        </FormStack>;
}`,...(Q=(K=t.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Z;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
  return <FormStack>
            <ControlGroup {...args}>
                <Radio checked>Dog</Radio>
                <Radio checked={false}>Cat</Radio>
                <Radio checked={false}>Cow</Radio>
                <Radio checked={false} disabled>
                    Other
                </Radio>
            </ControlGroup>
        </FormStack>;
}`,...(Z=(X=l.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,oe,re;i.parameters={...i.parameters,docs:{...(ee=i.parameters)==null?void 0:ee.docs,source:{originalSource:`args => {
  return <FormStack>
            <ControlGroup {...args}>
                <Radio checked>Dog</Radio>
                <Radio checked={false}>Cat</Radio>
                <Radio checked={false}>Cow</Radio>
                <Radio checked={false} disabled>
                    Other
                </Radio>
            </ControlGroup>
        </FormStack>;
}`,...(re=(oe=i.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ae,ce,ne;k.parameters={...k.parameters,docs:{...(ae=k.parameters)==null?void 0:ae.docs,source:{originalSource:`args => {
  return <FormStack>
            <ControlGroup {...args}>
                <Radio checked>Dog</Radio>
                <Radio checked={false}>Cat</Radio>
                <Radio checked={false}>Cow</Radio>
                <Radio checked={false} disabled>
                    Other
                </Radio>
            </ControlGroup>
        </FormStack>;
}`,...(ne=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:ne.source}}};const Le=["CheckboxGroupInline","CheckboxGroupBlock","CheckboxGroupRequired","CheckboxGroupHideOptionalLabel","CheckboxGroupInvalid","RadioGroupInline","RadioGroupBlock","RadioGroupRequired","RadioGroupHideOptionalLabel","RadioGroupInvalid"];export{c as CheckboxGroupBlock,s as CheckboxGroupHideOptionalLabel,a as CheckboxGroupInline,h as CheckboxGroupInvalid,n as CheckboxGroupRequired,t as RadioGroupBlock,i as RadioGroupHideOptionalLabel,d as RadioGroupInline,k as RadioGroupInvalid,l as RadioGroupRequired,Le as __namedExportsOrder,Ne as default};
//# sourceMappingURL=ControlGroup.stories-d5aefccb.js.map
