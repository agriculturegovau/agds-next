'use client';
import { useEffect, useRef } from 'react';

/**
 * The following hook will add `aria-hidden="true"` to every direct child of the `body` element when a modal is opened.
 * This is because `aria-modal` is not yet supported by all browsers (https://a11ysupport.io/tech/aria/aria-modal_attribute).
 * This fixes a bug in certain devices where focus is not trapped correctly such as VoiceOver on iOS.
 * This has been inspired by Reach UI (https://github.com/reach/reach-ui/blob/main/packages/dialog/src/index.tsx)
 */
export function useAriaModalPolyfill(isOpen: boolean) {
	const modalContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!isOpen || !modalContainerRef.current) return;

		const rootNodes: Element[] = [];
		const originalAttrs: (string | null)[] = [];
		document.querySelectorAll('body > *').forEach(function (node) {
			if (node === modalContainerRef.current) return;
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

	return { modalContainerRef };
}
