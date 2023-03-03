import { Tags } from '@ag.ds-next/react/tags';
import { GetDataFilters } from '../lib/data';

export const ActiveFilters = ({ filters }: { filters: GetDataFilters }) => {
	const items = Object.entries(filters)
		.filter(([_, value]) => value !== undefined)
		.map(([key, value]) => {
			return {
				label: `${key}: ${value}`,
				onRemove: () => console.log('remove'),
			};
		});

	return <Tags heading="Active filters" items={items} />;
};
