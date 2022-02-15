import { PropsWithChildren, ReactNode } from 'react';
import { Box, BoxProps } from '@ag.ds-next/box';
import { useToggleState } from '@ag.ds-next/core';
import { useId } from '@reach/auto-id';

import { AccordionTitle, AccordionTitleProps } from './AccordionTitle';
import { AccordionBody, AccordionBodyProps } from './AccordionBody';

type AccordionProps = {
	id?: string;
	isInitiallyOpen?: boolean;
	title: AccordionTitleProps['title'];
	titleHeadingTag?: AccordionTitleProps['tag'];
} & Pick<AccordionBodyProps, 'noPadding'> &
	Pick<BoxProps, 'palette'>;

export const useAccordionIds = (initialId: string | undefined) => {
	const id = useId(initialId);
	return {
		titleId: `${id}-title`,
		bodyID: `${id}-default`,
	};
};

export const AccordionItem = ({
	isInitiallyOpen = false,
	noPadding,
	children,
	palette,
	title,
	titleHeadingTag,
	...props
}: PropsWithChildren<AccordionProps>) => {
	const { titleId, bodyID } = useAccordionIds(props.id);
	const [isOpen, onToggle] = useToggleState(isInitiallyOpen, !isInitiallyOpen);

	return (
		<Box palette={palette} border>
			<AccordionTitle
				tag={titleHeadingTag}
				title={title}
				id={titleId}
				ariaControls={bodyID}
				isOpen={isOpen}
				onToggle={onToggle}
			/>
			<AccordionBody
				noPadding={noPadding}
				isOpen={isOpen}
				id={bodyID}
				ariaLabelledBy={titleId}
			>
				{children}
			</AccordionBody>
		</Box>
	);
};

export const AccordionGroup = ({ children }: { children: ReactNode }) => {
	return <Box>{children}</Box>;
};
