import{a as l,j as e}from"./responsive-1d67a6a2.js";import{r as c}from"./index-42611d8b.js";import{B as r}from"./Button-e28534e8.js";import{B as S}from"./ButtonGroup-20aae35f.js";import{C as _}from"./Checkbox-984ef468.js";import"./Combobox-137b4b5f.js";import{C as z}from"./ComboboxMulti-7143082b.js";import"./ComboboxAsync-b5cdc439.js";import"./ComboboxAsyncMulti-f71f0c73.js";import"./ComboboxListItem-0acb222d.js";import{C as V}from"./ControlGroup-2488cb7d.js";import{u as F}from"./useTernaryState-6ea40a94.js";import{D as H}from"./DatePicker-bde30f85.js";import{D as J}from"./DateRangePicker-261209cc.js";import{D as K}from"./Divider-ce5d5014.js";import{F as R}from"./Fieldset-e6e2e6ca.js";import{F as y}from"./FormStack-d8315e9d.js";import{P as U}from"./Prose-c94e344e.js";import{R as d}from"./Radio-519bf71c.js";import{S as P}from"./Select-40bff57d.js";import{S as X}from"./Stack-43f3e7c4.js";import{S as Y}from"./Switch-367ff053.js";import{D as g}from"./Drawer-659af13e.js";import"./_commonjsHelpers-042e6b4d.js";import"./LoadingBlanket-54fbe64e.js";import"./Content-9704152d.js";import"./BaseContent-14775c7e.js";import"./index-69af556a.js";import"./Box-0bbf8d6d.js";import"./PageContent-63ae7dc4.js";import"./SectionContent-4758f989.js";import"./ContentBleed-995a257e.js";import"./Text-d916011d.js";import"./VisuallyHidden-02be915e.js";import"./mergeRefs-868b543a.js";import"./ControlGroupProvider-7b13d7d1.js";import"./WebsiteIcon-7b03f042.js";import"./CalendarIcon-791c6fea.js";import"./ComboboxMultiBase-1649accc.js";import"./index-4d501b15.js";import"./tslib.es6-44ce41f1.js";import"./Popover-7f6cfd9c.js";import"./index-7a46b491.js";import"./TextInput-6e29e5bf.js";import"./Field-20b34c68.js";import"./useId-d335a68c.js";import"./useAsync-0e212593.js";import"./useClickOutside-f1a14f0e.js";import"./Calendar-0f15ac31.js";import"./Combination-c1ec471a.js";import"./DatePickerInput-6534a915.js";import"./useWindowSize-fbc787ee.js";import"./react-spring-web.esm-e3dcc61e.js";import"./usePrefersReducedMotion-fcdf456e.js";import"./useAriaModalPolyfill-a67b2f1a.js";const $e={title:"layout/Drawer",component:g},C={args:{title:"Drawer title"},render:function(s){const[u,p,i]=F(!1);return l(c.Fragment,{children:[e(r,{onClick:p,children:"Open Drawer"}),e(g,{isOpen:u,onDismiss:i,title:s.title,actions:l(S,{children:[e(r,{onClick:i,children:"Primary"}),e(r,{variant:"secondary",onClick:i,children:"Secondary"}),e(r,{variant:"tertiary",onClick:i,children:"Tertiary"})]}),children:e(P,{label:"Example filter",hideOptionalLabel:!0,placeholder:"Please select",options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}]})})]})}},v={args:{title:"Large Drawer",width:"lg"},render:function(s){const[u,p,i]=F(!1);return l(c.Fragment,{children:[e(r,{onClick:p,children:"Open Large Drawer"}),e(g,{isOpen:u,onDismiss:i,title:s.title,width:s.width,actions:l(S,{children:[e(r,{onClick:i,children:"Primary"}),e(r,{variant:"secondary",onClick:i,children:"Secondary"}),e(r,{variant:"tertiary",onClick:i,children:"Tertiary"})]}),children:l(U,{children:[e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus risus nec velit imperdiet, sit amet blandit libero ullamcorper. Maecenas vel fermentum sapien. Aenean mollis tincidunt imperdiet. Morbi efficitur consectetur quam nec aliquam. Quisque id consequat arcu, hendrerit vulputate libero. Morbi et libero placerat, ultrices lacus pulvinar, maximus massa. Nam tempor eu nisl dignissim malesuada. Quisque blandit turpis vel egestas posuere."}),e("p",{children:"Integer nec ex massa. Integer at semper enim. Vestibulum elit tortor, ultricies quis lectus elementum, tempor pharetra ex. In ut nulla vitae neque vehicula venenatis. Pellentesque faucibus eget tortor ac venenatis. Proin et vulputate nunc. Etiam vitae dui pellentesque, sollicitudin dolor congue, imperdiet mauris. Aliquam a massa magna. Suspendisse condimentum sapien id nisi luctus accumsan. Cras maximus sapien et lorem malesuada, et euismod mauris tincidunt. Nulla facilisi. Donec ultricies eros eget lobortis aliquam. Sed cursus ipsum et mauris sodales semper eget vel diam. Nulla tincidunt rutrum ipsum in molestie. In hac habitasse platea dictumst."})]})})]})}},f={args:{title:"Filter by"},render:function(s){const[u,p,i]=F(!1),o={select:"",radio:"a"},[D,h]=c.useState(o),[n,m]=c.useState(o),a=t=>{m(x=>({...x,...t}))},B=()=>{h(n),i()},w=()=>{m(o),h(o)},b=()=>{m(D),i()};return l(c.Fragment,{children:[e(r,{onClick:p,children:"Open Drawer"}),e(g,{isOpen:u,onDismiss:b,title:s.title,actions:l(S,{children:[e(r,{onClick:B,children:"Apply filters"}),e(r,{variant:"secondary",onClick:w,children:"Clear filters"}),e(r,{variant:"tertiary",onClick:b,children:"Cancel"})]}),children:l(y,{children:[e(P,{label:"Example filter",hideOptionalLabel:!0,placeholder:"Please select",options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"},{value:"d",label:"Option D"},{value:"e",label:"Option E"},{value:"f",label:"Option F"}],value:n.select,onChange:t=>a({select:t.target.value})}),l(V,{label:"Example filter",hideOptionalLabel:!0,block:!0,children:[e(d,{value:"a",checked:n.radio==="a",onChange:t=>a({radio:t.target.value}),children:"Option A"}),e(d,{value:"b",checked:n.radio==="b",onChange:t=>a({radio:t.target.value}),children:"Option B"}),e(d,{value:"c",checked:n.radio==="c",onChange:t=>a({radio:t.target.value}),children:"Option C"})]})]})})]})}},k={args:{title:"Filter by"},render:function(s){const[u,p,i]=F(!1),o={switch:!1,checkbox:!1,select:"",radio:"a",datePicker:void 0,dateRangePicker:{from:void 0,to:void 0},comboboxMulti:[]},[D,h]=c.useState(o),[n,m]=c.useState(o),a=t=>{m(x=>({...x,...t}))},B=()=>{h(n),i()},w=()=>{m(o),h(o)},b=()=>{m(D),i()};return l(c.Fragment,{children:[e(r,{onClick:p,children:"Open Drawer"}),e(g,{isOpen:u,onDismiss:b,title:s.title,actions:l(S,{children:[e(r,{onClick:B,children:"Apply filters"}),e(r,{variant:"secondary",onClick:w,children:"Clear filters"}),e(r,{variant:"tertiary",onClick:b,children:"Cancel"})]}),children:l(X,{gap:3,children:[e(R,{legend:"Example fieldset",children:l(y,{children:[e(Y,{label:"Example filter",checked:n.switch,onChange:t=>a({switch:t})}),e(P,{label:"Example filter",hideOptionalLabel:!0,placeholder:"Please select",options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"},{value:"d",label:"Option D"},{value:"e",label:"Option E"},{value:"f",label:"Option F"}],value:n.select,onChange:t=>a({select:t.target.value})}),l(V,{label:"Example filter",hideOptionalLabel:!0,block:!0,children:[e(d,{value:"a",checked:n.radio==="a",onChange:t=>a({radio:t.target.value}),children:"Option A"}),e(d,{value:"b",checked:n.radio==="b",onChange:t=>a({radio:t.target.value}),children:"Option B"}),e(d,{value:"c",checked:n.radio==="c",onChange:t=>a({radio:t.target.value}),children:"Option C"})]})]})}),e(K,{}),e(R,{legend:"Example fieldset",children:l(y,{children:[e(_,{checked:n.checkbox,onChange:t=>a({checkbox:t.target.checked}),children:"Example filter"}),e(z,{label:"Example filter",hideOptionalLabel:!0,hint:"Start typing to see results",value:n.comboboxMulti,onChange:t=>a({comboboxMulti:t}),options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"},{value:"d",label:"Option D"},{value:"e",label:"Option E"},{value:"f",label:"Option F"}]}),e(H,{label:"Example filter",hideOptionalLabel:!0,value:n.datePicker,onChange:t=>a({datePicker:t}),onInputChange:t=>a({datePicker:t})}),e(J,{legend:"Example filter",hideOptionalLabel:!0,value:n.dateRangePicker,onChange:t=>a({dateRangePicker:t}),onFromInputChange:t=>a({dateRangePicker:{from:t,to:n.dateRangePicker.to}}),onToInputChange:t=>a({dateRangePicker:{from:n.dateRangePicker.from,to:t}})})]})})]})})]})}};var E,A,L;C.parameters={...C.parameters,docs:{...(E=C.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    title: 'Drawer title'
  },
  render: function Render(props) {
    const [isOpen, open, close] = useTernaryState(false);
    return <Fragment>
                <Button onClick={open}>Open Drawer</Button>
                <Drawer isOpen={isOpen} onDismiss={close} title={props.title} actions={<ButtonGroup>
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
}`,...(L=(A=C.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var q,M,G;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    title: 'Large Drawer',
    width: 'lg'
  },
  render: function Render(props) {
    const [isOpen, open, close] = useTernaryState(false);
    return <Fragment>
                <Button onClick={open}>Open Large Drawer</Button>
                <Drawer isOpen={isOpen} onDismiss={close} title={props.title} width={props.width} actions={<ButtonGroup>
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
}`,...(G=(M=v.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var I,T,N;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
                <Drawer isOpen={isDrawerOpen} onDismiss={onCloseClick} title={props.title} actions={<ButtonGroup>
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
}`,...(N=(T=f.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var W,Q,j;k.parameters={...k.parameters,docs:{...(W=k.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
                <Drawer isOpen={isDrawerOpen} onDismiss={onCloseClick} title={props.title} actions={<ButtonGroup>
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
}`,...(j=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:j.source}}};const et=["Basic","LargeWidth","FiltersBasic","FiltersWithFieldsets"];export{C as Basic,f as FiltersBasic,k as FiltersWithFieldsets,v as LargeWidth,et as __namedExportsOrder,$e as default};
