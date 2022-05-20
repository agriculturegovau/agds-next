import { AnchorHTMLAttributes } from 'react';
import { ExternalLinkCallout } from '@ag.ds-next/a11y';
import { Flex } from '@ag.ds-next/box';
import { ExternalLinkIcon } from '@ag.ds-next/icon';

export type TextLinkExternalProps = Omit<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	'color'
>;

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
