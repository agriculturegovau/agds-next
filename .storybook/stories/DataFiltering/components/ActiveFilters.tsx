import { format } from 'date-fns';
import { Text } from '@ag.ds-next/react/text';
import { Flex } from '@ag.ds-next/react/box';
import { Button } from '@ag.ds-next/react/button';
import { CloseIcon } from '@ag.ds-next/react/icon';
import { Tags } from '@ag.ds-next/react/tags';
import { GetDataFilters } from '../lib/getData';

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
	removeFilter: (filter: keyof GetDataFilters) => void;
}) => {
	const filterEntries = Object.entries(filters) as Entries<GetDataFilters>;

	const tags: {
		label: string;
		onRemove: () => void;
	}[] = [];

	for (const [key, value] of filterEntries) {
		if (key === 'requestDate') {
			const fromDate =
				value.from && typeof value.from !== 'string' ? value.from : undefined;
			const toDate =
				value.to && typeof value.to !== 'string' ? value.to : undefined;
			// Ensure that we have at least 1 valid date (from date OR to date)
			if (!fromDate && !toDate) continue;
			tags.push({
				// TODO add a formatter for the `key`
				label: `${key}: ${[formatDate(fromDate), formatDate(toDate)]
					.filter(Boolean)
					.join(' - ')}`,
				onRemove: () => removeFilter(key),
			});
		} else {
			if (!value) continue;
			tags.push({
				// TODO add a formatter
				label: `${key}: ${value}`,
				onRemove: () => removeFilter(key),
			});
		}
	}

	return tags;
};

export const ActiveFilters = ({
	filters,
	removeFilter,
	resetFilters,
}: {
	filters: GetDataFilters;
	removeFilter: (filter: keyof GetDataFilters) => void;
	resetFilters: () => void;
}) => {
	const items = getTagsFromFilters({ filters, removeFilter });

	if (items.length === 0) {
		return null;
	}

	return (
		<Flex alignItems="flex-end">
			<Tags
				heading={<Text fontWeight="bold">Active filters</Text>}
				items={items}
			/>
			<Button
				size="sm"
				variant="tertiary"
				onClick={resetFilters}
				iconAfter={CloseIcon}
			>
				Clear filters
			</Button>
		</Flex>
	);
};
