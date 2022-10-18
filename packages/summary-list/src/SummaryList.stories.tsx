import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '@ag.ds-next/text';
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
	title: 'Content/SummaryList',
	component: SummaryList,
} as ComponentMeta<typeof SummaryList>;

export const Basic: ComponentStory<typeof SummaryList> = (args) => (
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
				<Stack>
					<Text>+61 9912 3456</Text>
					<Text>will.power@example.com</Text>
				</Stack>
			</SummaryListItemDescription>
		</SummaryListItem>
		<SummaryListItem>
			<SummaryListItemTerm>Date of birth</SummaryListItemTerm>
			<SummaryListItemDescription>09/06/1995</SummaryListItemDescription>
		</SummaryListItem>
	</SummaryList>
);
Basic.args = {};

export const withChangeLink: ComponentStory<typeof SummaryList> = (args) => (
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
					<Stack>
						<Text>+61 9912 3456</Text>
						<Text>will.power@example.com</Text>
					</Stack>
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
withChangeLink.args = {};
withChangeLink.storyName = 'With "Change all" action';

export const Updatable: ComponentStory<typeof SummaryList> = (args) => (
	<SummaryList {...args}>
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
				<Stack>
					<Text>+61 9912 3456</Text>
					<Text>will.power@example.com</Text>
				</Stack>
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
Updatable.args = {};
Updatable.storyName = 'With individual "Change" actions';
