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
			<Column width={4} background="shade" padding={1} />
			<Column width={4} background="shade" padding={1} />
			<Column width={4} background="shade" padding={1} />
		</Columns>
	</Box>
);
Basic.args = {
	gridGap: 0.5,
};

export const Widths: ComponentStory<typeof Columns> = (args) => (
	<Box theme="light" background="page">
		<Columns {...args}>
			<Column width={3} background="shade" padding={1} />
			<Column width={3} background="shade" padding={1} />
			<Column width={3} background="shade" padding={1} />
			<Column width={3} background="shade" padding={1} />
			<Column width={6} background="shade" padding={1} />
			<Column width={6} background="shade" padding={1} />
			<Column width={4} background="shade" padding={1} />
			<Column width={4} background="shade" padding={1} />
			<Column width={4} background="shade" padding={1} />
			<Column width={2} background="shade" padding={1} />
			<Column width={4} background="shade" padding={1} />
			<Column width={4} background="shade" padding={1} />
			<Column width={2} background="shade" padding={1} />
			<Column width={8} background="shade" padding={1} />
			<Column width={4} background="shade" padding={1} />
			<Column width={2} background="shade" padding={1} />
			<Column width={2} background="shade" padding={1} />
			<Column width={2} background="shade" padding={1} />
			<Column width={2} background="shade" padding={1} />
			<Column width={2} background="shade" padding={1} />
			<Column width={2} background="shade" padding={1} />
		</Columns>
	</Box>
);
Widths.args = {
	gridGap: 2,
};

export const Responsive: ComponentStory<typeof Columns> = (args) => (
	<Box theme="light" background="page">
		<Columns {...args}>
			<Column width={[12, 6]} background="shade" padding={1} />
			<Column width={[12, 6]} background="shade" padding={1} />
		</Columns>
	</Box>
);
Responsive.args = {
	columnGap: [1, 2],
	rowGap: [4, 0],
};
