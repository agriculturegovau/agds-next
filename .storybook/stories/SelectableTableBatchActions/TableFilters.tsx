import { Flex } from '@ag.ds-next/react/flex';
import { SearchInput } from '@ag.ds-next/react/search-input';
import { Select } from '@ag.ds-next/react/select';

export function TableFilters() {
	return (
		<Flex
			flexDirection={['column', 'row']}
			justifyContent="space-between"
			gap={1}
			paddingBottom={1}
			borderBottom
		>
			<Flex gap={1}>
				<SearchInput label="Search certificates" hideOptionalLabel />
				<Select
					label="Status"
					options={[{ label: 'All', value: 'all' }]}
					hideOptionalLabel
				/>
			</Flex>
			<Select
				label="Sort by"
				options={[{ label: 'Last modified', value: 'last modified' }]}
				hideOptionalLabel
			/>
		</Flex>
	);
}
