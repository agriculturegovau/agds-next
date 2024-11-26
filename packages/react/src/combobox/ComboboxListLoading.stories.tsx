import { Meta, StoryObj } from '@storybook/react';
import { Popover } from '../_popover';
import { listItemStyles } from './ComboboxBase/ComboboxListItem';
import { ComboboxListLoading } from './ComboboxBase/ComboboxListLoading';

function ComboboxListLoadingTemplate() {
	return (
		<Popover as="ul" css={listItemStyles} style={{}}>
			<ComboboxListLoading />
		</Popover>
	);
}

const meta: Meta<typeof ComboboxListLoading> = {
	title: 'forms/Combobox/Primitives/ComboboxListLoading',
	component: ComboboxListLoading,
	render: () => <ComboboxListLoadingTemplate />,
};

export default meta;

type Story = StoryObj<typeof ComboboxListLoading>;

export const Basic: Story = {};
