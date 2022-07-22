import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, Stack } from '@ag.ds-next/box';
import { Card, CardInner, CardLink } from '@ag.ds-next/card';
import { Heading } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import { Columns, Column } from './index';

export default {
	title: 'layout/Columns',
	component: Columns,
} as ComponentMeta<typeof Columns>;

const Cell = () => <Box background="shadeAlt" padding={1} />;

export const Basic: ComponentStory<typeof Columns> = (args) => (
	<Columns {...args}>
		<Column columnSpan={1}>
			<Cell />
		</Column>
		<Column columnSpan={1}>
			<Cell />
		</Column>
		<Column columnSpan={1}>
			<Cell />
		</Column>
		<Column columnSpan={1}>
			<Cell />
		</Column>
		<Column columnSpan={1}>
			<Cell />
		</Column>
		<Column columnSpan={1}>
			<Cell />
		</Column>
		<Column columnSpan={1}>
			<Cell />
		</Column>
		<Column columnSpan={1}>
			<Cell />
		</Column>
		<Column columnSpan={1}>
			<Cell />
		</Column>
		<Column columnSpan={1}>
			<Cell />
		</Column>
		<Column columnSpan={1}>
			<Cell />
		</Column>
		<Column columnSpan={1}>
			<Cell />
		</Column>
	</Columns>
);
Basic.args = {};

export const ColSpans: ComponentStory<typeof Columns> = (args) => (
	<Box palette="light" background="body">
		<Columns {...args}>
			<Column columnSpan={1}>
				<Cell />
			</Column>
			<Column columnSpan={1}>
				<Cell />
			</Column>
			<Column columnSpan={1}>
				<Cell />
			</Column>
			<Column columnSpan={1}>
				<Cell />
			</Column>
			<Column columnSpan={1}>
				<Cell />
			</Column>
			<Column columnSpan={1}>
				<Cell />
			</Column>
			<Column columnSpan={1}>
				<Cell />
			</Column>
			<Column columnSpan={1}>
				<Cell />
			</Column>
			<Column columnSpan={1}>
				<Cell />
			</Column>
			<Column columnSpan={1}>
				<Cell />
			</Column>
			<Column columnSpan={1}>
				<Cell />
			</Column>
			<Column columnSpan={1}>
				<Cell />
			</Column>
			<Column columnSpan={2}>
				<Cell />
			</Column>
			<Column columnSpan={2}>
				<Cell />
			</Column>
			<Column columnSpan={2}>
				<Cell />
			</Column>
			<Column columnSpan={2}>
				<Cell />
			</Column>
			<Column columnSpan={2}>
				<Cell />
			</Column>
			<Column columnSpan={2}>
				<Cell />
			</Column>
			<Column columnSpan={3}>
				<Cell />
			</Column>
			<Column columnSpan={3}>
				<Cell />
			</Column>
			<Column columnSpan={3}>
				<Cell />
			</Column>
			<Column columnSpan={3}>
				<Cell />
			</Column>
			<Column columnSpan={4}>
				<Cell />
			</Column>
			<Column columnSpan={4}>
				<Cell />
			</Column>
			<Column columnSpan={4}>
				<Cell />
			</Column>
			<Column columnSpan={5}>
				<Cell />
			</Column>
			<Column columnSpan={5}>
				<Cell />
			</Column>
			<Column columnSpan={2}>
				<Cell />
			</Column>
			<Column columnSpan={6}>
				<Cell />
			</Column>
			<Column columnSpan={6}>
				<Cell />
			</Column>
		</Columns>
	</Box>
);
ColSpans.args = {};

export const Gap: ComponentStory<typeof Columns> = (args) => (
	<Box palette="light" background="body">
		<Columns {...args}>
			<Column columnSpan={3}>
				<Cell />
			</Column>
			<Column columnSpan={3}>
				<Cell />
			</Column>
			<Column columnSpan={3}>
				<Cell />
			</Column>
			<Column columnSpan={3}>
				<Cell />
			</Column>
		</Columns>
	</Box>
);
Gap.args = {
	gap: 3,
};

export const RowAndColumnGaps: ComponentStory<typeof Columns> = (args) => (
	<Box palette="light" background="body">
		<Columns {...args}>
			<Column columnSpan={3}>
				<Cell />
			</Column>
			<Column columnSpan={3}>
				<Cell />
			</Column>
			<Column columnSpan={3}>
				<Cell />
			</Column>
			<Column columnSpan={3}>
				<Cell />
			</Column>
			<Column columnSpan={4}>
				<Cell />
			</Column>
			<Column columnSpan={4}>
				<Cell />
			</Column>
			<Column columnSpan={4}>
				<Cell />
			</Column>
		</Columns>
	</Box>
);
RowAndColumnGaps.args = {
	rowGap: 2,
	columnGap: 0.5,
};

export const ThreeColumn: ComponentStory<typeof Columns> = (args) => (
	<Columns gridTemplateColumns={{ xs: 1, md: 3 }} {...args}>
		<Cell />
		<Column columnSpan={2}>
			<Cell />
		</Column>
	</Columns>
);
ThreeColumn.args = {
	gap: 2,
};

const ExampleCard = () => (
	<Card>
		<CardInner>
			<Stack gap={1}>
				<Heading as="h2" type="h3">
					Card heading
				</Heading>
				<Text as="p">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, voluptat
				</Text>
				<CardLink href="#">Learn more</CardLink>
			</Stack>
		</CardInner>
	</Card>
);

export const WebPageWithCards: ComponentStory<typeof Columns> = (args) => (
	<Columns {...args}>
		<Cell />
		<Column columnSpan={{ xs: 1, md: 2 }}>
			<Columns gridTemplateColumns={{ xs: 1, md: 3 }} gap={1}>
				<Card css={{ gridColumnStart: 1, gridColumnEnd: 3 }}>
					<CardInner>
						<Stack gap={1}>
							<Heading as="h2" type="h3">
								Card heading
							</Heading>
							<Text as="p">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
								voluptat
							</Text>
							<CardLink href="#">Learn more</CardLink>
						</Stack>
					</CardInner>
				</Card>
				<ExampleCard />
				<ExampleCard />
				<ExampleCard />
				<ExampleCard />
			</Columns>
		</Column>
	</Columns>
);
WebPageWithCards.args = {
	gap: 3,
	gridTemplateColumns: { xs: 1, md: 3 },
};
