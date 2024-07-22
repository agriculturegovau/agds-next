import { Flex } from '../../../packages/react/src/flex';
import { SearchInput } from '../../../packages/react/src/search-input';
import { Select } from '../../../packages/react/src/select';

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
