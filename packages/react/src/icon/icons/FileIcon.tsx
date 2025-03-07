import { Fragment } from 'react';
import { createIcon } from '../Icon';

export const FileIcon = createIcon(
	<Fragment>
		<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
		<path d="M13 2v7h7" />
	</Fragment>,
	'FileIcon'
);
