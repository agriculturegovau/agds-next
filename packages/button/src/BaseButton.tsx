import {
	ButtonHTMLAttributes,
	MouseEvent,
	forwardRef,
	useCallback,
	useRef,
} from 'react';
import { mergeRefs, tokens } from '@ag.ds-next/core';

export type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
	function BaseButton({ onClick: onClickProp, ...props }, forwardedRef) {
		const ref = useRef<HTMLButtonElement>(null);

		/**
		 * In Safari buttons do not get focused automatically once pressed. Instead the nearest focusable ancestor is focused.
		 * To fix this, we need to manually force focus after the user clicks on the element
		 */
		const onClick = useCallback(
			(event: MouseEvent<HTMLButtonElement>) => {
				ref.current?.focus();
				if (onClickProp) onClickProp(event);
			},
			[ref, onClickProp]
		);

		return (
			<button
				ref={mergeRefs([ref, forwardedRef])}
				onClick={onClick}
				css={{
					appearance: 'none',
					background: 'transparent',
					cursor: 'pointer',
					textAlign: 'left',
					border: 'none',
					fontFamily: tokens.font.body,
					fontSize: 'inherit',
					lineHeight: 'inherit',
				}}
				{...props}
			/>
		);
	}
);
