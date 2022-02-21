import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
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
