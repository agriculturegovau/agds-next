import { forwardRef } from 'react';
import { BaseButtonProps, Button, ButtonSize } from '../button';
import { AlertFilledIcon, AlertIcon, InfoFilledIcon, InfoIcon } from '../icon';

export type ToggleButtonProps = Omit<
	BaseButtonProps,
	'aria-haspopup' | 'aria-controls' | 'aria-expanded' | 'type'
> & {
	/** The current pressed state for the ToggleButton. */
	pressed: boolean;
	/** Handle change events. */
	onChange: (newValue: boolean) => void;
	size?: ButtonSize;
	/** The associated label for the ToggleButton. */
	label: string;
	/** The icon type to display. */
	iconType?: 'flag' | 'star';
};

const iconTypeToIcon = {
	flag: {
		true: AlertFilledIcon,
		false: AlertIcon,
	},
	star: {
		true: InfoFilledIcon,
		false: InfoIcon,
	},
};

export const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonProps>(
	function ToggleButton(
		{
			label,
			onChange,
			pressed = false,
			size = 'md',
			iconType = 'flag',
			...props
		},
		ref
	) {
		const Icon = iconTypeToIcon[iconType][pressed ? 'true' : 'false'];

		return (
			<Button
				variant="text"
				{...props}
				aria-pressed={pressed}
				iconBefore={Icon}
				onClick={() => onChange(!pressed)}
				ref={ref}
				size={size}
			>
				{label}
			</Button>
		);
	}
);
