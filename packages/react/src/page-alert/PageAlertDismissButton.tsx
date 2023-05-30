import { MouseEventHandler } from 'react';
import { Button } from '../button';
import { mq, tokens } from '../core';
import { CloseIcon } from '../icon';

type PageAlertDismissButtonProps = {
	onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const PageAlertDismissButton = ({
	onClick,
}: PageAlertDismissButtonProps) => {
	return (
		<Button
			onClick={onClick}
			iconAfter={CloseIcon}
			variant="text"
			aria-label="Dismiss"
			css={mq({
				position: 'absolute',
				top: '1.5rem',
				right: '1.5rem',
				flexShrink: 0,
				[tokens.mediaQuery.min.sm]: {
					position: 'relative',
					top: 'unset',
					right: 'unset',
				},
				'& > span:first-of-type': {
					display: 'none',
					[tokens.mediaQuery.min.sm]: {
						display: 'block',
					},
				},
			})}
		>
			Dismiss
		</Button>
	);
};
