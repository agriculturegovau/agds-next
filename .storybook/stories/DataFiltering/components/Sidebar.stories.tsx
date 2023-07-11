import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { PageContent } from '@ag.ds-next/react/content';
import { Sidebar } from './Sidebar';

const SidebarExample: StoryFn<typeof Sidebar> = (args) => {
	return (
		<PageContent>
			<Columns gap={{ xs: 1, md: 3 }}>
				<Column columnSpan={{ xs: 12, md: 4 }}>
					<Sidebar
						title={args.title}
						collapseButtonLabel={args.collapseButtonLabel}
					>
						<p>Sidebar Content</p>
					</Sidebar>
				</Column>
				<Column
					as="main"
					id="main-content"
					tabIndex={-1}
					css={{ '&:focus': { outline: 'none' } }}
					columnSpan={{ xs: 12, md: 8 }}
				>
					Main content area
				</Column>
			</Columns>
		</PageContent>
	);
};

const meta: Meta<typeof Sidebar> = {
	title: 'Layout/Sidebar',
	component: Sidebar,
	render: SidebarExample,
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Basic: Story = {
	args: {
		title: 'Title of sidebar',
		collapseButtonLabel: 'Collapse button label',
	},
};

export const SideNav: Story = {
	args: {
		title: 'Components',
		collapseButtonLabel: 'In this section',
	},
};
