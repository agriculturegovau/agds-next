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
	name: 'Anthony Albanese',
	color: 'neutral',
	size: 'md',
};

export const Sizes: ComponentStory<typeof Avatar> = ({ size, ...args }) => {
	const sizes = ['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'] as const;
	return (
		<Flex alignItems="center" gap={1}>
			{sizes.map((size) => (
				<Avatar key={size} {...args} size={size} />
			))}
		</Flex>
	);
};
Sizes.args = {
	name: 'Anthony Albanese',
	color: 'neutral',
};

export const CompositeNames: ComponentStory<typeof Avatar> = (args) => {
	return (
		<Flex gap={0.5} alignItems="center" justifyContent="flex-start">
			<Avatar {...args} />
			<Text>{args.name}</Text>
		</Flex>
	);
};
CompositeNames.args = {
	name: 'Anthony Albanese',
	color: 'neutral',
	size: 'md',
};

export const Links = () => {
	const names = [
		'Anthony Albanese',
		'Lando Norris',
		'Lewis Hamilton',
		'George Russell',
		'Sergio Perez',
		'Max Verstappen',
	];

	return (
		<Stack gap={0.5}>
			{names.map((name) => (
				<Flex
					as="a"
					href={`#${name}`}
					key={name}
					gap={0.5}
					alignItems="center"
					justifyContent="flex-start"
					link
					css={{
						textDecoration: 'none',
						'> span': {
							textDecoration: 'underline',
						},
						'&:hover > span': {
							textDecoration: 'none',
						},
					}}
				>
					<Avatar color="action" size="md" name={name} aria-hidden="true" />
					<Text color="inherit">{name}</Text>
				</Flex>
			))}
		</Stack>
	);
};
