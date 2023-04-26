import { Meta, StoryObj } from '@storybook/react';
import { Text } from '../text';
import { Prose } from '../prose';
import { PageAlert } from './PageAlert';

const meta: Meta<typeof PageAlert> = {
	title: 'content/PageAlert',
	component: PageAlert,
	args: {
		children: <Text as="p">This is a Page alert component.</Text>,
		title: 'Page alert',
	},
};

export default meta;

type Story = StoryObj<typeof PageAlert>;

export const Info: Story = {
	args: {
		tone: 'info',
	},
};

export const Success: Story = {
	args: {
		tone: 'success',
	},
};

export const Warning: Story = {
	args: {
		tone: 'warning',
	},
};

export const Error: Story = {
	args: {
		tone: 'error',
		children: (
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
		),
	},
};
