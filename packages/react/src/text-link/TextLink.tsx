import { forwardRef } from 'react';
import { focusStyles, linkStyles } from '../box';
import { LinkProps, useLinkComponent } from '../core';

export type TextLinkProps = LinkProps;

export const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(
	function TextLink(props, ref) {
		const Link = useLinkComponent();
		return <Link ref={ref} css={[linkStyles, focusStyles]} {...props} />;
	}
);
