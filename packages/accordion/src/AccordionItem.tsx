import { PropsWithChildren, ReactNode, useCallback } from 'react';
import { Box } from '@ag.ds-next/box';
import { useToggleState } from '@ag.ds-next/core';
import { useId } from '@reach/auto-id';

import { AccordionTitle, AccordionTitleProps } from './AccordionTitle';
import { AccordionBody } from './AccordionBody';

type AccordionItemProps = PropsWithChildren<{
	title: AccordionTitleProps['children'];
	titleHeadingTag?: AccordionTitleProps['tag'];
	isInitiallyOpen?: boolean;
	isOpen?: boolean;
	onToggle?: () => void;
}>;

export const useAccordionItemIds = () => {
	const autoId = useId();
	return {
		titleId: `accordion-${autoId}-title`,
		bodyId: `accordion-${autoId}-body`,
	};
};

export const AccordionItem = ({
	children,
	title,
	titleHeadingTag,
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
				onToggle={onToggle}
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
}: AccordionItemContentProps) => <Box padding={1}>{children}</Box>;
