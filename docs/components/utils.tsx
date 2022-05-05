import { Fragment } from 'react';
import { Code } from './Code';

export const mdxComponents = {
	// avoid wrapping live examples in pre tag
	pre: Fragment,
	code: Code,
	Fragment,
};
