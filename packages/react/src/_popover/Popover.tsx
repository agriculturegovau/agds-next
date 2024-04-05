import { CSSProperties, PropsWithChildren, useEffect } from 'react';
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
	/** Fix the height of the popover to match the height of the content. */
	fixHeightAsContentHeight?: boolean;
	/** The styles to set on the Popover. */
	style: CSSProperties;
	/** Whether the Popover is visible. This uses the CSS `visibility` attribute. */
	visibility?: 'visible' | 'hidden';
}>;

export const Popover = forwardRefWithAs<'div', PopoverProps>(function Popover(
	{ children, visibility, ...props },
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
				visibility,
			}}
			{...props}
		>
			{children}
		</Box>
	);
});

const DEFAULT_OFFSET = 8;

type UsePopoverOptions = {
	/** Fix the height of the popover to match the height of the content. */
	fixHeightAsContentHeight?: boolean;
	/** The placement of the popover element in relation to the reference element. */
	placement?: Placement;
	/** The minimum acceptable height of the popover element before the `flip` middleware takes over.  */
	minHeight?: number;
	/** The maximum height of the popover element. */
	maxHeight?: number;
	/** If true, the popover element will match the width of the reference element. */
	matchReferenceWidth?: boolean;
	/** Used to control the vertical distance between the reference element and popover element. Value is in pixels. */
	offset?: number;
	/** If true, the popover element is open. Required when using the `hiddenWithCSS` option. */
	isOpen?: boolean;
	/** If true, the popover element is using `display: none` or `visibility: hidden` instead of conditional rendering. */
	hiddenWithCSS?: boolean;
};

export function usePopover<RT extends ReferenceType = ReferenceType>(
	options?: UsePopoverOptions
) {
	const {
		isOpen,
		fixHeightAsContentHeight,
		hiddenWithCSS = false,
		placement = 'bottom-start',
		matchReferenceWidth = false,
		minHeight,
		maxHeight,
		offset: offsetOption = DEFAULT_OFFSET,
	} = options || {};

	const floating = useFloating<RT>({
		placement,
		middleware: [
			// Adds distance between the reference and floating element
			// https://floating-ui.com/docs/offset
			offset(offsetOption),
			// Changes the placement of the floating element in order to keep it in view
			// https://floating-ui.com/docs/flip
			flip({ padding: DEFAULT_OFFSET }),
			// Allows you to change the size of the floating element
			// https://floating-ui.com/docs/size
			size({
				padding: DEFAULT_OFFSET, // Prevents the floating element hit the edge of the screen
				apply({ availableHeight, availableWidth, elements, rects }) {
					Object.assign(elements.floating.style, {
						...(fixHeightAsContentHeight
							? { height: 'max-content' }
							: {
									maxHeight: `${maxHeight || availableHeight}px`,
							  }),
						...(minHeight !== undefined && { minHeight: `${minHeight}px` }),
						// https://floating-ui.com/docs/size#match-reference-width
						...(matchReferenceWidth
							? {
									width: `${rects.reference.width}px`,
							  }
							: {
									maxWidth: `${availableWidth}px`,
									overflowX: 'auto',
							  }),
					});
				},
			}),
		],
		// Ensures the floating element remains anchored to its reference element
		// https://floating-ui.com/docs/react#anchoring
		...(!hiddenWithCSS && {
			whileElementsMounted(referenceEl, floatingEl, update) {
				const cleanup = autoUpdate(referenceEl, floatingEl, update, {
					// JSDOM does not support ResizeObserver
					// https://floating-ui.com/docs/autoupdate#elementresize
					elementResize: typeof ResizeObserver === 'function',
				});
				return cleanup;
			},
		}),
	});

	// Ensures the floating element remains anchored to its reference element when using `display: none` or `visibility: hidden`
	// https://floating-ui.com/docs/react#anchoring
	useEffect(() => {
		if (!isOpen || !hiddenWithCSS) return;
		if (!floating.elements.floating || !floating.elements.reference) return;
		const cleanup = autoUpdate(
			floating.elements.reference,
			floating.elements.floating,
			floating.update,
			{
				// JSDOM does not support ResizeObserver
				// https://floating-ui.com/docs/autoupdate#elementresize
				elementResize: typeof ResizeObserver === 'function',
			}
		);
		return cleanup;
	}, [
		hiddenWithCSS,
		isOpen,
		floating.elements.floating,
		floating.elements.reference,
		floating.update,
	]);

	function getReferenceProps() {
		return {
			ref: floating.refs.setReference,
		};
	}

	function getPopoverProps() {
		return {
			ref: floating.refs.setFloating,
			style: floating.floatingStyles,
		};
	}

	return {
		getReferenceProps,
		getPopoverProps,
		referenceRef: floating.refs.reference,
		popoverRef: floating.refs.floating,
	};
}
