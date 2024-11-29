import{a as r,j as e}from"./responsive-22d1c539.js";import{r as m}from"./index-f0f3a68d.js";import{B as a}from"./Button-1a082b6d.js";import{B as C}from"./ButtonGroup-5c583b5f.js";import{C as ce}from"./Checkbox-cfff4252.js";import"./Combobox-52102b5c.js";import{C as me}from"./ComboboxMulti-9b3eae91.js";import"./ComboboxAsync-cd29bbe4.js";import"./ComboboxAsyncMulti-0c07e7e9.js";import"./ComboboxRenderItem-89f34ee2.js";import{C as oe}from"./ControlGroup-09854055.js";import{u as v}from"./useTernaryState-ed86673f.js";import{D as se}from"./DatePicker-8a824998.js";import{D as de}from"./DateRangePicker-db0b0fa7.js";import{D as pe}from"./Divider-6f447906.js";import{F as T}from"./Fieldset-6d712801.js";import{F as E}from"./FormStack-3173ac7e.js";import{P as ue}from"./Prose-4fb6c7b0.js";import{R as S}from"./Radio-72d65baa.js";import{S as A}from"./Select-38fcc87d.js";import{S as ge}from"./Stack-e6a92433.js";import{S as be}from"./Switch-f5dfe2c0.js";import{T as ve}from"./Text-03708b2d.js";import{T as I}from"./TextInput-b5049985.js";import{D as g}from"./Drawer-dff8c793.js";import"./jsx-runtime-70d19cdc.js";import"./_commonjsHelpers-23102255.js";import"./LoadingBlanket-5db8d8aa.js";import"./Content-a73dd057.js";import"./BaseContent-b4d619b8.js";import"./index-e937ffd1.js";import"./Box-cc8e6f8e.js";import"./PageContent-28150522.js";import"./SectionContent-238a39dc.js";import"./ContentBleed-4d1b344d.js";import"./ExternalLinkCallout-896682bb.js";import"./mergeRefs-868b543a.js";import"./useId-bf1c3739.js";import"./ControlGroupProvider-afbdf4c1.js";import"./WebsiteIcon-da68083c.js";import"./ComboboxBase-4263de0d.js";import"./index-1f6fda92.js";import"./Popover-4e65a303.js";import"./index-33ec0502.js";import"./Field-d96b22a3.js";import"./ComboboxListItem-78231edd.js";import"./ComboboxListLoading-39269b7f.js";import"./ComboboxListError-c00a0203.js";import"./ComboboxListEmptyResults-235dd900.js";import"./ComboboxMultiBase-44af51ab.js";import"./ComboboxTag-e5f00fde.js";import"./useAsync-987bb331.js";import"./useClickOutside-ca5d6845.js";import"./Calendar-82a8aa21.js";import"./Combination-2983c2b6.js";import"./index-67ce947c.js";import"./DatePickerInput-77442637.js";import"./useWindowSize-26bd49d7.js";import"./react-spring-web.esm-283dcba6.js";import"./usePrefersReducedMotion-f6a12f32.js";import"./useAriaModalPolyfill-194cdec9.js";import"./getCloseHandler-d347a0fa.js";import"./DrawerDialog-615fcd73.js";const wt={title:"layout/Drawer",component:g},O={args:{title:"Drawer title"},render:function(o){const[s,u,i]=v(!1);return r(m.Fragment,{children:[e(a,{onClick:u,children:"Open Drawer"}),e(g,{isOpen:s,onClose:i,title:o.title,actions:r(C,{children:[e(a,{onClick:i,children:"Primary"}),e(a,{variant:"secondary",onClick:i,children:"Secondary"}),e(a,{variant:"tertiary",onClick:i,children:"Tertiary"})]}),children:e(A,{label:"Example filter",hideOptionalLabel:!0,placeholder:"Please select",options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}]})})]})}},q={args:{title:"Drawer title"},render:function(o){const[s,u,i]=v(!1);return r(m.Fragment,{children:[e(a,{onClick:u,children:"Open Drawer"}),e(g,{isOpen:s,onClose:i,title:o.title,mutedOverlay:!0,children:e(ve,{children:"Draw content"})})]})}},D={args:{title:"Large Drawer",width:"lg"},render:function(o){const[s,u,i]=v(!1);return r(m.Fragment,{children:[e(a,{onClick:u,children:"Open Large Drawer"}),e(g,{isOpen:s,onClose:i,title:o.title,width:o.width,actions:r(C,{children:[e(a,{onClick:i,children:"Primary"}),e(a,{variant:"secondary",onClick:i,children:"Secondary"}),e(a,{variant:"tertiary",onClick:i,children:"Tertiary"})]}),children:r(ue,{children:[e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus risus nec velit imperdiet, sit amet blandit libero ullamcorper. Maecenas vel fermentum sapien. Aenean mollis tincidunt imperdiet. Morbi efficitur consectetur quam nec aliquam. Quisque id consequat arcu, hendrerit vulputate libero. Morbi et libero placerat, ultrices lacus pulvinar, maximus massa. Nam tempor eu nisl dignissim malesuada. Quisque blandit turpis vel egestas posuere."}),e("p",{children:"Integer nec ex massa. Integer at semper enim. Vestibulum elit tortor, ultricies quis lectus elementum, tempor pharetra ex. In ut nulla vitae neque vehicula venenatis. Pellentesque faucibus eget tortor ac venenatis. Proin et vulputate nunc. Etiam vitae dui pellentesque, sollicitudin dolor congue, imperdiet mauris. Aliquam a massa magna. Suspendisse condimentum sapien id nisi luctus accumsan. Cras maximus sapien et lorem malesuada, et euismod mauris tincidunt. Nulla facilisi. Donec ultricies eros eget lobortis aliquam. Sed cursus ipsum et mauris sodales semper eget vel diam. Nulla tincidunt rutrum ipsum in molestie. In hac habitasse platea dictumst."})]})})]})}},w={args:{title:"Scrollable Drawer Content"},render:function(o){const[s,u,i]=v(!1);return r(m.Fragment,{children:[e(a,{onClick:u,children:"Open Drawer"}),e(g,{isOpen:s,onClose:i,title:o.title,width:o.width,actions:r(C,{children:[e(a,{onClick:i,children:"Primary"}),e(a,{variant:"secondary",onClick:i,children:"Secondary"}),e(a,{variant:"tertiary",onClick:i,children:"Tertiary"})]}),children:e(L,{})})]})}},B={args:{title:"Scrollable Drawer Content"},render:function(o){const[s,u,i]=v(!1);return r(m.Fragment,{children:[e(a,{onClick:u,children:"Open Drawer"}),e(L,{}),e(g,{isOpen:s,onClose:i,title:o.title,width:o.width,actions:r(C,{children:[e(a,{onClick:i,children:"Primary"}),e(a,{variant:"secondary",onClick:i,children:"Secondary"}),e(a,{variant:"tertiary",onClick:i,children:"Tertiary"})]}),children:e(L,{})})]})}},y={args:{title:"Filter by"},render:function(o){const[s,u,i]=v(!1),d={select:"",radio:"a"},[f,b]=m.useState(d),[n,p]=m.useState(d),l=t=>{p(R=>({...R,...t}))},c=()=>{b(n),i()},k=()=>{p(d),b(d)},F=()=>{p(f),i()};return r(m.Fragment,{children:[e(a,{onClick:u,children:"Open Drawer"}),e(g,{isOpen:s,onClose:F,title:o.title,actions:r(C,{children:[e(a,{onClick:c,children:"Apply filters"}),e(a,{variant:"secondary",onClick:k,children:"Clear filters"}),e(a,{variant:"tertiary",onClick:F,children:"Cancel"})]}),children:r(E,{children:[e(A,{label:"Example filter",hideOptionalLabel:!0,placeholder:"Please select",options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"},{value:"d",label:"Option D"},{value:"e",label:"Option E"},{value:"f",label:"Option F"}],value:n.select,onChange:t=>l({select:t.target.value})}),r(oe,{label:"Example filter",hideOptionalLabel:!0,block:!0,children:[e(S,{value:"a",checked:n.radio==="a",onChange:t=>l({radio:t.target.value}),children:"Option A"}),e(S,{value:"b",checked:n.radio==="b",onChange:t=>l({radio:t.target.value}),children:"Option B"}),e(S,{value:"c",checked:n.radio==="c",onChange:t=>l({radio:t.target.value}),children:"Option C"})]})]})})]})}},P={args:{title:"Filter by"},render:function(o){const[s,u,i]=v(!1),d={switch:!1,checkbox:!1,select:"",radio:"a",datePicker:void 0,dateRangePicker:{from:void 0,to:void 0},comboboxMulti:[]},[f,b]=m.useState(d),[n,p]=m.useState(d),l=t=>{p(R=>({...R,...t}))},c=()=>{b(n),i()},k=()=>{p(d),b(d)},F=()=>{p(f),i()};return r(m.Fragment,{children:[e(a,{onClick:u,children:"Open Drawer"}),e(g,{isOpen:s,onClose:F,title:o.title,actions:r(C,{children:[e(a,{onClick:c,children:"Apply filters"}),e(a,{variant:"secondary",onClick:k,children:"Clear filters"}),e(a,{variant:"tertiary",onClick:F,children:"Cancel"})]}),children:r(ge,{gap:3,children:[e(T,{legend:"Example fieldset",children:r(E,{children:[e(be,{label:"Example filter",checked:n.switch,onChange:t=>l({switch:t})}),e(A,{label:"Example filter",hideOptionalLabel:!0,placeholder:"Please select",options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"},{value:"d",label:"Option D"},{value:"e",label:"Option E"},{value:"f",label:"Option F"}],value:n.select,onChange:t=>l({select:t.target.value})}),r(oe,{label:"Example filter",hideOptionalLabel:!0,block:!0,children:[e(S,{value:"a",checked:n.radio==="a",onChange:t=>l({radio:t.target.value}),children:"Option A"}),e(S,{value:"b",checked:n.radio==="b",onChange:t=>l({radio:t.target.value}),children:"Option B"}),e(S,{value:"c",checked:n.radio==="c",onChange:t=>l({radio:t.target.value}),children:"Option C"})]})]})}),e(pe,{}),e(T,{legend:"Example fieldset",children:r(E,{children:[e(ce,{checked:n.checkbox,onChange:t=>l({checkbox:t.target.checked}),children:"Example filter"}),e(me,{label:"Example filter",hideOptionalLabel:!0,hint:"Start typing to see results",value:n.comboboxMulti,onChange:t=>l({comboboxMulti:t}),options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"},{value:"d",label:"Option D"},{value:"e",label:"Option E"},{value:"f",label:"Option F"}]}),e(se,{label:"Example filter",hideOptionalLabel:!0,value:n.datePicker,onChange:t=>l({datePicker:t}),onInputChange:t=>l({datePicker:t})}),e(de,{legend:"Example filter",hideOptionalLabel:!0,value:n.dateRangePicker,onChange:t=>l({dateRangePicker:t}),onFromInputChange:t=>l({dateRangePicker:{from:t,to:n.dateRangePicker.to}}),onToInputChange:t=>l({dateRangePicker:{from:n.dateRangePicker.from,to:t}})})]})})]})})]})}},x={args:{title:"Drawer with form"},render:function(o){const[s,u,i]=v(!1),d={datePicker:void 0,number:void 0,text:""},[f,b]=m.useState(d),n=c=>{b(k=>({...k,...c}))},p=c=>{c.preventDefault(),i()},l=()=>{b(d)};return r(m.Fragment,{children:[e(a,{onClick:u,children:"Open Drawer"}),e(g,{isOpen:s,onClose:i,title:o.title,actions:r(C,{children:[e(a,{type:"submit",form:"form-id",onClick:p,children:"Submit"}),e(a,{variant:"secondary",onClick:l,children:"Clear form"}),e(a,{variant:"tertiary",onClick:i,children:"Cancel"})]}),children:e("form",{id:"form-id",children:r(E,{children:[e(I,{label:"Example text input",onChange:c=>n({text:c.target.value}),value:f.text}),e(I,{label:"Example number input",onChange:c=>n({number:c.target.value}),type:"number",value:f.number}),e(se,{hideOptionalLabel:!0,label:"Example date input",onChange:c=>n({datePicker:c}),onInputChange:c=>n({datePicker:c}),value:f.datePicker})]})})})]})}},L=()=>r(ue,{children:[e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa. Volutpat diam ut venenatis tellus in metus vulputate eu. Adipiscing elit duis tristique sollicitudin nibh sit amet. Vivamus arcu felis bibendum ut tristique et. Et tortor at risus viverra adipiscing at in tellus integer. Euismod in pellentesque massa placerat duis ultricies lacus sed. Ornare arcu dui vivamus arcu felis bibendum. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Et tortor consequat id porta nibh venenatis. Cras adipiscing enim eu turpis egestas pretium aenean. Erat velit scelerisque in dictum non. Pretium fusce id velit ut tortor pretium. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Magna eget est lorem ipsum dolor sit."}),e("p",{children:"Ut aliquam purus sit amet luctus venenatis lectus magna. Eu facilisis sed odio morbi quis commodo odio. Pharetra vel turpis nunc eget. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Ipsum consequat nisl vel pretium lectus. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. Arcu ac tortor dignissim convallis. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Feugiat sed lectus vestibulum mattis ullamcorper. Risus in hendrerit gravida rutrum quisque non. Tincidunt nunc pulvinar sapien et ligula. Penatibus et magnis dis parturient montes nascetur ridiculus mus. Ultrices tincidunt arcu non sodales neque. Duis at consectetur lorem donec."}),e("p",{children:"Turpis tincidunt id aliquet risus. Ut lectus arcu bibendum at varius vel pharetra. Magna ac placerat vestibulum lectus. Euismod elementum nisi quis eleifend quam. Morbi tristique senectus et netus et malesuada. Justo laoreet sit amet cursus sit. Et malesuada fames ac turpis egestas sed. Eu non diam phasellus vestibulum lorem sed risus ultricies. Quis imperdiet massa tincidunt nunc. Ornare lectus sit amet est placerat in egestas. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Lacinia quis vel eros donec ac. Vitae sapien pellentesque habitant morbi. Donec et odio pellentesque diam volutpat commodo sed egestas egestas. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Quam vulputate dignissim suspendisse in est ante in nibh. Justo nec ultrices dui sapien eget mi proin. Aliquet nibh praesent tristique magna sit amet."}),e("p",{children:"Laoreet suspendisse interdum consectetur libero. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Nisl suscipit adipiscing bibendum est ultricies integer quis. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Malesuada fames ac turpis egestas sed tempus urna et. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Euismod elementum nisi quis eleifend quam. Vulputate mi sit amet mauris commodo quis imperdiet massa. Sit amet porttitor eget dolor. Enim lobortis scelerisque fermentum dui faucibus. Dapibus ultrices in iaculis nunc sed augue lacus. Nulla porttitor massa id neque aliquam vestibulum. Netus et malesuada fames ac turpis egestas integer eget aliquet. Proin nibh nisl condimentum id. Duis at tellus at urna condimentum mattis. Tellus molestie nunc non blandit massa. At erat pellentesque adipiscing commodo elit at imperdiet dui."}),e("p",{children:"Imperdiet proin fermentum leo vel orci porta non. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Cursus in hac habitasse platea dictumst quisque sagittis. Blandit aliquam etiam erat velit scelerisque in dictum. Ridiculus mus mauris vitae ultricies. Interdum velit laoreet id donec ultrices. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Sed nisi lacus sed viverra tellus in. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Vitae congue mauris rhoncus aenean. Ut porttitor leo a diam sollicitudin tempor. Tincidunt arcu non sodales neque sodales ut etiam. At elementum eu facilisis sed. Euismod in pellentesque massa placerat duis. In arcu cursus euismod quis viverra nibh cras pulvinar. Neque egestas congue quisque egestas diam in. Sem fringilla ut morbi tincidunt augue interdum. Sit amet tellus cras adipiscing enim."}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa. Volutpat diam ut venenatis tellus in metus vulputate eu. Adipiscing elit duis tristique sollicitudin nibh sit amet. Vivamus arcu felis bibendum ut tristique et. Et tortor at risus viverra adipiscing at in tellus integer. Euismod in pellentesque massa placerat duis ultricies lacus sed. Ornare arcu dui vivamus arcu felis bibendum. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Et tortor consequat id porta nibh venenatis. Cras adipiscing enim eu turpis egestas pretium aenean. Erat velit scelerisque in dictum non. Pretium fusce id velit ut tortor pretium. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Magna eget est lorem ipsum dolor sit."}),e("p",{children:"Ut aliquam purus sit amet luctus venenatis lectus magna. Eu facilisis sed odio morbi quis commodo odio. Pharetra vel turpis nunc eget. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Ipsum consequat nisl vel pretium lectus. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. Arcu ac tortor dignissim convallis. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Feugiat sed lectus vestibulum mattis ullamcorper. Risus in hendrerit gravida rutrum quisque non. Tincidunt nunc pulvinar sapien et ligula. Penatibus et magnis dis parturient montes nascetur ridiculus mus. Ultrices tincidunt arcu non sodales neque. Duis at consectetur lorem donec."}),e("p",{children:"Turpis tincidunt id aliquet risus. Ut lectus arcu bibendum at varius vel pharetra. Magna ac placerat vestibulum lectus. Euismod elementum nisi quis eleifend quam. Morbi tristique senectus et netus et malesuada. Justo laoreet sit amet cursus sit. Et malesuada fames ac turpis egestas sed. Eu non diam phasellus vestibulum lorem sed risus ultricies. Quis imperdiet massa tincidunt nunc. Ornare lectus sit amet est placerat in egestas. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Lacinia quis vel eros donec ac. Vitae sapien pellentesque habitant morbi. Donec et odio pellentesque diam volutpat commodo sed egestas egestas. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Quam vulputate dignissim suspendisse in est ante in nibh. Justo nec ultrices dui sapien eget mi proin. Aliquet nibh praesent tristique magna sit amet."}),e("p",{children:"Laoreet suspendisse interdum consectetur libero. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Nisl suscipit adipiscing bibendum est ultricies integer quis. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Malesuada fames ac turpis egestas sed tempus urna et. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Euismod elementum nisi quis eleifend quam. Vulputate mi sit amet mauris commodo quis imperdiet massa. Sit amet porttitor eget dolor. Enim lobortis scelerisque fermentum dui faucibus. Dapibus ultrices in iaculis nunc sed augue lacus. Nulla porttitor massa id neque aliquam vestibulum. Netus et malesuada fames ac turpis egestas integer eget aliquet. Proin nibh nisl condimentum id. Duis at tellus at urna condimentum mattis. Tellus molestie nunc non blandit massa. At erat pellentesque adipiscing commodo elit at imperdiet dui."}),e("p",{children:"Imperdiet proin fermentum leo vel orci porta non. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Cursus in hac habitasse platea dictumst quisque sagittis. Blandit aliquam etiam erat velit scelerisque in dictum. Ridiculus mus mauris vitae ultricies. Interdum velit laoreet id donec ultrices. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Sed nisi lacus sed viverra tellus in. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Vitae congue mauris rhoncus aenean. Ut porttitor leo a diam sollicitudin tempor. Tincidunt arcu non sodales neque sodales ut etiam. At elementum eu facilisis sed. Euismod in pellentesque massa placerat duis. In arcu cursus euismod quis viverra nibh cras pulvinar. Neque egestas congue quisque egestas diam in. Sem fringilla ut morbi tincidunt augue interdum. Sit amet tellus cras adipiscing enim."})]});var M,G,N;O.parameters={...O.parameters,docs:{...(M=O.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    title: 'Drawer title'
  },
  render: function Render(props) {
    const [isOpen, open, close] = useTernaryState(false);
    return <Fragment>
                <Button onClick={open}>Open Drawer</Button>
                <Drawer isOpen={isOpen} onClose={close} title={props.title} actions={<ButtonGroup>
                            <Button onClick={close}>Primary</Button>
                            <Button variant="secondary" onClick={close}>
                                Secondary
                            </Button>
                            <Button variant="tertiary" onClick={close}>
                                Tertiary
                            </Button>
                        </ButtonGroup>}>
                    <Select label="Example filter" hideOptionalLabel placeholder="Please select" options={[{
          value: 'a',
          label: 'Option A'
        }, {
          value: 'b',
          label: 'Option B'
        }, {
          value: 'c',
          label: 'Option C'
        }]} />
                </Drawer>
            </Fragment>;
  }
}`,...(N=(G=O.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var V,Q,U;q.parameters={...q.parameters,docs:{...(V=q.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: 'Drawer title'
  },
  render: function Render(props) {
    const [isOpen, open, close] = useTernaryState(false);
    return <Fragment>
                <Button onClick={open}>Open Drawer</Button>
                <Drawer isOpen={isOpen} onClose={close} title={props.title} mutedOverlay>
                    <Text>Draw content</Text>
                </Drawer>
            </Fragment>;
  }
}`,...(U=(Q=q.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,J,j;D.parameters={...D.parameters,docs:{...(W=D.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    title: 'Large Drawer',
    width: 'lg'
  },
  render: function Render(props) {
    const [isOpen, open, close] = useTernaryState(false);
    return <Fragment>
                <Button onClick={open}>Open Large Drawer</Button>
                <Drawer isOpen={isOpen} onClose={close} title={props.title} width={props.width} actions={<ButtonGroup>
                            <Button onClick={close}>Primary</Button>
                            <Button variant="secondary" onClick={close}>
                                Secondary
                            </Button>
                            <Button variant="tertiary" onClick={close}>
                                Tertiary
                            </Button>
                        </ButtonGroup>}>
                    <Prose>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                            cursus risus nec velit imperdiet, sit amet blandit libero
                            ullamcorper. Maecenas vel fermentum sapien. Aenean mollis
                            tincidunt imperdiet. Morbi efficitur consectetur quam nec aliquam.
                            Quisque id consequat arcu, hendrerit vulputate libero. Morbi et
                            libero placerat, ultrices lacus pulvinar, maximus massa. Nam
                            tempor eu nisl dignissim malesuada. Quisque blandit turpis vel
                            egestas posuere.
                        </p>
                        <p>
                            Integer nec ex massa. Integer at semper enim. Vestibulum elit
                            tortor, ultricies quis lectus elementum, tempor pharetra ex. In ut
                            nulla vitae neque vehicula venenatis. Pellentesque faucibus eget
                            tortor ac venenatis. Proin et vulputate nunc. Etiam vitae dui
                            pellentesque, sollicitudin dolor congue, imperdiet mauris. Aliquam
                            a massa magna. Suspendisse condimentum sapien id nisi luctus
                            accumsan. Cras maximus sapien et lorem malesuada, et euismod
                            mauris tincidunt. Nulla facilisi. Donec ultricies eros eget
                            lobortis aliquam. Sed cursus ipsum et mauris sodales semper eget
                            vel diam. Nulla tincidunt rutrum ipsum in molestie. In hac
                            habitasse platea dictumst.
                        </p>
                    </Prose>
                </Drawer>
            </Fragment>;
  }
}`,...(j=(J=D.parameters)==null?void 0:J.docs)==null?void 0:j.source}}};var _,z,H;w.parameters={...w.parameters,docs:{...(_=w.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: 'Scrollable Drawer Content'
  },
  render: function Render(props) {
    const [isOpen, open, close] = useTernaryState(false);
    return <Fragment>
                <Button onClick={open}>Open Drawer</Button>
                <Drawer isOpen={isOpen} onClose={close} title={props.title} width={props.width} actions={<ButtonGroup>
                            <Button onClick={close}>Primary</Button>
                            <Button variant="secondary" onClick={close}>
                                Secondary
                            </Button>
                            <Button variant="tertiary" onClick={close}>
                                Tertiary
                            </Button>
                        </ButtonGroup>}>
                    <LargeProseContent />
                </Drawer>
            </Fragment>;
  }
}`,...(H=(z=w.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var K,X,Y;B.parameters={...B.parameters,docs:{...(K=B.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    title: 'Scrollable Drawer Content'
  },
  render: function Render(props) {
    const [isOpen, open, close] = useTernaryState(false);
    return <Fragment>
                <Button onClick={open}>Open Drawer</Button>
                <LargeProseContent />
                <Drawer isOpen={isOpen} onClose={close} title={props.title} width={props.width} actions={<ButtonGroup>
                            <Button onClick={close}>Primary</Button>
                            <Button variant="secondary" onClick={close}>
                                Secondary
                            </Button>
                            <Button variant="tertiary" onClick={close}>
                                Tertiary
                            </Button>
                        </ButtonGroup>}>
                    <LargeProseContent />
                </Drawer>
            </Fragment>;
  }
}`,...(Y=(X=B.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    title: 'Filter by'
  },
  render: function Render(props) {
    const [isDrawerOpen, openDrawer, closeDrawer] = useTernaryState(false);
    type FormState = {
      select: string;
      radio: string;
    };
    const initialFilterState: FormState = {
      select: '',
      radio: 'a'
    };
    const [filters, setFilters] = useState(initialFilterState);
    const [formState, setFormState] = useState(initialFilterState);
    const updateFormState = (formState: Partial<FormState>) => {
      setFormState(currentState => ({
        ...currentState,
        ...formState
      }));
    };
    const onApplyFiltersClick = () => {
      setFilters(formState);
      closeDrawer();
    };
    const onClearFiltersClick = () => {
      setFormState(initialFilterState);
      setFilters(initialFilterState);
    };
    const onCloseClick = () => {
      setFormState(filters);
      closeDrawer();
    };
    return <Fragment>
                <Button onClick={openDrawer}>Open Drawer</Button>
                <Drawer isOpen={isDrawerOpen} onClose={onCloseClick} title={props.title} actions={<ButtonGroup>
                            <Button onClick={onApplyFiltersClick}>Apply filters</Button>
                            <Button variant="secondary" onClick={onClearFiltersClick}>
                                Clear filters
                            </Button>
                            <Button variant="tertiary" onClick={onCloseClick}>
                                Cancel
                            </Button>
                        </ButtonGroup>}>
                    <FormStack>
                        <Select label="Example filter" hideOptionalLabel placeholder="Please select" options={[{
            value: 'a',
            label: 'Option A'
          }, {
            value: 'b',
            label: 'Option B'
          }, {
            value: 'c',
            label: 'Option C'
          }, {
            value: 'd',
            label: 'Option D'
          }, {
            value: 'e',
            label: 'Option E'
          }, {
            value: 'f',
            label: 'Option F'
          }]} value={formState.select} onChange={e => updateFormState({
            select: e.target.value
          })} />
                        <ControlGroup label="Example filter" hideOptionalLabel block>
                            <Radio value="a" checked={formState.radio === 'a'} onChange={e => updateFormState({
              radio: e.target.value
            })}>
                                Option A
                            </Radio>
                            <Radio value="b" checked={formState.radio === 'b'} onChange={e => updateFormState({
              radio: e.target.value
            })}>
                                Option B
                            </Radio>
                            <Radio value="c" checked={formState.radio === 'c'} onChange={e => updateFormState({
              radio: e.target.value
            })}>
                                Option C
                            </Radio>
                        </ControlGroup>
                    </FormStack>
                </Drawer>
            </Fragment>;
  }
}`,...(ee=($=y.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ie,ae;P.parameters={...P.parameters,docs:{...(te=P.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    title: 'Filter by'
  },
  render: function Render(props) {
    const [isDrawerOpen, openDrawer, closeDrawer] = useTernaryState(false);
    type FormState = {
      switch: boolean;
      checkbox: boolean;
      radio: string;
      select: string;
      datePicker: Date | string | undefined;
      dateRangePicker: DateRangeWithString;
      comboboxMulti: DefaultComboboxOption[];
    };
    const initialFilterState: FormState = {
      switch: false,
      checkbox: false,
      select: '',
      radio: 'a',
      datePicker: undefined,
      dateRangePicker: {
        from: undefined,
        to: undefined
      },
      comboboxMulti: []
    };
    const [filters, setFilters] = useState(initialFilterState);
    const [formState, setFormState] = useState(initialFilterState);
    const updateFormState = (formState: Partial<FormState>) => {
      setFormState(currentState => ({
        ...currentState,
        ...formState
      }));
    };
    const onApplyFiltersClick = () => {
      setFilters(formState);
      closeDrawer();
    };
    const onClearFiltersClick = () => {
      setFormState(initialFilterState);
      setFilters(initialFilterState);
    };
    const onCloseClick = () => {
      setFormState(filters);
      closeDrawer();
    };
    return <Fragment>
                <Button onClick={openDrawer}>Open Drawer</Button>
                <Drawer isOpen={isDrawerOpen} onClose={onCloseClick} title={props.title} actions={<ButtonGroup>
                            <Button onClick={onApplyFiltersClick}>Apply filters</Button>
                            <Button variant="secondary" onClick={onClearFiltersClick}>
                                Clear filters
                            </Button>
                            <Button variant="tertiary" onClick={onCloseClick}>
                                Cancel
                            </Button>
                        </ButtonGroup>}>
                    <Stack gap={3}>
                        <Fieldset legend="Example fieldset">
                            <FormStack>
                                <Switch label="Example filter" checked={formState.switch} onChange={checked => updateFormState({
                switch: checked
              })} />
                                <Select label="Example filter" hideOptionalLabel placeholder="Please select" options={[{
                value: 'a',
                label: 'Option A'
              }, {
                value: 'b',
                label: 'Option B'
              }, {
                value: 'c',
                label: 'Option C'
              }, {
                value: 'd',
                label: 'Option D'
              }, {
                value: 'e',
                label: 'Option E'
              }, {
                value: 'f',
                label: 'Option F'
              }]} value={formState.select} onChange={e => updateFormState({
                select: e.target.value
              })} />
                                <ControlGroup label="Example filter" hideOptionalLabel block>
                                    <Radio value="a" checked={formState.radio === 'a'} onChange={e => updateFormState({
                  radio: e.target.value
                })}>
                                        Option A
                                    </Radio>
                                    <Radio value="b" checked={formState.radio === 'b'} onChange={e => updateFormState({
                  radio: e.target.value
                })}>
                                        Option B
                                    </Radio>
                                    <Radio value="c" checked={formState.radio === 'c'} onChange={e => updateFormState({
                  radio: e.target.value
                })}>
                                        Option C
                                    </Radio>
                                </ControlGroup>
                            </FormStack>
                        </Fieldset>
                        <Divider />
                        <Fieldset legend="Example fieldset">
                            <FormStack>
                                <Checkbox checked={formState.checkbox} onChange={e => updateFormState({
                checkbox: e.target.checked
              })}>
                                    Example filter
                                </Checkbox>
                                <ComboboxMulti label="Example filter" hideOptionalLabel hint="Start typing to see results" value={formState.comboboxMulti} onChange={value => updateFormState({
                comboboxMulti: value
              })} options={[{
                value: 'a',
                label: 'Option A'
              }, {
                value: 'b',
                label: 'Option B'
              }, {
                value: 'c',
                label: 'Option C'
              }, {
                value: 'd',
                label: 'Option D'
              }, {
                value: 'e',
                label: 'Option E'
              }, {
                value: 'f',
                label: 'Option F'
              }]} />
                                <DatePicker label="Example filter" hideOptionalLabel value={formState.datePicker} onChange={value => updateFormState({
                datePicker: value
              })} onInputChange={value => updateFormState({
                datePicker: value
              })} />
                                <DateRangePicker legend="Example filter" hideOptionalLabel value={formState.dateRangePicker} onChange={value => updateFormState({
                dateRangePicker: value
              })} onFromInputChange={from => updateFormState({
                dateRangePicker: {
                  from,
                  to: formState.dateRangePicker.to
                }
              })} onToInputChange={to => updateFormState({
                dateRangePicker: {
                  from: formState.dateRangePicker.from,
                  to
                }
              })} />
                            </FormStack>
                        </Fieldset>
                    </Stack>
                </Drawer>
            </Fragment>;
  }
}`,...(ae=(ie=P.parameters)==null?void 0:ie.docs)==null?void 0:ae.source}}};var re,ne,le;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    title: 'Drawer with form'
  },
  render: function Render(props) {
    const [isDrawerOpen, openDrawer, closeDrawer] = useTernaryState(false);
    type FormState = {
      datePicker: Date | string | undefined;
      number: string | undefined;
      text: string | undefined;
    };
    const initialFilterState: FormState = {
      datePicker: undefined,
      number: undefined,
      text: ''
    };
    const [formState, setFormState] = useState(initialFilterState);
    const updateFormState = (formState: Partial<FormState>) => {
      setFormState(currentState => ({
        ...currentState,
        ...formState
      }));
    };
    const onSubmitForm = (event: FormEvent) => {
      event.preventDefault();
      closeDrawer();
    };
    const clearForm = () => {
      setFormState(initialFilterState);
    };
    return <Fragment>
                <Button onClick={openDrawer}>Open Drawer</Button>

                <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} title={props.title} actions={<ButtonGroup>
                            <Button type="submit" form="form-id" onClick={onSubmitForm}>
                                Submit
                            </Button>

                            <Button variant="secondary" onClick={clearForm}>
                                Clear form
                            </Button>

                            <Button variant="tertiary" onClick={closeDrawer}>
                                Cancel
                            </Button>
                        </ButtonGroup>}>
                    <form id="form-id">
                        <FormStack>
                            <TextInput label="Example text input" onChange={event => updateFormState({
              text: event.target.value
            })} value={formState.text} />

                            <TextInput label="Example number input" onChange={event => updateFormState({
              number: event.target.value
            })} type="number" value={formState.number} />

                            <DatePicker hideOptionalLabel label="Example date input" onChange={value => updateFormState({
              datePicker: value
            })} onInputChange={value => updateFormState({
              datePicker: value
            })} value={formState.datePicker} />
                        </FormStack>
                    </form>
                </Drawer>
            </Fragment>;
  }
}`,...(le=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};const Bt=["Basic","MutedOverlay","LargeWidth","SmallPageContentLargeDrawerContent","LargePageContentLargeDrawerContent","FiltersBasic","FiltersWithFieldsets","WithForm"];export{O as Basic,y as FiltersBasic,P as FiltersWithFieldsets,B as LargePageContentLargeDrawerContent,D as LargeWidth,q as MutedOverlay,w as SmallPageContentLargeDrawerContent,x as WithForm,Bt as __namedExportsOrder,wt as default};
