import { useRef } from 'react';
import { useId } from '@reach/auto-id';
import { useSpring, animated } from '@react-spring/web';
import { useLinkComponent } from '@ag.ds-next/core';
import { BaseButton } from '@ag.ds-next/button';
import {
	packs,
	tokens,
	usePrefersReducedMotion,
	useToggleState,
} from '@ag.ds-next/core';
import { ProgressIndicatorCollapseButton } from './ProgressIndicatorCollapseButton';
import { ProgressIndicatorContainer } from './ProgressIndicatorContainer';
import {
	ProgressIndicatorItem,
	ProgressIndicatorItemProps,
} from './ProgressIndicatorItem';
import { ProgressIndicatorList } from './ProgressIndicatorList';

export type ProgressIndicatorProps = {
	items: (Omit<ProgressIndicatorItemProps, 'children'> & { label: string })[];
};

export const ProgressIndicator = ({ items }: ProgressIndicatorProps) => {
	const Link = useLinkComponent();
	const { buttonId, bodyId } = useProgressIndicatorIds();
	const ref = useRef<HTMLUListElement>(null);
	const [isOpen, onToggle] = useToggleState(false, true);

	const prefersReducedMotion = usePrefersReducedMotion();
	const animatedHeight = useSpring({
		from: { display: 'none', height: 0 },
		to: async (next) => {
			if (isOpen) await next({ display: 'block' });
			await next({
				height: isOpen ? ref.current?.offsetHeight : 0,
				immediate: prefersReducedMotion,
			});
			await next(isOpen ? { height: 'auto' } : { display: 'none' });
		},
	});

	return (
		<ProgressIndicatorContainer>
			<ProgressIndicatorCollapseButton
				isOpen={isOpen}
				onClick={onToggle}
				ariaControls={bodyId}
				id={buttonId}
				items={items}
			/>
			<animated.div
				id={bodyId}
				aria-labelledby={buttonId}
				style={animatedHeight}
				css={{
					overflow: 'hidden',
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
					{items.map(({ label, ...props }, index) => (
						<ProgressIndicatorItem
							key={index}
							as={'href' in props ? Link : BaseButton}
							{...props}
						>
							{label}
						</ProgressIndicatorItem>
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
