import { Meta, StoryObj } from '@storybook/react';
import { Box } from '../box';
import { Columns } from './Columns';
import { Column } from './Column';

const meta: Meta<typeof Columns> = {
	title: 'layout/Columns',
	component: Columns,
};

export default meta;

type Story = StoryObj<typeof Columns>;

const Cell = () => <Box background="shadeAlt" padding={1} />;

export const Basic: Story = {
	args: {},
	render: (args) => (
		<Columns {...args}>
			{Array.from(Array(12)).map((_, idx) => (
				<Cell key={idx} />
			))}
		</Columns>
	),
};

export const ColSpans: Story = {
	args: {},
	render: (args) => (
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
	),
};

export const Gap: Story = {
	args: {
		cols: [1, 2, 4],
		gap: 3,
	},
	render: (args) => (
		<Columns {...args}>
			{Array.from(Array(4)).map((_, idx) => (
				<Cell key={idx} />
			))}
		</Columns>
	),
};

export const RowAndColumnGaps: Story = {
	args: {
		rowGap: 3,
		columnGap: 0.75,
	},
	render: (args) => (
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
	),
};

export const ThreeColumn: Story = {
	args: {
		cols: { xs: 1, md: 3 },
		gap: 2,
	},
	render: (args) => (
		<Columns {...args}>
			<Cell />
			<Column columnSpan={2}>
				<Cell />
			</Column>
		</Columns>
	),
};
