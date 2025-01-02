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
		if (
			hrefAsString &&
			(/^(https?:\/\/|\/\/)/i.test(hrefAsString) || hrefAsString.includes('#'))
		) {
			return <a href={hrefAsString} ref={ref} {...props} />;
		}

		return <Link href={href} ref={ref} {...props} />;
	}
);
