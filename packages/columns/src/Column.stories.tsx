import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { Columns, Column } from './index';

export default {
	title: 'foundations/Columns',
	component: Columns,
} as ComponentMeta<typeof Columns>;

export const Basic: ComponentStory<typeof Columns> = (args) => (
	<Box palette="light" background="body">
		<Columns {...args}>
			<Column columnSpan={1} background="shade" padding={1} />
			<Column columnSpan={1} background="shade" padding={1} />
			<Column columnSpan={1} background="shade" padding={1} />
			<Column columnSpan={1} background="shade" padding={1} />
			<Column columnSpan={1} background="shade" padding={1} />
			<Column columnSpan={1} background="shade" padding={1} />
			<Column columnSpan={1} background="shade" padding={1} />
			<Column columnSpan={1} background="shade" padding={1} />
			<Column columnSpan={1} background="shade" padding={1} />
			<Column columnSpan={1} background="shade" padding={1} />
			<Column columnSpan={1} background="shade" padding={1} />
			<Column columnSpan={1} background="shade" padding={1} />
		</Columns>
	</Box>
);
Basic.args = {
	gap: 2,
};

export const ColSpans: ComponentStory<typeof Columns> = (args) => (
	<Box palette="light" background="body">
		<Columns {...args}>
			<Column columnSpan={1} background="shade" padding={1} />
			<Column columnSpan={1} background="shade" padding={1} />
			<Column columnSpan={1} background="shade" padding={1} />
			<Column columnSpan={1} background="shade" padding={1} />
			<Column columnSpan={1} background="shade" padding={1} />
			<Column columnSpan={1} background="shade" padding={1} />
			<Column columnSpan={1} background="shade" padding={1} />
			<Column columnSpan={1} background="shade" padding={1} />
			<Column columnSpan={1} background="shade" padding={1} />
			<Column columnSpan={1} background="shade" padding={1} />
			<Column columnSpan={1} background="shade" padding={1} />
			<Column columnSpan={1} background="shade" padding={1} />
			<Column columnSpan={2} background="shade" padding={1} />
			<Column columnSpan={2} background="shade" padding={1} />
			<Column columnSpan={2} background="shade" padding={1} />
			<Column columnSpan={2} background="shade" padding={1} />
			<Column columnSpan={2} background="shade" padding={1} />
			<Column columnSpan={2} background="shade" padding={1} />
			<Column columnSpan={3} background="shade" padding={1} />
			<Column columnSpan={3} background="shade" padding={1} />
			<Column columnSpan={3} background="shade" padding={1} />
			<Column columnSpan={3} background="shade" padding={1} />
			<Column columnSpan={4} background="shade" padding={1} />
			<Column columnSpan={4} background="shade" padding={1} />
			<Column columnSpan={4} background="shade" padding={1} />
			<Column columnSpan={5} background="shade" padding={1} />
			<Column columnSpan={5} background="shade" padding={1} />
			<Column columnSpan={2} background="shade" padding={1} />
			<Column columnSpan={6} background="shade" padding={1} />
			<Column columnSpan={6} background="shade" padding={1} />
		</Columns>
	</Box>
);
ColSpans.args = {
	gap: 2,
};

export const RowAndColumnGaps: ComponentStory<typeof Columns> = (args) => (
	<Box palette="light" background="body">
		<Columns {...args}>
			<Column columnSpan={3} background="shade" padding={1} />
			<Column columnSpan={3} background="shade" padding={1} />
			<Column columnSpan={3} background="shade" padding={1} />
			<Column columnSpan={3} background="shade" padding={1} />
			<Column columnSpan={4} background="shade" padding={1} />
			<Column columnSpan={4} background="shade" padding={1} />
			<Column columnSpan={4} background="shade" padding={1} />
		</Columns>
	</Box>
);
RowAndColumnGaps.args = {
	rowGap: 2,
	columnGap: 0.5,
};
