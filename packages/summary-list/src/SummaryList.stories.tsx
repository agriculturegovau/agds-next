import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextLink } from '@ag.ds-next/text-link';
import { Stack } from '@ag.ds-next/box';
import {
	SummaryList,
	SummaryListItem,
	SummaryListItemTerm,
	SummaryListItemDescription,
	SummaryListItemAction,
} from './SummaryList';

export default {
	title: 'Components/SummaryList',
	component: SummaryList,
} as ComponentMeta<typeof SummaryList>;

export const Basic = () => (
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
);

export const WithChangeLink: ComponentStory<typeof SummaryList> = (args) => (
	<Stack gap={1.5}>
		<SummaryList {...args}>
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
);
WithChangeLink.storyName = 'With "Change all" action';

export const WithItemChangeLink = () => (
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
);
WithItemChangeLink.storyName = 'With individual "Change" actions';
