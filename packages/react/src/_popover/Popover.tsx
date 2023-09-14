import { CSSProperties, PropsWithChildren } from 'react';
import {
	type Placement,
	type ReferenceType,
	useFloating,
	autoUpdate,
	offset,
	flip,
	size,
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
				boxShadow: tokens.shadow.lg,
				zIndex: tokens.zIndex.popover,
			}}
			{...props}
		>
			{children}
		</Box>
	);
});

const DEFAULT_OFFSET = 8;

type UsePopoverOptions = {
	/** The placement of the popover element in relation to the reference element. */
	placement?: Placement;
	/** The maximum height of the popover element. */
	maxHeight?: number;
	/** If true, the popover element will match the width of the reference element. */
	matchReferenceWidth?: boolean;
	/** Used to control the distance between the reference element and popover element. */
	offset?: number;
};

export function usePopover<RT extends ReferenceType = ReferenceType>(
	options?: UsePopoverOptions
) {
	const {
		placement = 'bottom-start',
		matchReferenceWidth = false,
		maxHeight,
		offset: offsetOption = DEFAULT_OFFSET,
	} = options || {};

	const { refs, floatingStyles } = useFloating<RT>({
		placement,
		middleware: [
			// Adds distance between the reference and floating element
			// https://floating-ui.com/docs/offset
			offset(offsetOption),
			// Changes the placement of the floating element in order to keep it in view
			// https://floating-ui.com/docs/flip
			flip(),
			// Allows you to change the size of the floating element
			// https://floating-ui.com/docs/size
			size({
				padding: DEFAULT_OFFSET, // Prevents the floating element hit the edge of the screen
				apply({ availableWidth, availableHeight, elements, rects }) {
					Object.assign(elements.floating.style, {
						maxHeight: `${
							// Popovers can have a predefined max-height if there is enough room on the screen
							maxHeight && availableHeight > maxHeight
								? maxHeight
								: availableHeight
						}px`,
						// https://floating-ui.com/docs/size#match-reference-width
						...(matchReferenceWidth
							? {
									width: `${rects.reference.width}px`,
							  }
							: {
									maxWidth: `${availableWidth}px`,
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
