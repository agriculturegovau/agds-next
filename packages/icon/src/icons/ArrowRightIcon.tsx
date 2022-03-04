import { Fragment } from 'react';
import { createIcon } from '../Icon';

export const ArrowRightIcon = createIcon(
	<Fragment>
		<path vectorEffect="non-scaling-stroke" d="M3 12L20 12" />
		<path vectorEffect="non-scaling-stroke" d="M16 7L21 12L16 17" />
	</Fragment>,
	'ArrowRightIcon'
);
