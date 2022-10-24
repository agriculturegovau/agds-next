import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormStack } from '@ag.ds-next/form-stack';
import { Checkbox } from './Checkbox';
import { Radio } from './Radio';
import { ControlGroup } from './ControlGroup';

export default {
	title: 'Components/ControlGroup',
	component: ControlGroup,
} as ComponentMeta<typeof ControlGroup>;

const Template: ComponentStory<typeof ControlGroup> = (args) => (
	<FormStack>
		<ControlGroup {...args}>
			<Checkbox invalid={args.invalid} checked>
				Coding
			</Checkbox>
			<Checkbox invalid={args.invalid} checked={false}>
				Art
			</Checkbox>
			<Checkbox invalid={args.invalid} checked disabled>
				Cooking
			</Checkbox>
			<Checkbox invalid={args.invalid} checked={false} disabled>
				Reading
			</Checkbox>
		</ControlGroup>
		<ControlGroup {...args}>
			<Radio invalid={args.invalid} checked>
				Coding
			</Radio>
			<Radio invalid={args.invalid} checked={false}>
				Music
			</Radio>
			<Radio invalid={args.invalid} checked={false} disabled>
				Cooking
			</Radio>
			<Radio invalid={args.invalid} disabled>
				Reading
			</Radio>
		</ControlGroup>
	</FormStack>
);

export const Basic: ComponentStory<typeof ControlGroup> = (args) => (
	<Template {...args} />
);
Basic.args = {
	label: 'Choose your interests',
};

export const Block = Template.bind({});
Block.args = {
	label: 'Choose your interests',
	block: true,
};

export const Required = Template.bind({});
Required.args = {
	label: 'Choose your interests',
	block: true,
	required: true,
};

export const Hint = Template.bind({});
Hint.args = {
	label: 'Choose your interests',
	hint: 'This is a hint',
	block: true,
};

export const Invalid = Template.bind({});
Invalid.args = {
	label: 'Choose your interests',
	message: 'Please select an interest',
	required: true,
	block: true,
	invalid: true,
};
