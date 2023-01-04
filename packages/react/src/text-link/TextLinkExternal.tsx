import { ExternalLinkCallout } from '../a11y';
import { ExternalLinkIcon } from '../icon';
import { LinkProps, mapSpacing } from '../core';
import { TextLink } from './TextLink';

export type TextLinkExternalProps = LinkProps;

export const TextLinkExternal = ({
	children,
	...props
}: TextLinkExternalProps) => {
	return (
		<TextLink target="_blank" rel="noopener" {...props}>
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
