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
		 * In Safari buttons are not focused automatically by the browser once pressed, the default behaviour is to focus the nearest focusable ancestor.
		 * To fix this we need to manually focus the button element after the user presses the element.
		 */
		const onClick = useCallback(
			(event: MouseEvent<HTMLButtonElement>) => {
				ref.current?.focus();
				onClickProp?.(event);
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
					padding: 0,
					fontFamily: tokens.font.body,
					fontSize: 'inherit',
					lineHeight: 'inherit',
				}}
				{...props}
			/>
		);
	}
);
