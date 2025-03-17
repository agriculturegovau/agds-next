import { Fragment } from 'react';
import { createIcon } from '../Icon';

export const CopyIcon = createIcon(
	<Fragment>
		<rect height="12" rx="1" width="12" x="9" y="9" />
		<path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
	</Fragment>,
	'CopyIcon'
);
