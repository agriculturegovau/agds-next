import { PropsWithChildren, ReactNode, useContext, useRef } from 'react';
import { Box, BoxProps } from '@ag.ds-next/box';
import {
	useElementSize,
	usePrefersReducedMotion,
	useToggleState,
} from '@ag.ds-next/core';
import { useId } from '@reach/auto-id';
import { useSpring, animated } from 'react-spring';

import { AccordionTitle, AccordionTitleProps } from './AccordionTitle';

import { AccordionContext } from './context';

type AccordionProps = { id: string } & AccordionTitleProps &
	Pick<BoxProps, 'palette'>;

export const AccordionItem = ({
	children,
	palette,
	title,
	titleHeadingLevel,
	...props
}: PropsWithChildren<AccordionProps>) => {
	const id = useId(props.id);

	const [isOpen, onToggle] = useToggleState(false, true);

	return (
		<AccordionContext.Provider value={{ id, isOpen, onToggle }}>
			<Box palette={palette} border>
				<AccordionTitle titleHeadingLevel={titleHeadingLevel} title={title} />
				<AccordionBody>{children}</AccordionBody>
			</Box>
		</AccordionContext.Provider>
	);
};

export const AccordionBody = ({ children }: { children: ReactNode }) => {
	const { isOpen, id } = useContext(AccordionContext);
	const ref = useRef<HTMLDivElement>(null);
	const { height } = useElementSize(ref);

	const prefersReducedMotion = usePrefersReducedMotion();
	const style = useSpring({
		from: { height: 0 },
		to: { height: isOpen ? height : 0 },
		immediate: prefersReducedMotion,
	});

	return (
		<animated.section
			id={`${id}-default`}
			aria-labelledby={`${id}-title`}
			role="region"
			style={{ overflow: 'hidden', ...style }}
		>
			<div ref={ref}>{children}</div>
		</animated.section>
	);
};

export const AccordionGroup = ({ children }: { children: ReactNode }) => {
	return <Box>{children}</Box>;
};
