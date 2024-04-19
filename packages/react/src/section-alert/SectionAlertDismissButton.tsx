import { MouseEventHandler } from 'react';
import { Property } from 'csstype/index';
import { Button } from '../button';
import { tokens } from '../core';
import { CloseIcon } from '../icon';

type SectionAlertDismissButtonProps = {
	/** Function to be called when the button is pressed. */
	onClick: MouseEventHandler<HTMLButtonElement>;
	alignSelf?: Property.AlignSelf;
};

export const SectionAlertDismissButton = ({
	onClick,
	alignSelf,
}: SectionAlertDismissButtonProps) => {
	return (
		<Button
			onClick={onClick}
			iconAfter={CloseIcon}
			variant="text"
			aria-label="Close"
			css={{
				flexShrink: 0,
				alignSelf,
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
