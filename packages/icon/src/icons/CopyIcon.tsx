import { Fragment } from 'react';
import { createIcon } from '../Icon';

export const CopyIcon = createIcon(
	<Fragment>
		<rect x="9" y="9" width="12" height="12" rx="1" />
		<path d="M5 15H4C3.44772 15 3 14.5523 3 14V4C3 3.44772 3.44772 3 4 3H14C14.5523 3 15 3.44772 15 4V5" />
	</Fragment>,
	'CopyIcon'
);
