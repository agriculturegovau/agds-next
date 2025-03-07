import { Fragment } from 'react';
import { createIcon } from '../Icon';

export const ProgressDoingIcon = createIcon(
	<Fragment>
		<path
			d="M6.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM17.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
			fill="currentColor"
			stroke="none"
		/>
		<path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" />
	</Fragment>,
	'ProgressDoingIcon'
);
