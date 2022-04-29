import { PropsWithChildren, useRef } from 'react';
import { usePrefersReducedMotion } from '@ag.ds-next/core';
import { useSpring, animated } from '@react-spring/web';

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
		<animated.div
			id={id}
			aria-labelledby={ariaLabelledBy}
			role="region"
			style={animatedHeight}
			css={{
				overflow: 'hidden',
				'@media print': {
					display: 'block !important',
					height: 'auto !important',
				},
			}}
		>
			<div ref={ref}>{children}</div>
		</animated.div>
	);
};
