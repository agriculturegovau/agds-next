import { ExternalLinkCallout } from '@ag.ds-next/a11y';
import { focusStyles, linkStyles } from '@ag.ds-next/box';
import { ExternalLinkIcon } from '@ag.ds-next/icon';
import { LinkProps, mapSpacing, useLinkComponent } from '@ag.ds-next/core';

export type TextLinkExternalProps = LinkProps;

export const TextLinkExternal = ({
	children,
	...props
}: TextLinkExternalProps) => {
	const Link = useLinkComponent();
	return (
		<Link
			css={[linkStyles, focusStyles]}
			target="_blank"
			rel="noopener noreferrer"
			{...props}
		>
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
		</Link>
	);
};
