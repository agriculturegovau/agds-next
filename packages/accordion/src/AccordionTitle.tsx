import { animated, useSpring } from 'react-spring';
import { Box, Flex } from '@ag.ds-next/box';
import { Icon } from '@ag.ds-next/icon';
import { usePrefersReducedMotion } from '@ag.ds-next/core';

export type AccordionTitleProps = {
	id: string;
	ariaControls: string;
	isOpen?: boolean;
	onToggle?: () => void;
	tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	title: string;
};

export const AccordionTitle = ({
	id,
	ariaControls,
	isOpen,
	onToggle,
	title,
	tag = 'h3',
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
				as="button"
				aria-controls={ariaControls}
				aria-expanded={isOpen}
				color="action"
				onClick={onToggle}
				fontSize="md"
				id={id}
				fontWeight="bold"
				background="bodyAlt"
				padding={1}
				width="100%"
				justifyContent="space-between"
				alignItems="center"
				link
				focus
			>
				{title}
				<animated.div style={style}>
					<Icon icon="chevronUp" size={1} />
				</animated.div>
			</Flex>
		</Box>
	);
};
