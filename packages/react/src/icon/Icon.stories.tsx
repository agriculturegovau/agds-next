import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '../text';
import { Flex } from '../box';
import { AlertIcon } from './icons/AlertIcon';
import { iconColors } from './Icon';
import { allIcons } from './utils';

export default {
	title: 'foundations/Icon',
	component: AlertIcon,
	argTypes: {
		color: {
			options: Object.keys(iconColors),
			control: { type: 'select' },
		},
	},
} as ComponentMeta<typeof AlertIcon>;

export const AllIcons: ComponentStory<typeof AlertIcon> = (args) => (
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
);
AllIcons.args = {
	color: 'text',
	size: 'md',
	weight: 'regular',
};
