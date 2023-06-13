import { MouseEventHandler } from 'react';
import { Button } from '../button';
import { mapSpacing, tokens } from '../core';
import { CloseIcon } from '../icon';

type GlobalAlertCloseButtonProps = {
	onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const GlobalAlertCloseButton = ({
	onClick,
}: GlobalAlertCloseButtonProps) => {
	return (
		<Button
			onClick={onClick}
			iconAfter={CloseIcon}
			variant="text"
			aria-label="Dismiss"
			css={{
				position: 'absolute',
				top: mapSpacing(0.75),
				right: 0,
				flexShrink: 0,
				// Reset the position on larger screens
				[tokens.mediaQuery.min.sm]: {
					position: 'relative',
					top: 'unset',
					right: 'unset',
				},
				// Hide the button text on small screens
				'& > span:first-of-type': {
					display: 'none',
					[tokens.mediaQuery.min.sm]: {
						display: 'block',
					},
				},
			}}
		>
			Close
		</Button>
	);
};
