import { Meta, StoryObj } from '@storybook/react';
import { PageContent } from '../../../docs/components/designSystemComponents';
import { DataLoadingWithTable } from './DataLoadingWithTable';
import { apiData, useFetchStarWarsAPI } from './utils';

const meta: Meta<typeof DataLoadingWithTable> = {
	title: 'Patterns/Data loading/Table',
	component: DataLoadingWithTable,
	render: (args) => (
		<PageContent>
			<DataLoadingWithTable {...args} />
		</PageContent>
	),
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

type Story = StoryObj<typeof DataLoadingWithTable>;

export const Basic: Story = {
	name: 'Data loading with Table',
	render: function Render() {
		const { data, loading, error } = useFetchStarWarsAPI();
		return (
			<PageContent>
				<DataLoadingWithTable data={data} loading={loading} error={error} />
			</PageContent>
		);
	},
};

export const Loading: StoryObj<typeof DataLoadingWithTable> = {
	name: 'Loading state',
	args: {
		data: undefined,
		loading: true,
		error: false,
	},
};

export const Error: StoryObj<typeof DataLoadingWithTable> = {
	name: 'Error state',
	args: {
		data: undefined,
		loading: false,
		error: true,
	},
};

export const Empty: StoryObj<typeof DataLoadingWithTable> = {
	name: 'Empty state',
	args: {
		data: { results: [] },
		loading: false,
		error: false,
	},
};

export const Final: StoryObj<typeof DataLoadingWithTable> = {
	name: 'Final state',
	args: {
		data: apiData,
		loading: false,
		error: false,
	},
};
