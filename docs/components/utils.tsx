import { Fragment } from 'react';
import { LinkProps } from '@ag.ds-next/core';
import { TextLinkExternal } from '@ag.ds-next/text';
import { Code } from './Code';

export const mdxComponents = {
	// avoid wrapping live examples in pre tag
	pre: Fragment,
	code: Code,
	Fragment,
	a: (props: LinkProps) => {
		if (props.href && /^(https?:\/\/|\/\/)/i.test(props.href)) {
			return <TextLinkExternal {...props} />;
		}
		return <a {...props} />;
	},
};
