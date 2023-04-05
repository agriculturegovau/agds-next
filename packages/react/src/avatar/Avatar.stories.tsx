import { Meta, StoryObj } from '@storybook/react';
import { Flex } from '../box';
import { boxPalette } from '../core';
import { Text } from '../text';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
	title: 'Content/Avatar',
	component: Avatar,
	args: {
		name: 'William Mead',
		tone: 'neutral',
		size: 'md',
	},
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Neutral: Story = {};

export const Action: Story = {
	args: {
		tone: 'action',
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

export const AllSizes: Story = {
	render: ({ size, ...args }) => {
		return (
			<Flex alignItems="center" gap={1}>
				{sizes.map((size) => (
					<Avatar key={size} {...args} size={size} />
				))}
			</Flex>
		);
	},
};

export const WithText: Story = {
	render: ({ name, size = 'md' }) => {
		return (
			<Flex
				key={size}
				gap={SIZE_MAP[size].gap}
				alignItems="center"
				justifyContent="flex-start"
			>
				<Avatar name={name} size={size} tone="neutral" />
				<Text fontSize={SIZE_MAP[size].fontSize} fontWeight="bold">
					{name}
				</Text>
			</Flex>
		);
	},
};

export const WithLink: Story = {
	render: ({ name, size = 'md' }) => (
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
				'> span:nth-of-type(2)': {
					color: boxPalette.foregroundAction,
					textDecoration: 'underline',
				},
				'&:hover': {
					'> span:nth-of-type(2)': {
						textDecoration: 'none',
						color: boxPalette.foregroundText,
					},
				},
			}}
		>
			<Avatar name={name} size={size} tone="action" />
			<Text fontSize={SIZE_MAP[size].fontSize} fontWeight="bold">
				{name}
			</Text>
		</Flex>
	),
};
