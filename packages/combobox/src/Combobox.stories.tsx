import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Combobox } from './Combobox';

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

const defaultArgs = {
	label: 'Select country',
	hint: 'Start typing to see results',
	options: COUNTRIES,
};

const Template: ComponentStory<typeof Combobox> = (args) => (
	<Combobox {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
	...defaultArgs,
};

export const Required = Template.bind({});
Required.args = {
	...defaultArgs,
	required: true,
};

export const HideOptionalLabel = Template.bind({});
HideOptionalLabel.args = {
	...defaultArgs,
	hideOptionalLabel: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
	...defaultArgs,
	disabled: true,
};

export const Invalid = Template.bind({});
Invalid.args = {
	...defaultArgs,
	invalid: true,
	message: 'Country is required',
};

export const Block = Template.bind({});
Block.args = {
	...defaultArgs,
	block: true,
};

export const AsyncOptions = Template.bind({});
AsyncOptions.args = {
	label: 'Select character',
	hint: 'Start typing to see results',
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

export const AsyncOptionsWithError = Template.bind({});
AsyncOptionsWithError.args = {
	label: 'Select character',
	hint: 'Start typing to see results',
	loadOptions: async function loadOptions() {
		// Simulate a slow network connection
		await new Promise((resolve) => setTimeout(resolve, 3000));
		throw new Error('Something went wrong while fetching options');
	},
};
