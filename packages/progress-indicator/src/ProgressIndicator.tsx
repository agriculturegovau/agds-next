import { Box } from '@ag.ds-next/box';
import { useId } from '@reach/auto-id';
import {
	tokens,
	useElementSize,
	usePrefersReducedMotion,
	useToggleState,
	useWindowSize,
} from '@ag.ds-next/core';
import { forwardRef, useMemo, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { ProgressIndicatorCollapseButton } from './ProgressIndicatorCollapseButton';
import { ProgressIndicatorContainer } from './ProgressIndicatorContainer';
import {
	ProgressIndicatorItemButton,
	ProgressIndicatorItemButtonProps,
	ProgressIndicatorItemLink,
	ProgressIndicatorItemLinkProps,
} from './ProgressIndicatorItem';

export type ProgressIndicatorItem = (
	| ProgressIndicatorItemButtonProps
	| ProgressIndicatorItemLinkProps
) & {
	label: string;
};

export type ProgressIndicatorProps = {
	items: ProgressIndicatorItem[];
};

export const useProgressIndicatorIds = () => {
	const autoId = useId();
	return {
		buttonId: `progress-indicator-${autoId}-button`,
		bodyId: `progress-indicator-${autoId}-body`,
	};
};

export const ProgressIndicator = ({ items }: ProgressIndicatorProps) => {
	const { buttonId, bodyId } = useProgressIndicatorIds();
	const ref = useRef<HTMLUListElement>(null);
	const [isOpen, onToggle] = useToggleState(false, true);
	const { height } = useElementSize(ref);

	const prefersReducedMotion = usePrefersReducedMotion();
	const animatedHeight = useSpring({
		from: { height: 0 },
		to: { height: isOpen ? height : 0 },
		immediate: prefersReducedMotion,
	});

	const { windowWidth } = useWindowSize();

	const bodyAriaHidden = useMemo(() => {
		if (windowWidth === undefined) return;
		if (windowWidth >= tokens.breakpoint.md) return;
		return !isOpen;
	}, [windowWidth, isOpen]);

	return (
		<ProgressIndicatorContainer>
			<ProgressIndicatorCollapseButton
				isOpen={isOpen}
				onClick={onToggle}
				ariaControls={bodyId}
				id={buttonId}
				items={items}
			>
				Progress
			</ProgressIndicatorCollapseButton>
			<animated.div
				id={bodyId}
				aria-labelledby={buttonId}
				aria-hidden={bodyAriaHidden}
				style={animatedHeight}
				css={{
					overflow: 'hidden',
					// Overwrite the animated height for tablet/desktop sizes.
					[tokens.mediaQuery.min.md]: {
						overflow: 'unset',
						height: 'auto !important',
					},
				}}
			>
				<ProgressIndicatorList items={items} ref={ref} />
			</animated.div>
		</ProgressIndicatorContainer>
	);
};

export type ProgressIndicatorListProps = {
	items: ProgressIndicatorItem[];
};

const ProgressIndicatorList = forwardRef<
	HTMLUListElement,
	ProgressIndicatorListProps
>(function ProgressIndicatorList({ items }, ref) {
	return (
		<Box
			as="ul"
			ref={ref}
			borderTop
			css={{
				[tokens.mediaQuery.min.md]: {
					borderTop: 'none',
				},
			}}
		>
			{items.map(({ label, ...props }, index) => {
				if (isItemLink(props)) {
					return (
						<ProgressIndicatorItemLink key={index} {...props}>
							{label}
						</ProgressIndicatorItemLink>
					);
				}
				return (
					<ProgressIndicatorItemButton key={index} {...props}>
						{label}
					</ProgressIndicatorItemButton>
				);
			})}
		</Box>
	);
});

const isItemLink = (
	item: Omit<ProgressIndicatorItem, 'label'>
): item is ProgressIndicatorItemLinkProps => 'href' in item;
