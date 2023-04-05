import { Meta, StoryObj } from '@storybook/react';
import { PageContent } from '@ag.ds-next/react/content';
import { DataLoadingWithTables } from './DataLoadingWithTables';

const meta: Meta<typeof DataLoadingWithTables> = {
	title: 'Patterns/Remote data',
	component: DataLoadingWithTables,
};

export default meta;

export const Tables: StoryObj<typeof DataLoadingWithTables> = {
	render: () => (
		<PageContent>
			<DataLoadingWithTables />
		</PageContent>
	),
};
