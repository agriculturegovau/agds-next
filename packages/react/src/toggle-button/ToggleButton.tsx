import { forwardRef } from 'react';
import {
	Button,
	type BaseButtonProps,
	type ButtonSize,
	type ButtonVariant,
} from '../button';
import { tokens } from '../core';
import { FlagFilledIcon, FlagIcon, StarFilledIcon, StarIcon } from '../icon';
import { iconSizes } from '../icon/Icon';

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
	/** The label of the button when in its default state. */
	label: string;
	/** When true, visually hides the label.  */
	hiddenLabel?: boolean;
	/** The icon type to display. */
	iconType?: 'flag' | 'star';
	/** Function to be called when the button is clicked. */
	onClick: (pressedState: boolean) => void;
	/** The current pressed state of the ToggleButton. */
	pressed: boolean;
	/** The label of the button is pressed. */
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

const iconHoverSizeMap = {
	sm: (iconSizes.sm * 16 + 2) / 16,
	md: (iconSizes.md * 16 + 2) / 16,
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
				css={
					hiddenLabel
						? {
								svg: {
									transition: `all ${tokens.transition.duration}ms ${tokens.transition.timingFunction}`,
								},
								'&:hover svg': {
									strokeWidth: 3,
									transform: `scale(${
										iconHoverSizeMap[size] / iconSizes[size]
									})`,
								},
						  }
						: undefined
				}
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
