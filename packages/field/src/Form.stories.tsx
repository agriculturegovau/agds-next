import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { Field } from './Field';
import { FieldContainer } from './FieldContainer';
import { FieldLabel } from './FieldLabel';
import { FieldMessage } from './FieldMessage';
import { FieldHint } from './FieldHint';
import { useFieldA11yProps, useFieldIds } from './index';

export default {
	title: 'forms/Form/Kitchen Sink',
	component: Field,
} as ComponentMeta<typeof Field>;

export const OnLight: ComponentStory<typeof Field> = (args) => (
	<Field {...args}>{(a11yProps) => <input {...a11yProps} />}</Field>
);
OnLight.args = {
	label: 'Basic',
};
