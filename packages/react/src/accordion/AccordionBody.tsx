import { type PropsWithChildren, useRef } from 'react';
import { packs, useTransitionHeight } from '../core';

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
	const transitionHeightCSS = useTransitionHeight(isOpen);

	return (
		<div
			aria-labelledby={ariaLabelledBy}
			css={{
				...transitionHeightCSS,
				...packs.print.visible,
			}}
			id={id}
			role="region"
		>
			<div ref={ref}>{children}</div>
		</div>
	);
};
