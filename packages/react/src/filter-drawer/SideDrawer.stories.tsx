import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonGroup } from '../button';
import { useTernaryState } from '../core';
import { Text } from '../text';
import { FilterDrawer } from './FilterDrawer';

const meta: Meta<typeof FilterDrawer> = {
	title: 'content/FilterDrawer',
	component: FilterDrawer,
	args: {
		title:
			'This is the title of the FilterDrawer dialog, it can span lines but should not be too long.',
	},
	render: function Render(props) {
		const [isFilterDrawerOpen, openFilterDrawer, closeFilterDrawer] =
			useTernaryState(true);
		return (
			<div>
				<Button onClick={openFilterDrawer}>Open FilterDrawer</Button>
				<FilterDrawer
					isOpen={isFilterDrawerOpen}
					onDismiss={closeFilterDrawer}
					title={props.title}
					actions={
						<ButtonGroup>
							<Button onClick={closeFilterDrawer}>Primary button</Button>
							<Button variant="secondary" onClick={closeFilterDrawer}>
								Secondary button
							</Button>
							<Button variant="tertiary" onClick={closeFilterDrawer}>
								Tertiary button
							</Button>
						</ButtonGroup>
					}
				>
					<Text as="p">
						This is the FilterDrawer Body paragraph, it provides detailed
						instruction and context for the the FilterDrawer action. It can also
						span lines but long form content should be avoided.
					</Text>
				</FilterDrawer>
			</div>
		);
	},
};

export default meta;

type Story = StoryObj<typeof FilterDrawer>;

export const Basic: Story = {};
