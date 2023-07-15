import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { PageContent } from '@ag.ds-next/react/content';
import { Button } from '../button';
import { Prose } from '../prose';
import { CloseIcon } from '../icon';
import { SideBar } from './SideBar';

const SideBarExample: StoryFn<typeof SideBar> = (args) => {
	return (
		<PageContent>
			<Columns gap={{ xs: 1, md: 3 }}>
				<Column columnSpan={{ xs: 12, md: 4 }}>
					<SideBar {...args}>
						<Prose>
							<p>SideBar Content area</p>
						</Prose>
					</SideBar>
				</Column>
				<Column
					as="main"
					id="main-content"
					tabIndex={-1}
					css={{ '&:focus': { outline: 'none' } }}
					columnSpan={{ xs: 12, md: 8 }}
				>
					<Prose>
						<h1>Main content area</h1>
						<p>Your page or application goes here.</p>
					</Prose>
				</Column>
			</Columns>
		</PageContent>
	);
};

const meta: Meta<typeof SideBar> = {
	title: 'Layout/SideBar',
	component: SideBar,
	render: SideBarExample,
	args: {
		title: 'Title of SideBar',
		titleHref: undefined,
		collapseButtonLabel: 'Collapse button label',
	},
};

export default meta;

type Story = StoryObj<typeof SideBar>;

export const Basic: Story = {};

export const WithAction: Story = {
	args: {
		action: <Button variant="text">Action</Button>,
	},
};

export const withTitleLink: Story = {
	args: {
		titleHref: '#',
	},
};

export const Filtering: Story = {
	args: {
		title: 'Filters',
		collapseButtonLabel: 'Filters (3)',
		action: (
			<Button variant="text" iconAfter={() => <CloseIcon size="sm" />}>
				Clear filters
			</Button>
		),
	},
};

export const SideNav: Story = {
	args: {
		title: 'Components',
		titleHref: '#components',
		collapseButtonLabel: 'In this section',
	},
};

export const ProgressIndicator = {
	args: {
		title: 'Progress',
		subTitle: '1 of 5 steps completed',
		collapseButtonLabel: '1 of 5 steps completed',
	},
};
