import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormStack } from '@ag.ds-next/form-stack';
import { Checkbox } from './Checkbox';
import { Radio } from './Radio';
import { ControlGroup, useControlGroupIds } from './ControlGroup';

export default {
	title: 'forms/ControlGroup',
	component: ControlGroup,
} as ComponentMeta<typeof ControlGroup>;

// Checkbox group
const CheckboxTemplate: ComponentStory<typeof ControlGroup> = (args) => {
	const checkboxGroupId = 'contact-method';
	const { messageId: checkboxGroupMessageId } =
		useControlGroupIds(checkboxGroupId);

	return (
		<FormStack>
			<ControlGroup {...args} id={checkboxGroupId}>
				<Checkbox
					invalid={args.invalid}
					checked
					aria-describedby={checkboxGroupMessageId}
				>
					SMS
				</Checkbox>
				<Checkbox
					invalid={args.invalid}
					checked={false}
					aria-describedby={checkboxGroupMessageId}
				>
					Phone call
				</Checkbox>
				<Checkbox
					invalid={args.invalid}
					aria-describedby={checkboxGroupMessageId}
				>
					Email
				</Checkbox>
				<Checkbox
					invalid={args.invalid}
					checked={false}
					aria-describedby={checkboxGroupMessageId}
				>
					Mail
				</Checkbox>
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
CheckboxGroupInline.storyName = 'Checkbox group inline';

export const CheckboxGroupBlock = CheckboxTemplate.bind({});
CheckboxGroupBlock.args = {
	...checkboxDefaultArgs,
};
CheckboxGroupBlock.storyName = 'Checkbox group block';

export const CheckboxGroupRequired = CheckboxTemplate.bind({});
CheckboxGroupRequired.args = {
	...checkboxDefaultArgs,

	required: true,
};
CheckboxGroupRequired.storyName = 'Checkbox group required';

export const CheckboxGroupInvalid = CheckboxTemplate.bind({});
CheckboxGroupInvalid.args = {
	...checkboxDefaultArgs,
	message: 'Please select an interest',
	required: true,

	invalid: true,
};

// Radio group
const RadioTemplate: ComponentStory<typeof ControlGroup> = (args) => {
	const radioGroupId = 'species';
	const { messageId: radioGroupMessageId } = useControlGroupIds(radioGroupId);
	return (
		<FormStack>
			<ControlGroup {...args} id={radioGroupId}>
				<Radio
					invalid={args.invalid}
					checked
					aria-describedby={radioGroupMessageId}
				>
					Dog
				</Radio>
				<Radio
					invalid={args.invalid}
					checked={false}
					aria-describedby={radioGroupMessageId}
				>
					Cat
				</Radio>
				<Radio
					invalid={args.invalid}
					checked={false}
					aria-describedby={radioGroupMessageId}
				>
					Cow
				</Radio>
				<Radio
					invalid={args.invalid}
					aria-describedby={radioGroupMessageId}
					disabled
				>
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
RadioGroupInline.storyName = 'Radio group inline';

export const RadioGroupBlock = RadioTemplate.bind({});
RadioGroupBlock.args = {
	...radioDefaultArgs,
};
RadioGroupBlock.storyName = 'Radio group block';

export const RadioGroupRequired = RadioTemplate.bind({});
RadioGroupRequired.args = {
	...radioDefaultArgs,
	required: true,
};
RadioGroupRequired.storyName = 'Radio group required';

export const RadioGroupInvalid = RadioTemplate.bind({});
RadioGroupInvalid.args = {
	...radioDefaultArgs,
	message: 'You must choose at least one option',
	required: true,
	invalid: true,
};
