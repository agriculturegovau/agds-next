import { MouseEventHandler } from 'react';
import { Button } from '../button';
import { mapSpacing, mq, tokens } from '../core';
import { CloseIcon } from '../icon';

type GlobalAlertCloseButtonProps = {
	onClick?: MouseEventHandler<HTMLButtonElement>;
};

export function GlobalAlertCloseButton({
	onClick,
}: GlobalAlertCloseButtonProps) {
	return (
		<Button
			onClick={onClick}
			iconAfter={CloseIcon}
			variant="text"
			css={mq({
				flexShrink: 0,

				// Positioning
				position: 'absolute',
				top: mapSpacing(1.5),
				right: mapSpacing(1.5),
				[tokens.mediaQuery.min.lg]: {
					position: 'static',
					top: 'auto',
					right: 'auto',
				},

				// Hide the "Close" label on small screens
				'& > span:first-of-type': {
					display: 'none',
					[tokens.mediaQuery.min.lg]: {
						display: 'block',
					},
				},
			})}
		>
			Close
		</Button>
	);
}
