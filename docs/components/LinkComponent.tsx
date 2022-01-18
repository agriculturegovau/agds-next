import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import Link, { LinkProps } from 'next/link';
type NextLinkProps = Omit<LinkProps, 'as'>;

export const LinkComponent = ({
	href,
	replace,
	scroll,
	shallow,
	passHref,
	prefetch,
	locale,
	...props
}: PropsWithChildren<
	NextLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>
>) => (
	<Link
		href={href}
		replace={replace}
		scroll={scroll}
		shallow={shallow}
		passHref={passHref}
		prefetch={prefetch}
		locale={locale}
	>
		<a {...props} />
	</Link>
);
