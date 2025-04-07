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
	const [transitionHeightProp, transitionHeightStyles] =
		useTransitionHeight(isOpen);

	return (
		<div
			aria-labelledby={ariaLabelledBy}
			css={[transitionHeightStyles, packs.print.visible]}
			id={id}
			role="region"
			{...transitionHeightProp}
		>
			<div ref={ref}>{children}</div>
		</div>
	);
};
