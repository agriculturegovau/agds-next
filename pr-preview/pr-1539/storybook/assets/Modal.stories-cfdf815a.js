import{a as t,j as n}from"./responsive-1d67a6a2.js";import{B as e}from"./Button-e28534e8.js";import{B as m}from"./ButtonGroup-20aae35f.js";import"./index-42611d8b.js";import{u as h}from"./useTernaryState-6ea40a94.js";import{T as l}from"./Text-d916011d.js";import{M as s}from"./Modal-840f929c.js";import"./LoadingBlanket-54fbe64e.js";import"./Stack-43f3e7c4.js";import"./Box-0bbf8d6d.js";import"./Content-9704152d.js";import"./BaseContent-14775c7e.js";import"./index-69af556a.js";import"./PageContent-63ae7dc4.js";import"./SectionContent-4758f989.js";import"./ContentBleed-995a257e.js";import"./VisuallyHidden-02be915e.js";import"./mergeRefs-868b543a.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-7a46b491.js";import"./useId-d335a68c.js";import"./useAriaModalPolyfill-a67b2f1a.js";import"./Combination-c1ec471a.js";import"./WebsiteIcon-7b03f042.js";import"./CalendarIcon-791c6fea.js";const $={title:"content/Modal",component:s},c={args:{title:"This is the title of the modal dialog, it can span lines but should not be too long."},render:function(a){const[i,r,o]=h(!1);return t("div",{children:[n(e,{onClick:r,children:"Open modal"}),n(s,{isOpen:i,onDismiss:o,title:a.title,actions:t(m,{children:[n(e,{onClick:o,children:"Primary button"}),n(e,{variant:"secondary",onClick:o,children:"Secondary button"}),n(e,{variant:"tertiary",onClick:o,children:"Tertiary button"})]}),children:n(l,{as:"p",children:"This is the Modal Body paragraph, it provides detailed instruction and context for the the modal action. It can also span lines but long form content should be avoided."})})]})}},d={args:{title:"Are you sure you want to delete this certificate?"},render:function(a){const[i,r,o]=h(!1);return t("div",{children:[n(e,{onClick:r,children:"Open modal"}),n(s,{isOpen:i,onDismiss:o,title:a.title,actions:t(m,{children:[n(e,{onClick:o,children:"Delete certificate"}),n(e,{variant:"secondary",onClick:o,children:"Cancel"})]}),children:t(l,{as:"p",children:["Certificate ",n(l,{fontWeight:"bold",children:"CER-36476487"})," will be deleted immediately. You can not undo this action."]})})]})}},p={args:{title:"Are you sure you want to cancel?"},render:function(a){const[i,r,o]=h(!1);return t("div",{children:[n(e,{onClick:r,children:"Open modal"}),n(s,{isOpen:i,onDismiss:o,title:a.title,actions:t(m,{children:[n(e,{onClick:o,children:"Yes, cancel"}),n(e,{variant:"secondary",onClick:o,children:"No, take me back"})]}),children:n(l,{as:"p",children:"If you cancel, you will lose all information entered."})})]})}},u={args:{title:"Are you sure you want to leave this page?"},render:function(a){const[i,r,o]=h(!1);return t("div",{children:[n(e,{onClick:r,children:"Open modal"}),n(s,{isOpen:i,onDismiss:o,title:a.title,actions:t(m,{children:[n(e,{onClick:o,children:"Leave this page"}),n(e,{variant:"secondary",onClick:o,children:"Stay on this page"})]}),children:n(l,{as:"p",children:"You will lose all changes made since your last save."})})]})}};var f,y,B;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'This is the title of the modal dialog, it can span lines but should not be too long.'
  },
  render: function Render(props) {
    const [isModalOpen, openModal, closeModal] = useTernaryState(false);
    return <div>
                <Button onClick={openModal}>Open modal</Button>
                <Modal isOpen={isModalOpen} onDismiss={closeModal} title={props.title} actions={<ButtonGroup>
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
}`,...(B=(y=c.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var g,C,v;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Are you sure you want to delete this certificate?'
  },
  render: function Render(props) {
    const [isModalOpen, openModal, closeModal] = useTernaryState(false);
    return <div>
                <Button onClick={openModal}>Open modal</Button>
                <Modal isOpen={isModalOpen} onDismiss={closeModal} title={props.title} actions={<ButtonGroup>
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
}`,...(v=(C=d.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var k,O,T;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: 'Are you sure you want to cancel?'
  },
  render: function Render(props) {
    const [isModalOpen, openModal, closeModal] = useTernaryState(false);
    return <div>
                <Button onClick={openModal}>Open modal</Button>
                <Modal isOpen={isModalOpen} onDismiss={closeModal} title={props.title} actions={<ButtonGroup>
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
                <Modal isOpen={isModalOpen} onDismiss={closeModal} title={props.title} actions={<ButtonGroup>
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
}`,...(S=(x=u.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const nn=["Basic","ConfirmingDestructiveAction","ConfirmingFormCancellation","LeavingFormPage"];export{c as Basic,d as ConfirmingDestructiveAction,p as ConfirmingFormCancellation,u as LeavingFormPage,nn as __namedExportsOrder,$ as default};
