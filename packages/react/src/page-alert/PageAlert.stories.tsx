import { Meta, StoryObj } from '@storybook/react';
import { Text } from '../text';
import { Prose } from '../prose';
import { PageAlert } from './PageAlert';
import { PageAlertTitle } from './PageAlertTitle';

const meta: Meta<typeof PageAlert> = {
	title: 'content/PageAlert',
	component: PageAlert,
	render: (args) => (
		<PageAlert {...args}>
			<Text as="p">This is a Page alert component.</Text>
		</PageAlert>
	),
	args: {
		title: 'Page alert',
		tone: 'success',
	},
};

export default meta;

type Story = StoryObj<typeof PageAlert>;

export const Basic: Story = {};

export const WithProse: Story = {
	render: (args) => (
		<PageAlert {...args}>
			<Prose>
				<ul>
					<li>
						<a href="#">Full name must not be empty</a>
					</li>
					<li>
						<a href="#">Phone number must not be empty</a>
					</li>
				</ul>
			</Prose>
		</PageAlert>
	),
	args: {
		title: 'Page alert',
		tone: 'error',
	},
};

export const WithTitleElement: Story = {
	args: {
		title: (
			<PageAlertTitle as="h2">Descriptive success message (H2)</PageAlertTitle>
		),
	},
};
