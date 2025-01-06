import { StoryObj, Meta } from '@storybook/react';
import { VisuallyHidden } from '../a11y';
import { Box } from '../box';
import { Flex } from '../flex';
import { CalendarIcon } from '../icon';
import { Text } from '../text';
import { Callout } from './Callout';
import { CalloutTitle } from './CalloutTitle';
import { calloutToneMap } from './utils';

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
		tone: 'neutral',
		onBodyAlt: true,
	},
	render: (args) => (
		<Box background="bodyAlt" padding={1.5}>
			<Callout {...args} />
		</Box>
	),
};

export const InfoTone: Story = {
	args: {
		title: 'Callout heading',
		children: <Text as="p">Description of the callout.</Text>,
		tone: 'info',
	},
};

export const CompactVariant: Story = {
	args: {
		title: 'Callout heading',
		children: <Text as="p">Description of the callout.</Text>,
		tone: 'info',
		variant: 'compact',
	},
};

export const FeatureVariant: Story = {
	args: {
		title: 'Feature Callout heading',
		children: <Text as="p">Description of the callout.</Text>,
		tone: 'info',
		variant: 'feature',
	},
};

export const CompactVariantWithIcon: Story = {
	args: {
		title: 'Feature Callout heading',
		children: <Text as="p">Description of the callout.</Text>,
		tone: 'info',
		variant: 'compact',
		icon: (
			<CalendarIcon
				aria-hidden="false"
				aria-label="Information"
				color="info"
				size="md"
			/>
		),
	},
};

export const FeatureVariantWithIcon: Story = {
	args: {
		title: 'Feature Callout heading',
		children: <Text as="p">Description of the callout.</Text>,
		tone: 'info',
		variant: 'feature',
		icon: (
			<CalendarIcon
				aria-hidden="false"
				aria-label="Information"
				color="info"
				size="lg"
			/>
		),
	},
};

export const RegularVariantWithIcon: Story = {
	args: {
		title: 'Callout heading',
		children: <Text as="p">Description of the callout.</Text>,
		icon: (
			<CalendarIcon
				aria-hidden="false"
				aria-label="Information"
				color="border"
				size="md"
			/>
		),
	},
};

export const CalendarExample: Story = {
	args: {
		as: 'section',
		tone: 'neutral',
		icon: (
			<CalendarIcon
				aria-hidden="false"
				aria-label="Information"
				color="border"
				size="md"
			/>
		),
	},
	render: (args) => (
		<Callout {...args}>
			<Flex flexDirection="column">
				<VisuallyHidden>
					<h2>Description of the callout</h2>
				</VisuallyHidden>
				<Text as="p">The next public holiday is:</Text>
				<Text
					as="time"
					dateTime="2017-01-01T00:00:00+00:00"
					fontSize="xl"
					fontWeight="bold"
				>
					Sunday 1 January
				</Text>
				<Text>New Year’s Day</Text>
			</Flex>
		</Callout>
	),
};

export const NoTitle: Story = {
	args: {
		title: undefined,
		children: <Text as="p">Description of the callout.</Text>,
		tone: 'neutral',
	},
};

export const CustomTitleSize: Story = {
	render: (args) => (
		<Callout {...args}>
			<CalloutTitle as="h3" variant={args.variant}>
				Callout heading
			</CalloutTitle>
			<Text as="p">Description of the callout.</Text>
		</Callout>
	),
	args: {
		tone: 'neutral',
		variant: 'regular',
	},
};
