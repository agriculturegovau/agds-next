import { useId } from 'react';
import { PaginationSelect } from './PaginationSelect';

export const PaginationItemsPerPageSelect = ({
	value,
	options = [10, 20, 50, 100],
	onChange,
	id = 'pagination-items-per-page',
}: {
	/** The selected number of items per page. */
	value: number;
	/** Custom options for the items per page select. Defaults to [10, 20, 50, 100] */
	options?: number[];
	/** Callback when the items per page is changed. */
	onChange: (value: number) => void;
	/** The id of the items-per-page select. */
	id?: string;
}) => {
	const uid = useId();
	const id = `pagination-per-page-select-${uid}`;
	return (
		<PaginationSelect
			label="Items per page"
			options={options.map((option) => ({
				label: `${option}`,
				value: `${option}`,
			}))}
			value={`${value}`}
			onChange={(e) => onChange(Number(e.target.value))}
			maxWidth="sm"
			id={id}
		/>
	);
};
