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

export const F1Temp: ComponentStory<typeof Table> = (args) => (
	<Table {...args}>
		<TableCaption>
			FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2022 - RACE RESULT
		</TableCaption>
		<TableHead>
			<tr>
				<TableHeader>
					<abbr title="Position">Pos</abbr>
				</TableHeader>
				<TableHeader display={{ xs: 'none', sm: 'table-cell' }}>
					<abbr title="Number">No</abbr>
				</TableHeader>
				<TableHeader>Driver</TableHeader>
				<TableHeader display={{ xs: 'none', md: 'table-cell' }}>
					Car
				</TableHeader>
				<TableHeader display={{ xs: 'none', sm: 'table-cell' }}>
					Laps
				</TableHeader>
				<TableHeader>Time/Retired</TableHeader>
				<TableHeader>
					<abbr title="Points">PTS</abbr>
				</TableHeader>
			</tr>
		</TableHead>

		<TableBody>
			{F1Data.map((driver, index) => {
				return (
					<tr key={driver.id}>
						<TableCell>{driver.points}</TableCell>
						<TableCell display={{ xs: 'none', sm: 'table-cell' }}>
							{driver.number}
						</TableCell>
						<TableCell>
							<Box as="span" display={{ xs: 'none', md: 'inline' }}>
								{driver.firstName}
							</Box>{' '}
							<Box as="span" display={{ xs: 'none', sm: 'inline' }}>
								{driver.lastName}
							</Box>
							<Box as="span" display={{ xs: 'inline', sm: 'none' }}>
								{driver.id}
							</Box>
						</TableCell>
						<TableCell display={{ xs: 'none', md: 'table-cell' }}>
							{driver.team}
						</TableCell>
						<TableCell display={{ xs: 'none', sm: 'table-cell' }}>
							{driver.laps}
						</TableCell>
						<TableCell>
							{driver.time}{' '}
							{index !== 0 && driver.time !== 'DNF' && (
								<Box as="span" display="inline" className="suffix seconds">
									s
								</Box>
							)}
						</TableCell>
						<TableCell>{driver.points}</TableCell>
					</tr>
				);
			})}
		</TableBody>
	</Table>
);

const F1Data = [
	{
		position: '1',
		number: 16,

		firstName: 'Charles',
		lastName: 'Leclerc',
		id: 'LEC',

		team: 'Ferrari',

		laps: 57,
		time: '1:37:33.584',
		points: '26',
	},

	{
		position: '2',
		number: 55,

		firstName: 'Carlos',
		lastName: 'Sainz',
		id: 'SAI',

		team: 'Ferrari',
		laps: 57,
		time: '+5.598',
		points: '18',
	},

	{
		position: '3',
		number: 44,
		firstName: 'Lewis',
		lastName: 'Hamilton',
		id: 'HAM',
		team: 'Mercedes',
		laps: 57,
		time: '+9.675',
		points: '15',
	},

	{
		position: '4',
		number: 63,

		firstName: 'George',
		lastName: 'Russell',
		id: 'RUS',

		team: 'Mercedes',

		laps: 57,
		time: '+11.211',
		points: '12',
	},

	{
		position: '5',
		number: 20,

		firstName: 'Kevin',
		lastName: 'Magnussen',
		id: 'MAG',

		team: 'Haas Ferrari',

		laps: 57,
		time: '+14.754',
		points: '10',
	},

	{
		position: '6',
		number: 77,

		firstName: 'Valtteri',
		lastName: 'Bottas',
		id: 'BOT',

		team: 'Alfa Romeo Ferrari',

		laps: 57,
		time: '+16.119',
		points: '8',
	},

	{
		position: '7',
		number: 31,

		firstName: 'Esteban',
		lastName: 'Ocon',
		id: 'OCO',

		team: 'Alpine Renault',

		laps: 57,
		time: '+19.423',
		points: '6',
	},

	{
		position: '8',
		number: 22,

		firstName: 'Yuki',
		lastName: 'Tsunoda',
		id: 'TSU',

		team: 'AlphaTauri RBPT',

		laps: 57,
		time: '+20.386',
		points: '4',
	},

	{
		position: '9',
		number: 14,

		firstName: 'Fernando',
		lastName: 'Alonso',
		id: 'ALO',

		team: 'Alpine Renault',

		laps: 57,
		time: '+22.390',
		points: '2',
	},

	{
		position: '10',
		number: 24,

		lastName: 'Zhou',
		firstName: 'Guanyu',
		id: 'ZHO',
		team: 'Alfa Romeo Ferrari',

		laps: '56',
		time: '25.428',
		points: '1',
	},

	{
		position: '11',
		number: 47,

		firstName: 'Mick',
		lastName: 'Schumacher',
		id: 'MSC',

		team: 'Haas Ferrari',

		laps: 57,
		time: '+32.574',
		points: '0',
	},

	{
		position: '12',
		number: 18,

		firstName: 'Lance',
		lastName: 'Stroll',
		id: 'STR',

		team: 'Aston Martin Aramco Mercedes',

		laps: 57,
		time: '+45.873',
		points: '0',
	},

	{
		position: '13',
		number: 23,

		firstName: 'Alexander',
		lastName: 'Albon',
		id: 'ALB',

		team: 'Williams Mercedes',

		laps: 57,
		time: '+53.932',
		points: '0',
	},

	{
		position: '14',
		number: 3,

		firstName: 'Daniel',
		lastName: 'Ricciardo',
		id: 'RIC',

		team: 'McLaren Mercedes',

		laps: 57,
		time: '+54.975',
		points: '0',
	},

	{
		position: '15',
		number: 4,

		firstName: 'Lando',
		lastName: 'Norris',
		id: 'NOR',

		team: 'McLaren Mercedes',

		laps: 57,
		time: '+56.335',
		points: '0',
	},

	{
		position: '16',
		number: 6,

		firstName: 'Nicholas',
		lastName: 'Latifi',
		id: 'LAT',

		team: 'Williams Mercedes',

		laps: 57,
		time: '+61.795',
		points: '0',
	},

	{
		position: '17',
		number: 27,

		firstName: 'Nico',
		lastName: 'Hulkenberg',
		id: 'HUL',

		team: 'Aston Martin Aramco Mercedes',

		laps: 57,
		time: '+63.829',
		points: '0',
	},

	{
		position: '18',
		number: 11,

		firstName: 'Sergio',
		lastName: 'Perez',
		id: 'PER',

		team: 'Red Bull Racing RBPT',

		laps: 56,
		time: 'DNF',
		points: '0',
	},

	{
		position: '19',
		number: 1,

		firstName: 'Max',
		lastName: 'Verstappen',
		id: 'VER',

		team: 'Red Bull Racing RBPT',

		laps: 54,
		time: 'DNF',
		points: '0',
	},

	{
		position: 'NC',
		number: 10,

		firstName: 'Pierre',
		lastName: 'Gasly',
		id: 'GAS',

		team: 'AlphaTauri RBPT',

		laps: 44,
		time: 'DNF',
		points: '0',
	},
];
