import {
	ButtonHTMLAttributes,
	ComponentType,
	forwardRef,
	PropsWithChildren,
} from 'react';
import {
	IconProps,
	CloseIcon,
	ChevronDownIcon,
	ChevronUpIcon,
} from '../../icon';
import { BaseButton } from '../../button';
import { boxPalette, mapSpacing, tokens } from '../../core';
import { Box, focusStyles } from '../../box';
import { Flex } from '../../flex';

export function ComboboxButtonContainer({ children }: PropsWithChildren<{}>) {
	return (
		<Flex
			alignItems="center"
			css={{
				position: 'absolute',
				top: '50%',
				right: `calc(${mapSpacing(0.5)} + ${tokens.borderWidth.lg}px)`, // Align from the inner border
				transform: 'translateY(-50%)',
			}}
			gap={0.25}
		>
			{children}
		</Flex>
	);
}

export function ComboboxButtonDivider() {
	return (
		<Box
			aria-hidden
			borderColor="muted"
			borderLeft
			borderLeftWidth="md"
			height="1.5rem"
		/>
	);
}

export const ComboboxClearButton = forwardRef<
	HTMLButtonElement,
	ButtonHTMLAttributes<HTMLButtonElement>
>(function ComboboxClearButton(props, ref) {
	return (
		<ComboboxIconButton
			aria-label="Clear input"
			icon={CloseIcon}
			ref={ref}
			{...props}
		/>
	);
});

export const ComboboxDropdownTrigger = forwardRef<
	HTMLButtonElement,
	ButtonHTMLAttributes<HTMLButtonElement> & { isOpen: boolean }
>(function ComboboxDropdownTrigger({ isOpen, ...props }, ref) {
	return (
		<ComboboxIconButton
			aria-label="Toggle menu"
			icon={isOpen ? ChevronUpIcon : ChevronDownIcon}
			ref={ref}
			{...props}
		/>
	);
});

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	icon: ComponentType<IconProps>;
};

const ComboboxIconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
	function ComboboxIconButton({ disabled, icon: Icon, ...props }, ref) {
		return (
			<BaseButton
				css={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					width: '2rem',
					height: '2rem',
					color: boxPalette.foregroundAction,

					...(disabled && {
						cursor: 'not-allowed',
						opacity: 0.3,
					}),

					'&:hover': { color: boxPalette.foregroundText },
					...focusStyles,
				}}
				disabled={disabled}
				ref={ref}
				{...props}
			>
				<Icon color="inherit" size="md" />
			</BaseButton>
		);
	}
);
