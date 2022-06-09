import {
	ButtonHTMLAttributes,
	MouseEvent,
	forwardRef,
	useCallback,
	useRef,
} from 'react';
import { fontGrid, mergeRefs, tokens } from '@ag.ds-next/core';

export type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * In Safari buttons do not get focused automatically once pressed. Instead the nearest focusable ancestor is focused.
 * To fix this, we need to manually force focus after the user clicks on the element
 */
export const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
	function BaseButton({ onClick: onClickProp, ...props }, forwardedRef) {
		const ref = useRef<HTMLButtonElement>(null);

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
					...fontGrid('sm', 'default'),
				}}
				{...props}
			/>
		);
	}
);
