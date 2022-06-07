import { Box } from '@ag.ds-next/box';
import { bottomBarPadding, MainNavVariant, variantMap } from './utils';

export type MainNavBottomBarProps = { variant: MainNavVariant };

export function MainNavBottomBar({ variant }: MainNavBottomBarProps) {
	const { bottomBar } = variantMap[variant];
	return (
		<Box paddingTop={bottomBarPadding} css={{ backgroundColor: bottomBar }} />
	);
}
