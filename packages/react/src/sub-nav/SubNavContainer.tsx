import { PropsWithChildren } from 'react';
import { Box } from '../box';
import { boxPalette, packs } from '../core';

export type SubNavContainerProps = PropsWithChildren<{
	id?: string;
	'aria-label': string;
}>;

export function SubNavContainer({
	id,
	'aria-label': ariaLabel,
	children,
}: SubNavContainerProps) {
	return (
		<Box
			as="nav"
			id={id}
			aria-label={ariaLabel}
			css={{
				position: 'relative',
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
				backgroundColor: boxPalette.borderMuted,
			}}
		/>
	);
}
