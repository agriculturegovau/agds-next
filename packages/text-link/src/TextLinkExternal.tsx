import { PropsWithChildren } from 'react';
import { ExternalLinkCallout } from '@ag.ds-next/a11y';
import { forwardRefWithAs, mapSpacing } from '@ag.ds-next/core';
import { ExternalLinkIcon } from '@ag.ds-next/icon';
import { TextLink } from './TextLink';

export type TextLinkExternalProps = PropsWithChildren<Record<never, never>>;

export const TextLinkExternal = forwardRefWithAs<'a', TextLinkExternalProps>(
	function TextLinkExternal({ children, ...props }, ref) {
		return (
			<TextLink ref={ref} {...props}>
				{children}
				<ExternalLinkCallout />
				<ExternalLinkIcon
					weight="bold"
					size="sm"
					css={{ position: 'relative', top: 3, marginLeft: mapSpacing(0.25) }}
				/>
			</TextLink>
		);
	}
);
