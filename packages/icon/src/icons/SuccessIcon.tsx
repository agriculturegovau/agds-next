import * as React from 'react';
import { createIcon } from '../Icon';

export const SuccessIcon = createIcon(
	<React.Fragment>
		<circle cx="12" cy="12" r="11" />
		<path d="M7 13L10 16L17 9" />
	</React.Fragment>,
	'SuccessIcon'
);
