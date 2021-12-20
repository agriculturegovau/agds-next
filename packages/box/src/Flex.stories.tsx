import React from 'react';
import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import { Flex } from './Flex';
import { Stack } from './Stack';
import { Box } from './Box';
import { Fragment } from 'react';

export default {
	title: 'primitive/Flex',
	component: Flex,
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: (
		<Fragment>
			<Box display="block" width={100} height={100} background="shadeAlt" />
			<Box display="block" width={100} height={100} background="shadeAlt" />
			<Box display="block" width={100} height={100} background="shadeAlt" />
			<Box display="block" width={100} height={100} background="shadeAlt" />
		</Fragment>
	),
	border: 'standard',
	padding: 6,
	gap: 6,
	theme: 'light',
};
Default.story = {
	parameters: {
		docs: {
			storyDescription:
				'`Flex` convenience wrapper around the `Box` component. It applies some default flex styling and should be used for horizontal layouts which require consistent spacing.',
		},
	},
};

export const Alignment: Story = () => (
	<Stack gap={6} alignItems="flex-start">
		<Box fontFamily="monospace">center</Box>
		<Flex gap={6} alignItems="center" border="standard">
			<Box display="block" width={100} minHeight={40} background="shadeAlt" />
			<Box display="block" width={100} minHeight={60} background="shadeAlt" />
			<Box display="block" width={100} minHeight={100} background="shadeAlt" />
			<Box display="block" width={100} minHeight={80} background="shadeAlt" />
		</Flex>
		<Box fontFamily="monospace">flex-start</Box>
		<Flex gap={6} alignItems="flex-start" border="standard">
			<Box display="block" width={100} minHeight={40} background="shadeAlt" />
			<Box display="block" width={100} minHeight={60} background="shadeAlt" />
			<Box display="block" width={100} minHeight={100} background="shadeAlt" />
			<Box display="block" width={100} minHeight={80} background="shadeAlt" />
		</Flex>
		<Box fontFamily="monospace">flex-end</Box>
		<Flex gap={6} alignItems="flex-end" border="standard">
			<Box display="block" width={100} minHeight={40} background="shadeAlt" />
			<Box display="block" width={100} minHeight={60} background="shadeAlt" />
			<Box display="block" width={100} minHeight={100} background="shadeAlt" />
			<Box display="block" width={100} minHeight={80} background="shadeAlt" />
		</Flex>
		<Box fontFamily="monospace">stretch</Box>
		<Flex gap={6} alignItems="stretch" border="standard">
			<Box display="block" width={100} minHeight={40} background="shadeAlt" />
			<Box display="block" width={100} minHeight={60} background="shadeAlt" />
			<Box display="block" width={100} minHeight={100} background="shadeAlt" />
			<Box display="block" width={100} minHeight={80} background="shadeAlt" />
		</Flex>
	</Stack>
);
Alignment.story = {
	parameters: {
		docs: {
			storyDescription:
				'Use `alignItems` to set the vertical alignment of children.',
		},
	},
};
