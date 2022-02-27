import { useRef } from 'react';
import type { PropsWithChildren } from 'react';
import { useSpring, animated } from 'react-spring';
import { Box, backgroundColorMap } from '@ag.ds-next/box';
import {
	mapResponsiveProp,
	mq,
	tokens,
	useElementSize,
	usePrefersReducedMotion,
	useToggleState,
} from '@ag.ds-next/core';

import { SideNavCollapseButton } from './SideNavCollapseButton';
import {
	localPaletteVars,
	useSideNavIds,
	variantMap,
	SideNavVariant,
} from './utils';

export type SideNavContainerProps = PropsWithChildren<{
	collapseTitle?: string;
	variant: SideNavVariant;
}>;

export const SideNavContainer = ({
	children,
	collapseTitle,
	variant,
	...props
}: SideNavContainerProps) => {
	const { palette, background, hover } = variantMap[variant];
	const [isOpen, onToggle] = useToggleState(false, true);
	const ref = useRef<HTMLDivElement>(null);
	const { height } = useElementSize(ref);
	const { titleId, bodyId } = useSideNavIds();

	const prefersReducedMotion = usePrefersReducedMotion();
	const animatedHeight = useSpring({
		from: { height: 0 },
		to: { height: isOpen ? height : 0 },
		immediate: prefersReducedMotion,
	});

	return (
		<Box rounded background={background} palette={palette}>
			<SideNavCollapseButton
				isOpen={isOpen}
				onClick={onToggle}
				ariaControls={bodyId}
				variant={variant}
				id={titleId}
			>
				{collapseTitle}
			</SideNavCollapseButton>
			<animated.section
				id={bodyId}
				aria-labelledby={titleId}
				role="region"
				style={animatedHeight}
				css={{
					overflow: 'hidden',
					[tokens.mediaQuery.min.md]: {
						// Overwrite the animated height
						// for tablet/desktop sizes.
						overflow: 'unset',
						height: 'auto !important',
					},
				}}
			>
				<Box
					as="nav"
					fontFamily="body"
					paddingLeft={{ xs: 1, md: 0 }}
					paddingRight={{ xs: 1, md: 0 }}
					fontSize="sm"
					lineHeight="default"
					css={mq({
						[localPaletteVars.hover]: mapResponsiveProp(
							hover,
							(t) => backgroundColorMap[t]
						),
					})}
					ref={ref}
					{...props}
				>
					{children}
				</Box>
			</animated.section>
		</Box>
	);
};
