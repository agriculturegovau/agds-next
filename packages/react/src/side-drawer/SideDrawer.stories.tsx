import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonGroup } from '../button';
import { useTernaryState } from '../core';
import { Text } from '../text';
import { SideDrawer } from './SideDrawer';

const meta: Meta<typeof SideDrawer> = {
	title: 'content/SideDrawer',
	component: SideDrawer,
	args: {
		title:
			'This is the title of the SideDrawer dialog, it can span lines but should not be too long.',
	},
	render: function Render(props) {
		const [isSideDrawerOpen, openSideDrawer, closeSideDrawer] =
			useTernaryState(true);
		return (
			<div>
				<Button onClick={openSideDrawer}>Open SideDrawer</Button>
				<SideDrawer
					isOpen={isSideDrawerOpen}
					onDismiss={closeSideDrawer}
					title={props.title}
					actions={
						<ButtonGroup>
							<Button onClick={closeSideDrawer}>Primary button</Button>
							<Button variant="secondary" onClick={closeSideDrawer}>
								Secondary button
							</Button>
							<Button variant="tertiary" onClick={closeSideDrawer}>
								Tertiary button
							</Button>
						</ButtonGroup>
					}
				>
					<Text as="p">
						This is the SideDrawer Body paragraph, it provides detailed
						instruction and context for the the SideDrawer action. It can also
						span lines but long form content should be avoided.
					</Text>
				</SideDrawer>
			</div>
		);
	},
};

export default meta;

type Story = StoryObj<typeof SideDrawer>;

export const Basic: Story = {};
