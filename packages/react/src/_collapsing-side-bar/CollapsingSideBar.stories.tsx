import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { PageContent } from '@ag.ds-next/react/content';
import { Prose } from '@ag.ds-next/react/prose';
import { Box } from '../box';
import { CollapsingSideBar } from './CollapsingSideBar';
import { CollapsingSideBarTitle } from './CollapsingSideBarTitle';

const SideBarExampleFrame: StoryFn<typeof CollapsingSideBar> = (args) => {
	return (
		<PageContent>
			<Columns gap={{ xs: 1, md: 3 }}>
				<Column columnSpan={{ xs: 12, md: 4 }}>
					<CollapsingSideBar {...args} />
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

const meta: Meta<typeof CollapsingSideBar> = {
	title: 'Layout/CollapsingSideBar',
	component: CollapsingSideBar,
	render: (args) => <SideBarExampleFrame {...args} />,
	args: {
		collapseButtonLabel: 'Collapse button label',
		children: (
			<>
				<CollapsingSideBarTitle title="CollapsingSideBarTitle" />
				<Box paddingY={1}>CollapsingSideBar Content area</Box>
			</>
		),
	},
};

export default meta;

type Story = StoryObj<typeof CollapsingSideBar>;

export const Basic: Story = {};

export const withSubTitle: Story = {
	name: 'With subtitle',
	args: {
		children: (
			<>
				<CollapsingSideBarTitle
					title="CollapsingSideBarTitle"
					subtitle="Subtitle"
				/>
				<Box paddingY={1}>CollapsingSideBar Content area</Box>
			</>
		),
	},
};

export const Filtering: Story = {
	args: {
		collapseButtonLabel: 'Filters (3)',
		children: (
			<>
				<CollapsingSideBarTitle title="Filters" />
			</>
		),
	},
};

export const ProgressIndicator = {
	args: {
		collapseButtonLabel: '1 of 5 steps completed',
		children: (
			<>
				<CollapsingSideBarTitle
					title="Progress"
					subtitle="1 of 5 steps completed"
				/>
				<Box paddingY={1}>CollapsingSideBar Content area</Box>
			</>
		),
	},
};
