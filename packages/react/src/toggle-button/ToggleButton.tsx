import { forwardRef, type MouseEvent, useState, useCallback } from 'react';
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

export const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonProps>(
	function ToggleButton(
		{
			hiddenLabel = false,
			iconType = 'flag',
			label,
			onClick,
			onMouseEnter,
			onMouseLeave,
			pressed = false,
			pressedLabel,
			size = 'md',
			variant = 'text',
			...props
		},
		ref
	) {
		const [isHover, setIsHover] = useState(false);
		const resolvedLabel = pressed ? pressedLabel : label;
		const DefaultIcon = iconTypeMap[iconType]?.false || iconTypeMap.flag.false;
		const PressedIcon = iconTypeMap[iconType]?.true || iconTypeMap.flag.true;

		const handleOnMouseEnter = useCallback(
			(event: MouseEvent<HTMLButtonElement>) => {
				setIsHover(true);
				onMouseEnter?.(event);
			},
			[onMouseEnter]
		);

		const handleOnMouseLeave = useCallback(
			(event: MouseEvent<HTMLButtonElement>) => {
				setIsHover(false);
				onMouseLeave?.(event);
			},
			[onMouseLeave]
		);

		return (
			<Button
				{...props}
				aria-label={hiddenLabel ? resolvedLabel : undefined}
				aria-pressed={pressed}
				iconBefore={
					isHover
						? pressed
							? DefaultIcon
							: PressedIcon
						: pressed
						? PressedIcon
						: DefaultIcon
				}
				onClick={() => {
					onClick(!pressed);
					setIsHover(false);
				}}
				onMouseEnter={handleOnMouseEnter}
				onMouseLeave={handleOnMouseLeave}
				ref={ref}
				size={size}
				variant={variant}
			>
				{hiddenLabel ? undefined : resolvedLabel}
			</Button>
		);
	}
);
