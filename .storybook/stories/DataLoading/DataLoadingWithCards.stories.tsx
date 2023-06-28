import { Meta, StoryObj } from '@storybook/react';
import { PageContent } from '../../../docs/components/designSystemComponents';
import { DataLoadingWithCards } from './DataLoadingWithCards';
import { apiData, useFetchStarWarsAPI } from './utils';

const meta: Meta<typeof DataLoadingWithCards> = {
	title: 'Patterns/Data loading/Cards',
	component: DataLoadingWithCards,
	render: (args) => (
		<PageContent>
			<DataLoadingWithCards {...args} />
		</PageContent>
	),
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

type Story = StoryObj<typeof DataLoadingWithCards>;

export const Basic: Story = {
	name: 'Data loading with Cards',
	render: function Render() {
		const { data, loading, error } = useFetchStarWarsAPI();
		return (
			<PageContent>
				<DataLoadingWithCards data={data} loading={loading} error={error} />
			</PageContent>
		);
	},
};

export const Loading: Story = {
	name: 'Loading state',
	args: {
		data: undefined,
		loading: true,
		error: false,
	},
};

export const Error: Story = {
	name: 'Error state',
	args: {
		data: undefined,
		loading: false,
		error: true,
	},
};

export const Empty: Story = {
	name: 'Empty state',
	args: {
		data: { results: [] },
		loading: false,
		error: false,
	},
};

export const Final: Story = {
	name: 'Final state',
	args: {
		data: apiData,
		loading: false,
		error: false,
	},
};
