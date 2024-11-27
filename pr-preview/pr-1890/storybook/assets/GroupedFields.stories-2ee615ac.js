import{j as e,a as i,F as o}from"./responsive-123a9343.js";import{A as _}from"./Autocomplete-5380edfc.js";import{C as z}from"./Combobox-0ecd19c6.js";import{C as J}from"./ComboboxMulti-5a3f8fd8.js";import"./ComboboxAsync-4e395cb5.js";import"./ComboboxAsyncMulti-3af3df00.js";import"./ComboboxRenderItem-a32aac8f.js";import{D as K}from"./DatePicker-93991371.js";import"./DateRangePicker-598bd9f9.js";import{F as N}from"./FormStack-e2872dc8.js";import{P as Q}from"./PasswordInput-5ad0446a.js";import{S as R}from"./SearchInput-aac8eec7.js";import{S as t}from"./Select-acea0bca.js";import{T as U}from"./Textarea-75016d9a.js";import{T as d}from"./TextInput-b3ca105d.js";import{G as r}from"./GroupedFields-937ff312.js";import"./index-3b9dd0eb.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-a3291550.js";import"./ComboboxBase-68405d13.js";import"./index-8d47fad6.js";import"./Popover-91e83479.js";import"./index-5ccf1b6b.js";import"./Stack-938d29d6.js";import"./Box-c8c0d4bd.js";import"./Field-b78d080b.js";import"./useId-1d8fde67.js";import"./Text-ade3e1ab.js";import"./WebsiteIcon-a62a72af.js";import"./ComboboxListItem-50db01ca.js";import"./ComboboxListLoading-181a8c4d.js";import"./LoadingBlanket-1bc581e5.js";import"./Content-1f109ee5.js";import"./BaseContent-45e1bca4.js";import"./index-1c0ca288.js";import"./PageContent-a0776569.js";import"./SectionContent-49d65950.js";import"./ContentBleed-8062a65d.js";import"./ExternalLinkCallout-dac509ef.js";import"./ComboboxListError-97797edb.js";import"./ComboboxListEmptyResults-a06bdd17.js";import"./Button-12960031.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-399a126c.js";import"./ComboboxMultiBase-55ecdd36.js";import"./useTernaryState-a0ca107e.js";import"./ComboboxTag-3bd74b3f.js";import"./useAsync-7298cf8d.js";import"./useClickOutside-f5418014.js";import"./Calendar-3a06276d.js";import"./Combination-826c8940.js";import"./index-67ce947c.js";import"./DatePickerInput-eb469809.js";import"./useWindowSize-52831703.js";import"./useToggleState-9cfccda3.js";import"./Checkbox-e7edf2bf.js";import"./ControlGroupProvider-93e131c1.js";const Ze={title:"Forms/GroupedFields",component:r},p={render:()=>e(r,{legend:"Grouped fields",children:({field1Props:l,field2Props:a})=>i(o,{children:[e(d,{label:"TextInput",...l}),e(t,{label:"Select",placeholder:"Please select",options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}],...a})]})})},n={render:()=>e(r,{hideOptionalLabel:!0,legend:"Grouped fields",children:({field1Props:l,field2Props:a})=>i(o,{children:[e(d,{label:"TextInput",...l}),e(t,{label:"Select",placeholder:"Please select",options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}],...a})]})})},s={render:()=>e(r,{legend:"Grouped fields",visuallyHideLegend:!0,children:({field1Props:l,field2Props:a})=>i(o,{children:[e(d,{label:"TextInput",...l}),e(t,{label:"Select",placeholder:"Please select",options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}],...a})]})})},u={render:()=>e(r,{legend:"Grouped fields",hint:"Hint text",children:({field1Props:l,field2Props:a})=>i(o,{children:[e(d,{label:"TextInput",...l}),e(t,{label:"Select",placeholder:"Please select",options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}],...a})]})})},c={render:()=>e(r,{field1Invalid:!0,legend:"Grouped fields",message:"Enter a valid value",children:({field1Props:l,field2Props:a})=>i(o,{children:[e(d,{label:"TextInput",required:!0,...l}),e(t,{label:"Select",placeholder:"Please select",options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}],...a})]})})},b={render:()=>e(r,{field2Invalid:!0,legend:"Grouped fields",message:"Enter a valid value",children:({field1Props:l,field2Props:a})=>i(o,{children:[e(d,{label:"TextInput",...l}),e(t,{label:"Select",placeholder:"Please select",options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}],required:!0,...a})]})})},v={render:()=>e(r,{field1Invalid:!0,field2Invalid:!0,legend:"Grouped fields",message:"Enter a valid value",children:({field1Props:l,field2Props:a})=>i(o,{children:[e(d,{label:"TextInput",required:!0,...l}),e(t,{label:"Select",placeholder:"Please select",options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}],required:!0,...a})]})})},m={render:()=>i(N,{children:[e(r,{field1Invalid:!0,field2Invalid:!0,hideOptionalLabel:!0,legend:"All fields which can render in a group, invalid",message:"Enter a valid value",children:({field1Props:l,field2Props:a})=>i(o,{children:[e(_,{label:"Autocomplete",loadOptions:async()=>[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}],required:!0,...l}),e(z,{label:"Combobox",options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}],...a})]})}),e(r,{field1Invalid:!0,field2Invalid:!0,hideOptionalLabel:!0,legend:"All fields which can render in a group, invalid",message:"Enter a valid value",children:({field1Props:l,field2Props:a})=>i(o,{children:[e(J,{label:"ComboboxMulti",options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}],...l}),e(K,{label:"Select date",value:new Date,onChange:V=>{console.log(V)},required:!0,...a})]})}),e(r,{field1Invalid:!0,field2Invalid:!0,hideOptionalLabel:!0,legend:"All fields which can render in a group, invalid",message:"Enter a valid value",children:({field1Props:l,field2Props:a})=>i(o,{children:[e(Q,{label:"PasswordInput",required:!0,...l}),e(R,{label:"SearchInput",required:!0,...a})]})}),e(r,{field1Invalid:!0,field2Invalid:!0,hideOptionalLabel:!0,legend:"All fields which can render in a group, invalid",message:"Enter a valid value",children:({field1Props:l,field2Props:a})=>i(o,{children:[e(t,{label:"Select",placeholder:"Please select",options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}],required:!0,...l}),e(U,{label:"Textarea",required:!0,...a})]})}),e(r,{field1Invalid:!0,field2Invalid:!0,hideOptionalLabel:!0,legend:"All fields which can render in a group, invalid",message:"Enter a valid value",children:({field1Props:l,field2Props:a})=>i(o,{children:[e(d,{label:"TextInput",required:!0,...l}),e(d,{label:"TextInput",required:!0,...a})]})})]})};var f,h,O;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
