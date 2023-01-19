import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex, Stack } from '../box';
import { Text } from '../text';
import { Avatar } from './Avatar';

export default {
	title: 'Content/Avatar',
	component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Basic = Template.bind({});
Basic.args = {
	name: 'Oscar Piastri',
	color: 'default',
	size: 'md',
};

export const Sizes: ComponentStory<typeof Avatar> = (args) => {
	return (
		<Stack gap={0.5}>
			<Avatar {...args} name="Max Merstappen" size="sm" />
			<Avatar {...args} name="Max Merstappen" size="md" />
			<Avatar {...args} name="Max Merstappen" size="lg" />
			<Avatar {...args} name="Max Merstappen" size="xl" />
			<Avatar {...args} name="Max Merstappen" size="xxl" />
			<Avatar {...args} name="Max Merstappen" size="xxxl" />
		</Stack>
	);
};
Sizes.args = {
	color: 'default',
};

export const CompositeNames: ComponentStory<typeof Avatar> = (args) => {
	const names = [
		'Jordan Overbye',
		'Sarah-Jane Ricciardo',
		'Billy Bob Ricciardo',
		'John Doe-Ray-Mee',
		'Admin',
	];

	return (
		<Stack gap={0.5}>
			{names.map((name) => (
				<Flex
					key={name}
					gap={0.5}
					alignItems="center"
					justifyContent="flex-start"
				>
					<Avatar {...args} name={name} />
					<Text>{name}</Text>
				</Flex>
			))}
		</Stack>
	);
};
CompositeNames.args = {
	color: 'default',
	size: 'md',
};
