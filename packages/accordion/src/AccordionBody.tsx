import { PropsWithChildren, useRef } from 'react';
import { useElementSize, usePrefersReducedMotion } from '@ag.ds-next/core';
import { useSpring, animated } from 'react-spring';

export type AccordionBodyProps = PropsWithChildren<{
	ariaLabelledBy: string;
	id: string;
	isOpen: boolean;
}>;

export const AccordionBody = ({
	children,
	ariaLabelledBy,
	id,
	isOpen,
}: AccordionBodyProps) => {
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
			<div ref={ref}>{children}</div>
		</animated.section>
	);
};
