import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
	Term,
	Description,
	DescriptionList,
	DescriptionListItem,
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
			<Description>will.power@example.com</Description>
		</DescriptionListItem>
		<DescriptionListItem>
			<Term>Date of birth</Term>
			<Description>09/06/1995</Description>
		</DescriptionListItem>
	</DescriptionList>
);
Basic.args = {};
