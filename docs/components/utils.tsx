import { AnchorHTMLAttributes, Fragment } from 'react';
import Link from 'next/link';
import { TextLinkExternal } from '@ag.ds-next/text';
import { Code } from './Code';

export const mdxComponents = {
	// avoid wrapping live examples in pre tag
	pre: Fragment,
	code: Code,
	Fragment,
	a: (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
		if (!props.href) return <a {...props} />;

		// Render an external link icon and open page in new tab
		if (props.href && /^(https?:\/\/|\/\/)/i.test(props.href)) {
			return <TextLinkExternal {...props} />;
		}
		return <Link {...props} />;
	},
};
