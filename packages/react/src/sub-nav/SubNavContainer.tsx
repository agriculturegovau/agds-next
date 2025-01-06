import { PropsWithChildren } from 'react';
import { backgroundColorMap, Box } from '../box';
import { boxPalette, packs } from '../core';
import { localPaletteVars } from './utils';

const backgroundMap = {
	body: {
		hover: 'shade',
	},
	bodyAlt: {
		hover: 'shadeAlt',
	},
} as const;

export type SubNavBackground = keyof typeof backgroundMap;

export type SubNavContainerProps = PropsWithChildren<{
	id?: string;
	'aria-label': string;
	background: SubNavBackground;
}>;

export function SubNavContainer({
	id,
	'aria-label': ariaLabel,
	children,
	background,
}: SubNavContainerProps) {
	const { hover } = backgroundMap[background];
	return (
		<Box
			aria-label={ariaLabel}
			as="nav"
			background={background}
			css={{
				position: 'relative',
				[localPaletteVars.linkHoverBg]: backgroundColorMap[hover],
				...packs.print.hidden,
			}}
			id={id}
		>
			{children}
			<BottomBar />
		</Box>
	);
}

function BottomBar() {
	return (
		<Box
			css={{
				position: 'absolute',
				bottom: 0,
				left: 0,
				right: 0,
				width: '100%',
				backgroundColor: boxPalette.borderMuted,
			}}
			display={['none', 'block']}
			paddingTop={0.5}
		/>
	);
}
