import { Meta, StoryObj } from '@storybook/react';
import { PageContent } from '../../../docs/components/designSystemComponents';
import { SiteLayout } from '../../../docs/content/templates/__shared/SiteLayout';
import {
	DataLoadingWithCards,
	LoadingState,
	ErrorState,
	FinalState,
	EmptyState,
} from './DataLoadingWithCards';
import { apiData } from './utils';

const meta: Meta<typeof DataLoadingWithCards> = {
	title: 'Patterns/Data loading/Cards',
	component: DataLoadingWithCards,
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

export const Basic: StoryObj<typeof DataLoadingWithCards> = {
	name: 'Data loading with Cards',
	render: () => (
		<SiteLayout>
			<PageContent>
				<DataLoadingWithCards />
			</PageContent>
		</SiteLayout>
	),
};

export const Loading: StoryObj<typeof DataLoadingWithCards> = {
	name: 'Loading state',
	render: () => (
		<SiteLayout>
			<PageContent>
				<LoadingState />
			</PageContent>
		</SiteLayout>
	),
};

export const Error: StoryObj<typeof DataLoadingWithCards> = {
	name: 'Error state',
	render: () => (
		<SiteLayout>
			<PageContent>
				<ErrorState onRetryClick={console.log} />
			</PageContent>
		</SiteLayout>
	),
};

export const Empty: StoryObj<typeof DataLoadingWithCards> = {
	name: 'Empty state',
	render: () => (
		<SiteLayout>
			<PageContent>
				<EmptyState />
			</PageContent>
		</SiteLayout>
	),
};

export const Final: StoryObj<typeof DataLoadingWithCards> = {
	name: 'Final state',
	render: () => (
		<SiteLayout>
			<PageContent>
				<FinalState items={apiData.results} />
			</PageContent>
		</SiteLayout>
	),
};
