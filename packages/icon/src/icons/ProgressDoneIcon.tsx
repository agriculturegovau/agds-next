import { Fragment } from 'react';
import { createIcon } from '../Icon';

export const ProgressDoneIcon = createIcon(
	<Fragment>
		<circle cx="12" cy="12" r="10.5" />
		<path d="M7 13L10 16L17 9" />
	</Fragment>,
	'ProgressDoneIcon'
);
