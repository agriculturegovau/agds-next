import { format } from 'date-fns';
import { Text } from '@ag.ds-next/react/text';
import { Flex } from '@ag.ds-next/react/box';
import { Button } from '@ag.ds-next/react/button';
import { CloseIcon } from '@ag.ds-next/react/icon';
import { Tags } from '@ag.ds-next/react/tags';
import { GetDataFilters } from '../lib/getData';

const formatDate = (date: Date | undefined) => {
	if (!date || typeof date !== 'object') return '-';
	return format(new Date(date), 'dd/MM/yyyy');
};

const getTagsFromFilters = ({
	filters,
	removeFilter,
}: {
	filters: GetDataFilters;
	removeFilter: (filter: keyof GetDataFilters) => void;
}) => {
	return (
		Object.entries(filters) as [
			keyof typeof filters,
			string | { from: Date | undefined; to: Date | undefined } | undefined
		][]
	)
		.filter(([key, value]) => {
			if (typeof value === 'object') {
				return value?.from !== undefined || value?.to !== undefined;
			}

			return value !== undefined;
		})
		.map(([key, value]) => {
			if (typeof value === 'object') {
				const { from, to } = value;

				return {
					label: `${key}: ${formatDate(from)} - ${formatDate(to)}`,
					onRemove: () => removeFilter(key),
				};
			}

			return {
				key: key,
				label: `${key}: ${value}`,
				onRemove: () => removeFilter(key),
			};
		});
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
