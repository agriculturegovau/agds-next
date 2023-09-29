import { Meta } from '@storybook/react';
import { SelectableTableBatchActions } from './SelectableTableBatchActions';

const meta: Meta = {
	title: 'patterns/Tables',
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

export const Basic = {
	name: 'Selectable table with batch actions',
	render: SelectableTableBatchActions,
};
