import { MouseEventHandler, PropsWithChildren } from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { mapSpacing, tokens } from '../core';
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
				alignItems="center"
				aria-controls={ariaControls}
				aria-expanded={isOpen}
				as={BaseButton}
				background={background}
				color="action"
				css={{
					'[data-accordion-indent="true"] &': {
						paddingLeft: mapSpacing(1.5),
						paddingRight: mapSpacing(1.5),
					},
					'&:hover': {
						backgroundColor: hoverColorMap[background],
					},
				}}
				focusRingFor="keyboard"
				fontSize="md"
				fontWeight="bold"
				id={id}
				justifyContent="space-between"
				lineHeight="heading"
				link
				onClick={onClick}
				paddingY={1}
				width="100%"
			>
				{children}
				<ChevronDownIcon
					css={{
						transition: `transform ${tokens.transition.duration}ms ${tokens.transition.timingFunction}`,
						transform: `rotate(${isOpen ? 180 : 0}deg)`,
					}}
					weight="bold"
				/>
			</Flex>
		</Box>
	);
};
