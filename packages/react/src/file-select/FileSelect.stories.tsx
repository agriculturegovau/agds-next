import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FileSelect } from './FileSelect';

export default {
	title: 'Forms/FileSelect',
	component: FileSelect,
} as ComponentMeta<typeof FileSelect>;

export const Basic: ComponentStory<typeof FileSelect> = (args) => (
	<FileSelect {...args} />
);
Basic.args = {
	label: 'Drivers license',
};
