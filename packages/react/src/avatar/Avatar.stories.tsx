import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Stack } from '../box';
import { Avatar } from './Avatar';

export default {
	title: 'Content/Avatar',
	component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Basic = Template.bind({});
Basic.args = {
	name: 'Oscar Piastri',
};

export const MultipleExamples = () => {
	return (
		<Stack gap={0.5}>
			<Avatar name="Jordan Overbye" />
			<Avatar name="Sarah-Jane Ricciardo" />
			<Avatar name="Admin" />
		</Stack>
	);
};
