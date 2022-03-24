import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { Table } from './Table';
import { TableBody } from './TableBody';
import { TableCaption } from './TableCaption';
import { TableCell } from './TableCell';
import { TableHeader } from './TableHeader';
import { TableHead } from './TableHead';

export default {
	title: 'content/Table',
	component: Table,
	subcomponents: {
		TableBody,
		TableCaption,
		TableCell,
		TableHeader,
		TableHead,
	},
} as ComponentMeta<typeof Table>;

const Example: ComponentStory<typeof Table> = (args) => (
	<Table {...args}>
		<TableCaption>
			Population of Australian states and territories, December 2015
		</TableCaption>
		<TableHead>
			<tr>
				<TableHeader scope="col"> Location </TableHeader>
				<TableHeader textAlign="right" scope="col">
					Population
				</TableHeader>
				<TableHeader textAlign="right" scope="col">
					Change over previous year %
				</TableHeader>
				<TableHeader textAlign="right" scope="col">
					Change over previous decade %
				</TableHeader>
			</tr>
		</TableHead>
		<TableBody>
			<tr>
				<TableCell>New South Wales</TableCell>
				<TableCell textAlign="right">7,670,700</TableCell>
				<TableCell textAlign="right">3.1%</TableCell>
				<TableCell textAlign="right">12.9%</TableCell>
			</tr>
			<tr>
				<TableCell>Victoria</TableCell>
				<TableCell textAlign="right">5,996,400</TableCell>
				<TableCell textAlign="right">2.5%</TableCell>
				<TableCell textAlign="right">9.3%</TableCell>
			</tr>
			<tr>
				<TableCell>Queensland</TableCell>
				<TableCell textAlign="right">4,808,800</TableCell>
				<TableCell textAlign="right">1.7%</TableCell>
				<TableCell textAlign="right">13.3%</TableCell>
			</tr>
			<tr>
				<TableCell>Western Australia</TableCell>
				<TableCell textAlign="right">2,603,900</TableCell>
				<TableCell textAlign="right">2.3%</TableCell>
				<TableCell textAlign="right">11.6%</TableCell>
			</tr>
			<tr>
				<TableCell>South Australia</TableCell>
				<TableCell textAlign="right">1,702,800</TableCell>
				<TableCell textAlign="right">2.0%</TableCell>
				<TableCell textAlign="right">6.8%</TableCell>
			</tr>
			<tr>
				<TableCell>Tasmania</TableCell>
				<TableCell textAlign="right">517,400</TableCell>
				<TableCell textAlign="right">4%</TableCell>
				<TableCell textAlign="right">5.3%</TableCell>
			</tr>
			<tr>
				<TableCell>Nothern Territory</TableCell>
				<TableCell textAlign="right">244,400</TableCell>
				<TableCell textAlign="right">1.2%</TableCell>
				<TableCell textAlign="right">4.5%</TableCell>
			</tr>
			<tr>
				<TableCell>Australian Capital Territory</TableCell>
				<TableCell textAlign="right">393,000</TableCell>
				<TableCell textAlign="right">2.4%</TableCell>
				<TableCell textAlign="right">9.6%</TableCell>
			</tr>
		</TableBody>
	</Table>
);

export const OnLight: ComponentStory<typeof Table> = (args) => (
	<Example {...args} />
);

export const OnDark: ComponentStory<typeof Table> = (args) => (
	<Box palette="dark" background="body" padding={1.5}>
		<Example {...args} />
	</Box>
);
