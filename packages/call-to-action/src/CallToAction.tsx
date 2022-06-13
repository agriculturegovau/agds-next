import {
	ButtonHTMLAttributes,
	ElementType,
	PropsWithChildren,
	useState,
} from 'react';
import { useSpring, animated } from '@react-spring/web';
import {
	LinkProps,
	mapSpacing,
	usePrefersReducedMotion,
} from '@ag.ds-next/core';
import { Box, Flex } from '@ag.ds-next/box';
import { BaseButton } from '@ag.ds-next/button';
import { ChevronRightIcon } from '@ag.ds-next/icon';
import { TextLink } from '@ag.ds-next/text-link';

export type CallToActionLinkProps = Omit<LinkProps, 'color'>;

export const CallToActionLink = (props: CallToActionLinkProps) => (
	<CallToAction as={TextLink} {...props} />
);

export type CallToActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const CallToActionButton = (props: CallToActionButtonProps) => {
	return <CallToAction as={BaseButton} {...props} />;
};

type CallToActionProps = PropsWithChildren<{
	as: ElementType;
	className?: string;
}>;

const AnimatedChevronRightIcon = animated(ChevronRightIcon);

export const CallToAction = ({
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
		<Box
			display="inline-block"
			onMouseEnter={() => setMouseOver(true)}
			onMouseLeave={() => setMouseOver(false)}
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
				css={{ alignSelf: 'flex-start' }}
				{...props}
			>
				{children}
				<AnimatedChevronRightIcon
					weight="bold"
					size="sm"
					style={animationStyles}
				/>
			</Flex>
		</Box>
	);
};
