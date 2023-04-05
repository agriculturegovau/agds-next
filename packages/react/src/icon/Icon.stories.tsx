import { StoryObj, Meta } from '@storybook/react';
import { Text } from '../text';
import { Flex } from '../box';
import { AlertIcon } from './icons/AlertIcon';
import { iconColors } from './Icon';
import { allIcons } from './utils';

const meta: Meta<typeof AlertIcon> = {
	title: 'foundations/Icon',
	component: AlertIcon,
	argTypes: {
		color: {
			options: Object.keys(iconColors),
			control: { type: 'select' },
		},
	},
	render: (args) => (
		<Flex gap={0.5} flexWrap="wrap">
			{Object.keys(allIcons)
				.sort()
				.map((iconName) => {
					const Icon = allIcons[iconName as keyof typeof allIcons];
					return (
						<Flex
							key={iconName}
							flexDirection="column"
							alignItems="center"
							justifyContent="center"
							flexShrink={0}
							rounded
							gap={1}
							padding={2}
							background="shade"
							css={{ width: 180 }}
						>
							<Icon {...args} />
							<Text>{iconName}</Text>
						</Flex>
					);
				})}
		</Flex>
	),
};

export default meta;

type Story = StoryObj<typeof AlertIcon>;

export const AllIcons: Story = {
	args: {
		color: 'text',
		size: 'md',
		weight: 'regular',
	},
};

export const ResponsiveSizes: Story = {
	args: {
		size: { xs: 'sm', md: 'lg', lg: 'xl' },
	},
};
