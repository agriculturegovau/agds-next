import { CSSProperties, PropsWithChildren } from 'react';
import {
	useFloating,
	autoUpdate,
	offset,
	flip,
	size,
	Placement,
} from '@floating-ui/react-dom';
import { Box } from '../box';
import { forwardRefWithAs, tokens } from '../core';

export type PopoverProps = PropsWithChildren<{
	style: CSSProperties;
}>;

export const Popover = forwardRefWithAs<'div', PopoverProps>(function Popover(
	{ children, ...props },
	ref
) {
	return (
		<Box
			ref={ref}
			background="body"
			border
			borderColor="muted"
			rounded
			css={{
				position: 'relative',
				overflowY: 'auto',
				boxShadow: '0 1px 1px rgba(0, 0, 0, 0.3)', // TODO Tokenize
				zIndex: tokens.zIndex.popover,
			}}
			{...props}
		>
			{children}
		</Box>
	);
});

const DEFAULT_OFFSET = 8;

export function usePopover(options?: {
	placement?: Placement;
	matchReferenceWidth?: boolean;
	maxHeight?: number;
}) {
	const { refs, floatingStyles } = useFloating({
		placement: options?.placement ?? 'bottom-start',
		middleware: [
			// Adds distance between the reference and floating element
			// https://floating-ui.com/docs/offset
			offset(DEFAULT_OFFSET),
			// Changes the placement of the floating element in order to keep it in view
			// https://floating-ui.com/docs/flip
			flip(),
			// Allows you to change the size of the floating element
			// https://floating-ui.com/docs/size
			size({
				padding: DEFAULT_OFFSET,
				apply({ availableWidth, availableHeight, elements, rects }) {
					Object.assign(elements.floating.style, {
						maxWidth: `${availableWidth}px`,
						maxHeight: `${
							// Popovers can have a predefined max-height if there is enough room on the screen
							options?.maxHeight && availableHeight > options.maxHeight
								? options.maxHeight
								: availableHeight
						}px`,
						// https://floating-ui.com/docs/size#match-reference-width
						...(options?.matchReferenceWidth && {
							width: `${rects.reference.width}px`,
						}),
					});
				},
			}),
		],
		// Ensures the floating element remains anchored to its reference element
		// https://floating-ui.com/docs/react#anchoring
		whileElementsMounted(referenceEl, floatingEl, update) {
			const cleanup = autoUpdate(referenceEl, floatingEl, update, {
				// JSDOM does not support ResizeObserver
				// https://floating-ui.com/docs/autoupdate#elementresize
				elementResize: typeof ResizeObserver === 'function',
			});
			return cleanup;
		},
	});

	function getReferenceProps() {
		return {
			ref: refs.setReference,
		};
	}

	function getPopoverProps() {
		return {
			ref: refs.setFloating,
			style: floatingStyles,
		};
	}

	return {
		getReferenceProps,
		getPopoverProps,
		referenceRef: refs.reference,
		popoverRef: refs.floating,
	};
}
