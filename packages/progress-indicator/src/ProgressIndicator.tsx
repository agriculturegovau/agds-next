import { useId } from '@reach/auto-id';
import {
	tokens,
	useElementSize,
	usePrefersReducedMotion,
	useToggleState,
	useWindowSize,
} from '@ag.ds-next/core';
import { useMemo, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { ProgressIndicatorCollapseButton } from './ProgressIndicatorCollapseButton';
import { ProgressIndicatorContainer } from './ProgressIndicatorContainer';
import {
	ProgressIndicatorList,
	ProgressIndicatorListItem,
} from './ProgressIndicatorList';
import {
	ProgressIndicatorItem,
	ProgressIndicatorItemButton,
	ProgressIndicatorItemLink,
	ProgressIndicatorItemLinkProps,
} from './ProgressIndicatorItem';

export type ProgressIndicatorProps = {
	items: ProgressIndicatorItem[];
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
				<ProgressIndicatorList ref={ref}>
					{items.map(({ label, ...props }, index) => (
						<ProgressIndicatorListItem
							key={index}
							css={{
								[tokens.mediaQuery.max.md]: {
									'&:last-of-type': { borderBottom: 'none' },
								},
							}}
						>
							{isItemLink(props) ? (
								<ProgressIndicatorItemLink {...props}>
									{label}
								</ProgressIndicatorItemLink>
							) : (
								<ProgressIndicatorItemButton {...props}>
									{label}
								</ProgressIndicatorItemButton>
							)}
						</ProgressIndicatorListItem>
					))}
				</ProgressIndicatorList>
			</animated.div>
		</ProgressIndicatorContainer>
	);
};

export const useProgressIndicatorIds = () => {
	const autoId = useId();
	return {
		buttonId: `progress-indicator-${autoId}-button`,
		bodyId: `progress-indicator-${autoId}-body`,
	};
};

export const isItemLink = (
	item: Omit<ProgressIndicatorItem, 'label'>
): item is ProgressIndicatorItemLinkProps => 'href' in item;
