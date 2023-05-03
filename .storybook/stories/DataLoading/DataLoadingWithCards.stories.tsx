import { Meta, StoryObj } from '@storybook/react';
import { PageContent } from '@ag.ds-next/react/content';
import { DataLoadingWithCards } from './DataLoadingWithCards';

const meta: Meta<typeof DataLoadingWithCards> = {
	title: 'Patterns/Data loading',
	component: DataLoadingWithCards,
};

export default meta;

export const Cards: StoryObj<typeof DataLoadingWithCards> = {
	name: 'with cards',
	render: () => (
		<PageContent>
			<DataLoadingWithCards />
		</PageContent>
	),
};
