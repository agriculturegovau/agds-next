import {
	Fragment,
	FunctionComponent,
	KeyboardEvent,
	useCallback,
	useEffect,
	useRef,
} from 'react';
import { Global } from '@emotion/react';
import { createPortal } from 'react-dom';
import { ModalCover } from './ModalCover';
import { ModalPanel, ModalPanelProps } from './ModalPanel';

export type ModalProps = ModalPanelProps & {
	isOpen?: boolean;
};

export const Modal: FunctionComponent<ModalProps> = ({
	actions,
	children,
	isOpen = false,
	onDismiss,
	title,
}) => {
	const coverRef = useRef<HTMLDivElement>(null);

	// Close the modal when the user presses the escape key
	const handleEscape = useCallback(
		(e: KeyboardEvent<HTMLDivElement>) => {
			if (isOpen && e.code === 'Escape') {
				e.preventDefault();
				e.stopPropagation();
				onDismiss();
			}
		},
		[isOpen, onDismiss]
	);

	// The following `useEffect` will add `aria-hidden="true"` to every direct child of the `body` element when the modal is opened.
	// This is because `aria-modal` is not yet supported by all browsers (https://a11ysupport.io/tech/aria/aria-modal_attribute).
	// This fixes a bug in certain devices where focus is not trapped correctly such as VoiceOver on iOS.
	// This has been inspired by Reach UI (https://github.com/reach/reach-ui/blob/main/packages/dialog/src/index.tsx)
	useEffect(() => {
		if (!isOpen || !coverRef.current) return;

		const rootNodes: Element[] = [];
		const originalAttrs: (string | null)[] = [];

		document.querySelectorAll('body > *').forEach(function (node) {
			if (node === coverRef.current) return;
			const attr = node.getAttribute('aria-hidden');
			const alreadyHidden = attr !== null && attr !== 'false';
			if (alreadyHidden) return;
			rootNodes.push(node);
			originalAttrs.push(attr);
			node.setAttribute('aria-hidden', 'true');
		});

		return () => {
			rootNodes.forEach((node, index) => {
				const originalValue = originalAttrs[index];
				if (originalValue === null) {
					node.removeAttribute('aria-hidden');
				} else {
					node.setAttribute('aria-hidden', originalValue);
				}
			});
		};
	}, [isOpen]);

	if (!isOpen) return null;

	return createPortal(
		<Fragment>
			<LockScroll />
			<ModalCover ref={coverRef} onKeyDown={handleEscape}>
				<ModalPanel onDismiss={onDismiss} title={title} actions={actions}>
					{children}
				</ModalPanel>
			</ModalCover>
		</Fragment>,
		document.body
	);
};

const LockScroll = () => <Global styles={{ body: { overflow: 'hidden' } }} />;
