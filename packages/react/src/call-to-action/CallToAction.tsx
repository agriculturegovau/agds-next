import { ElementType, PropsWithChildren } from 'react';
import { LinkProps } from '../core';
import { Flex } from '../flex';
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

const CallToAction = ({
	as,
	children,
	className,
	...props
}: CallToActionProps) => {
	return (
		<Flex inline css={{ alignSelf: 'flex-start' }}>
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
				<ChevronRightIcon />
			</Flex>
		</Flex>
	);
};
