import { Fragment } from 'react';
import { createIcon } from '../Icon';

export const ArrowLeftIcon = createIcon(
	<Fragment>
		<path vectorEffect="non-scaling-stroke" d="M21 12L4 12" />
		<path vectorEffect="non-scaling-stroke" d="M8 17L3 12L8 7" />
	</Fragment>,
	'ArrowLeftIcon'
);
