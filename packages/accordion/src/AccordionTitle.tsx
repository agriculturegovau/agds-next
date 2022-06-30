import { MouseEventHandler, PropsWithChildren } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { Box, Flex } from '@ag.ds-next/box';
import { ChevronDownIcon } from '@ag.ds-next/icon';
import { boxPalette, usePrefersReducedMotion } from '@ag.ds-next/core';
import { BaseButton } from '@ag.ds-next/button/';

export type AccordionTitleProps = PropsWithChildren<{
	id: string;
	ariaControls: string;
	isOpen?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}>;

const AnimatedIcon = animated(ChevronDownIcon);

export const AccordionTitle = ({
	ariaControls,
	children,
	id,
	isOpen,
	onClick,
	tag,
}: AccordionTitleProps) => {
	const prefersReducedMotion = usePrefersReducedMotion();
	const style = useSpring({
		from: { transform: `rotate(0deg)` },
		to: { transform: `rotate(${isOpen ? 180 : 0}deg)` },
		immediate: prefersReducedMotion,
	});

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
				background="body"
				paddingY={1}
				justifyContent="space-between"
				alignItems="center"
				width="100%"
				link
				focus
				css={{
					'&:hover': {
						backgroundColor: boxPalette.backgroundShade,
					},
				}}
			>
				{children}
				<AnimatedIcon weight="bold" size="sm" style={style} />
			</Flex>
		</Box>
	);
};
