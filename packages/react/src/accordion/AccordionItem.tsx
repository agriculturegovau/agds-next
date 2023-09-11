import { PropsWithChildren, ReactNode, useCallback } from 'react';
import { Box } from '../box';
import { useToggleState, useId } from '../core';
import { AccordionTitle, AccordionTitleProps } from './AccordionTitle';
import { AccordionBody } from './AccordionBody';

export const useAccordionItemIds = () => {
	const autoId = useId();
	return {
		titleId: `accordion-${autoId}-title`,
		bodyId: `accordion-${autoId}-body`,
	};
};

type AccordionItemProps = PropsWithChildren<{
	/** If true, the item will initially be rendered in an open state. */
	isInitiallyOpen?: boolean;
	/** The current open state. */
	isOpen?: boolean;
	/** Handle open/close events. */
	onToggle?: () => void;
	/** The title of the accordion item. */
	title: ReactNode;
	/** The underlying HTML tag of the title element. */
	titleHeadingTag?: AccordionTitleProps['tag'];
}>;

export const AccordionItem = ({
	children,
	title,
	titleHeadingTag = 'h3',
	isInitiallyOpen = false,
	isOpen: isOpenProp,
	onToggle: onToggleProp,
}: AccordionItemProps) => {
	const { titleId, bodyId } = useAccordionItemIds();

	const [isOpenState, onToggleState] = useToggleState(
		isInitiallyOpen,
		!isInitiallyOpen
	);

	const isOpen = typeof isOpenProp === 'boolean' ? isOpenProp : isOpenState;

	const onToggle = useCallback(() => {
		if (typeof onToggleProp === 'function') onToggleProp();
		onToggleState();
	}, [onToggleProp, onToggleState]);

	return (
		<Box borderBottom>
			<AccordionTitle
				tag={titleHeadingTag}
				id={titleId}
				ariaControls={bodyId}
				isOpen={isOpen}
				onClick={onToggle}
			>
				{title}
			</AccordionTitle>
			<AccordionBody isOpen={isOpen} id={bodyId} ariaLabelledBy={titleId}>
				{children}
			</AccordionBody>
		</Box>
	);
};

export type AccordionItemContentProps = { children: ReactNode };

export const AccordionItemContent = ({
	children,
}: AccordionItemContentProps) => (
	<Box paddingBottom={1.5} paddingTop={0.5}>
		{children}
	</Box>
);
