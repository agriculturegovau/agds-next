import { useEffect, useRef } from 'react';
import { useLinkComponent, LinkProps } from '@ag.ds-next/core';
import { linkStyles } from '@ag.ds-next/box';
import { useCardContext } from './Card';

export type CardLinkProps = LinkProps;

export const cardLinkDataAttr = 'data-agds-card-link';

export const CardLink = (props: CardLinkProps) => {
	const Link = useLinkComponent();
	const cardLinkRef = useRef<HTMLAnchorElement>(null);

	// This code ensures that when this component is used, the text within the `Card` component is selectable AND the entire card is clickable
	// Please read more about this technique here: https://inclusive-components.design/cards/#theredundantclickevent
	const mousedownTimer = useRef<number>();
	useEffect(() => {
		const parentCardEl = cardLinkRef.current?.closest('[data-agds-card]');
		if (!parentCardEl) return;

		// Set a timer when the user presses the mouse down
		function onMouseDown() {
			mousedownTimer.current = new Date().getTime();
		}

		// If there has been less than 200 milliseconds between the mouse down and mouse up, we assume the user is trying to click the link
		function onMouseUp() {
			if (!mousedownTimer.current) return;
			const linkEl = cardLinkRef.current;
			if (!linkEl) {
				throw new Error(
					'Link ref not found. Please ensure you are forwarding refs to anchor tags which can be configured via the `Core` component.'
				);
			}
			if (new Date().getTime() - mousedownTimer.current < 200) linkEl.click();
		}
		parentCardEl.addEventListener('mousedown', onMouseDown);
		parentCardEl.addEventListener('mouseup', onMouseUp);
		return () => {
			parentCardEl.removeEventListener('mousedown', onMouseDown);
			parentCardEl.removeEventListener('mouseup', onMouseUp);
		};
	}, []);

	return (
		<Link
			ref={cardLinkRef}
			css={[
				linkStyles,
				{
					display: 'flex',
					justifyContent: 'space-between',
					// NOTE: no focus styles here because the parent Card does it.
					'&:focus': {
						outline: 'none',
					},
				},
			]}
			{...{ [cardLinkDataAttr]: true }}
			{...props}
		/>
	);
};
