import type { ReactNode } from 'react';
import { Stack } from '@ag.ds-next/box';
import { boxPalette } from '@ag.ds-next/core';

export type InpageNavContainerProps = {
	children: ReactNode;
};

export const InpageNavContainer = ({ children }: InpageNavContainerProps) => {
	return (
		<Stack
			as="nav"
			gap={1}
			aria-label="In page"
			borderLeft
			borderLeftWidth="xl"
			paddingLeft={1.5}
			css={{
				borderLeftColor: boxPalette.foregroundAction,
			}}
		>
			{children}
		</Stack>
	);
};
