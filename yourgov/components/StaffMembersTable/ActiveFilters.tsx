import { Text } from '@ag.ds-next/react/src/text';
import { Flex } from '@ag.ds-next/react/src/flex';
import { Button } from '@ag.ds-next/react/src/button';
import { CloseIcon } from '@ag.ds-next/react/src/icon';
import { Tags } from '@ag.ds-next/react/src/tags';
import { GetDataFilters } from './lib/types';
import { useSortAndFilterContext } from './lib/contexts';
import { STATUS_MAP } from './lib/utils';

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
				label: 'Active users',
				onRemove,
			});
			continue;
		}

		if (key === 'role') {
			const selectedRoles = Object.keys(value) as (keyof typeof value)[];
			if (!selectedRoles.some((role) => value[role])) continue;

			tags.push({
				label: `${formattedKey}: ${selectedRoles
					.reduce<(keyof typeof value)[]>(
						(acc, role) => (value[role] ? [...acc, role] : acc),
						[]
					)
					.join(', ')}`,
				onRemove,
			});
			continue;
		}

		if (key === 'trainingCompleted') {
			const selectedTrainings = Object.keys(value) as (keyof typeof value)[];
			if (!selectedTrainings.some((training) => value[training])) continue;

			tags.push({
				label: `${formattedKey}: ${selectedTrainings
					.reduce<(keyof typeof value)[]>(
						(acc, role) => (value[role] ? [...acc, role] : acc),
						[]
					)
					.join(', ')}`,
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
		trainingCompleted: 'Training completed',
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
				heading={
					<Text as="h3" fontWeight="bold">
						Active filters
					</Text>
				}
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
