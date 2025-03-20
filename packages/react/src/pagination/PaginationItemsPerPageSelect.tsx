import { useId } from '../core';
import { PaginationSelect } from './PaginationSelect';

export const PaginationItemsPerPageSelect = ({
	value,
	options = [10, 20, 50, 100],
	onChange,
}: {
	/** The selected number of items per page. */
	value: number;
	/** Custom options for the items per page select. Defaults to [10, 20, 50, 100] */
	options?: number[];
	/** Callback when the items per page is changed. */
	onChange: (value: number) => void;
}) => {
	const uid = useId();
	const id = `pagination-per-page-select-${uid}`;
	return (
		<PaginationSelect
			id={id}
			label="Items per page"
			maxWidth="sm"
			onChange={(e) => onChange(Number(e.target.value))}
			options={options.map((option) => ({
				label: `${option}`,
				value: `${option}`,
			}))}
			value={`${value}`}
		/>
	);
};
