import { AnchorHTMLAttributes } from 'react';
import { ExternalLinkCallout } from '@ag.ds-next/a11y';
import { Box } from '@ag.ds-next/box';
import { ExternalLinkIcon } from '@ag.ds-next/icon';
import { mapSpacing } from '@ag.ds-next/core';

export type TextLinkExternalProps = Omit<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	'color'
>;

export const TextLinkExternal = ({
	children,
	...props
}: TextLinkExternalProps) => {
	return (
		<Box as="a" link target="_blank" rel="noopener noreferrer" {...props}>
			{children}
			<ExternalLinkCallout />
			<ExternalLinkIcon
				weight="bold"
				size="sm"
				css={{
					position: 'relative',
					top: 3,
					marginLeft: mapSpacing(0.25),
				}}
			/>
		</Box>
	);
};
