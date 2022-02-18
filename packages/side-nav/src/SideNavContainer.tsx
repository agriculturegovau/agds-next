import { useRef } from 'react';
import type { PropsWithChildren } from 'react';
import { useSpring, animated } from 'react-spring';
import { Box, backgroundColorMap } from '@ag.ds-next/box';
import {
	tokens,
	useElementSize,
	usePrefersReducedMotion,
	useToggleState,
} from '@ag.ds-next/core';

import { SideNavCollapseButton } from './SideNavCollapseButton';
import { localPaletteVars, useSideNavIds } from './utils';

const variantMap = {
	light: {
		palette: 'light',
		background: 'body',
		hover: 'shade',
	},
	lightAlt: {
		palette: 'light',
		background: 'bodyAlt',
		hover: 'shadeAlt',
	},
	dark: {
		palette: 'dark',
		background: 'body',
		hover: 'shade',
	},
	darkAlt: {
		palette: 'dark',
		background: 'bodyAlt',
		hover: 'shadeAlt',
	},
} as const;

export type SideNavContainerProps = PropsWithChildren<{
	variant: keyof typeof variantMap;
}>;

export const SideNavContainer = ({
	children,
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
		<Box rounded background={{ xs: 'shade', md: background }}>
			<SideNavCollapseButton
				isOpen={isOpen}
				onClick={onToggle}
				ariaControls={bodyId}
				id={titleId}
			/>
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
						overflow: 'auto',
						height: 'auto !important',
					},
				}}
			>
				<Box
					as="nav"
					fontFamily="body"
					palette={palette}
					fontSize="sm"
					lineHeight="default"
					css={{
						[localPaletteVars.linkHoverBg]: backgroundColorMap[hover],
						[localPaletteVars.linkActiveBg]: backgroundColorMap[background],
					}}
					ref={ref}
					{...props}
				>
					{children}
				</Box>
			</animated.section>
		</Box>
	);
};
