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
			<Box background="shadeAlt" display="block" height={100} width={100} />
			<Box background="shadeAlt" display="block" height={100} width={100} />
			<Box background="shadeAlt" display="block" height={100} width={100} />
			<Box background="shadeAlt" display="block" height={100} width={100} />
		</Flex>
	),
};

export const Alignment = () => (
	<Stack alignItems="flex-start" gap={6}>
		<Box fontFamily="monospace">center</Box>
		<Flex alignItems="center" border gap={6}>
			<Box background="shadeAlt" display="block" minHeight={40} width={100} />
			<Box background="shadeAlt" display="block" minHeight={60} width={100} />
			<Box background="shadeAlt" display="block" minHeight={100} width={100} />
			<Box background="shadeAlt" display="block" minHeight={80} width={100} />
		</Flex>
		<Box fontFamily="monospace">flex-start</Box>
		<Flex alignItems="flex-start" border gap={6}>
			<Box background="shadeAlt" display="block" minHeight={40} width={100} />
			<Box background="shadeAlt" display="block" minHeight={60} width={100} />
			<Box background="shadeAlt" display="block" minHeight={100} width={100} />
			<Box background="shadeAlt" display="block" minHeight={80} width={100} />
		</Flex>
		<Box fontFamily="monospace">flex-end</Box>
		<Flex alignItems="flex-end" border gap={6}>
			<Box background="shadeAlt" display="block" minHeight={40} width={100} />
			<Box background="shadeAlt" display="block" minHeight={60} width={100} />
			<Box background="shadeAlt" display="block" minHeight={100} width={100} />
			<Box background="shadeAlt" display="block" minHeight={80} width={100} />
		</Flex>
		<Box fontFamily="monospace">stretch</Box>
		<Flex alignItems="stretch" border gap={6}>
			<Box background="shadeAlt" display="block" minHeight={40} width={100} />
			<Box background="shadeAlt" display="block" minHeight={60} width={100} />
			<Box background="shadeAlt" display="block" minHeight={100} width={100} />
			<Box background="shadeAlt" display="block" minHeight={80} width={100} />
		</Flex>
	</Stack>
);
