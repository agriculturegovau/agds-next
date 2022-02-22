import { ReactNode } from 'react';
import { Flex } from '@ag.ds-next/box';
import { globalPalette, themeVars } from '@ag.ds-next/core';

export type ControlContainerProps = {
	children: ReactNode;
	disabled?: boolean;
	invalid?: boolean;
	valid?: boolean;
};

export const ControlContainer = ({
	children,
	disabled,
	invalid,
	valid,
}: ControlContainerProps) => (
	<Flex
		as="label"
		alignItems="center"
		color="text"
		gap={0.5}
		inline
		css={{
			cursor: disabled ? 'not-allowed' : 'pointer',
			...(invalid
				? { backgroundColor: globalPalette.errorMuted }
				: valid
				? { backgroundColor: globalPalette.successMuted }
				: undefined),
		}}
	>
		{children}
	</Flex>
);
