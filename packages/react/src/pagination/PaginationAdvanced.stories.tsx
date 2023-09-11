import { Meta } from '@storybook/react';
import { useState } from 'react';
import { PaginationAdvanced } from './PaginationAdvanced';

const meta: Meta<typeof PaginationAdvanced> = {
	title: 'navigation/Pagination/Advanced',
	component: PaginationAdvanced,
};

export default meta;

export const Basic = () => {
	const totalItems = 1000;
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(10);
	return (
		<PaginationAdvanced
			currentPage={currentPage}
			onChange={setCurrentPage}
			totalItems={totalItems}
			itemsPerPage={itemsPerPage}
			itemsPerPageOnChange={setItemsPerPage}
			itemsPerPageOptions={[10, 20, 40, 100, 200]}
		/>
	);
};
