import { CSSProperties, PropsWithChildren, useEffect } from 'react';
import {
	type Placement,
	type ReferenceType,
	autoUpdate,
	flip,
	offset,
	shift,
	size,
	useFloating,
} from '@floating-ui/react-dom';
import { Box } from '../box';
import { forwardRefWithAs, tokens } from '../core';

export type PopoverProps = PropsWithChildren<{
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
			background="body"
			border
			borderColor="muted"
			css={{
				boxShadow: tokens.shadow.lg,
				overflow: 'auto',
				position: 'relative',
				visibility,
				zIndex: tokens.zIndex.popover,
			}}
			ref={ref}
			rounded
			{...props}
		>
			{children}
		</Box>
	);
});

const DEFAULT_OFFSET = 8;
const MIN_SIDE_GUTTER_WIDTH = 1;

type UsePopoverOptions = {
	/** If true, the popover element is using `display: none` or `visibility: hidden` instead of conditional rendering. */
	hiddenWithCSS?: boolean;
	/** If true, the popover element is open. Required when using the `hiddenWithCSS` option. */
	isOpen?: boolean;
	/** If true, the popover element will match the width of the reference element. */
	matchReferenceWidth?: boolean;
	/** The maximum height in `px` of the popover element. */
	maxHeight?: number;
	/** The minimum acceptable height in `px` of the popover element before the `flip` middleware takes over.  */
	minHeight?: number;
	/** Used to control the vertical distance between the reference element and popover element. Value is in pixels. */
	offset?: number;
	/** The placement of the popover element in relation to the reference element. */
	placement?: Placement;
};

export function usePopover<RT extends ReferenceType = ReferenceType>(
	options?: UsePopoverOptions
) {
	const {
		hiddenWithCSS = false,
		isOpen,
		matchReferenceWidth = false,
		minHeight: minHeightOption,
		maxHeight: maxHeightOption,
		offset: offsetOption = DEFAULT_OFFSET,
		placement = 'bottom-start',
	} = options || {};

	const floating = useFloating<RT>({
		placement,
		middleware: [
			// Adds distance between the reference and floating element
			// https://floating-ui.com/docs/offset
			offset(offsetOption),
			// Placing shift() before flip() in the array ensures it can do its work before flip() tries to change the placement.
			// https://floating-ui.com/docs/flip#combining-with-shift
			shift({ padding: MIN_SIDE_GUTTER_WIDTH }),
			// Changes the placement of the floating element in order to keep it in view
			// https://floating-ui.com/docs/flip
			flip({ padding: DEFAULT_OFFSET }),
			// Allows you to change the size of the floating element
			// https://floating-ui.com/docs/size
			size({
				padding: DEFAULT_OFFSET, // Prevents the floating element hit the edge of the screen
				apply({ availableHeight: _availableHeight, elements, rects }) {
					// Popovers can have a predefined max-height if there is enough room on the screen
					const maxHeight =
						maxHeightOption && _availableHeight > maxHeightOption
							? maxHeightOption
							: _availableHeight;

					// Minimum acceptable height before `flip` will take over
					const availableHeight = minHeightOption
						? Math.max(minHeightOption, maxHeight)
						: maxHeight;

					Object.assign(elements.floating.style, {
						maxHeight: `${availableHeight}px`, // https://floating-ui.com/docs/size#match-reference-width
						...(matchReferenceWidth
							? {
									width: `${rects.reference.width}px`,
							  }
							: {
									maxWidth: `calc(100vw - ${2 * MIN_SIDE_GUTTER_WIDTH}px)`,
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
