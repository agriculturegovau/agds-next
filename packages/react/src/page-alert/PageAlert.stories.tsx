import { Meta, StoryObj } from '@storybook/react';
import { Text } from '../text';
import { TextLink } from '../text-link';
import { ListItem, UnorderedList } from '../list';
import { PageAlert } from './PageAlert';
import { PageAlertTitle } from './PageAlertTitle';

const meta: Meta<typeof PageAlert> = {
	title: 'content/PageAlert',
	component: PageAlert,
	args: {
		onDismiss: undefined,
	},
	render: (args) => (
		<PageAlert {...args}>
			<Text as="p">This is a Page alert component.</Text>
		</PageAlert>
	),
};

export default meta;

type Story = StoryObj<typeof PageAlert>;

export const Basic: Story = {
	args: {
		title: 'Page alert',
		tone: 'success',
	},
};

export const WithNoTitle: Story = {
	args: {
		tone: 'success',
	},
};

export const WithList: Story = {
	render: (args) => (
		<PageAlert {...args}>
			<UnorderedList>
				<ListItem>
					<TextLink href="#">Full name must not be empty</TextLink>
				</ListItem>
				<ListItem>
					<TextLink href="#">Phone number must not be empty</TextLink>
				</ListItem>
			</UnorderedList>
		</PageAlert>
	),
	args: {
		title: 'Page alert',
		tone: 'error',
	},
};

export const WithTitleElement: Story = {
	args: {
		tone: 'success',
		title: (
			<PageAlertTitle as="h2">Descriptive success message (H2)</PageAlertTitle>
		),
	},
};

export const WithClose: Story = {
	render: (args) => (
		<PageAlert {...args}>
			<Text as="p">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
				fermentum, libero vel tristique mollis, lacus ipsum rutrum sem, in
				rhoncus nisl velit nec arcu. Sed condimentum, enim eget volutpat
				consequat, lacus nulla rutrum neque, eget vulputate urna magna vitae
				diam.
			</Text>
		</PageAlert>
	),
	args: {
		title: 'Page alert title that is long and spans multiple lines',
		tone: 'success',
		onDismiss: () => console.log('Closed'),
	},
};

export const WithCloseNoTitle: Story = {
	render: (args) => (
		<PageAlert {...args}>
			<Text as="p">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
				fermentum, libero vel tristique mollis, lacus ipsum rutrum sem, in
				rhoncus nisl velit nec arcu. Sed condimentum, enim eget volutpat
				consequat, lacus nulla rutrum neque, eget vulputate urna magna vitae
				diam.
			</Text>
		</PageAlert>
	),
	args: {
		tone: 'success',
		onDismiss: () => console.log('Closed'),
	},
};

export const WithCloseAndChildTitle: Story = {
	render: (args) => (
		<PageAlert {...args}>
			<Text as="p">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
				fermentum, libero vel tristique mollis, lacus ipsum rutrum sem, in
				rhoncus nisl velit nec arcu. Sed condimentum, enim eget volutpat
				consequat, lacus nulla rutrum neque, eget vulputate urna magna vitae
				diam.
			</Text>
		</PageAlert>
	),
	args: {
		tone: 'success',
		title: <PageAlertTitle as="h2">Page Alert title as H2</PageAlertTitle>,
		onDismiss: () => console.log('Closed'),
	},
};
