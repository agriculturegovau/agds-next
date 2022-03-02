import * as React from 'react';
import { createIcon } from '../Icon';

export const DoingIcon = createIcon(
	<React.Fragment>
		<circle cx="12" cy="12" r="11" />
		<path
			d="M6.5 13.5C7.32843 13.5 8 12.8284 8 12C8 11.1716 7.32843 10.5 6.5 10.5C5.67157 10.5 5 11.1716 5 12C5 12.8284 5.67157 13.5 6.5 13.5Z"
			fill="currentColor"
		/>
		<path
			d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z"
			fill="currentColor"
		/>
		<path
			d="M17.5 13.5C18.3284 13.5 19 12.8284 19 12C19 11.1716 18.3284 10.5 17.5 10.5C16.6716 10.5 16 11.1716 16 12C16 12.8284 16.6716 13.5 17.5 13.5Z"
			fill="currentColor"
		/>
	</React.Fragment>,
	'DoingIcon'
);
