import { Meta, StoryObj } from '@storybook/react';
import { Box } from '@ag.ds-next/react/box';
import { Card, CardInner, CardLink } from '@ag.ds-next/react/card';
import { Text } from '@ag.ds-next/react/text';
import { Stack } from '@ag.ds-next/react/stack';
import { Flex } from '@ag.ds-next/react/flex';
import { PathwayAccordion } from './PathwayAccordion';

const meta: Meta<typeof PathwayAccordion> = {
	title: 'BizGov/PathwayAccordion',
	component: PathwayAccordion,
};

export default meta;

type Story = StoryObj<typeof PathwayAccordion>;

const ExampleCard = () => {
	return (
		<Card shadow clickable>
			<CardInner>
				<Stack gap={1}>
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
		tone: 'neutral',
		title: '1. Make key decisions',
		desc: 'The decisions you make early on can affect many areas of your business. Including the licences you need, how much tax you pay and the volume of paperwork.',
		image:
			'https://ausgov.github.io/bga-style-guide/assets/refresh-illustrations/signpost.svg',
		children: (
			<Flex gap={1}>
				<ExampleCard />
				<ExampleCard />
				<ExampleCard />
			</Flex>
		),
	},
};
