import { ReactNode } from 'react';
import { Flex } from '@ag.ds-next/box';
import { themeVars } from '@ag.ds-next/core';

export type ControlContainerProps = {
	children: ReactNode;
	disabled?: boolean;
	invalid?: true;
	valid?: true;
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
		gap={0.75}
		inline
		css={{
			cursor: disabled ? 'not-allowed' : 'pointer',
			...(invalid
				? {
						backgroundColor: `var(${themeVars.errorMuted})`,
				  }
				: valid
				? {
						backgroundColor: `var(${themeVars.successMuted})`,
				  }
				: undefined),
		}}
	>
		{children}
	</Flex>
);
