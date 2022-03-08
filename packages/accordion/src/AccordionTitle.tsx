import { animated, useSpring } from 'react-spring';
import { Box, Flex } from '@ag.ds-next/box';
import { ChevronDownIcon } from '@ag.ds-next/icon';
import { usePrefersReducedMotion } from '@ag.ds-next/core';

export type AccordionTitleProps = {
	children: string;
	id: string;
	ariaControls: string;
	isOpen?: boolean;
	onToggle?: () => void;
	tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const AnimatedIcon = animated(ChevronDownIcon);

export const AccordionTitle = ({
	ariaControls,
	children,
	id,
	isOpen,
	onToggle,
	tag = 'h3',
}: AccordionTitleProps) => {
	const prefersReducedMotion = usePrefersReducedMotion();
	const style = useSpring({
		from: { transform: `rotate(0deg)` },
		to: { transform: `rotate(${isOpen ? 180 : 0}deg)` },
		immediate: prefersReducedMotion,
	});

	return (
		<Box as={tag} borderBottom={isOpen}>
			<Flex
				as="button"
				aria-controls={ariaControls}
				aria-expanded={isOpen}
				color="action"
				onClick={onToggle}
				fontSize="md"
				lineHeight="heading"
				id={id}
				fontWeight="bold"
				background="shade"
				padding={1}
				width="100%"
				justifyContent="space-between"
				alignItems="center"
				link
				focus
			>
				{children}
				<AnimatedIcon weight="bold" size={1} style={style} />
			</Flex>
		</Box>
	);
};
