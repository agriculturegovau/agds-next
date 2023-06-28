import { Meta, StoryObj } from '@storybook/react';
import { PageContent } from '@ag.ds-next/react/content';
import { SiteLayout } from '../../../docs/content/templates/__shared/SiteLayout';
import {
	DataLoadingWithTables,
	LoadingState,
	ErrorState,
	EmptyState,
	FinalState,
} from './DataLoadingWithTable';
import { fakeApiData } from './utils';

const meta: Meta<typeof DataLoadingWithTables> = {
	title: 'Patterns/Data loading',
	component: DataLoadingWithTables,
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

export const Basic: StoryObj<typeof DataLoadingWithTables> = {
	name: 'Data loading with Table',
	render: () => (
		<SiteLayout>
			<PageContent>
				<DataLoadingWithTables />
			</PageContent>
		</SiteLayout>
	),
};

export const Loading: StoryObj<typeof DataLoadingWithTables> = {
	name: 'Data loading with Table - Loading state',
	render: () => (
		<SiteLayout>
			<PageContent>
				<LoadingState />
			</PageContent>
		</SiteLayout>
	),
};

export const Error: StoryObj<typeof DataLoadingWithTables> = {
	name: 'Data loading with table - Error state',
	render: () => (
		<SiteLayout>
			<PageContent>
				<ErrorState />
			</PageContent>
		</SiteLayout>
	),
};

export const Empty: StoryObj<typeof DataLoadingWithTables> = {
	name: 'Data loading with table - Empty state',
	render: () => (
		<SiteLayout>
			<PageContent>
				<EmptyState />
			</PageContent>
		</SiteLayout>
	),
};

export const Final: StoryObj<typeof DataLoadingWithTables> = {
	name: 'Data loading with table - Final state',
	render: () => (
		<SiteLayout>
			<PageContent>
				<FinalState items={fakeApiData.results} />
			</PageContent>
		</SiteLayout>
	),
};
