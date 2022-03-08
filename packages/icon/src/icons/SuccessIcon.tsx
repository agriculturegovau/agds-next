import { Fragment } from 'react';
import { createIcon } from '../Icon';

export const SuccessIcon = createIcon(
	<Fragment>
		<circle cx="12" cy="12" r="10.5" vectorEffect="non-scaling-stroke" />
		<path d="M7 13L10 16L17 9" vectorEffect="non-scaling-stroke" />
	</Fragment>,
	'SuccessIcon'
);
