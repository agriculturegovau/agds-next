import { Flex } from '../../../packages/react/src/flex';
import { SearchInput } from '../../../packages/react/src/search-input';
import { Select } from '../../../packages/react/src/select';

export function TableFilters() {
	return (
		<Flex
			borderBottom
			flexDirection={['column', 'row']}
			gap={1}
			justifyContent="space-between"
			paddingBottom={1}
		>
			<Flex gap={1}>
				<SearchInput hideOptionalLabel label="Search certificates" />
				<Select
					hideOptionalLabel
					label="Status"
					options={[{ label: 'All', value: 'all' }]}
				/>
			</Flex>
			<Select
				hideOptionalLabel
				label="Sort by"
				options={[{ label: 'Last modified', value: 'last modified' }]}
			/>
		</Flex>
	);
}
