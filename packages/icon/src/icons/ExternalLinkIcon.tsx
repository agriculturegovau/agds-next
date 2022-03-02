import * as React from 'react';
import { createIcon } from '../Icon';

export const ExternalLinkIcon = createIcon(
	<React.Fragment>
		<path d="M9 15L21 3" />
		<path d="M15 3H21" />
		<path d="M21 9V3" />
		<path d="M7 2.99969H4.08981C3.80891 2.99457 3.53726 3.10042 3.3334 3.29442C3.12953 3.48842 3.00981 3.75503 3 4.0368V19.9345C3.00245 20.2163 3.1151 20.4858 3.31367 20.6851C3.51224 20.8844 3.78085 20.9974 4.06166 20.9999H19.9383C20.2192 20.9974 20.4878 20.8844 20.6863 20.6851C20.8849 20.4858 20.9975 20.2163 21 19.9345V16.9999" />
	</React.Fragment>,
	'ExternalLinkIcon'
);
