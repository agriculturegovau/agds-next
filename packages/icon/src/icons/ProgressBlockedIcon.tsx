import { Fragment } from 'react';
import { createIcon } from '../Icon';

export const ProgressBlockedIcon = createIcon(
	<Fragment>
		<circle cx="12" cy="12" r="10.5" />,
		<line x1="7" y1="12" x2="17" y2="12" strokeLinecap="round" />
	</Fragment>,
	'ProgressBlockedIcon'
);
