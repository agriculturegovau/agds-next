import { PropsWithChildren, useRef } from 'react';
import { Box } from '@ag.ds-next/box';
import { useElementSize, usePrefersReducedMotion } from '@ag.ds-next/core';
import { useSpring, animated } from 'react-spring';

export type AccordionBodyProps = {
	isOpen?: boolean;
	id: string;
	ariaLabelledBy: string;
	noPadding?: boolean;
};

export const AccordionBody = ({
	ariaLabelledBy,
	children,
	isOpen,
	id,
	noPadding,
}: PropsWithChildren<AccordionBodyProps>) => {
	const ref = useRef<HTMLDivElement>(null);
	const { height } = useElementSize(ref);

	const prefersReducedMotion = usePrefersReducedMotion();
	const style = useSpring({
		from: { height: 0 },
		to: { height: isOpen ? height : 0 },
		immediate: prefersReducedMotion,
	});

	return (
		<animated.section
			id={id}
			aria-labelledby={ariaLabelledBy}
			role="region"
			style={{ overflow: 'hidden', ...style }}
		>
			<Box padding={noPadding ? 0 : 1} ref={ref}>
				{children}
			</Box>
		</animated.section>
	);
};
