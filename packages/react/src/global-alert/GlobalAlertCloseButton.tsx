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
			}}
		>
			Close
		</Button>
	);
};
