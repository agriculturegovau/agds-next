/* eslint-disable @next/next/no-img-element */
import { MouseEventHandler, PropsWithChildren, ReactNode, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useAccordionItemIds } from '@ag.ds-next/react/accordion';
import {
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
import { colourPacks } from './utils';

type PathwayAccordionTone = keyof typeof colourPacks;

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
	/** The alt text of the image. */
	imageAlt: string;
	/** The tone of the accordion item. */
	tone?: PathwayAccordionTone;
};

/**
 * TODO:
 * - Responsive
 * - flex sizing for images
 */

export const PathwayAccordion = ({
	title,
	tone = 'blue',
	desc,
	image,
	imageAlt,
	children,
	titleHeadingTag = 'h3',
}: PathwayAccordionProps) => {
	const { titleId, bodyId } = useAccordionItemIds();
	const [isOpen, onToggleState] = useToggleState(false, true);
	const { dark: border } = colourPacks[tone];

	return (
		<Box
			css={{
				borderLeft: `8px solid ${border}`,
			}}
		>
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
				imageAlt={imageAlt}
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
	imageAlt: string;
}>;

export const PathwayAccordionTitle = ({
	ariaControls,
	tone,
	tag,
	title,
	desc,
	image,
	imageAlt,
	id,
	isOpen,
	onClick,
}: PathwayAccordionTitleProps) => {
	const pathwayAccordionTokens = {
		panel: {
			default: colourPacks[tone].light,
			hover: colourPacks[tone].mid,
		},
		image: {
			default: 'white',
			hover: colourPacks[tone].light,
		},
		button: {
			default: colourPacks[tone].mid,
			hover: colourPacks[tone].dark,
		},
	};

	const selectors = {
		image: `> img`,
		button: `> div:nth-child(3)`,
	};

	return (
		<Flex
			as={BaseButton}
			id={id}
			aria-controls={ariaControls}
			aria-expanded={isOpen}
			onClick={onClick}
			fontSize="md"
			lineHeight="heading"
			fontWeight="bold"
			justifyContent="space-between"
			alignItems="stretch"
			width="100%"
			link
			focus
			css={{
				backgroundColor: pathwayAccordionTokens.panel.default,
				textDecoration: 'none',
				[selectors.image]: {
					backgroundColor: pathwayAccordionTokens.image.default,
				},
				[selectors.button]: {
					backgroundColor: pathwayAccordionTokens.button.default,
				},

				'&:hover': {
					backgroundColor: pathwayAccordionTokens.panel.hover,
					[selectors.image]: {
						backgroundColor: pathwayAccordionTokens.image.hover,
					},
					'> div:nth-child(2) > h3': {
						...packs.underline,
					},
					[selectors.button]: {
						backgroundColor: pathwayAccordionTokens.button.hover,
					},
				},
			}}
		>
			<Box
				as="img"
				alt={imageAlt}
				src={image}
				css={{
					width: '16rem',
					objectFit: 'cover',
					display: 'none',
					[tokens.mediaQuery.min.sm]: {
						display: 'block',
					},
				}}
			/>
			<Flex flexDirection="column" gap={1} padding={1.5} flexGrow={1}>
				<Text as={tag} lineHeight="heading" fontSize="lg" fontWeight="bold">
					{title}
				</Text>
				<Text fontSize="sm">{desc}</Text>
			</Flex>
			<Flex padding={1} alignItems="center" justifyContent="center">
				<ChevronDownIcon
					weight="bold"
					size="lg"
					color="text"
					css={{
						transition: `transform ${tokens.transition.duration}ms ${tokens.transition.timingFunction}`,
						transform: `rotate(${isOpen ? 180 : 0}deg)`,
					}}
				/>
			</Flex>
		</Flex>
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
	const { light: bg } = colourPacks[tone];

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
