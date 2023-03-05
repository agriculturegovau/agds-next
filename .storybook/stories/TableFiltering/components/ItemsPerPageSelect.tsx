import { Select } from '@ag.ds-next/react/select';
import { GetDataPagination } from '../lib/getData';

export const ItemsPerPageSelect = ({
	pagination,
	setPagination,
}: {
	pagination: GetDataPagination;
	setPagination: (pagination: GetDataPagination) => void;
}) => {
	return (
		<Select
			label="Items per page"
			maxWidth="sm"
			value={pagination.perPage}
			onChange={(event) =>
				setPagination({
					...pagination,
					perPage: parseInt(event.target.value),
				})
			}
			hideOptionalLabel
			options={[
				{ label: '10', value: '10' },
				{ label: '20', value: '20' },
				{ label: '50', value: '50' },
				{ label: '100', value: '100' },
			]}
		/>
	);
};
