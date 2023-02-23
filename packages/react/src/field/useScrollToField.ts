import { useCallback, MouseEvent } from 'react';

export function useScrollToField() {
	return useCallback((event: MouseEvent<HTMLAnchorElement>) => {
		const focusTarget = getFocusTarget(event);
		if (focusTarget) {
			scrollFieldIntoView(focusTarget);
			// Prevent default browser behaviour
			event.preventDefault();
		}
	}, []);
}

export function getFocusTarget(event: MouseEvent<HTMLAnchorElement>) {
	const target = event.target;
	if (!(target instanceof HTMLAnchorElement)) return false;
	// Attempt to the find target ID from the anchor tag href
	const targetId = getTargetId(event);
	if (!targetId) return false;
	// Attempt to find the target element using the target Id
	const targetEl = document.getElementById(targetId);
	if (!targetEl) return false;

	return targetEl.id;
}

function getTargetId(event: MouseEvent<HTMLAnchorElement>) {
	const target = event.target;
	if (!(target instanceof HTMLAnchorElement)) return;
	return target.hash.substring(1);
}

export function scrollFieldIntoView(targetId: string) {
	const targetEl = document.getElementById(targetId);
	if (!targetEl) return false;

	const targetLabel = document.querySelector("label[for='" + targetId + "']");
	const targetLabelParent = targetLabel?.parentElement;
	if (targetEl.tagName.toLowerCase() === 'div') {
		// If the target element is a div (e.g. a `ControlGroup`), focus the first child input
		targetEl.querySelector('input')?.focus();
	} else {
		// Otherwise, focus the target element
		targetEl.focus();
	}

	// Scroll the field container into view if possible, otherwise fallback to scrolling to the target
	if (targetLabelParent) {
		targetLabelParent.scrollIntoView();
	} else {
		targetEl.scrollIntoView();
	}
}
