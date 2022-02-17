import { useContext } from 'react';
import { animated, useSpring } from 'react-spring';
import { Box, Flex } from '@ag.ds-next/box';
import { Icon } from '@ag.ds-next/icon';
import { usePrefersReducedMotion } from '@ag.ds-next/core';

import { AccordionContext } from './utils';

export type AccordionTitleProps = {
	children: string;
	id: string;
	ariaControls: string;
	isOpen?: boolean;
	onToggle?: () => void;
	tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const AnimatedIcon = animated(Icon);

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
		to: { transform: `rotate(${isOpen ? 0 : 180}deg)` },
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
				<AnimatedIcon icon="chevronUp" size={1} style={style} />
			</Flex>
		</Box>
	);
};
