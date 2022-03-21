import { Fragment } from 'react';
import { createIcon } from '../Icon';

export const CalendarIcon = createIcon(
	<Fragment>
		<path d="M8 3C8 4.5621 8 5.4379 8 7" />
		<path d="M16 3C16 4.5621 16 5.4379 16 7" />
		<path d="M21 20V6C21 5.44772 20.5523 5 20 5H4C3.44772 5 3 5.44772 3 6V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20Z" />
		<line x1="3" y1="12" x2="21" y2="12" />
	</Fragment>,
	'CalendarIcon'
);
