import{j as e,a as i,F as o}from"./responsive-22d1c539.js";import{A as _}from"./Autocomplete-1866d2f0.js";import{C as z}from"./Combobox-52102b5c.js";import{C as J}from"./ComboboxMulti-9b3eae91.js";import"./ComboboxAsync-cd29bbe4.js";import"./ComboboxAsyncMulti-0c07e7e9.js";import"./ComboboxRenderItem-89f34ee2.js";import{D as K}from"./DatePicker-8a824998.js";import"./DateRangePicker-db0b0fa7.js";import{F as N}from"./FormStack-3173ac7e.js";import{P as Q}from"./PasswordInput-6e0e7136.js";import{S as R}from"./SearchInput-37a5d8ac.js";import{S as t}from"./Select-38fcc87d.js";import{T as U}from"./Textarea-9310cbe1.js";import{T as d}from"./TextInput-b5049985.js";import{G as r}from"./GroupedFields-3b90b1ea.js";import"./index-f0f3a68d.js";import"./_commonjsHelpers-23102255.js";import"./jsx-runtime-70d19cdc.js";import"./ComboboxBase-4263de0d.js";import"./index-1f6fda92.js";import"./Popover-4e65a303.js";import"./index-33ec0502.js";import"./Stack-e6a92433.js";import"./Box-cc8e6f8e.js";import"./Field-d96b22a3.js";import"./useId-bf1c3739.js";import"./Text-03708b2d.js";import"./WebsiteIcon-da68083c.js";import"./ComboboxListItem-78231edd.js";import"./ComboboxListLoading-39269b7f.js";import"./LoadingBlanket-5db8d8aa.js";import"./Content-a73dd057.js";import"./BaseContent-b4d619b8.js";import"./index-e937ffd1.js";import"./PageContent-28150522.js";import"./SectionContent-238a39dc.js";import"./ContentBleed-4d1b344d.js";import"./ExternalLinkCallout-896682bb.js";import"./ComboboxListError-c00a0203.js";import"./ComboboxListEmptyResults-235dd900.js";import"./Button-1a082b6d.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-5c583b5f.js";import"./ComboboxMultiBase-44af51ab.js";import"./useTernaryState-ed86673f.js";import"./ComboboxTag-e5f00fde.js";import"./useAsync-987bb331.js";import"./useClickOutside-ca5d6845.js";import"./Calendar-82a8aa21.js";import"./Combination-2983c2b6.js";import"./index-67ce947c.js";import"./DatePickerInput-77442637.js";import"./useWindowSize-26bd49d7.js";import"./useToggleState-e0319b87.js";import"./Checkbox-cfff4252.js";import"./ControlGroupProvider-afbdf4c1.js";const Ze={title:"Forms/GroupedFields",component:r},p={render:()=>e(r,{legend:"Grouped fields",children:({field1Props:l,field2Props:a})=>i(o,{children:[e(d,{label:"TextInput",...l}),e(t,{label:"Select",placeholder:"Please select",options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}],...a})]})})},n={render:()=>e(r,{hideOptionalLabel:!0,legend:"Grouped fields",children:({field1Props:l,field2Props:a})=>i(o,{children:[e(d,{label:"TextInput",...l}),e(t,{label:"Select",placeholder:"Please select",options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}],...a})]})})},s={render:()=>e(r,{legend:"Grouped fields",visuallyHideLegend:!0,children:({field1Props:l,field2Props:a})=>i(o,{children:[e(d,{label:"TextInput",...l}),e(t,{label:"Select",placeholder:"Please select",options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}],...a})]})})},u={render:()=>e(r,{legend:"Grouped fields",hint:"Hint text",children:({field1Props:l,field2Props:a})=>i(o,{children:[e(d,{label:"TextInput",...l}),e(t,{label:"Select",placeholder:"Please select",options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}],...a})]})})},c={render:()=>e(r,{field1Invalid:!0,legend:"Grouped fields",message:"Enter a valid value",children:({field1Props:l,field2Props:a})=>i(o,{children:[e(d,{label:"TextInput",required:!0,...l}),e(t,{label:"Select",placeholder:"Please select",options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}],...a})]})})},b={render:()=>e(r,{field2Invalid:!0,legend:"Grouped fields",message:"Enter a valid value",children:({field1Props:l,field2Props:a})=>i(o,{children:[e(d,{label:"TextInput",...l}),e(t,{label:"Select",placeholder:"Please select",options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}],required:!0,...a})]})})},v={render:()=>e(r,{field1Invalid:!0,field2Invalid:!0,legend:"Grouped fields",message:"Enter a valid value",children:({field1Props:l,field2Props:a})=>i(o,{children:[e(d,{label:"TextInput",required:!0,...l}),e(t,{label:"Select",placeholder:"Please select",options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}],required:!0,...a})]})})},m={render:()=>i(N,{children:[e(r,{field1Invalid:!0,field2Invalid:!0,hideOptionalLabel:!0,legend:"All fields which can render in a group, invalid",message:"Enter a valid value",children:({field1Props:l,field2Props:a})=>i(o,{children:[e(_,{label:"Autocomplete",loadOptions:async()=>[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}],required:!0,...l}),e(z,{label:"Combobox",options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}],...a})]})}),e(r,{field1Invalid:!0,field2Invalid:!0,hideOptionalLabel:!0,legend:"All fields which can render in a group, invalid",message:"Enter a valid value",children:({field1Props:l,field2Props:a})=>i(o,{children:[e(J,{label:"ComboboxMulti",options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}],...l}),e(K,{label:"Select date",value:new Date,onChange:V=>{console.log(V)},required:!0,...a})]})}),e(r,{field1Invalid:!0,field2Invalid:!0,hideOptionalLabel:!0,legend:"All fields which can render in a group, invalid",message:"Enter a valid value",children:({field1Props:l,field2Props:a})=>i(o,{children:[e(Q,{label:"PasswordInput",required:!0,...l}),e(R,{label:"SearchInput",required:!0,...a})]})}),e(r,{field1Invalid:!0,field2Invalid:!0,hideOptionalLabel:!0,legend:"All fields which can render in a group, invalid",message:"Enter a valid value",children:({field1Props:l,field2Props:a})=>i(o,{children:[e(t,{label:"Select",placeholder:"Please select",options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}],required:!0,...l}),e(U,{label:"Textarea",required:!0,...a})]})}),e(r,{field1Invalid:!0,field2Invalid:!0,hideOptionalLabel:!0,legend:"All fields which can render in a group, invalid",message:"Enter a valid value",children:({field1Props:l,field2Props:a})=>i(o,{children:[e(d,{label:"TextInput",required:!0,...l}),e(d,{label:"TextInput",required:!0,...a})]})})]})};var f,h,O;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <GroupedFields legend="Grouped fields">
            {({
      field1Props,
      field2Props
    }) => <>
                    <TextInput label="TextInput" {...field1Props} />
                    <Select label="Select" placeholder="Please select" options={[{
        value: 'a',
        label: 'Option A'
      }, {
        value: 'b',
        label: 'Option B'
      }, {
        value: 'c',
        label: 'Option C'
      }]} {...field2Props} />
                </>}
        </GroupedFields>
}`,...(O=(h=p.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var P,I,g;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <GroupedFields hideOptionalLabel legend="Grouped fields">
            {({
      field1Props,
      field2Props
    }) => <>
                    <TextInput label="TextInput" {...field1Props} />
                    <Select label="Select" placeholder="Please select" options={[{
        value: 'a',
        label: 'Option A'
      }, {
        value: 'b',
        label: 'Option B'
      }, {
        value: 'c',
        label: 'Option C'
      }]} {...field2Props} />
                </>}
        </GroupedFields>
}`,...(g=(I=n.parameters)==null?void 0:I.docs)==null?void 0:g.source}}};var x,S,F;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <GroupedFields legend="Grouped fields" visuallyHideLegend>
            {({
      field1Props,
      field2Props
    }) => <>
                    <TextInput label="TextInput" {...field1Props} />
                    <Select label="Select" placeholder="Please select" options={[{
        value: 'a',
        label: 'Option A'
      }, {
        value: 'b',
        label: 'Option B'
      }, {
        value: 'c',
        label: 'Option C'
      }]} {...field2Props} />
                </>}
        </GroupedFields>
}`,...(F=(S=s.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var G,A,C;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <GroupedFields legend="Grouped fields" hint="Hint text">
            {({
      field1Props,
      field2Props
    }) => <>
                    <TextInput label="TextInput" {...field1Props} />
                    <Select label="Select" placeholder="Please select" options={[{
        value: 'a',
        label: 'Option A'
      }, {
        value: 'b',
        label: 'Option B'
      }, {
        value: 'c',
        label: 'Option C'
      }]} {...field2Props} />
                </>}
        </GroupedFields>
}`,...(C=(A=u.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var T,B,q;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <GroupedFields field1Invalid legend="Grouped fields" message="Enter a valid value">
            {({
      field1Props,
      field2Props
    }) => <>
                    <TextInput label="TextInput" required {...field1Props} />
                    <Select label="Select" placeholder="Please select" options={[{
        value: 'a',
        label: 'Option A'
      }, {
        value: 'b',
        label: 'Option B'
      }, {
        value: 'c',
        label: 'Option C'
      }]} {...field2Props} />
                </>}
        </GroupedFields>
}`,...(q=(B=c.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};var L,E,w;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <GroupedFields field2Invalid legend="Grouped fields" message="Enter a valid value">
            {({
      field1Props,
      field2Props
    }) => <>
                    <TextInput label="TextInput" {...field1Props} />
                    <Select label="Select" placeholder="Please select" options={[{
        value: 'a',
        label: 'Option A'
      }, {
        value: 'b',
        label: 'Option B'
      }, {
        value: 'c',
        label: 'Option C'
      }]} required {...field2Props} />
                </>}
        </GroupedFields>
}`,...(w=(E=b.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var H,y,k;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <GroupedFields field1Invalid field2Invalid legend="Grouped fields" message="Enter a valid value">
            {({
      field1Props,
      field2Props
    }) => <>
                    <TextInput label="TextInput" required {...field1Props} />
                    <Select label="Select" placeholder="Please select" options={[{
        value: 'a',
        label: 'Option A'
      }, {
        value: 'b',
        label: 'Option B'
      }, {
        value: 'c',
        label: 'Option C'
      }]} required {...field2Props} />
                </>}
        </GroupedFields>
}`,...(k=(y=v.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var D,M,j;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <FormStack>
            <GroupedFields field1Invalid field2Invalid hideOptionalLabel legend="All fields which can render in a group, invalid" message="Enter a valid value">
                {({
        field1Props,
        field2Props
      }) => <>
                        <Autocomplete label="Autocomplete" loadOptions={async () => [{
          value: 'a',
          label: 'Option A'
        }, {
          value: 'b',
          label: 'Option B'
        }, {
          value: 'c',
          label: 'Option C'
        }]} required {...field1Props} />
                        <Combobox label="Combobox" options={[{
          value: 'a',
          label: 'Option A'
        }, {
          value: 'b',
          label: 'Option B'
        }, {
          value: 'c',
          label: 'Option C'
        }]} {...field2Props} />
                    </>}
            </GroupedFields>
            <GroupedFields field1Invalid field2Invalid hideOptionalLabel legend="All fields which can render in a group, invalid" message="Enter a valid value">
                {({
        field1Props,
        field2Props
      }) => <>
                        <ComboboxMulti label="ComboboxMulti" options={[{
          value: 'a',
          label: 'Option A'
        }, {
          value: 'b',
          label: 'Option B'
        }, {
          value: 'c',
          label: 'Option C'
        }]} {...field1Props} />
                        <DatePicker label="Select date" value={new Date()} onChange={value => {
          console.log(value);
        }} required {...field2Props} />
                    </>}
            </GroupedFields>
            <GroupedFields field1Invalid field2Invalid hideOptionalLabel legend="All fields which can render in a group, invalid" message="Enter a valid value">
                {({
        field1Props,
        field2Props
      }) => <>
                        <PasswordInput label="PasswordInput" required {...field1Props} />
                        <SearchInput label="SearchInput" required {...field2Props} />
                    </>}
            </GroupedFields>
            <GroupedFields field1Invalid field2Invalid hideOptionalLabel legend="All fields which can render in a group, invalid" message="Enter a valid value">
                {({
        field1Props,
        field2Props
      }) => <>
                        <Select label="Select" placeholder="Please select" options={[{
          value: 'a',
          label: 'Option A'
        }, {
          value: 'b',
          label: 'Option B'
        }, {
          value: 'c',
          label: 'Option C'
        }]} required {...field1Props} />
                        <Textarea label="Textarea" required {...field2Props} />
                    </>}
            </GroupedFields>
            <GroupedFields field1Invalid field2Invalid hideOptionalLabel legend="All fields which can render in a group, invalid" message="Enter a valid value">
                {({
        field1Props,
        field2Props
      }) => <>
                        <TextInput label="TextInput" required {...field1Props} />
                        <TextInput label="TextInput" required {...field2Props} />
                    </>}
            </GroupedFields>
        </FormStack>
}`,...(j=(M=m.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};const $e=["Basic","HideOptionalLabel","VisuallyHideLegend","Hint","Field1Invalid","Field2Invalid","BothFieldsInvalid","AllPossibleFieldsInvalid"];export{m as AllPossibleFieldsInvalid,p as Basic,v as BothFieldsInvalid,c as Field1Invalid,b as Field2Invalid,n as HideOptionalLabel,u as Hint,s as VisuallyHideLegend,$e as __namedExportsOrder,Ze as default};
