import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { PageContent } from '@ag.ds-next/react/content';
import { Button } from '@ag.ds-next/react/button';
import { Prose } from '@ag.ds-next/react/prose';
import { CloseIcon } from '@ag.ds-next/react/icon';
import { Box } from '../box';
import { SideBar } from './SideBar';
import { SideBarTitle } from './SideBarTitle';

const SideBarExampleFrame: StoryFn<typeof SideBar> = (args) => {
	return (
		<PageContent>
			<Columns gap={{ xs: 1, md: 3 }}>
				<Column columnSpan={{ xs: 12, md: 4 }}>
					<SideBar {...args} />
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
	render: (args) => <SideBarExampleFrame {...args} />,
	args: {
		collapseButtonLabel: 'Collapse button label',
		children: (
			<>
				<SideBarTitle title="SideBarTitle" />
				<Box paddingY={1}>SideBar Content area</Box>
			</>
		),
	},
};

export default meta;

type Story = StoryObj<typeof SideBar>;

export const Basic: Story = {};

export const withSubTitle: Story = {
	name: 'With subtitle',
	args: {
		children: (
			<>
				<SideBarTitle title="SideBarTitle" subtitle="Subtitle" />
				<Box paddingY={1}>SideBar Content area</Box>
			</>
		),
	},
};

export const WithAction: Story = {
	args: {
		children: (
			<>
				<SideBarTitle
					title="SideBarTitle"
					action={<Button variant="text">Action</Button>}
				/>
				<Box paddingY={1}>SideBar Content area</Box>
			</>
		),
	},
};

export const Filtering: Story = {
	args: {
		collapseButtonLabel: 'Filters (3)',
		children: (
			<>
				<SideBarTitle
					title="Filters"
					action={
						<Button variant="text" iconAfter={() => <CloseIcon size="sm" />}>
							Clear filters
						</Button>
					}
				/>
			</>
		),
	},
};

export const ProgressIndicator = {
	args: {
		collapseButtonLabel: '1 of 5 steps completed',
		children: (
			<>
				<SideBarTitle title="Progress" subtitle="1 of 5 steps completed" />
				<Box paddingY={1}>SideBar Content area</Box>
			</>
		),
	},
};
