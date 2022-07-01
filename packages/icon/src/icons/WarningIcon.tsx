import { Fragment } from 'react';
import { createIcon } from '../Icon';

export const WarningIcon = createIcon(
	<Fragment>
		<path d="M12.8858 2.69113C12.5115 1.97647 11.4876 1.97824 11.1132 2.6929C7.60041 9.39921 5.30783 13.776 1.76707 20.5356C1.4183 21.2014 1.90105 22 2.65269 22H21.3473C22.099 22 22.5819 21.2018 22.2331 20.536L12.8858 2.69113Z" />
		<path
			d="M12 15C11.4477 15 11 14.5523 11 14L11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9L13 14C13 14.5523 12.5523 15 12 15Z"
			fill="currentColor"
			stroke="none"
		/>
		<circle cx="12" cy="18" r="1" fill="currentColor" stroke="none" />
	</Fragment>,
	'WarningIcon'
);
