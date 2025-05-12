import { type ElementType, type PropsWithChildren } from 'react';
import { type LinkProps } from '../core';
import { Flex } from '../flex';
import { BaseButton, scaleIconOnHover, type BaseButtonProps } from '../button';
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

const CallToAction = ({
	as,
	children,
	className,
	...props
}: CallToActionProps) => {
	const scaleIconCSS = scaleIconOnHover();
	return (
		<Flex css={{ alignSelf: 'flex-start' }} inline>
			<Flex
				alignItems="center"
				as={as}
				className={className}
				css={{
					svg: {
						transition: scaleIconCSS.transition,
					},
					':hover svg': {
						transform: scaleIconCSS.transform,
					},
				}}
				focusRingFor="keyboard"
				fontSize="md"
				fontWeight="bold"
				gap={0.25}
				link
				{...props}
			>
				{children}
				<ChevronRightIcon weight="bold" />
			</Flex>
		</Flex>
	);
};
