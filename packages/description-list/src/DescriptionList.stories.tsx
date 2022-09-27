import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
	DescriptionDescription,
	DescriptionList,
	DescriptionListItem,
	DescriptionTerm,
} from './DescriptionList';

export default {
	title: 'Content/DescriptionList',
	component: DescriptionList,
} as ComponentMeta<typeof DescriptionList>;

export const Basic: ComponentStory<typeof DescriptionList> = (args) => (
	<DescriptionList>
		<DescriptionListItem>
			<DescriptionTerm>First name</DescriptionTerm>
			<DescriptionDescription>Will</DescriptionDescription>
		</DescriptionListItem>
		<DescriptionListItem>
			<DescriptionTerm>Last name</DescriptionTerm>
			<DescriptionDescription>Power</DescriptionDescription>
		</DescriptionListItem>
		<DescriptionListItem>
			<DescriptionTerm>Email</DescriptionTerm>
			<DescriptionDescription>will.power@example.com</DescriptionDescription>
		</DescriptionListItem>
		<DescriptionListItem>
			<DescriptionTerm>Date of birth</DescriptionTerm>
			<DescriptionDescription>09/06/1995</DescriptionDescription>
		</DescriptionListItem>
	</DescriptionList>
);
Basic.args = {};
