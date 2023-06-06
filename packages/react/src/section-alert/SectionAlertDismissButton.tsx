import { forwardRef, MouseEventHandler } from 'react';
import { Button } from '../button';
import { tokens } from '../core';
import { CloseIcon } from '../icon';

export const SectionAlertDismissButton = forwardRef<
	HTMLButtonElement,
	{ onClick: MouseEventHandler<HTMLButtonElement> }
>(function SectionAlertDismissButton({ onClick }, ref) {
	return (
		<Button
			ref={ref}
			onClick={onClick}
			iconAfter={CloseIcon}
			variant="text"
			aria-label="Close"
			css={{
				flexShrink: 0,
				// Hide the button text on small screens
				'& > span:first-of-type': {
					display: 'none',
					[tokens.mediaQuery.min.sm]: {
						display: 'block',
					},
				},
			}}
		>
			Dismiss
		</Button>
	);
});
