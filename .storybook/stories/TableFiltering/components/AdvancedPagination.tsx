import { Flex } from '@ag.ds-next/react/box';
import { DirectionButton } from '@ag.ds-next/react/direction-link';
import { Select } from '@ag.ds-next/react/select';
import { GetDataPagination } from '../lib/data';
import { ItemsPerPageSelect } from './ItemsPerPageSelect';

export const AdvancedTablePagination = ({
	pagination,
	setPagination,
	totalPages,
}: {
	pagination: GetDataPagination;
	setPagination: (pagination: GetDataPagination) => void;
	totalPages: number;
}) => {
	return (
		<Flex justifyContent="space-between" alignItems="center">
			<ItemsPerPageSelect
				pagination={pagination}
				setPagination={setPagination}
			/>

			<Flex gap={1} justifyContent="center">
				<DirectionButton direction="left">Back</DirectionButton>
				<Select
					label="Page"
					value={pagination.page}
					onChange={(event) =>
						setPagination({
							...pagination,
							page: parseInt(event.target.value),
						})
					}
					hideOptionalLabel
					options={Array.from({ length: totalPages }, (_, i) => ({
						label: `${i + 1}`,
						value: `${i + 1}`,
					}))}
				/>
				<DirectionButton direction="right">Next</DirectionButton>
			</Flex>
		</Flex>
	);
};
