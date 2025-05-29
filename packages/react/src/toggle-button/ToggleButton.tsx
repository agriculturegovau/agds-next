import { forwardRef } from 'react';
import {
	Button,
	type BaseButtonProps,
	type ButtonSize,
	type ButtonVariant,
} from '../button';
import { FlagFilledIcon, FlagIcon, StarFilledIcon, StarIcon } from '../icon';

export type ToggleButtonProps = Omit<
	BaseButtonProps,
	| 'aria-controls'
	| 'aria-expanded'
	| 'aria-haspopup'
	| 'aria-label'
	| 'aria-pressed'
	| 'loading'
	| 'onClick'
	| 'role'
	| 'type'
> & {
	/** When true, visually hides the label. */
	hiddenLabel?: boolean;
	/** Determines the pair of icons to display in the default and pressed state. */
	iconType?: 'flag' | 'star';
	/** The label of the button when in its default state. */
	label: string;
	/** Function to be called when the button is clicked. */
	onClick: (pressedState: boolean) => void;
	/** The current pressed state of the ToggleButton. */
	pressed: boolean;
	/** The label of the button when its pressed state. */
	pressedLabel: string;
	size?: ButtonSize;
	variant?: ButtonVariant;
};

const iconTypeMap = {
	flag: {
		false: FlagIcon,
		true: FlagFilledIcon,
	},
	star: {
		false: StarIcon,
		true: StarFilledIcon,
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
			pressedLabel,
			size = 'md',
			variant = 'text',
			...props
		},
		ref
	) {
		const resolvedLabel = pressed ? pressedLabel : label;
		const DefaultIcon = iconTypeMap[iconType]?.false || iconTypeMap.flag.false;
		const PressedIcon = iconTypeMap[iconType]?.true || iconTypeMap.flag.true;

		return (
			<Button
				{...props}
				aria-label={hiddenLabel ? resolvedLabel : undefined}
				aria-pressed={pressed}
				iconBefore={pressed ? PressedIcon : DefaultIcon}
				onClick={() => {
					onClick(!pressed);
				}}
				ref={ref}
				size={size}
				variant={variant}
			>
				{hiddenLabel ? undefined : resolvedLabel}
			</Button>
		);
	}
);
