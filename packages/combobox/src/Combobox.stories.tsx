import { ComponentStory, ComponentMeta } from '@storybook/react';
import algoliasearch from 'algoliasearch';
import { Flex, Stack } from '@ag.ds-next/box';
import {
	AlertFilledIcon,
	ChevronRightIcon,
	InfoFilledIcon,
	SuccessFilledIcon,
	WarningFilledIcon,
} from '@ag.ds-next/icon';
import { Text } from '@ag.ds-next/text';
import { Select } from '@ag.ds-next/select';
import { Combobox } from './Combobox';
import { Fragment } from 'react';

export default {
	title: 'forms/Combobox',
	component: Combobox,
} as ComponentMeta<typeof Combobox>;

const COUNTRIES = [
	'Afghanistan',
	'Albania',
	'Algeria',
	'Andorra',
	'Angola',
	'Antigua and Barbuda',
	'Argentina',
	'Armenia',
	'Australia',
	'Austria',
	'Azerbaijan',
	'Bahamas',
	'Bahrain',
	'Bangladesh',
	'Barbados',
	'Belarus',
	'Belgium',
	'Belize',
	'Benin',
	'Bhutan',
	'Bolivia',
	'Bosnia and Herzegovina',
	'Botswana',
	'Brazil',
	'Brunei',
	'Bulgaria',
	'Burkina Faso',
	'Burundi',
	"Côte d'Ivoire",
	'Cabo Verde',
	'Cambodia',
	'Cameroon',
	'Canada',
	'Central African Republic',
	'Chad',
	'Chile',
	'China',
	'Colombia',
	'Comoros',
	'Congo (Congo-Brazzaville)',
	'Costa Rica',
	'Croatia',
	'Cuba',
	'Cyprus',
	'Czechia (Czech Republic)',
	'Democratic Republic of the Congo',
	'Denmark',
	'Djibouti',
	'Dominica',
	'Dominican Republic',
	'Ecuador',
	'Egypt',
	'El Salvador',
	'Equatorial Guinea',
	'Eritrea',
	'Estonia',
	'Eswatini (fmr. "Swaziland")',
	'Ethiopia',
	'Fiji',
	'Finland',
	'France',
	'Gabon',
	'Gambia',
	'Georgia',
	'Germany',
	'Ghana',
	'Greece',
	'Grenada',
	'Guatemala',
	'Guinea',
	'Guinea-Bissau',
	'Guyana',
	'Haiti',
	'Holy See',
	'Honduras',
	'Hungary',
	'Iceland',
	'India',
	'Indonesia',
	'Iran',
	'Iraq',
	'Ireland',
	'Israel',
	'Italy',
	'Jamaica',
	'Japan',
	'Jordan',
	'Kazakhstan',
	'Kenya',
	'Kiribati',
	'Kuwait',
	'Kyrgyzstan',
	'Laos',
	'Latvia',
	'Lebanon',
	'Lesotho',
	'Liberia',
	'Libya',
	'Liechtenstein',
	'Lithuania',
	'Luxembourg',
	'Madagascar',
	'Malawi',
	'Malaysia',
	'Maldives',
	'Mali',
	'Malta',
	'Marshall Islands',
	'Mauritania',
	'Mauritius',
	'Mexico',
	'Micronesia',
	'Moldova',
	'Monaco',
	'Mongolia',
	'Montenegro',
	'Morocco',
	'Mozambique',
	'Myanmar (formerly Burma)',
	'Namibia',
	'Nauru',
	'Nepal',
	'Netherlands',
	'New Zealand',
	'Nicaragua',
	'Niger',
	'Nigeria',
	'North Korea',
	'North Macedonia',
	'Norway',
	'Oman',
	'Pakistan',
	'Palau',
	'Palestine State',
	'Panama',
	'Papua New Guinea',
	'Paraguay',
	'Peru',
	'Philippines',
	'Poland',
	'Portugal',
	'Qatar',
	'Romania',
	'Russia',
	'Rwanda',
	'Saint Kitts and Nevis',
	'Saint Lucia',
	'Saint Vincent and the Grenadines',
	'Samoa',
	'San Marino',
	'Sao Tome and Principe',
	'Saudi Arabia',
	'Senegal',
	'Serbia',
	'Seychelles',
	'Sierra Leone',
	'Singapore',
	'Slovakia',
	'Slovenia',
	'Solomon Islands',
	'Somalia',
	'South Africa',
	'South Korea',
	'South Sudan',
	'Spain',
	'Sri Lanka',
	'Sudan',
	'Suriname',
	'Sweden',
	'Switzerland',
	'Syria',
	'Tajikistan',
	'Tanzania',
	'Thailand',
	'Timor-Leste',
	'Togo',
	'Tonga',
	'Trinidad and Tobago',
	'Tunisia',
	'Turkey',
	'Turkmenistan',
	'Tuvalu',
	'Uganda',
	'Ukraine',
	'United Arab Emirates',
	'United Kingdom',
	'United States of America',
	'Uruguay',
	'Uzbekistan',
	'Vanuatu',
	'Venezuela',
	'Vietnam',
	'Yemen',
	'Zambia',
	'Zimbabwe',
].map((country) => ({ label: country, value: country }));

const Template: ComponentStory<typeof Combobox> = (args) => (
	<Combobox {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
	label: 'Select country',
	options: COUNTRIES,
};

export const Required = Template.bind({});
Required.args = {
	label: 'Select country',
	options: COUNTRIES,
	required: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
	label: 'Select country',
	options: COUNTRIES,
	disabled: true,
};

export const Invalid = Template.bind({});
Invalid.args = {
	label: 'Select country',
	options: COUNTRIES,
	message: 'Select a valid option',
	invalid: true,
};

export const Valid = Template.bind({});
Valid.args = {
	label: 'Select country',
	options: COUNTRIES,
	message: 'Country is valid',
	valid: true,
};

export const Hint = Template.bind({});
Hint.args = {
	label: 'Select country',
	options: COUNTRIES,
	hint: 'We will only use this to respond to your question',
};

export const Block = Template.bind({});
Block.args = {
	block: true,
	label: 'Select country',
	options: COUNTRIES,
};

export const AsyncOptions = Template.bind({});
AsyncOptions.args = {
	label: 'Select a character',
	loadOptions: async function loadOptions(inputValue) {
		const response = await fetch(
			inputValue
				? `https://swapi.dev/api/people/?search=${inputValue}`
				: `https://swapi.dev/api/people`
		);
		const data: { results: { name: string }[] } = await response.json();
		return data.results.map(({ name }) => ({ value: name, label: name }));
	},
};

export const CustomerRender = Template.bind({});
CustomerRender.args = {
	label: 'Select country',
	options: COUNTRIES,
};

// export const AsyncOptions = () => {
// 	return (
// 		<Combobox
// 			label="Search for a character"
// 			required
// 			showDropdownTrigger={false}
// 			loadOptions={async (inputValue) => {
//
// 			}}
// 			onChange={console.log}
// 		/>
// 	);
// };

// export const CustomOptionTypescriptTypes = () => {
// 	const options = [
// 		{
// 			id: '1',
// 			name: 'Alice',
// 			email: 'alice@example.com',
// 		},
// 		{
// 			id: '2',
// 			name: 'Bob',
// 			email: 'bob@example.com',
// 		},
// 		{
// 			id: '3',
// 			name: 'Charlie',
// 			email: 'charlie@example.com',
// 		},
// 	].map((option) => ({
// 		...option,
// 		value: option.id,
// 		label: `${option.id} - ${option.name} - ${option.email}`,
// 	}));
// 	return <Combobox label="Select a user" required options={options} />;
// };

// export const Algolia = () => {
// 	const client = algoliasearch(
// 		// App ID
// 		'J1ECQLWXB3',
// 		// Search-only API Key
// 		'4e5c3a087a88aa9a9111ae377245111b'
// 	);

// 	return (
// 		<div style={{ maxWidth: '30rem' }}>
// 			<Combobox
// 				label="Search this website"
// 				hint="Start typing to search"
// 				required
// 				loadOptions={async (inputValue) => {
// 					const searchResults = await client.search([
// 						{
// 							indexName: 'dev_agds-next-website',
// 							query: inputValue,
// 							params: {
// 								hitsPerPage: 5,
// 							},
// 						},
// 					]);
// 					return [...searchResults.results.map((result) => result.hits).flat()]
// 						.map((hit) => ({ ...hit, value: hit.title }))
// 						.filter((x) => x.title);
// 				}}
// 				renderItem={(item) => {
// 					return (
// 						<Stack css={{ overflow: 'hidden' }}>
// 							<Text fontWeight="bold">
// 								{item.objectType} || {item.title}
// 							</Text>
// 							<Text
// 								color="muted"
// 								css={{
// 									whiteSpace: 'nowrap',
// 									overflow: 'hidden',
// 									textOverflow: 'ellipsis',
// 								}}
// 							>
// 								{item.description || 'No description found.'}
// 							</Text>
// 						</Stack>
// 					);
// 				}}
// 			/>
// 		</div>
// 	);
// };

// export const CountrySelect = () => (
// 	<Stack gap={6}>
// 		<div style={{ maxWidth: '30rem' }}>
// 			<Select label="Select country" required block options={COUNTRIES} />
// 		</div>
// 		<div style={{ maxWidth: '30rem' }}>
// 			<Combobox label="Select country" required options={COUNTRIES} />
// 		</div>
// 		<div style={{ maxWidth: '30rem' }}>
// 			<Combobox
// 				label="Select country"
// 				required
// 				options={[
// 					{
// 						label: 'Australia',
// 						value: 'australia',
// 						flag: '🇦🇺',
// 					},
// 					{
// 						label: 'Canada',
// 						value: 'candada',
// 						flag: '🇨🇦',
// 					},
// 					{
// 						label: 'Denmark',
// 						value: 'denmark',
// 						flag: '🇩🇰',
// 					},
// 					{
// 						label: 'France',
// 						value: 'france',
// 						flag: '🇫🇷',
// 					},
// 					{
// 						label: 'United Kingdom',
// 						value: 'united kingdom',
// 						flag: '🇬🇧',
// 					},
// 					{
// 						label: 'United States of America',
// 						value: 'united states of america',
// 						flag: '🇺🇸',
// 					},
// 				]}
// 				renderItem={(item) => (
// 					<Flex gap={1}>
// 						<div style={{ width: 20 }}>{item.flag}</div> {item.label}
// 					</Flex>
// 				)}
// 			/>
// 		</div>
// 	</Stack>
// );
