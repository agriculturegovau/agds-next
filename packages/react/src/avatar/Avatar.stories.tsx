import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex, Stack } from '../box';
import { boxPalette } from '../core';
import { Text } from '../text';
import { Avatar } from './Avatar';

export default {
	title: 'Content/Avatar',
	component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Basic = Template.bind({});
Basic.args = {
	name: 'William Mead',
	tone: 'neutral',
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
	name: 'William Mead',
	tone: 'neutral',
};

const SIZE_MAP = {
	sm: { fontSize: 'xs', fontWeight: 'bold', gap: 0.75 },
	md: { fontSize: 'sm', fontWeight: 'bold', gap: 0.75 },
	lg: { fontSize: 'md', fontWeight: 'bold', gap: 0.75 },
	xl: { fontSize: 'lg', fontWeight: 'bold', gap: 0.75 },
	xxl: { fontSize: 'xl', fontWeight: 'bold', gap: 1 },
	xxxl: { fontSize: 'xl', fontWeight: 'bold', gap: 1 },
} as const;

const sizes = Object.keys(SIZE_MAP) as (keyof typeof SIZE_MAP)[];

const TONE_MAP = {
	neutral: 'muted',
	action: 'action',
} as const;

export const CompositeNames = () => {
	const name = 'William Mead';
	const tone = 'neutral';
	return (
		<Stack gap={1} alignItems="flex-start">
			{sizes.map((size) => (
				<Flex
					key={size}
					gap={SIZE_MAP[size].gap}
					alignItems="center"
					justifyContent="flex-start"
				>
					<Avatar name={name} size={size} tone={tone} />
					<Text
						color={TONE_MAP[tone]}
						fontSize={SIZE_MAP[size].fontSize}
						fontWeight={SIZE_MAP[size].fontWeight}
					>
						{name}
					</Text>
				</Flex>
			))}
		</Stack>
	);
};

export const CompositeNamesLinks = () => {
	const name = 'William Mead';
	const tone = 'action';
	return (
		<Stack gap={1} alignItems="flex-start">
			{sizes.map((size) => (
				<Flex
					key={size}
					as="a"
					href="#"
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
							color: boxPalette.foregroundText,
						},
					}}
				>
					<Avatar name={name} size={size} tone={tone} />
					<Text
						color={TONE_MAP[tone]}
						fontSize={SIZE_MAP[size].fontSize}
						fontWeight={SIZE_MAP[size].fontWeight}
					>
						{name}
					</Text>
				</Flex>
			))}
		</Stack>
	);
};
