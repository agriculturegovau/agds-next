import { forwardRef, AnchorHTMLAttributes } from 'react';
import { focusStyles, linkStyles } from '../box';
import { LinkProps, useLinkComponent } from '../core';

export type TextLinkProps = LinkProps & {
	/** Function to be fired following a click event of the link. */
	onClick?: AnchorHTMLAttributes<HTMLAnchorElement>['onClick'];
};

export const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(
	function TextLink(props, ref) {
		const Link = useLinkComponent();
		return <Link ref={ref} css={[linkStyles, focusStyles]} {...props} />;
	}
);
