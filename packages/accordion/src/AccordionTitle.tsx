import { useContext } from 'react';
import { Box, Flex } from '@ag.ds-next/box';
import { Icon } from '@ag.ds-next/icon';

import { AccordionContext } from './context';

export type AccordionTitleProps = {
	titleHeadingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	title: string;
};

export const AccordionTitle = ({
	title,
	titleHeadingLevel = 'h3',
}: AccordionTitleProps) => {
	const { isOpen, id, onItemToggle } = useContext(AccordionContext);
	return (
		<Box as={titleHeadingLevel}>
			<Flex
				as="button"
				aria-controls={`${id}-default`}
				aria-expanded={isOpen}
				color="action"
				onClick={onItemToggle}
				fontSize="md"
				id={`${id}-title`}
				fontWeight="bold"
				background="pageAlt"
				padding={1}
				width="100%"
				justifyContent="space-between"
				alignItems="center"
				link
			>
				{title}
				<Box
					link
					css={{
						transform: `rotate(${isOpen ? 180 : 0}deg)`,
						transition: 'transform 0.25s ease-in',
					}}
				>
					<Icon icon="chevronUp" size={1} />
				</Box>
			</Flex>
		</Box>
	);
};
