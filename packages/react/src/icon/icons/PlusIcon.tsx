import { Fragment } from 'react';
import { createIcon } from '../Icon';

export const PlusIcon = createIcon(
	<Fragment>
		<path d="M12 5V19" />
		<path d="M5 12H19" />
	</Fragment>,
	'PlusIcon'
);
