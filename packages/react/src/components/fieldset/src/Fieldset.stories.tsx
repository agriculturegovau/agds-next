import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Stack } from '../../box/src';
import { TextInput } from '../../text-input/src';
import { FormStack } from '../../form-stack/src';
import { H1 } from '../../heading/src';
import { Text } from '../../text/src';
import { FieldsetHint } from './FieldsetHint';
import { Fieldset, FieldsetContainer, FieldsetLegend } from './index';

export default {
	title: 'forms/Fieldset',
	component: Fieldset,
	subcomponents: { FieldsetContainer, FieldsetLegend, FieldsetHint },
} as ComponentMeta<typeof Fieldset>;

const Template: ComponentStory<typeof Fieldset> = (args) => (
	<Fieldset {...args}>
		<FormStack>
			<TextInput
				label="Street and number"
				required
				autoComplete="street-address"
				maxWidth="xl"
			/>
			<TextInput
				label="Suburb"
				required
				autoComplete="address-level2"
				maxWidth="xl"
			/>
			<TextInput
				label="Country"
				required
				autoComplete="country"
				maxWidth="xl"
			/>
			<TextInput
				label="Postcode"
				required
				autoComplete="postal-code"
				maxWidth="sm"
			/>
		</FormStack>
	</Fieldset>
);

export const Basic = Template.bind({});
Basic.args = {
	legend: 'What is your address?',
	hint: 'We will only use this to respond to your requests',
};
export const LegendAsPageHeading: ComponentStory<typeof Fieldset> = (args) => (
	<Fieldset {...args}>
		<FormStack>
			<TextInput
				label="Day"
				inputMode="numeric"
				maxWidth="md"
				required
				autoComplete="bday-day"
			/>
			<TextInput
				label="Month"
				inputMode="numeric"
				maxWidth="md"
				required
				autoComplete="bday-month"
			/>
			<TextInput
				label="Year"
				inputMode="numeric"
				maxWidth="md"
				required
				autoComplete="bday-year"
			/>
		</FormStack>
	</Fieldset>
);
LegendAsPageHeading.args = {
	legend: <H1>What is your date of birth?</H1>,
	hint: (
		<Text fontSize="md" color="muted">
			We will only use this to respond to your requests
		</Text>
	),
};

export const Modular = () => (
	<FieldsetContainer>
		<Stack gap={0.75}>
			<FieldsetLegend>What is your address?</FieldsetLegend>
			<FieldsetHint>
				We will only use this to respond to your requests
			</FieldsetHint>
		</Stack>
		<FormStack>
			<TextInput
				label="Street and number"
				required
				autoComplete="street-address"
				maxWidth="xl"
			/>
			<TextInput
				label="Suburb"
				required
				autoComplete="address-level2"
				maxWidth="xl"
			/>
			<TextInput
				label="Country"
				required
				autoComplete="country"
				maxWidth="xl"
			/>
			<TextInput
				label="Postcode"
				required
				autoComplete="postal-code"
				maxWidth="sm"
			/>
		</FormStack>
	</FieldsetContainer>
);
