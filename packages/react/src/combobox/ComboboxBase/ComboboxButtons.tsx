import {
	ButtonHTMLAttributes,
	ComponentType,
	forwardRef,
	PropsWithChildren,
} from 'react';
import { IconProps, CloseIcon, ChevronDownIcon } from '../../icon';
import { BaseButton } from '../../button';
import { boxPalette, mapSpacing, tokens } from '../../core';
import { Box, focusStyles } from '../../box';
import { Flex } from '../../flex';

export function ComboboxButtonContainer({ children }: PropsWithChildren<{}>) {
	return (
		<Flex
			alignItems="center"
			gap={0.25}
			css={{
				position: 'absolute',
				top: '50%',
				right: `calc(${mapSpacing(0.5)} + ${tokens.borderWidth.lg}px)`, // Align from the inner border
				transform: 'translateY(-50%)',
			}}
		>
			{children}
		</Flex>
	);
}

export function ComboboxButtonDivider() {
	return (
		<Box
			aria-hidden
			height="1.5rem"
			borderLeft
			borderLeftWidth="md"
			borderColor="muted"
		/>
	);
}

export const ComboboxClearButton = forwardRef<
	HTMLButtonElement,
	ButtonHTMLAttributes<HTMLButtonElement>
>(function ComboboxClearButton(props, ref) {
	return (
		<ComboboxIconButton
			ref={ref}
			aria-label="Clear input"
			icon={CloseIcon}
			{...props}
		/>
	);
});

export const ComboboxDropdownTrigger = forwardRef<
	HTMLButtonElement,
	ButtonHTMLAttributes<HTMLButtonElement>
>(function ComboboxDropdownTrigger(props, ref) {
	return (
		<ComboboxIconButton
			ref={ref}
			aria-label="Toggle menu"
			icon={ChevronDownIcon}
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
				ref={ref}
				disabled={disabled}
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
				{...props}
			>
				<Icon color="inherit" size="md" />
			</BaseButton>
		);
	}
);
