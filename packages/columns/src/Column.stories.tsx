import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { Columns, Column } from './index';

export default {
	title: 'foundations/Columns',
	component: Columns,
} as ComponentMeta<typeof Columns>;

export const Basic: ComponentStory<typeof Columns> = (args) => (
	<Box theme="light" background="page">
		<Columns {...args}>
			<Column colSpan={1} background="shade" padding={1} />
			<Column colSpan={1} background="shade" padding={1} />
			<Column colSpan={1} background="shade" padding={1} />
			<Column colSpan={1} background="shade" padding={1} />
			<Column colSpan={1} background="shade" padding={1} />
			<Column colSpan={1} background="shade" padding={1} />
			<Column colSpan={1} background="shade" padding={1} />
			<Column colSpan={1} background="shade" padding={1} />
			<Column colSpan={1} background="shade" padding={1} />
			<Column colSpan={1} background="shade" padding={1} />
			<Column colSpan={1} background="shade" padding={1} />
			<Column colSpan={1} background="shade" padding={1} />
		</Columns>
	</Box>
);
Basic.args = {
	gridGap: 0.5,
};

export const ColSpans: ComponentStory<typeof Columns> = (args) => (
	<Box theme="light" background="page">
		<Columns {...args}>
			<Column colSpan={1} background="shade" padding={1} />
			<Column colSpan={1} background="shade" padding={1} />
			<Column colSpan={1} background="shade" padding={1} />
			<Column colSpan={1} background="shade" padding={1} />
			<Column colSpan={1} background="shade" padding={1} />
			<Column colSpan={1} background="shade" padding={1} />
			<Column colSpan={1} background="shade" padding={1} />
			<Column colSpan={1} background="shade" padding={1} />
			<Column colSpan={1} background="shade" padding={1} />
			<Column colSpan={1} background="shade" padding={1} />
			<Column colSpan={1} background="shade" padding={1} />
			<Column colSpan={1} background="shade" padding={1} />
			<Column colSpan={2} background="shade" padding={1} />
			<Column colSpan={2} background="shade" padding={1} />
			<Column colSpan={2} background="shade" padding={1} />
			<Column colSpan={2} background="shade" padding={1} />
			<Column colSpan={2} background="shade" padding={1} />
			<Column colSpan={2} background="shade" padding={1} />
			<Column colSpan={3} background="shade" padding={1} />
			<Column colSpan={3} background="shade" padding={1} />
			<Column colSpan={3} background="shade" padding={1} />
			<Column colSpan={3} background="shade" padding={1} />
			<Column colSpan={4} background="shade" padding={1} />
			<Column colSpan={4} background="shade" padding={1} />
			<Column colSpan={4} background="shade" padding={1} />
			<Column colSpan={5} background="shade" padding={1} />
			<Column colSpan={5} background="shade" padding={1} />
			<Column colSpan={2} background="shade" padding={1} />
			<Column colSpan={6} background="shade" padding={1} />
			<Column colSpan={6} background="shade" padding={1} />
		</Columns>
	</Box>
);
ColSpans.args = {
	gridGap: 0.5,
};

export const RowAndColumnGaps: ComponentStory<typeof Columns> = (args) => (
	<Box theme="light" background="page">
		<Columns {...args}>
			<Column colSpan={3} background="shade" padding={1} />
			<Column colSpan={3} background="shade" padding={1} />
			<Column colSpan={3} background="shade" padding={1} />
			<Column colSpan={3} background="shade" padding={1} />
			<Column colSpan={4} background="shade" padding={1} />
			<Column colSpan={4} background="shade" padding={1} />
			<Column colSpan={4} background="shade" padding={1} />
		</Columns>
	</Box>
);
RowAndColumnGaps.args = {
	rowGap: 2,
	columnGap: 0.5,
};
