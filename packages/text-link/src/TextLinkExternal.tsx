import { ExternalLinkCallout } from '@ag.ds-next/a11y';
import { ExternalLinkIcon } from '@ag.ds-next/icon';
import { LinkProps, mapSpacing } from '@ag.ds-next/core';
import { TextLink } from './TextLink';

export type TextLinkExternalProps = LinkProps;

export const TextLinkExternal = ({
	children,
	...props
}: TextLinkExternalProps) => {
	return (
		<TextLink target="_blank" rel="noopener noreferrer" {...props}>
			{children}
			<ExternalLinkCallout />
			<ExternalLinkIcon
				weight="regular"
				size="sm"
				css={{
					position: 'relative',
					top: 3,
					marginLeft: mapSpacing(0.25),
				}}
			/>
		</TextLink>
	);
};
