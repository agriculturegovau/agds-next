import { faker } from '@faker-js/faker';
import { COUNTRY_OPTIONS } from '@ag.ds-next/react/src/combobox/test-utils';

export type BusinessForAuditStatus =
	| 'notBooked'
	| 'booked'
	| 'completed'
	| 'cancelled';

export type BusinessForAudit = {
	assignee: string | undefined;
	businessName: string;
	id: string;
	city: string;
	state: string;
	requestDate: Date;
	status: BusinessForAuditStatus;
	services: string[];
	destinations: string[];
};

export type BusinessForAuditWithIndex = BusinessForAudit & { index: number };

const EXAMPLE_BUSINESSES: Partial<BusinessForAudit>[] = [
	{
		businessName: 'Agriculture Victoria',
		city: 'Melbourne',
		state: 'VIC',
	},
	{
		businessName: 'Orange Meat Works',
		city: 'Orange',
		state: 'NSW',
	},
	{
		businessName: 'Molong Farming',
		city: 'Molong',
		state: 'NSW',
	},
	{
		businessName: 'Wagga Wagga Poultry',
		city: 'Wagga Wagga',
		state: 'NSW',
	},
	{
		businessName: 'Aussie Agribusiness',
		city: 'Sydney',
		state: 'NSW',
	},
	{
		businessName: 'Down Under Dairy',
		city: 'Brisbane',
		state: 'QLD',
	},
	{ businessName: 'Outback Organic Farms' },
	{ businessName: 'Australian Cattle Co.' },
	{ businessName: 'The Grazing Land' },
	{ businessName: 'The Harvest House' },
	{ businessName: 'The Aussie Farmer' },
	{ businessName: 'The Australian Orchard' },
	{ businessName: 'Cropland Australia' },
	{ businessName: 'The Australian Wheatfields' },
	{ businessName: 'The Australian Sheep Co.' },
	{ businessName: 'The Australian Cotton Co.' },
	{ businessName: 'The Australian Grape Co.' },
	{ businessName: 'The Australian Fruit Co.' },
	{ businessName: 'The Australian Beef Co.' },
	{ businessName: 'The Australian Pork Co.' },
	{ businessName: 'The Australian Poultry Co.' },
	{ businessName: 'Down Under Produce Co.' },
	{ businessName: 'Kangaroo Valley Farms' },
	{ businessName: 'The Outback Orchard' },
	{ businessName: 'Aussie Agro Supplies' },
	{
		businessName: 'Woolaroo Ranch',
		city: 'Woolaroo',
		state: 'NSW',
	},
	{ businessName: 'The Land Down Under Livestock Co.' },
	{ businessName: 'The Oz Harvest Co.' },
	{ businessName: "The Aussie Farmer's Market" },
	{ businessName: 'The Australian Crop Co.' },
	{
		businessName: 'The Great Barrier Reef Seafood Co.',
		city: 'Hamilton Island',
		state: 'QLD',
	},
	{ businessName: 'Down Under Harvest' },
	{ businessName: 'Outback Orchards' },
	{ businessName: 'Bushland Farms' },
	{ businessName: 'Aussie Acres Produce' },
	{ businessName: 'Kookaburra Crops' },
	{ businessName: 'Wombat Ranch' },
	{ businessName: 'Koala Country Farms' },
	{ businessName: 'Eucalyptus Grove' },
	{ businessName: 'Kangaroo Cattle Co.' },
	{ businessName: 'Dingo Dairy' },
	{ businessName: 'The Aussie Farmer' },
	{ businessName: 'The Outback Grower' },
	{ businessName: 'The Bush Farmer' },
	{ businessName: 'The Australian Harvest' },
	{ businessName: 'The Kookaburra Farmer' },
	{ businessName: 'The Wombat Farmer' },
	{ businessName: 'The Koala Farmer' },
	{ businessName: 'The Eucalyptus Farmer' },
	{ businessName: 'The Kangaroo Farmer' },
	{ businessName: 'The Dingo Farmer' },
	{ businessName: 'The Aussie Orchard' },
	{ businessName: 'The Outback Orchard' },
	{ businessName: 'The Bush Orchard' },
	{ businessName: 'The Australian Orchard' },
	{ businessName: 'The Kookaburra Orchard' },
	{ businessName: 'The Wombat Orchard' },
	{ businessName: 'The Koala Orchard' },
	{ businessName: 'The Eucalyptus Orchard' },
	{ businessName: 'The Kangaroo Orchard' },
	{ businessName: 'The Dingo Orchard' },
	{ businessName: 'The Aussie Crop' },
	{ businessName: 'The Outback Crop' },
	{ businessName: 'The Bush Crop' },
	{ businessName: 'The Australian Crop' },
	{ businessName: 'The Kookaburra Crop' },
	{ businessName: 'The Wombat Crop' },
	{ businessName: 'The Koala Crop' },
	{ businessName: 'The Eucalyptus Crop' },
	{ businessName: 'The Kangaroo Crop' },
	{ businessName: 'The Dingo Crop' },
	{ businessName: 'The Aussie Ranch' },
	{ businessName: 'The Outback Ranch' },
	{ businessName: 'The Bush Ranch' },
	{ businessName: 'The Australian Ranch' },
	{ businessName: 'The Kookaburra Ranch' },
	{ businessName: 'The Wombat Ranch' },
	{ businessName: 'The Koala Ranch' },
	{ businessName: 'The Eucalyptus Ranch' },
	{ businessName: 'The Kangaroo Ranch' },
	{ businessName: 'The Dingo Ranch' },
	{
		businessName: 'Canobolas Orchard',
		city: 'Orange',
		state: 'NSW',
	},
];

export const assignees = ['Oscar Piastri', 'George Russell', 'Lando Norris'];
export const services = ['Loading', 'Packing', 'Producing'];

export const generateBusinessData = (): BusinessForAudit[] => {
	return Array.from({ length: 150 }).map((_, index) => {
		const exampleAustralianBusiness = EXAMPLE_BUSINESSES[index] || {};
		return {
			id: faker.datatype.uuid(),
			assignee: faker.helpers.arrayElement([...assignees, undefined]),
			businessName: faker.company.name(),
			city: faker.address.city(),
			state: faker.helpers.arrayElement([
				'NSW',
				'QLD',
				'VIC',
				'SA',
				'WA',
				'TAS',
				'NT',
				'ACT',
			]),
			status: faker.helpers.arrayElement([
				'notBooked',
				'booked',
				'completed',
				'cancelled',
			]),
			requestDate: faker.date.past(),
			destinations: faker.helpers.arrayElements(
				COUNTRY_OPTIONS.map(({ label }) => label),
				2
			),
			services: faker.helpers.arrayElements(
				services,
				faker.datatype.number({ min: 1, max: 3 })
			),

			...exampleAustralianBusiness,
		};
	});
};
