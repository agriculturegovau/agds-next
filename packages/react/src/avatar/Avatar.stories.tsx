import { Meta, StoryObj } from '@storybook/react';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { boxPalette } from '../core';
import { Text } from '../text';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
	title: 'Content/Avatar',
	component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Basic: Story = {
	args: {
		name: 'William Mead',
		tone: 'neutral',
		size: 'md',
	},
};

export const Tone: Story = {
	args: {
		name: 'William Mead',
		tone: 'action',
		size: 'md',
	},
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

export const Sizes: Story = {
	args: {
		name: 'William Mead',
		tone: 'neutral',
	},
	render: (args) => (
		<Flex alignItems="center" gap={1}>
			{sizes.map((size) => (
				<Avatar key={size} {...args} size={size} />
			))}
		</Flex>
	),
};

export const CompositeNames = () => {
	const name = 'William Mead';
	const tone = 'neutral';
	return (
		<Stack alignItems="flex-start" gap={1}>
			{sizes.map((size) => (
				<Flex
					alignItems="center"
					gap={SIZE_MAP[size].gap}
					justifyContent="flex-start"
					key={size}
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
		<Stack alignItems="flex-start" gap={1}>
			{sizes.map((size) => (
				<Flex
					alignItems="center"
					as="a"
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
					gap={SIZE_MAP[size].gap}
					href="#"
					justifyContent="flex-start"
					key={size}
					link
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
