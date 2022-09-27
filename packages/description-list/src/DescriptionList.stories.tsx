import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '@ag.ds-next/text';
import { TextLink } from '@ag.ds-next/text-link';
import { Stack } from '@ag.ds-next/box';
import {
	Term,
	Description,
	DescriptionList,
	DescriptionListItem,
	Action,
} from './DescriptionList';

export default {
	title: 'Content/DescriptionList',
	component: DescriptionList,
} as ComponentMeta<typeof DescriptionList>;

export const Basic: ComponentStory<typeof DescriptionList> = (args) => (
	<DescriptionList {...args}>
		<DescriptionListItem>
			<Term>First name</Term>
			<Description>Will</Description>
		</DescriptionListItem>
		<DescriptionListItem>
			<Term>Last name</Term>
			<Description>Power</Description>
		</DescriptionListItem>
		<DescriptionListItem>
			<Term>Email</Term>
			<Description>
				<Stack>
					<Text>+61 9912 3456</Text>
					<Text>will.power@example.com</Text>
				</Stack>
			</Description>
		</DescriptionListItem>
		<DescriptionListItem>
			<Term>Date of birth</Term>
			<Description>09/06/1995</Description>
		</DescriptionListItem>
	</DescriptionList>
);
Basic.args = {};

export const Updatable: ComponentStory<typeof DescriptionList> = (args) => (
	<DescriptionList {...args}>
		<DescriptionListItem>
			<Term>First name</Term>
			<Description>Will</Description>
			<Action>
				<TextLink href="#">Change</TextLink>
			</Action>
		</DescriptionListItem>
		<DescriptionListItem>
			<Term>Last name</Term>
			<Description>Power</Description>
			<Action>
				<TextLink href="#">Change</TextLink>
			</Action>
		</DescriptionListItem>
		<DescriptionListItem>
			<Term>Email</Term>
			<Description>will.power@example.com</Description>
			<Action>
				<TextLink href="#">Change</TextLink>
			</Action>
		</DescriptionListItem>
		<DescriptionListItem>
			<Term>Date of birth</Term>
			<Description>09/06/1995</Description>
			<Action>
				<TextLink href="#">Change</TextLink>
			</Action>
		</DescriptionListItem>
	</DescriptionList>
);
Updatable.args = {};
