import {
	PropsWithChildren,
	ReactNode,
	useContext,
	useState,
	useLayoutEffect,
	useRef,
} from 'react';
import { Box, BoxProps } from '@ag.ds-next/box';
import { useToggleState } from '@ag.ds-next/core';
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
	const [heightRef, height] = useHeight();
	const style = useSpring(
		{
			overflow: 'hidden',
			width: '100%',
			from: { height: 0 },
			to: {
				height: isOpen ? height : 0,
			},
		},
		[]
	);

	console.log({ height, style });

	return (
		<animated.section
			id={`${id}-default`}
			aria-labelledby={`${id}-title`}
			role="region"
			style={style}
		>
			<div ref={heightRef}>{children}</div>
		</animated.section>
	);
};

export function useHeight({ on = true /* no value means on */ } = {} as any) {
	const ref = useRef<any>();
	const [height, set] = useState(0);
	const heightRef = useRef(height);
	const [ro] = useState(
		() =>
			new ResizeObserver((packet) => {
				if (ref.current && heightRef.current !== ref.current.offsetHeight) {
					heightRef.current = ref.current.offsetHeight;
					set(ref.current.offsetHeight);
				}
			})
	);
	useLayoutEffect(() => {
		if (on && ref.current) {
			set(ref.current.offsetHeight);
			ro.observe(ref.current, {});
		}
		return () => ro.disconnect();
	}, [on, ref.current]);
	return [ref, height as any];
}

export const AccordionGroup = ({ children }: { children: ReactNode }) => {
	return <Box>{children}</Box>;
};
