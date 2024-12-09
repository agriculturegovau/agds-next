import { Meta, StoryObj } from '@storybook/react';
import { Popover } from '../_popover';
import { listItemStyles } from './ComboboxBase/ComboboxListItem';
import { ComboboxListError } from './ComboboxBase/ComboboxListError';

function ComboboxListErrorTemplate() {
	return (
		<Popover as="ul" css={listItemStyles} style={{}}>
			<ComboboxListError />
		</Popover>
	);
}

const meta: Meta<typeof ComboboxListError> = {
	title: 'forms/Combobox/Primitives/ComboboxListError',
	component: ComboboxListError,
	render: () => <ComboboxListErrorTemplate />,
};

export default meta;

type Story = StoryObj<typeof ComboboxListError>;

export const Basic: Story = {};
