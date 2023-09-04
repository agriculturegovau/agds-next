import { format } from 'date-fns';
import { Text } from '@ag.ds-next/react/text';
import { Flex } from '@ag.ds-next/react/flex';
import { Button } from '@ag.ds-next/react/button';
import { CloseIcon } from '@ag.ds-next/react/icon';
import { Tags } from '@ag.ds-next/react/tags';
import { GetDataFilters } from '../lib/getData';
import { useSortAndFilterContext } from '../lib/contexts';
import { STATUS_MAP } from '../lib/utils';
import { STATE_OPTIONS } from './FilterStateSelect';

const formatDate = (date: Date | undefined) => {
	if (!date) return;
	return format(date, 'dd/MM/yyyy');
};

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

		if (key === 'state') {
			const option = STATE_OPTIONS.find((o) => o.value === value);
			if (!option) continue;
			tags.push({
				label: `${formattedKey}: ${option.label}`,
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

		if (key === 'requestDate') {
			const fromDate =
				value.from && typeof value.from !== 'string' ? value.from : undefined;
			const toDate =
				value.to && typeof value.to !== 'string' ? value.to : undefined;
			// Ensure that we have at least 1 valid date (from date OR to date)
			if (!fromDate && !toDate) continue;
			tags.push({
				label: `${formattedKey}: ${[formatDate(fromDate), formatDate(toDate)]
					.filter(Boolean)
					.join(' - ')}`,
				onRemove,
			});
			continue;
		}

		if (key === 'destinations') {
			const formattedValue = value.map((v) => v.label).join(', ');
			tags.push({
				label: `${formattedKey}: ${formattedValue}`,
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
		requestDate: 'Request date',
		assignee: 'Assignee',
		businessName: 'Business name',
		state: 'State',
		status: 'Status',
		services: 'Services',
		destinations: 'Destinations',
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
