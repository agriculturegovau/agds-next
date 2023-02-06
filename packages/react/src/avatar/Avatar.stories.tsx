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

export const Tone = Template.bind({});
Tone.args = {
	name: 'William Mead',
	tone: 'action',
	size: 'md',
};

const SIZE_MAP = {
	sm: { fontSize: 'xs', gap: 0.5 },
	md: { fontSize: 'sm', gap: 0.5 },
	lg: { fontSize: 'md', gap: 0.75 },
	xl: { fontSize: 'lg', gap: 0.75 },
	xxl: { fontSize: 'xl', gap: 1 },
	xxxl: { fontSize: 'xl', gap: 1 },
} as const;

const sizes = Object.keys(SIZE_MAP) as (keyof typeof SIZE_MAP)[];

const TONE_MAP = {
	neutral: 'muted',
	action: 'action',
} as const;

export const Sizes: ComponentStory<typeof Avatar> = ({ size, ...args }) => {
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
						fontWeight="bold"
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
					gap={SIZE_MAP[size].gap}
					alignItems="center"
					justifyContent="flex-start"
					as="a"
					href="#"
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
						fontWeight="bold"
					>
						{name}
					</Text>
				</Flex>
			))}
		</Stack>
	);
};
