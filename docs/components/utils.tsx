import { Fragment } from 'react';
import { Code } from './Code';

import { designSystemComponents } from './design-system-components';

export const mdxComponents = {
	...designSystemComponents,
	code: Code,
	Fragment,
};
