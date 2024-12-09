import { Meta, StoryObj } from '@storybook/react';
import { Popover } from '../_popover';
import { listItemStyles } from './ComboboxBase/ComboboxListItem';
import {
	ComboboxListEmptyResults,
	ComboboxListEmptyResultsProps,
} from './ComboboxBase/ComboboxListEmptyResults';

function ComboboxListEmptyResultsTemplate(
	props: ComboboxListEmptyResultsProps
) {
	return (
		<Popover as="ul" css={listItemStyles} style={{}}>
			<ComboboxListEmptyResults {...props} />
		</Popover>
	);
}

const meta: Meta<typeof ComboboxListEmptyResults> = {
	title: 'forms/Combobox/Primitives/ComboboxListEmptyResults',
	component: ComboboxListEmptyResults,
	render: (props) => <ComboboxListEmptyResultsTemplate {...props} />,
};

export default meta;

type Story = StoryObj<typeof ComboboxListEmptyResults>;

export const Basic: Story = {
	args: {
		message: 'No options found.',
	},
};
