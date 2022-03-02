import * as React from 'react';
import { createIcon } from '../Icon';

export const CloseIcon = createIcon(
	<React.Fragment>
		<path d="M5 19L19 5" />
		<path d="M19 19L5 5" />
	</React.Fragment>,
	'CloseIcon'
);
