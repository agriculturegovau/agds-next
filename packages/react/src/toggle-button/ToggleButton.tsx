import { forwardRef } from 'react';
import {
	Button,
	type BaseButtonProps,
	type ButtonSize,
	type ButtonVariant,
} from '../button';
import { AlertFilledIcon, AlertIcon, InfoFilledIcon, InfoIcon } from '../icon';

export type ToggleButtonProps = Omit<
	BaseButtonProps,
	| 'aria-controls'
	| 'aria-expanded'
	| 'aria-haspopup'
	| 'aria-label'
	| 'aria-pressed'
	| 'onClick'
	| 'role'
	| 'type'
> & {
	label: string;
	/** When true, visually hides the label.  */
	hiddenLabel?: boolean;
	/** The icon type to display. */
	iconType?: 'flag' | 'star';
	/** Function to be called when the button is clicked. */
	onClick: (pressedState: boolean) => void;
	/** The current pressed state of the ToggleButton. */
	pressed: boolean;
	size?: ButtonSize;
	variant?: ButtonVariant;
};

const iconTypeMap = {
	flag: {
		false: AlertIcon,
		true: AlertFilledIcon,
	},
	star: {
		false: InfoIcon,
		true: InfoFilledIcon,
	},
};

export const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonProps>(
	function ToggleButton(
		{
			hiddenLabel = false,
			iconType = 'flag',
			label,
			onClick,
			pressed = false,
			size = 'md',
			variant = 'text',
			...props
		},
		ref
	) {
		const Icon =
			iconTypeMap[iconType]?.[pressed ? 'true' : 'false'] ||
			iconTypeMap.flag.false;

		return (
			<Button
				{...props}
				aria-label={hiddenLabel ? label : undefined}
				aria-pressed={pressed}
				iconBefore={Icon}
				onClick={() => onClick(!pressed)}
				ref={ref}
				size={size}
				variant={variant}
			>
				{hiddenLabel ? undefined : label}
			</Button>
		);
	}
);
