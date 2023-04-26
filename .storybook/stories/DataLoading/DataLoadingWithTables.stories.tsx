import { Meta, StoryObj } from '@storybook/react';
import { PageContent } from '@ag.ds-next/react/content';
import { DataLoadingWithTables } from './DataLoadingWithTables';

const meta: Meta<typeof DataLoadingWithTables> = {
	title: 'Patterns/Data loading',
	component: DataLoadingWithTables,
};

export default meta;

export const Tables: StoryObj<typeof DataLoadingWithTables> = {
	name: 'with tables',
	render: () => (
		<PageContent>
			<DataLoadingWithTables />
		</PageContent>
	),
};
