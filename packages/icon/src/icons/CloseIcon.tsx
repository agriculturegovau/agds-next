import { Fragment } from 'react';
import { createIcon } from '../Icon';

export const CloseIcon = createIcon(
	<Fragment>
		<path d="M5 19L19 5" vectorEffect="non-scaling-stroke" />
		<path d="M19 19L5 5" vectorEffect="non-scaling-stroke" />
	</Fragment>,
	'CloseIcon'
);
