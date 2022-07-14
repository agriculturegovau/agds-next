import { PropsWithChildren } from 'react';
import { backgroundColorMap, Box } from '@ag.ds-next/box';
import { boxPalette, packs } from '@ag.ds-next/core';
import { localPalette, localPaletteVars } from './utils';

const variantMap = {
	body: {
		hover: 'shade',
		bottomBar: boxPalette.backgroundBodyAlt,
	},
	bodyAlt: {
		hover: 'shadeAlt',
		bottomBar: boxPalette.backgroundBody,
	},
} as const;

export type SubNavContainerVariant = keyof typeof variantMap;

export type SubNavContainerProps = PropsWithChildren<{
	id?: string;
	'aria-label': string;
	background: SubNavContainerVariant;
}>;

export function SubNavContainer({
	id,
	'aria-label': ariaLabel,
	children,
	background,
}: SubNavContainerProps) {
	const { bottomBar, hover } = variantMap[background];
	return (
		<Box
			as="nav"
			background={background}
			id={id}
			aria-label={ariaLabel}
			css={{
				position: 'relative',
				[localPaletteVars.linkHoverBg]: backgroundColorMap[hover],
				[localPaletteVars.bottomBar]: bottomBar,
				...packs.print.hidden,
			}}
		>
			{children}
			<BottomBar />
		</Box>
	);
}

function BottomBar() {
	return (
		<Box
			display={['none', 'block']}
			paddingTop={0.5}
			css={{
				position: 'absolute',
				bottom: 0,
				left: 0,
				right: 0,
				width: '100%',
				backgroundColor: localPalette.bottomBar,
			}}
		/>
	);
}
