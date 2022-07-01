import { Fragment } from 'react';
import { createIcon } from '../Icon';

export const InfoIcon = createIcon(
	<Fragment>
		<circle cx="12" cy="12" r="10" fill="white" />
		<line x1="12" y1="17" x2="12" y2="11" />
		<circle cx="12" cy="7" r="1" fill="currentColor" />
	</Fragment>,
	'InfoIcon'
);
