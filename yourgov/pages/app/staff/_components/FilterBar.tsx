import { ReactNode } from 'react';
import { Flex } from '../../../../../packages/react/src/flex';
import { Stack } from '../../../../../packages/react/src/stack';

export const FilterRegion = ({ children }: { children: ReactNode }) => {
	return (
		<Stack
			as="section"
			gap={1}
			aria-label="data filtering"
			borderBottom
			paddingBottom={1.5}
		>
			{children}
		</Stack>
	);
};

export const FilterBar = ({ children }: { children: ReactNode }) => {
	return (
		<Flex
			columnGap={1}
			rowGap={1.5}
			alignItems={{ xs: 'stretch', lg: 'flex-end' }}
			justifyContent={{ xs: 'flex-start', md: 'space-between' }}
			flexDirection={{
				xs: 'column',
				lg: 'row',
			}}
		>
			{children}
		</Flex>
	);
};

export const FilterBarGroup = ({ children }: { children: ReactNode }) => {
	return (
		<Flex
			flexWrap="wrap"
			columnGap={1}
			rowGap={1.5}
			flexDirection={{ xs: 'column', md: 'row' }}
			alignItems={{ xs: 'stretch', md: 'flex-end' }}
		>
			{children}
		</Flex>
	);
};
