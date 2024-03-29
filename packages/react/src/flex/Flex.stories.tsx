import { Meta, StoryObj } from '@storybook/react';
import { Box } from '../box';
import { Stack } from '../stack';
import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
	title: 'foundations/Flex',
	component: Flex,
};

export default meta;

type Story = StoryObj<typeof Flex>;

export const Basic: Story = {
	args: {
		padding: 6,
		gap: 6,
		border: true,
	},
	render: (props) => (
		<Flex {...props}>
			<Box display="block" width={100} height={100} background="shadeAlt" />
			<Box display="block" width={100} height={100} background="shadeAlt" />
			<Box display="block" width={100} height={100} background="shadeAlt" />
			<Box display="block" width={100} height={100} background="shadeAlt" />
		</Flex>
	),
};

export const Alignment = () => (
	<Stack gap={6} alignItems="flex-start">
		<Box fontFamily="monospace">center</Box>
		<Flex gap={6} alignItems="center" border>
			<Box display="block" width={100} minHeight={40} background="shadeAlt" />
			<Box display="block" width={100} minHeight={60} background="shadeAlt" />
			<Box display="block" width={100} minHeight={100} background="shadeAlt" />
			<Box display="block" width={100} minHeight={80} background="shadeAlt" />
		</Flex>
		<Box fontFamily="monospace">flex-start</Box>
		<Flex gap={6} alignItems="flex-start" border>
			<Box display="block" width={100} minHeight={40} background="shadeAlt" />
			<Box display="block" width={100} minHeight={60} background="shadeAlt" />
			<Box display="block" width={100} minHeight={100} background="shadeAlt" />
			<Box display="block" width={100} minHeight={80} background="shadeAlt" />
		</Flex>
		<Box fontFamily="monospace">flex-end</Box>
		<Flex gap={6} alignItems="flex-end" border>
			<Box display="block" width={100} minHeight={40} background="shadeAlt" />
			<Box display="block" width={100} minHeight={60} background="shadeAlt" />
			<Box display="block" width={100} minHeight={100} background="shadeAlt" />
			<Box display="block" width={100} minHeight={80} background="shadeAlt" />
		</Flex>
		<Box fontFamily="monospace">stretch</Box>
		<Flex gap={6} alignItems="stretch" border>
			<Box display="block" width={100} minHeight={40} background="shadeAlt" />
			<Box display="block" width={100} minHeight={60} background="shadeAlt" />
			<Box display="block" width={100} minHeight={100} background="shadeAlt" />
			<Box display="block" width={100} minHeight={80} background="shadeAlt" />
		</Flex>
	</Stack>
);
