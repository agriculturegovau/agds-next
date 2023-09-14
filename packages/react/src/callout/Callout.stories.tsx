import { StoryObj, Meta } from '@storybook/react';
import { ConditionalFieldContainer } from '../../../../docs/components/ConditionalFieldContainer';
import { VisuallyHidden } from '../a11y';
import { Box } from '../box';
import { ControlGroup } from '../control-group';
import { Flex } from '../flex';
import { Radio } from '../radio';
import { Text } from '../text';
import { Callout, calloutToneMap } from './Callout';

const meta: Meta<typeof Callout> = {
	title: 'content/Callout',
	component: Callout,
	argTypes: {
		tone: {
			options: Object.keys(calloutToneMap),
			control: { type: 'select' },
		},
	},
};

export default meta;

type Story = StoryObj<typeof Callout>;

export const Basic: Story = {
	args: {
		title: 'Callout heading',
		children: <Text as="p">Description of the callout.</Text>,
		tone: 'neutral',
	},
};

export const OnBodyAlt: Story = {
	name: 'On bodyAlt background',
	args: {
		title: 'Callout heading',
		children: <Text as="p">Description of the callout.</Text>,
		tone: 'neutralAlt',
	},
	render: (args) => (
		<Box background="bodyAlt" padding={1.5}>
			<Callout {...args} />
		</Box>
	),
};

export const Info: Story = {
	args: {
		title: 'Callout heading',
		children: <Text as="p">Description of the callout.</Text>,
		tone: 'info',
	},
};

export const NoTitle: Story = {
	args: {
		title: undefined,
		children: <Text as="p">Description of the callout.</Text>,
		tone: 'neutral',
	},
};

export const Compact: Story = {
	args: {
		title: 'Callout heading',
		children: <Text as="p">Description of the callout.</Text>,
		tone: 'info',
		variant: 'compact',
	},
};

export const Calendar: Story = {
	name: 'Calendar example',
	render: (args) => (
		<Callout {...args}>
			<Flex flexDirection="column">
				<VisuallyHidden>
					<h2>Description of the callout</h2>
				</VisuallyHidden>
				<Text as="p">The next public holiday is:</Text>
				<Text
					as="time"
					fontSize="xl"
					fontWeight="bold"
					dateTime="2017-01-01T00:00:00+00:00"
				>
					Sunday 1 January
				</Text>
				<Text>New Year’s Day</Text>
			</Flex>
		</Callout>
	),
	args: {
		as: 'section',
		tone: 'neutral',
	},
};

export const InControlGroup: Story = {
	render: (args) => (
		<ControlGroup label="Control group label" required block>
			<Radio checked={false}>Radio option one</Radio>
			<Radio checked={true}>Radio option two</Radio>
			<ConditionalFieldContainer>
				<Callout {...args} />
			</ConditionalFieldContainer>
			<Radio checked={false}>Text message</Radio>
		</ControlGroup>
	),
	args: {
		title: 'Callout heading',
		children: <Text as="p">Description of the callout.</Text>,
		tone: 'info',
		variant: 'compact',
	},
};
