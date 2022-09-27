import { ReactNode } from 'react';
import { Box, Flex } from '@ag.ds-next/box';

export type DescriptionListProps = {};

type PropsWithOnlyChildren = {
	children: ReactNode;
};

export const Term = ({ children }: PropsWithOnlyChildren) => (
	<Box
		as="dt"
		paddingY={0.75}
		fontWeight="bold"
		width={['100%', '30%']}
		display="table-cell"
	>
		{children}
	</Box>
);

export const Description = ({ children }: PropsWithOnlyChildren) => (
	<Box as="dd" paddingY={0.75} display="table-cell">
		{children}
	</Box>
);

export const Action = ({ children }: PropsWithOnlyChildren) => (
	<Box
		as="dd"
		paddingY={0.75}
		display="table-cell"
		css={{ textAlign: 'right' }}
		width={['100%', '20%']}
	>
		{children}
	</Box>
);

export const DescriptionList = ({ children }: PropsWithOnlyChildren) => (
	<Box
		as="dl"
		width="100%"
		borderTop
		borderColor="muted"
		display="table"
		css={{
			borderCollapse: 'collapse',
		}}
	>
		{children}
	</Box>
);

export const DescriptionListItem = ({ children }: PropsWithOnlyChildren) => (
	<Box display="table-row" borderBottom borderColor="muted">
		{children}
	</Box>
);
