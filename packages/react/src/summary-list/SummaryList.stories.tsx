import { Meta, StoryObj } from '@storybook/react';
import { TextLink } from '../text-link';
import { Stack } from '../stack';
import {
	SummaryList,
	SummaryListItem,
	SummaryListItemTerm,
	SummaryListItemDescription,
	SummaryListItemAction,
} from './SummaryList';

const meta: Meta<typeof SummaryList> = {
	title: 'Content/SummaryList',
	component: SummaryList,
};

export default meta;

type Story = StoryObj<typeof SummaryList>;

export const Basic: Story = {
	render: () => (
		<SummaryList>
			<SummaryListItem>
				<SummaryListItemTerm>First name</SummaryListItemTerm>
				<SummaryListItemDescription>Will</SummaryListItemDescription>
			</SummaryListItem>
			<SummaryListItem>
				<SummaryListItemTerm>Last name</SummaryListItemTerm>
				<SummaryListItemDescription>Power</SummaryListItemDescription>
			</SummaryListItem>
			<SummaryListItem>
				<SummaryListItemTerm>Contact information</SummaryListItemTerm>
				<SummaryListItemDescription>
					+61 9912 3456
					<br />
					will.power@example.com
				</SummaryListItemDescription>
			</SummaryListItem>
			<SummaryListItem>
				<SummaryListItemTerm>Date of birth</SummaryListItemTerm>
				<SummaryListItemDescription>09/06/1995</SummaryListItemDescription>
			</SummaryListItem>
		</SummaryList>
	),
};

export const WithChangeLink: Story = {
	name: 'With "Change all" action',
	render: () => (
		<Stack gap={1.5}>
			<SummaryList>
				<SummaryListItem>
					<SummaryListItemTerm>First name</SummaryListItemTerm>
					<SummaryListItemDescription>Will</SummaryListItemDescription>
				</SummaryListItem>
				<SummaryListItem>
					<SummaryListItemTerm>Last name</SummaryListItemTerm>
					<SummaryListItemDescription>Power</SummaryListItemDescription>
				</SummaryListItem>
				<SummaryListItem>
					<SummaryListItemTerm>Contact information</SummaryListItemTerm>
					<SummaryListItemDescription>
						+61 9912 3456
						<br />
						will.power@example.com
					</SummaryListItemDescription>
				</SummaryListItem>
				<SummaryListItem>
					<SummaryListItemTerm>Date of birth</SummaryListItemTerm>
					<SummaryListItemDescription>09/06/1995</SummaryListItemDescription>
				</SummaryListItem>
			</SummaryList>
			<TextLink href="#">Change all</TextLink>
		</Stack>
	),
};

export const WithItemChangeLink: Story = {
	name: 'With individual "Change" actions',
	render: () => (
		<SummaryList>
			<SummaryListItem>
				<SummaryListItemTerm>First name</SummaryListItemTerm>
				<SummaryListItemDescription>Will</SummaryListItemDescription>
				<SummaryListItemAction>
					<TextLink href="#">Change</TextLink>
				</SummaryListItemAction>
			</SummaryListItem>
			<SummaryListItem>
				<SummaryListItemTerm>Last name</SummaryListItemTerm>
				<SummaryListItemDescription>Power</SummaryListItemDescription>
				<SummaryListItemAction>
					<TextLink href="#">Change</TextLink>
				</SummaryListItemAction>
			</SummaryListItem>
			<SummaryListItem>
				<SummaryListItemTerm>Contact information</SummaryListItemTerm>
				<SummaryListItemDescription>
					+61 9912 3456
					<br />
					will.power@example.com
				</SummaryListItemDescription>
				<SummaryListItemAction>
					<TextLink href="#">Change</TextLink>
				</SummaryListItemAction>
			</SummaryListItem>
			<SummaryListItem>
				<SummaryListItemTerm>Date of birth</SummaryListItemTerm>
				<SummaryListItemDescription>09/06/1995</SummaryListItemDescription>
				<SummaryListItemAction>
					<TextLink href="#">Change</TextLink>
				</SummaryListItemAction>
			</SummaryListItem>
		</SummaryList>
	),
};
