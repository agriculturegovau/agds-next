import { PropsWithChildren, forwardRef } from 'react';
import Link, { LinkProps } from 'next/link';

type NextLinkProps = Omit<LinkProps, 'as' | 'href'>;

export type LinkComponentProps = PropsWithChildren<NextLinkProps> & {
	href?: LinkProps['href'];
};

export const LinkComponent = forwardRef<HTMLAnchorElement, LinkComponentProps>(
	function LinkComponent({ href, ...props }, ref) {
		if (!href) return <a ref={ref} {...props} />;

		// Use an `a` tag when linking externally
		// Regex finds links starting with: `http://` | `https://` | `//`
		const hrefAsString = typeof href === 'string' ? href : href?.pathname;
		if (hrefAsString && /^(https?:\/\/|\/\/)/i.test(hrefAsString)) {
			return <a ref={ref} href={hrefAsString} {...props} />;
		}

		return <Link ref={ref} href={href} {...props} />;
	}
);
