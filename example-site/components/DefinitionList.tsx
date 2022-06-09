import { ReactNode } from 'react';
import { Box, Flex } from '@ag.ds-next/box';

type PropsWithOnlyChildren = {
	children: ReactNode;
};

export const DefinitionTerm = ({ children }: PropsWithOnlyChildren) => (
	<Box as="dt" fontWeight="bold" width={['100%', '50%']}>
		{children}
	</Box>
);

export const DefinitionDescription = ({ children }: PropsWithOnlyChildren) => (
	<Box as="dd">{children}</Box>
);

export const DefinitionList = ({ children }: PropsWithOnlyChildren) => (
	<Box as="dl" width="100%" borderTop borderColor="muted">
		{children}
	</Box>
);

export const DefinitionListItem = ({ children }: PropsWithOnlyChildren) => (
	<Flex
		paddingY={0.75}
		borderBottom
		borderColor="muted"
		flexDirection={['column', 'row']}
		gap={0.5}
	>
		{children}
	</Flex>
);
