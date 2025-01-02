import { ReactNode } from 'react';
import { Flex } from '@ag.ds-next/react/src/flex';
import { Stack } from '@ag.ds-next/react/src/stack';

export const FilterRegion = ({ children }: { children: ReactNode }) => {
	return (
		<Stack
			aria-label="Filters"
			as="section"
			borderBottom
			gap={1}
			paddingBottom={1.5}
		>
			{children}
		</Stack>
	);
};

export const FilterBar = ({ children }: { children: ReactNode }) => {
	return (
		<Flex
			alignItems={{ xs: 'stretch', lg: 'flex-end' }}
			columnGap={1}
			flexDirection={{
				xs: 'column',
				lg: 'row',
			}}
			justifyContent={{ xs: 'flex-start', md: 'space-between' }}
			rowGap={1.5}
		>
			{children}
		</Flex>
	);
};

export const FilterBarGroup = ({ children }: { children: ReactNode }) => {
	return (
		<Flex
			alignItems={{ xs: 'stretch', md: 'flex-end' }}
			columnGap={1}
			flexDirection={{ xs: 'column', md: 'row' }}
			flexWrap="wrap"
			rowGap={1.5}
		>
			{children}
		</Flex>
	);
};
