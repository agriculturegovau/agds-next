import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { PageContent } from '@ag.ds-next/react/content';
import { SideBar } from './SideBar';

const SideBarExample: StoryFn<typeof SideBar> = (args) => {
	return (
		<PageContent>
			<Columns gap={{ xs: 1, md: 3 }}>
				<Column columnSpan={{ xs: 12, md: 4 }}>
					<SideBar
						title={args.title}
						collapseButtonLabel={args.collapseButtonLabel}
					>
						<p>SideBar Content</p>
					</SideBar>
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

const meta: Meta<typeof SideBar> = {
	title: 'Layout/SideBar',
	component: SideBar,
	render: SideBarExample,
};

export default meta;

type Story = StoryObj<typeof SideBar>;

export const Basic: Story = {
	args: {
		title: 'Title of sideBar',
		collapseButtonLabel: 'Collapse button label',
	},
};

export const SideNav: Story = {
	args: {
		title: 'Components',
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
