import { useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import {
	packs,
	tokens,
	useId,
	usePrefersReducedMotion,
	useToggleState,
	useWindowSize,
} from '@ag.ds-next/core';
import { ProgressIndicatorCollapseButton } from './ProgressIndicatorCollapseButton';
import { ProgressIndicatorContainer } from './ProgressIndicatorContainer';
import {
	ProgressIndicatorItem,
	ProgressIndicatorItemButton,
	ProgressIndicatorItemLink,
	ProgressIndicatorItemLinkProps,
} from './ProgressIndicatorItem';
import { ProgressIndicatorList } from './ProgressIndicatorList';

export type ProgressIndicatorProps = {
	/** If the ProgressIndicator is placed on a page with 'bodyAlt' background, please set this to "bodyAlt". */
	background?: 'body' | 'bodyAlt';
	items: ProgressIndicatorItem[];
};

export const ProgressIndicator = ({
	background,
	items,
}: ProgressIndicatorProps) => {
	const { buttonId, bodyId } = useProgressIndicatorIds();
	const ref = useRef<HTMLUListElement>(null);
	const [isOpen, onToggle] = useToggleState(false, true);

	const prefersReducedMotion = usePrefersReducedMotion();
	const animatedHeight = useSpring({
		from: { display: 'none', height: 0 },
		to: async (next) => {
			// Show the element so it's height can be animated
			if (isOpen) await next({ display: 'block', overflow: 'hidden' });
			// Animate the elements height
			await next({
				overflow: 'hidden',
				height: isOpen ? ref.current?.offsetHeight : 0,
				immediate: prefersReducedMotion,
			});
			// Animation end state
			await next(
				isOpen
					? { height: 'auto', overflow: 'initial' }
					: { display: 'none', overflow: 'initial' }
			);
		},
	});

	const { windowWidth } = useWindowSize();
	const isMobile = (windowWidth || 0) <= tokens.breakpoint.lg - 1;

	return (
		<ProgressIndicatorContainer>
			<ProgressIndicatorCollapseButton
				background={background}
				isOpen={isOpen}
				onClick={onToggle}
				ariaControls={bodyId}
				id={buttonId}
				items={items}
			/>
			<animated.div
				id={bodyId}
				// As this component looks similar to an accordion in smaller screen sizes, we need to conditionally add some aria attributes
				{...(isMobile && { role: 'region', 'aria-labelledby': buttonId })}
				style={animatedHeight}
				css={{
					// Overwrite the animated height for tablet/desktop sizes.
					[tokens.mediaQuery.min.md]: {
						overflow: 'unset',
						display: 'block !important',
						height: 'auto !important',
					},
					...packs.print.visible,
				}}
			>
				<ProgressIndicatorList ref={ref}>
					{items.map(({ label, ...props }, index) => {
						if (isItemLink(props)) {
							return (
								<ProgressIndicatorItemLink
									key={index}
									background={background}
									{...props}
								>
									{label}
								</ProgressIndicatorItemLink>
							);
						}
						return (
							<ProgressIndicatorItemButton
								key={index}
								background={background}
								{...props}
							>
								{label}
							</ProgressIndicatorItemButton>
						);
					})}
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
