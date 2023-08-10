import { MouseEventHandler, PropsWithChildren } from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { tokens } from '../core';
import { ChevronDownIcon } from '../icon';
import { BaseButton } from '../button/';
import { hoverColorMap, AccordionBackground } from './utils';

export type AccordionTitleProps = PropsWithChildren<{
	id: string;
	background?: AccordionBackground;
	ariaControls: string;
	isOpen?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}>;

export const AccordionTitle = ({
	ariaControls,
	background = 'body',
	children,
	id,
	isOpen,
	onClick,
	tag,
}: AccordionTitleProps) => {
	return (
		<Box as={tag}>
			<Flex
				as={BaseButton}
				id={id}
				aria-controls={ariaControls}
				aria-expanded={isOpen}
				onClick={onClick}
				color="action"
				fontSize="md"
				lineHeight="heading"
				fontWeight="bold"
				background={background}
				paddingY={1}
				justifyContent="space-between"
				alignItems="center"
				width="100%"
				link
				focus
				css={{
					'&:hover': {
						backgroundColor: hoverColorMap[background],
					},
				}}
			>
				{children}
				<ChevronDownIcon
					css={{
						transition: `transform ${tokens.transition.duration}ms ${tokens.transition.timingFunction}`,
						transform: `rotate(${isOpen ? 180 : 0}deg)`,
					}}
				/>
			</Flex>
		</Box>
	);
};
