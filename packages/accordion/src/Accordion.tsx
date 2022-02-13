import { useContext, useState } from 'react';
import { Box, BoxProps } from '@ag.ds-next/box';

import { AccordionTitle, AccordionTitleProps } from './AccordionTitle';

import { AccordionContext } from './context';

type AccordionProps = { id: string } & AccordionTitleProps &
	Pick<BoxProps, 'palette'>;

export const AccordionItem = ({
	children,
	id,
	palette,
	title,
	titleHeadingLevel,
}: AccordionProps) => {
	const [isOpen, setOpen] = useState(false);

	const onItemOpen = () => {
		setOpen(true);
	};

	const onItemClose = () => {
		setOpen(false);
	};

	const onItemToggle = () => {
		if (isOpen) {
			onItemClose();
		} else {
			onItemOpen();
		}
	};

	return (
		<AccordionContext.Provider
			value={{ id, isOpen, onItemClose, onItemOpen, onItemToggle }}
		>
			<Box palette={palette} border>
				<AccordionTitle titleHeadingLevel={titleHeadingLevel} title={title} />
				<AccordionBody>{children}</AccordionBody>
			</Box>
		</AccordionContext.Provider>
	);
};

export const AccordionBody = ({ children }) => {
	const { isOpen, id } = useContext(AccordionContext);
	return (
		<Box
			as="section"
			id={`${id}-default`}
			aria-labelledby={`${id}-title`}
			role="region"
			css={{
				display: isOpen ? 'block' : 'none',
				'@media (prefers-reduced-motion)': {},
			}}
		>
			{children}
		</Box>
	);
};

export const AccordionGroup = ({ children }) => {
	return <Box>{children}</Box>;
};
