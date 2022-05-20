import { ExternalLinkCallout } from '@ag.ds-next/a11y';
import { Flex } from '@ag.ds-next/box';
import { LinkProps } from '@ag.ds-next/core';
import { ExternalLinkIcon } from '@ag.ds-next/icon';

export type TextLinkExternalProps = Omit<LinkProps, 'color'>;

export const TextLinkExternal = ({
	children,
	...props
}: TextLinkExternalProps) => {
	return (
		<Flex
			as="a"
			inline
			link
			alignItems="center"
			gap={0.25}
			target="_blank"
			rel="noopener noreferrer"
			{...props}
		>
			{children}
			<ExternalLinkCallout />
			<ExternalLinkIcon weight="bold" size="sm" />
		</Flex>
	);
};
