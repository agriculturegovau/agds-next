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
			<Box background="shadeAlt" display="block" height={40} />
			<Box background="shadeAlt" display="block" height={80} />
			<Box background="shadeAlt" display="block" height={30} />
			<Box background="shadeAlt" display="block" height={60} />
		</Stack>
	),
};

export const Alignment = () => (
	<Flex gap={6} justifyContent="space-between">
		<Stack alignItems="center" gap={2}>
			<Box fontFamily="monospace">center</Box>
			<Stack alignItems="center" border gap={6}>
				<Box background="shadeAlt" display="block" height={100} minWidth={40} />
				<Box background="shadeAlt" display="block" height={100} minWidth={60} />
				<Box
					background="shadeAlt"
					display="block"
					height={100}
					minWidth={100}
				/>
				<Box background="shadeAlt" display="block" height={100} minWidth={80} />
			</Stack>
		</Stack>
		<Stack alignItems="center" gap={2}>
			<Box fontFamily="monospace">flex-start</Box>
			<Stack alignItems="flex-start" border gap={6}>
				<Box background="shadeAlt" display="block" height={100} minWidth={40} />
				<Box background="shadeAlt" display="block" height={100} minWidth={60} />
				<Box
					background="shadeAlt"
					display="block"
					height={100}
					minWidth={100}
				/>
				<Box background="shadeAlt" display="block" height={100} minWidth={80} />
			</Stack>
		</Stack>
		<Stack alignItems="center" gap={2}>
			<Box fontFamily="monospace">flex-end</Box>
			<Stack alignItems="flex-end" border gap={6}>
				<Box background="shadeAlt" display="block" height={100} minWidth={40} />
				<Box background="shadeAlt" display="block" height={100} minWidth={60} />
				<Box
					background="shadeAlt"
					display="block"
					height={100}
					minWidth={100}
				/>
				<Box background="shadeAlt" display="block" height={100} minWidth={80} />
			</Stack>
		</Stack>
		<Stack alignItems="center" gap={2}>
			<Box fontFamily="monospace">stretch</Box>
			<Stack alignItems="stretch" border gap={6}>
				<Box background="shadeAlt" display="block" height={100} minWidth={40} />
				<Box background="shadeAlt" display="block" height={100} minWidth={60} />
				<Box
					background="shadeAlt"
					display="block"
					height={100}
					minWidth={100}
				/>
				<Box background="shadeAlt" display="block" height={100} minWidth={80} />
			</Stack>
		</Stack>
	</Flex>
);
