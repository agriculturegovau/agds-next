import { StoryObj, Meta } from '@storybook/react';
import { Box } from '@ag.ds-next/react/box';
import { Card, CardInner, CardLink } from '@ag.ds-next/react/card';
import { Text } from '@ag.ds-next/react/text';
import { Stack } from '@ag.ds-next/react/stack';
import { Flex } from '@ag.ds-next/react/flex';
import { PageContent } from '@ag.ds-next/react/content';
import { PathwayAccordion } from './PathwayAccordion';
import { colourPacks } from './utils';

const meta: Meta<typeof PathwayAccordion> = {
	title: 'BizGov/PathwayAccordion',
	component: PathwayAccordion,
	argTypes: {
		tone: {
			options: Object.keys(colourPacks),
			control: { type: 'radio' },
		},
	},
};

export default meta;

type Story = StoryObj<typeof PathwayAccordion>;

const ExampleCard = () => {
	return (
		<Card shadow clickable>
			<CardInner>
				<Stack gap={1} alignItems="flex-start">
					<Box as="h3">
						<CardLink href="#">Card link</CardLink>
					</Box>
					<Text>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non
						finibus leo.
					</Text>
				</Stack>
			</CardInner>
		</Card>
	);
};

const ExampleContent = () => {
	return (
		<Flex gap={1}>
			<ExampleCard />
			<ExampleCard />
			<ExampleCard />
		</Flex>
	);
};

export const Basic: Story = {
	args: {
		tone: 'teal',
		title: '1. Make key decisions',
		desc: 'The decisions you make early on can affect many areas of your business. Including the licences you need, how much tax you pay and the volume of paperwork.',
		image:
			'https://ausgov.github.io/bga-style-guide/assets/refresh-illustrations/signpost.svg',
		imageAlt: 'Signpost',
		children: <ExampleContent />,
	},
	render: (args) => (
		<PageContent>
			<PathwayAccordion {...args} />
		</PageContent>
	),
};
