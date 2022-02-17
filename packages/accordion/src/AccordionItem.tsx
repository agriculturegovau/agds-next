import { PropsWithChildren, ReactNode, useCallback } from 'react';
import { Box } from '@ag.ds-next/box';
import { useToggleState } from '@ag.ds-next/core';
import { useId } from '@reach/auto-id';

import { AccordionTitle, AccordionTitleProps } from './AccordionTitle';
import { AccordionBody } from './AccordionBody';

type AccordionItemProps = PropsWithChildren<{
	id?: string;
	title: AccordionTitleProps['children'];
	titleHeadingTag?: AccordionTitleProps['tag'];
	isInitiallyOpen?: boolean;
	isOpen?: boolean;
	onToggle?: () => void;
}>;

export const useAccordionItemIds = (initialId?: string | undefined) => {
	const id = useId(initialId);
	return {
		titleId: `${id}-title`,
		bodyId: `${id}-default`,
	};
};

export const AccordionItem = ({
	children,
	title,
	titleHeadingTag,
	isInitiallyOpen = false,
	isOpen: isOpenProp,
	onToggle: onToggleProp,
	...props
}: AccordionItemProps) => {
	const { titleId, bodyId } = useAccordionItemIds(props.id);

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

export const AccordionItemContent = ({ children }: { children: ReactNode }) => (
	<Box padding={1}>{children}</Box>
);
