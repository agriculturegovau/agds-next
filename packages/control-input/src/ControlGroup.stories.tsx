import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormStack } from '@ag.ds-next/form-stack';
import { Checkbox } from './Checkbox';
import { Radio } from './Radio';
import { ControlGroup } from './ControlGroup';

export default {
	title: 'forms/ControlGroup',
	component: ControlGroup,
} as ComponentMeta<typeof ControlGroup>;

// Checkbox group
const CheckboxTemplate: ComponentStory<typeof ControlGroup> = (args) => {
	return (
		<FormStack>
			<ControlGroup {...args}>
				<Checkbox checked>SMS</Checkbox>
				<Checkbox checked={false}>Phone call</Checkbox>
				<Checkbox checked={false}>Email</Checkbox>
				<Checkbox checked={false}>Mail</Checkbox>
			</ControlGroup>
		</FormStack>
	);
};

const checkboxDefaultArgs = {
	label: 'Choose your contact preferences',
	hint: 'Select all that apply',
	block: true,
};

export const CheckboxGroupInline = CheckboxTemplate.bind({});
CheckboxGroupInline.args = {
	...checkboxDefaultArgs,
	block: false,
};
CheckboxGroupInline.storyName = 'Checkbox Group Inline';

export const CheckboxGroupBlock = CheckboxTemplate.bind({});
CheckboxGroupBlock.args = {
	...checkboxDefaultArgs,
};
CheckboxGroupBlock.storyName = 'Checkbox Group Block';

export const CheckboxGroupRequired = CheckboxTemplate.bind({});
CheckboxGroupRequired.args = {
	...checkboxDefaultArgs,
	required: true,
};
CheckboxGroupRequired.storyName = 'Checkbox Group Required';

export const CheckboxGroupHideOptionalLabel = CheckboxTemplate.bind({});
CheckboxGroupHideOptionalLabel.args = {
	...checkboxDefaultArgs,
	hideOptionalLabel: true,
};
CheckboxGroupHideOptionalLabel.storyName = 'Checkbox Group Hide Optional Label';

export const CheckboxGroupInvalid = CheckboxTemplate.bind({});
CheckboxGroupInvalid.args = {
	...checkboxDefaultArgs,
	message: 'Please select an interest',
	required: true,
	invalid: true,
};

// Radio group
const RadioTemplate: ComponentStory<typeof ControlGroup> = (args) => {
	return (
		<FormStack>
			<ControlGroup {...args}>
				<Radio checked>Dog</Radio>
				<Radio checked={false}>Cat</Radio>
				<Radio checked={false}>Cow</Radio>
				<Radio checked={false} disabled>
					Other
				</Radio>
			</ControlGroup>
		</FormStack>
	);
};

const radioDefaultArgs = {
	label: 'What type of pet do you have?',
	hint: 'Select all that apply',
	block: true,
};

export const RadioGroupInline = RadioTemplate.bind({});
RadioGroupInline.args = {
	...radioDefaultArgs,
	block: false,
};
RadioGroupInline.storyName = 'Radio Group Inline';

export const RadioGroupBlock = RadioTemplate.bind({});
RadioGroupBlock.args = {
	...radioDefaultArgs,
};
RadioGroupBlock.storyName = 'Radio Group Block';

export const RadioGroupRequired = RadioTemplate.bind({});
RadioGroupRequired.args = {
	...radioDefaultArgs,
	required: true,
};
RadioGroupRequired.storyName = 'Radio Group Required';

export const RadioGroupHideOptionalLabel = RadioTemplate.bind({});
RadioGroupHideOptionalLabel.args = {
	...radioDefaultArgs,
	hideOptionalLabel: true,
};
RadioGroupHideOptionalLabel.storyName = 'Radio Group Hide Optional Label';

export const RadioGroupInvalid = RadioTemplate.bind({});
RadioGroupInvalid.args = {
	...radioDefaultArgs,
	message: 'You must choose at least one option',
	required: true,
	invalid: true,
};
