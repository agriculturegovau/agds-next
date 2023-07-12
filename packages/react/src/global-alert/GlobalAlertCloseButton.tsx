import { MouseEventHandler } from 'react';
import { Button } from '../button';
import { mapSpacing, mq, tokens } from '../core';
import { CloseIcon } from '../icon';

type GlobalAlertCloseButtonProps = {
	onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const GLOBAL_ALERT_CLOSE_BUTTON_LABEL_VISIBLE_BREAKPOINT = 'lg';
export const GLOBAL_ALERT_CLOSE_BUTTON_LABEL_VISIBLE_MQ =
	tokens.mediaQuery.min[GLOBAL_ALERT_CLOSE_BUTTON_LABEL_VISIBLE_BREAKPOINT];

export const GlobalAlertCloseButton = ({
	onClick,
}: GlobalAlertCloseButtonProps) => {
	return (
		<Button
			onClick={onClick}
			iconAfter={CloseIcon}
			variant="text"
			aria-label="Close"
			css={mq({
				position: 'absolute',
				top: mapSpacing(0.75),
				right: mapSpacing(0.75),
				flexShrink: 0,
				// Hide the Close label on small screens
				'& > span:first-of-type': {
					display: 'none',
					[GLOBAL_ALERT_CLOSE_BUTTON_LABEL_VISIBLE_MQ]: {
						display: 'block',
					},
				},
			})}
		>
			Close
		</Button>
	);
};
