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

export const List: Story = {
	render: () => (
		<PageContent>
			<Stack gap={1}>
				<PathwayAccordion
					{...{
						tone: 'teal',
						title: '1. Make key decisions',
						desc: 'The decisions you make early on can affect many areas of your business. Including the licences you need, how much tax you pay and the volume of paperwork.',
						image:
							'https://ausgov.github.io/bga-style-guide/assets/refresh-illustrations/signpost.svg',
						imageAlt: 'Signpost',
					}}
				>
					<ExampleContent />,
				</PathwayAccordion>

				<PathwayAccordion
					{...{
						tone: 'purple',
						title: '2. Plan your business',
						desc: 'You’ve analysed your idea and yourself. Next you can plan your future and see how it all comes together.',
						image:
							'https://ausgov.github.io/bga-style-guide/assets/refresh-illustrations/checklist-calculator.svg',
						imageAlt: 'A checklist and calculator on a messy desk',
					}}
				>
					<ExampleContent />,
				</PathwayAccordion>

				<PathwayAccordion
					{...{
						tone: 'orange',
						title: '3. Help for your business',
						desc: 'Find resources to help you with your business, from general business advice to finance assistance and support for your mental health and wellbeing.',
						image:
							'https://ausgov.github.io/bga-style-guide/assets/refresh-illustrations/people-handshake.svg',
						imageAlt: 'People shaking hands',
					}}
				>
					<ExampleContent />,
				</PathwayAccordion>

				<PathwayAccordion
					{...{
						tone: 'green',
						title: '4. Register your business',
						desc: 'To make it official, you’ll need to register. This makes sure your business gets taxed at the right rate, avoids penalties and protects your brand and ideas.',
						image:
							'https://ausgov.github.io/bga-style-guide/assets/refresh-illustrations/computer-success.svg',
						imageAlt: 'A computer with a tick on the screen',
					}}
				>
					<ExampleContent />,
				</PathwayAccordion>
			</Stack>
		</PageContent>
	),
};
