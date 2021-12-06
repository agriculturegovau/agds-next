import React from 'react';
import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import { Stack } from './Stack';
import { Flex } from './Flex';
import { Box } from './Box';
import { Fragment } from 'react';

export default {
	title: 'primitive/Stack',
	component: Stack,
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => <Stack {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: (
		<Fragment>
			<Box display="block" height={40} background="shadeAlt" />
			<Box display="block" height={80} background="shadeAlt" />
			<Box display="block" height={30} background="shadeAlt" />
			<Box display="block" height={60} background="shadeAlt" />
		</Fragment>
	),
	border: true,
	padding: 6,
	gap: 6,
	theme: 'light',
};
Default.story = {
	parameters: {
		docs: {
			storyDescription:
				'`Stack` is a convenience wrapper around the `Box` component. It applies some default flex styling and should be used for vertical layouts which require consistent spacing.',
		},
	},
};

export const Alignment: Story = () => (
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
Alignment.story = {
	parameters: {
		docs: {
			storyDescription:
				'Use `alignItems` to set the horizontal alignment of children.',
		},
	},
};
