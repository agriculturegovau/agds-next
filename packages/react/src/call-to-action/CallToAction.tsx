import { ElementType, PropsWithChildren, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { LinkProps, mapSpacing, usePrefersReducedMotion } from '../core';
import { Flex } from '../box';
import { BaseButton, BaseButtonProps } from '../button';
import { ChevronRightIcon } from '../icon';
import { TextLink } from '../text-link';

export type CallToActionLinkProps = LinkProps;

export const CallToActionLink = (props: CallToActionLinkProps) => (
	<CallToAction as={TextLink} {...props} />
);

export type CallToActionButtonProps = BaseButtonProps;

export const CallToActionButton = (props: CallToActionButtonProps) => {
	return <CallToAction as={BaseButton} {...props} />;
};

type CallToActionProps = PropsWithChildren<{
	as: ElementType;
	className?: string;
}>;

const AnimatedChevronRightIcon = animated(ChevronRightIcon);

const CallToAction = ({
	as,
	children,
	className,
	...props
}: CallToActionProps) => {
	const [mouseOver, setMouseOver] = useState(false);

	const prefersReducedMotion = usePrefersReducedMotion();
	const animationStyles = useSpring({
		from: { paddingLeft: mapSpacing(0) },
		to: { paddingLeft: mouseOver ? mapSpacing(0.25) : mapSpacing(0) },
		immediate: prefersReducedMotion,
	});

	return (
		<Flex
			inline
			onMouseEnter={() => setMouseOver(true)}
			onMouseLeave={() => setMouseOver(false)}
			css={{ alignSelf: 'flex-start' }}
		>
			<Flex
				as={as}
				className={className}
				gap={0.5}
				alignItems="center"
				fontWeight="bold"
				fontSize="md"
				link
				focus
				{...props}
			>
				{children}
				<AnimatedChevronRightIcon
					weight="bold"
					size="sm"
					style={animationStyles}
				/>
			</Flex>
		</Flex>
	);
};
