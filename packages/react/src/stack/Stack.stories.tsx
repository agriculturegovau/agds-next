import { Meta, StoryObj } from '@storybook/react';
import { Flex } from '../flex';
import { Box } from '../box';
import { Stack } from './Stack';

const meta: Meta<typeof Stack> = {
	title: 'foundations/Stack',
	component: Stack,
};

export default meta;

type Story = StoryObj<typeof Stack>;

export const Basic: Story = {
	args: {
		padding: 6,
		gap: 6,
		border: true,
	},
	render: (props) => (
		<Stack {...props}>
			<Box display="block" height={40} background="shadeAlt" />
			<Box display="block" height={80} background="shadeAlt" />
			<Box display="block" height={30} background="shadeAlt" />
			<Box display="block" height={60} background="shadeAlt" />
		</Stack>
	),
};

export const Alignment = () => (
	<Flex gap={6} justifyContent="space-between">
		<Stack gap={2} alignItems="center">
			<Box fontFamily="monospace">center</Box>
			<Stack gap={6} alignItems="center" border>
				<Box display="block" height={100} minWidth={40} background="shadeAlt" />
				<Box display="block" height={100} minWidth={60} background="shadeAlt" />
				<Box
					display="block"
					height={100}
					minWidth={100}
					background="shadeAlt"
				/>
				<Box display="block" height={100} minWidth={80} background="shadeAlt" />
			</Stack>
		</Stack>
		<Stack gap={2} alignItems="center">
			<Box fontFamily="monospace">flex-start</Box>
			<Stack gap={6} alignItems="flex-start" border>
				<Box display="block" height={100} minWidth={40} background="shadeAlt" />
				<Box display="block" height={100} minWidth={60} background="shadeAlt" />
				<Box
					display="block"
					height={100}
					minWidth={100}
					background="shadeAlt"
				/>
				<Box display="block" height={100} minWidth={80} background="shadeAlt" />
			</Stack>
		</Stack>
		<Stack gap={2} alignItems="center">
			<Box fontFamily="monospace">flex-end</Box>
			<Stack gap={6} alignItems="flex-end" border>
				<Box display="block" height={100} minWidth={40} background="shadeAlt" />
				<Box display="block" height={100} minWidth={60} background="shadeAlt" />
				<Box
					display="block"
					height={100}
					minWidth={100}
					background="shadeAlt"
				/>
				<Box display="block" height={100} minWidth={80} background="shadeAlt" />
			</Stack>
		</Stack>
		<Stack gap={2} alignItems="center">
			<Box fontFamily="monospace">stretch</Box>
			<Stack gap={6} alignItems="stretch" border>
				<Box display="block" height={100} minWidth={40} background="shadeAlt" />
				<Box display="block" height={100} minWidth={60} background="shadeAlt" />
				<Box
					display="block"
					height={100}
					minWidth={100}
					background="shadeAlt"
				/>
				<Box display="block" height={100} minWidth={80} background="shadeAlt" />
			</Stack>
		</Stack>
	</Flex>
);
