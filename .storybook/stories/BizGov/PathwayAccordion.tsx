import { MouseEventHandler, PropsWithChildren, ReactNode, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useAccordionItemIds } from '@ag.ds-next/react/accordion';
import {
	boxPalette,
	packs,
	tokens,
	usePrefersReducedMotion,
	useToggleState,
} from '@ag.ds-next/react/core';
import { Box } from '@ag.ds-next/react/box';
import { ChevronDownIcon } from '@ag.ds-next/react/icon';
import { BaseButton } from '@ag.ds-next/react/button';
import { Flex } from '@ag.ds-next/react/flex';
import { Text } from '@ag.ds-next/react/text';

const pathwayAccordionColorMap = {
	neutral: {
		bg: boxPalette.backgroundBodyAlt,
		bgHover: boxPalette.backgroundShadeAlt,
		fg: boxPalette.border,
		fgHover: boxPalette.borderMuted,
		text: boxPalette.foregroundText,
	} as const,
} as const;

type PathwayAccordionTone = keyof typeof pathwayAccordionColorMap;

type PathwayAccordionProps = {
	children: ReactNode;
	/** The underlying HTML tag of the title element. */
	titleHeadingTag?: PathwayAccordionTitleProps['tag'];
	/** The title of the accordion item. */
	title: string;
	/** The description of the accordion item. */
	desc: string;
	/** The image of the accordion item. */
	image: string;
	/** The tone of the accordion item. */
	tone?: PathwayAccordionTone;
};

export const PathwayAccordion = ({
	title,
	tone = 'neutral',
	desc,
	image,
	children,
	titleHeadingTag = 'h3',
}: PathwayAccordionProps) => {
	const { titleId, bodyId } = useAccordionItemIds();

	const [isOpen, onToggleState] = useToggleState(false, true);

	return (
		<Box>
			<PathwayAccordionTitle
				tone={tone}
				tag={titleHeadingTag}
				id={titleId}
				ariaControls={bodyId}
				isOpen={isOpen}
				onClick={onToggleState}
				title={title}
				desc={desc}
				image={image}
			/>

			<PathwayAccordionBody
				tone={tone}
				isOpen={isOpen}
				id={bodyId}
				ariaLabelledBy={titleId}
			>
				{children}
			</PathwayAccordionBody>
		</Box>
	);
};

export type PathwayAccordionBodyProps = PropsWithChildren<{
	ariaLabelledBy: string;
	id: string;
	isOpen: boolean;
	tone: PathwayAccordionTone;
}>;

export const PathwayAccordionBody = ({
	children,
	ariaLabelledBy,
	id,
	isOpen,
	tone,
}: PathwayAccordionBodyProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const { bg } = pathwayAccordionColorMap[tone];

	const prefersReducedMotion = usePrefersReducedMotion();
	const animatedHeight = useSpring({
		from: { display: 'none', height: 0 },
		to: async (next) => {
			if (isOpen) await next({ display: 'block' });
			await next({
				height: isOpen ? ref.current?.offsetHeight : 0,
				immediate: prefersReducedMotion,
			});
			await next(isOpen ? { height: 'auto' } : { display: 'none' });
		},
	});

	return (
		<animated.div
			id={id}
			aria-labelledby={ariaLabelledBy}
			role="region"
			style={animatedHeight}
			css={{
				backgroundColor: bg,
				overflow: 'hidden',
				...packs.print.visible,
			}}
		>
			<Box padding={1} ref={ref}>
				{children}
			</Box>
		</animated.div>
	);
};

export type PathwayAccordionTitleProps = PropsWithChildren<{
	id: string;
	tone: PathwayAccordionTone;
	ariaControls: string;
	isOpen?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	title: string;
	desc: string;
	image: string;
}>;

export const PathwayAccordionTitle = ({
	ariaControls,
	tone,
	tag: Tag,
	title,
	desc,
	image,
	id,
	isOpen,
	onClick,
}: PathwayAccordionTitleProps) => {
	const { bg, bgHover, fg } = pathwayAccordionColorMap[tone];
	return (
		<Flex
			as={BaseButton}
			id={id}
			gap={1}
			aria-controls={ariaControls}
			aria-expanded={isOpen}
			onClick={onClick}
			color="action"
			fontSize="md"
			lineHeight="heading"
			fontWeight="bold"
			justifyContent="space-between"
			alignItems="center"
			width="100%"
			link
			focus
			css={{
				backgroundColor: bg,
				textDecoration: 'none',
				'&:hover': {
					backgroundColor: bgHover,
					// second child
				},
			}}
		>
			<img src={image} />
			<Flex flexDirection="column">
				<Tag>{title}</Tag>
				<Text>{desc}</Text>
			</Flex>
			<Flex padding={2} background={fg}>
				<ChevronDownIcon
					weight="bold"
					size="sm"
					css={{
						transition: `transform ${tokens.transition.duration}ms ${tokens.transition.timingFunction}`,
						transform: `rotate(${isOpen ? 180 : 0}deg)`,
					}}
				/>
			</Flex>
		</Flex>
	);
};
