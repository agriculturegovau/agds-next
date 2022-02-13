import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { AccordionItem, AccordionGroup } from './Accordion';

export default {
	title: 'Layout/Accordion',
	component: AccordionItem,
} as ComponentMeta<typeof AccordionItem>;

export const AccordionOnLight: ComponentStory<typeof Accordion> = () => (
	<AccordionItem title="Accordion test">
		<Box padding={1}>
			<Text>This is some text inside an Accordion</Text>
		</Box>
	</AccordionItem>
);

export const AccordionOnDark: ComponentStory<typeof Accordion> = () => (
	<Box padding={1} palette="dark" background="body">
		<AccordionItem title="Accordion test">
			<Box padding={1}>
				<Text>This is some text inside an Accordion</Text>
			</Box>
		</AccordionItem>
	</Box>
);

export const AccordionGroupOnLight: ComponentStory<typeof Accordion> = () => (
	<AccordionGroup>
		<AccordionItem title="Accordion 1" id="one">
			<Box padding={1}>
				<Text>This is some text inside an Accordion</Text>
			</Box>
		</AccordionItem>

		<AccordionItem title="Accordion 2" id="two">
			<Box padding={1}>
				<Text>This is some text inside an Accordion</Text>
			</Box>
		</AccordionItem>

		<AccordionItem title="Accordion 3" id="three">
			<Box padding={1}>
				<Text>This is some text inside an Accordion</Text>
			</Box>
		</AccordionItem>
	</AccordionGroup>
);
