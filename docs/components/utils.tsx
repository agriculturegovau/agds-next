import { AnchorHTMLAttributes, Fragment } from 'react';
import Link from 'next/link';
import { TextLinkExternal } from '@ag.ds-next/text';
import { Code } from './Code';

export const mdxComponents = {
	// avoid wrapping live examples in pre tag
	pre: Fragment,
	code: Code,
	Fragment,
	a: ({ href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
		if (!href) return <a {...props} />;

		// Render an external link icon and open page in new tab
		if (/^(https?:\/\/|\/\/)/i.test(href)) {
			return <TextLinkExternal href={href} {...props} />;
		}
		return <Link href={href} {...props} />;
	},
};
