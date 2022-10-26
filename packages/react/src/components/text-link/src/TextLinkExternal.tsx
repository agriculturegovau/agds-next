import { ExternalLinkCallout } from '../../a11y/src';
import { ExternalLinkIcon } from '../../icon/src';
import { LinkProps, mapSpacing } from '../../core/src';
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
