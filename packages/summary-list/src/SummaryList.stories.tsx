import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '@ag.ds-next/text';
import { TextLink } from '@ag.ds-next/text-link';
import { Stack } from '@ag.ds-next/box';
import {
	SummaryList,
	SummaryListItem,
	Term,
	Description,
	Action,
} from './SummaryList';

export default {
	title: 'Content/SummaryList',
	component: SummaryList,
} as ComponentMeta<typeof SummaryList>;

export const Basic: ComponentStory<typeof SummaryList> = (args) => (
	<SummaryList {...args}>
		<SummaryListItem>
			<Term>First name</Term>
			<Description>Will</Description>
		</SummaryListItem>
		<SummaryListItem>
			<Term>Last name</Term>
			<Description>Power</Description>
		</SummaryListItem>
		<SummaryListItem>
			<Term>Contact information</Term>
			<Description>
				<Stack>
					<Text>+61 9912 3456</Text>
					<Text>will.power@example.com</Text>
				</Stack>
			</Description>
		</SummaryListItem>
		<SummaryListItem>
			<Term>Date of birth</Term>
			<Description>09/06/1995</Description>
		</SummaryListItem>
	</SummaryList>
);
Basic.args = {};

export const Updatable: ComponentStory<typeof SummaryList> = (args) => (
	<SummaryList {...args}>
		<SummaryListItem>
			<Term>First name</Term>
			<Description>Will</Description>
			<Action>
				<TextLink href="#">Change</TextLink>
			</Action>
		</SummaryListItem>
		<SummaryListItem>
			<Term>Last name</Term>
			<Description>Power</Description>
			<Action>
				<TextLink href="#">Change</TextLink>
			</Action>
		</SummaryListItem>
		<SummaryListItem>
			<Term>Contact information</Term>
			<Description>
				<Stack>
					<Text>+61 9912 3456</Text>
					<Text>will.power@example.com</Text>
				</Stack>
			</Description>
			<Action>
				<TextLink href="#">Change</TextLink>
			</Action>
		</SummaryListItem>
		<SummaryListItem>
			<Term>Date of birth</Term>
			<Description>09/06/1995</Description>
			<Action>
				<TextLink href="#">Change</TextLink>
			</Action>
		</SummaryListItem>
	</SummaryList>
);
Updatable.args = {};
