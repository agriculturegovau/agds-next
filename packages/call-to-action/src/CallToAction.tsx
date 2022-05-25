import {
	ButtonHTMLAttributes,
	ElementType,
	PropsWithChildren,
	useState,
} from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Flex, linkStyles } from '@ag.ds-next/box';
import { TextLink } from '@ag.ds-next/text';
import { ChevronRightIcon } from '@ag.ds-next/icon';
import {
	LinkProps,
	mapSpacing,
	usePrefersReducedMotion,
} from '@ag.ds-next/core';

export type CallToActionLinkProps = Omit<LinkProps, 'color'>;

export const CallToActionLink = (props: CallToActionLinkProps) => (
	<CallToAction as={TextLink} {...props} />
);

export type CallToActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const CallToActionButton = (props: CallToActionButtonProps) => (
	<CallToAction
		as="button"
		css={[
			linkStyles,
			{
				appearance: 'none',
				background: 'transparent',
				cursor: 'pointer',
				textAlign: 'left',
			},
		]}
		{...props}
	/>
);

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
		<div
			css={{ display: 'inline-block' }}
			onMouseEnter={() => setMouseOver(true)}
			onMouseLeave={() => setMouseOver(false)}
		>
			<Flex
				as={as}
				className={className}
				gap={0.5}
				alignItems="center"
				fontFamily="body"
				fontWeight="bold"
				color="action"
				fontSize="md"
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
		</div>
	);
};
