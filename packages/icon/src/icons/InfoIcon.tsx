import { Fragment } from 'react';
import { createIcon } from '../Icon';

export const InfoIcon = createIcon(
	<Fragment>
		<circle cx="12" cy="12" r="10" />
		<path
			d="M12 18C11.4477 18 11 17.5523 11 17L11 11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11L13 17C13 17.5523 12.5523 18 12 18Z"
			fill="currentColor"
			stroke="none"
		/>
		<circle cx="12" cy="7" r="1" fill="currentColor" stroke="none" />
	</Fragment>,
	'InfoIcon'
);
