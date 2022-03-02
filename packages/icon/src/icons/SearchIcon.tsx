import * as React from 'react';
import { createIcon } from '../Icon';

export const SearchIcon = createIcon(
	<React.Fragment>
		<line
			x1="15.5568"
			y1="15.5562"
			x2="21.9208"
			y2="21.9201"
			stroke="#313131"
			strokeWidth="2"
			strokeLinecap="round"
		/>
		<circle
			cx="9.8995"
			cy="9.89941"
			r="7"
			transform="rotate(-45 9.8995 9.89941)"
			stroke="#313131"
			strokeWidth="2"
		/>
	</React.Fragment>,
	'SearchIcon'
);
