import { Text } from '../../../../../packages/react/src/text';
import { Flex } from '../../../../../packages/react/src/flex';
import { Button } from '../../../../../packages/react/src/button';
import { CloseIcon } from '../../../../../packages/react/src/icon';
import { Tags } from '../../../../../packages/react/src/tags';
import { GetDataFilters } from '../_lib/types';
import { useSortAndFilterContext } from '../_lib/contexts';
import { STATUS_MAP } from '../_lib/utils';

type Entries<T> = {
	[K in keyof T]: [K, T[K]];
}[keyof T][];

const getTagsFromFilters = ({
	filters,
	removeFilter,
}: {
	filters: GetDataFilters;
	removeFilter: (filterKey: keyof GetDataFilters) => void;
}) => {
	const filterEntries = Object.entries(filters) as Entries<GetDataFilters>;

	const tags: {
		label: string;
		onRemove: () => void;
	}[] = [];

	for (const [key, value] of filterEntries) {
		if (!value) continue;
		const formattedKey = formatFilterKey(key);
		const onRemove = () => removeFilter(key);

		if (key === 'activeUsers') {
			if (!value) continue;
			tags.push({
				label: `${formattedKey}: Active users`,
				onRemove,
			});
			continue;
		}

		if (key === 'status') {
			tags.push({
				label: `${formattedKey}: ${STATUS_MAP[value].label}`,
				onRemove,
			});
			continue;
		}

		if (Array.isArray(value)) {
			if (value.length === 0) continue;

			tags.push({
				label: `${formattedKey}: ${value.join(', ')}`,
				onRemove,
			});
			continue;
		}

		tags.push({ label: `${formattedKey}: ${value}`, onRemove });
	}

	return tags;
};

function formatFilterKey(key: keyof GetDataFilters) {
	return {
		activeUsers: false,
		dateJoinedFrom: 'Date joined',
		dateJoinedTo: 'Date joined',
		foodSafetyCertificate: 'Food safety certificate',
		lastActiveFrom: 'Last active',
		lastActiveTo: 'Last active',
		name: 'Name',
		role: 'Role',
		status: 'Status',
	}[key];
}

export const ActiveFilters = () => {
	const { filters, removeFilter, resetFilters } = useSortAndFilterContext();
	const tags = getTagsFromFilters({ filters, removeFilter });

	if (tags.length === 0) {
		return null;
	}

	return (
		<Flex flexWrap="wrap" gap={0.75} alignItems="flex-end">
			<Tags
				heading={<Text fontWeight="bold">Active filters</Text>}
				items={tags}
			/>
			<Button
				size="sm"
				variant="text"
				onClick={resetFilters}
				iconAfter={CloseIcon}
			>
				Clear filters
			</Button>
		</Flex>
	);
};
