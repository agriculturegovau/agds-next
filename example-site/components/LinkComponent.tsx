import type { PropsWithChildren } from 'react';
import Link, { LinkProps } from 'next/link';

type NextLinkProps = Omit<LinkProps, 'as' | 'href'>;

export const LinkComponent = ({
	href,
	replace,
	scroll,
	shallow,
	passHref,
	prefetch,
	locale,
	...props
}: PropsWithChildren<NextLinkProps> & {
	href?: LinkProps['href'];
}) => {
	if (!href) return <a {...props} />;

	return (
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
};
