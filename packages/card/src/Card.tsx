import { PropsWithChildren, ElementType, useRef, MouseEvent } from 'react';
import { Box, linkStyles } from '@ag.ds-next/box';
import { packs } from '@ag.ds-next/core';
import { cardLinkDataAttr } from './CardLink';

export type CardProps = PropsWithChildren<{
	as?: ElementType;
	background?: 'body' | 'bodyAlt';
	/** The CSS class name, typically generated from the `css` prop. */
	className?: string;
	shadow?: boolean;
	clickable?: boolean;
}>;

const componentTokens = {
	shadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
	hoverShadow: '0 1px 1px rgba(0, 0, 0, 0.3)',
};

export const Card = ({
	as,
	background = 'body',
	children,
	className,
	shadow,
	clickable,
}: CardProps) => {
	const mousedownTimer = useRef<number>();

	const onMouseDown = () => {
		mousedownTimer.current = new Date().getTime();
	};

	// This code ensures that when `CardLink` is used, the text within the card is selectable and the entire card is clickable
	// Please read more about this technique here: https://inclusive-components.design/cards/#theredundantclickevent
	const onMouseUp = (event: MouseEvent<HTMLDivElement>) => {
		if (!mousedownTimer.current) return;

		const cardLinkEl = event.currentTarget.querySelector(
			`[${cardLinkDataAttr}]`
		) as HTMLAnchorElement | null | undefined;
		if (!cardLinkEl) return;

		if (new Date().getTime() - mousedownTimer.current < 200) cardLinkEl.click();
	};

	return (
		<Box
			as={as} // Note: this should be an li when used in a card list
			onMouseDown={onMouseDown}
			onMouseUp={onMouseUp}
			display="block"
			border
			borderColor="muted"
			background={background}
			rounded
			className={className}
			css={{
				position: 'relative',
				overflow: 'hidden',

				...(clickable && {
					cursor: 'pointer',
					[`&:hover [${cardLinkDataAttr}]`]: linkStyles['&:hover'],
					// If any element inside the card receives focus, add a focus ring around the wrapper card div
					'&:focus-within': packs.outline,
				}),

				...(shadow && {
					boxShadow: componentTokens.shadow,
					'&:hover': clickable
						? { boxShadow: componentTokens.hoverShadow }
						: undefined,
				}),
			}}
		>
			{children}
		</Box>
	);
};
