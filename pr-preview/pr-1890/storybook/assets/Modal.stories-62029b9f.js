import{a as n,j as o}from"./responsive-22d1c539.js";import{B as t}from"./Button-1a082b6d.js";import{B as m}from"./ButtonGroup-5c583b5f.js";import"./index-f0f3a68d.js";import{u as h}from"./useTernaryState-ed86673f.js";import{T as l}from"./Text-03708b2d.js";import{M as s}from"./Modal-46405c00.js";import"./jsx-runtime-70d19cdc.js";import"./LoadingBlanket-5db8d8aa.js";import"./Stack-e6a92433.js";import"./Box-cc8e6f8e.js";import"./Content-a73dd057.js";import"./BaseContent-b4d619b8.js";import"./index-e937ffd1.js";import"./PageContent-28150522.js";import"./SectionContent-238a39dc.js";import"./ContentBleed-4d1b344d.js";import"./ExternalLinkCallout-896682bb.js";import"./mergeRefs-868b543a.js";import"./_commonjsHelpers-23102255.js";import"./index-33ec0502.js";import"./useId-bf1c3739.js";import"./useAriaModalPolyfill-194cdec9.js";import"./getCloseHandler-d347a0fa.js";import"./ModalDialog-140ca8c6.js";import"./Combination-2983c2b6.js";import"./WebsiteIcon-03a55100.js";const eo={title:"content/Modal",component:s},c={args:{title:"This is the title of the modal dialog, it can span lines but should not be too long."},render:function(a){const[i,r,e]=h(!1);return n("div",{children:[o(t,{onClick:r,children:"Open modal"}),o(s,{isOpen:i,onClose:e,title:a.title,actions:n(m,{children:[o(t,{onClick:e,children:"Primary button"}),o(t,{variant:"secondary",onClick:e,children:"Secondary button"}),o(t,{variant:"tertiary",onClick:e,children:"Tertiary button"})]}),children:o(l,{as:"p",children:"This is the Modal Body paragraph, it provides detailed instruction and context for the the modal action. It can also span lines but long form content should be avoided."})})]})}},d={args:{title:"Are you sure you want to delete this certificate?"},render:function(a){const[i,r,e]=h(!1);return n("div",{children:[o(t,{onClick:r,children:"Open modal"}),o(s,{isOpen:i,onClose:e,title:a.title,actions:n(m,{children:[o(t,{onClick:e,children:"Delete certificate"}),o(t,{variant:"secondary",onClick:e,children:"Cancel"})]}),children:n(l,{as:"p",children:["Certificate ",o(l,{fontWeight:"bold",children:"CER-36476487"})," will be deleted immediately. You can not undo this action."]})})]})}},p={args:{title:"Are you sure you want to cancel?"},render:function(a){const[i,r,e]=h(!1);return n("div",{children:[o(t,{onClick:r,children:"Open modal"}),o(s,{isOpen:i,onClose:e,title:a.title,actions:n(m,{children:[o(t,{onClick:e,children:"Yes, cancel"}),o(t,{variant:"secondary",onClick:e,children:"No, take me back"})]}),children:o(l,{as:"p",children:"If you cancel, you will lose all information entered."})})]})}},u={args:{title:"Are you sure you want to leave this page?"},render:function(a){const[i,r,e]=h(!1);return n("div",{children:[o(t,{onClick:r,children:"Open modal"}),o(s,{isOpen:i,onClose:e,title:a.title,actions:n(m,{children:[o(t,{onClick:e,children:"Leave this page"}),o(t,{variant:"secondary",onClick:e,children:"Stay on this page"})]}),children:o(l,{as:"p",children:"You will lose all changes made since your last save."})})]})}};var C,f,y;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: 'This is the title of the modal dialog, it can span lines but should not be too long.'
  },
  render: function Render(props) {
    const [isModalOpen, openModal, closeModal] = useTernaryState(false);
    return <div>
                <Button onClick={openModal}>Open modal</Button>
                <Modal isOpen={isModalOpen} onClose={closeModal} title={props.title} actions={<ButtonGroup>
                            <Button onClick={closeModal}>Primary button</Button>
                            <Button variant="secondary" onClick={closeModal}>
                                Secondary button
                            </Button>
                            <Button variant="tertiary" onClick={closeModal}>
                                Tertiary button
                            </Button>
                        </ButtonGroup>}>
                    <Text as="p">
                        This is the Modal Body paragraph, it provides detailed instruction
                        and context for the the modal action. It can also span lines but
                        long form content should be avoided.
                    </Text>
                </Modal>
            </div>;
  }
}`,...(y=(f=c.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var B,g,v;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: 'Are you sure you want to delete this certificate?'
  },
  render: function Render(props) {
    const [isModalOpen, openModal, closeModal] = useTernaryState(false);
    return <div>
                <Button onClick={openModal}>Open modal</Button>
                <Modal isOpen={isModalOpen} onClose={closeModal} title={props.title} actions={<ButtonGroup>
                            <Button onClick={closeModal}>Delete certificate</Button>
                            <Button variant="secondary" onClick={closeModal}>
                                Cancel
                            </Button>
                        </ButtonGroup>}>
                    <Text as="p">
                        Certificate <Text fontWeight="bold">CER-36476487</Text> will be
                        deleted immediately. You can not undo this action.
                    </Text>
                </Modal>
            </div>;
  }
}`,...(v=(g=d.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var k,O,T;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: 'Are you sure you want to cancel?'
  },
  render: function Render(props) {
    const [isModalOpen, openModal, closeModal] = useTernaryState(false);
    return <div>
                <Button onClick={openModal}>Open modal</Button>
                <Modal isOpen={isModalOpen} onClose={closeModal} title={props.title} actions={<ButtonGroup>
                            <Button onClick={closeModal}>Yes, cancel</Button>
                            <Button variant="secondary" onClick={closeModal}>
                                No, take me back
                            </Button>
                        </ButtonGroup>}>
                    <Text as="p">
                        If you cancel, you will lose all information entered.
                    </Text>
                </Modal>
            </div>;
  }
}`,...(T=(O=p.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var b,x,S;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: 'Are you sure you want to leave this page?'
  },
  render: function Render(props) {
    const [isModalOpen, openModal, closeModal] = useTernaryState(false);
    return <div>
                <Button onClick={openModal}>Open modal</Button>
                <Modal isOpen={isModalOpen} onClose={closeModal} title={props.title} actions={<ButtonGroup>
                            <Button onClick={closeModal}>Leave this page</Button>
                            <Button variant="secondary" onClick={closeModal}>
                                Stay on this page
                            </Button>
                        </ButtonGroup>}>
                    <Text as="p">
                        You will lose all changes made since your last save.
                    </Text>
                </Modal>
            </div>;
  }
}`,...(S=(x=u.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const to=["Basic","ConfirmingDestructiveAction","ConfirmingFormCancellation","LeavingFormPage"];export{c as Basic,d as ConfirmingDestructiveAction,p as ConfirmingFormCancellation,u as LeavingFormPage,to as __namedExportsOrder,eo as default};
