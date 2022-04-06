---
title: Modal
description: Modal is a window that appears in front of the current page, to focus user attention on one action or piece of information
group: Content
---

Modals are ideal for prompting a user to confirm a destructive action.

For other uses, other patterns are preferred.

```jsx live
() => {
	const [isModalOpen, openModal, closeModal] = useTernaryState(false);

	return (
		<div>
			<Button onClick={openModal}>Open modal</Button>
			<Modal
				isOpen={isModalOpen}
				onDismiss={closeModal}
				title="This is the title of the modal dialogue, it can span lines but should not be too long."
			>
				<Stack gap={2}>
					<Text as="p">
						This is the Modal Body paragraph, it provides detailed instruction
						and context for the the modal action. It can also span lines but
						long form content should be avoided.
					</Text>
					<ModalButtonGroup>
						<Button onClick={closeModal}>Ok</Button>
						<Button variant="secondary" onClick={closeModal}>
							Cancel
						</Button>
						<Button variant="tertiary" onClick={closeModal}>
							Cancel
						</Button>
					</ModalButtonGroup>
				</Stack>
			</Modal>
		</div>
	);
};
```
