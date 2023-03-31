import { forwardRef, PropsWithChildren, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Box, Flex } from '@ag.ds-next/react/box';
import { usePrefersReducedMotion } from '@ag.ds-next/react/core';

const AnimatedBox = animated(Box);

export type FilterAccordionProps = PropsWithChildren<{
	ariaLabelledBy: string;
	id: string;
	isOpen: boolean;
}>;

export const FilterAccordion = forwardRef<HTMLDivElement, FilterAccordionProps>(
	({ ariaLabelledBy, id, isOpen, children }, focusRef) => {
		// This code has been copied from the Accordion component.
		const animatedHeightRef = useRef<HTMLDivElement>(null);
		const prefersReducedMotion = usePrefersReducedMotion();
		const animatedHeight = useSpring({
			from: { display: 'none', height: 0 },
			to: async (next) => {
				if (isOpen) await next({ display: 'block' });
				await next({
					height: isOpen ? animatedHeightRef.current?.offsetHeight : 0,
					immediate: prefersReducedMotion,
				});
				await next(isOpen ? { height: 'auto' } : { display: 'none' });
			},
		});

		return (
			<AnimatedBox
				ref={focusRef}
				as="section"
				focus
				tabIndex={-1}
				id={id}
				aria-labelledby={ariaLabelledBy}
				style={animatedHeight}
				css={{
					overflow: 'hidden',
				}}
			>
				<Flex
					ref={animatedHeightRef}
					columnGap={1}
					rowGap={1.5}
					alignItems={{ xs: 'stretch', md: 'flex-end' }}
					flexDirection={{ xs: 'column', md: 'row' }}
					background="shade"
					flexWrap="wrap"
					padding={1}
					rounded
					border
					borderColor="muted"
					css={{
						overflow: 'hidden',
					}}
				>
					{children}
				</Flex>
			</AnimatedBox>
		);
	}
);
