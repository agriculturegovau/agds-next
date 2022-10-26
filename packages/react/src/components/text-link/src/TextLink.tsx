import { forwardRef } from 'react';
import { focusStyles, linkStyles } from '../../box/src';
import { LinkProps, useLinkComponent } from '../../core/src';

export type TextLinkProps = LinkProps;

export const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(
	function TextLink(props, ref) {
		const Link = useLinkComponent();
		return <Link ref={ref} css={[linkStyles, focusStyles]} {...props} />;
	}
);
