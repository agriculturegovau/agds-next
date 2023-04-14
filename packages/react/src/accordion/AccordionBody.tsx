import { PropsWithChildren } from 'react';
import { packs } from '../core';

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
	return (
		<div
			id={id}
			aria-labelledby={ariaLabelledBy}
			role="region"
			css={{
				overflow: 'hidden',
				display: isOpen ? 'block' : 'none',
				...packs.print.visible,
			}}
		>
			{children}
		</div>
	);
};
