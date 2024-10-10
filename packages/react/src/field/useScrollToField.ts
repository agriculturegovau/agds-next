import { useCallback, MouseEvent } from 'react';

export function useScrollToField() {
	return useCallback(
		(eventOrTargetId: MouseEvent<HTMLAnchorElement> | string) => {
			const targetId = getScrollTargetId(eventOrTargetId);
			if (!targetId) return;

			const targetEl =
				document.getElementById(targetId) ||
				document.getElementsByName(targetId)[0];
			if (!targetEl) return;

			scrollAndFocusTarget(targetId, targetEl);

			// Prevent default browser behaviour if user clicked on a link
			if (typeof eventOrTargetId !== 'string') {
				eventOrTargetId.preventDefault();
			}
		},
		[]
	);
}

function getScrollTargetId(
	eventOrTargetId: MouseEvent<HTMLAnchorElement> | string
) {
	if (typeof eventOrTargetId === 'string') {
		return eventOrTargetId;
	}

	// Attempt to the find target ID from the anchor tag href
	const target = eventOrTargetId.target;
	if (!(target instanceof HTMLAnchorElement)) return;
	return target.hash.substring(1);
}

function scrollAndFocusTarget(targetId: string, targetEl: HTMLElement) {
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
