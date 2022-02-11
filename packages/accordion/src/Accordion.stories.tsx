import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { Accordion } from './Accordion';

export default {
	title: 'Layout/Accordion',
	component: Accordion,
} as ComponentMeta<typeof Accordion>;

export const AccordionOnLight: ComponentStory<typeof Accordion> = () => (
	<Accordion title="Accordion test">
		<Box padding={1}>
			<Text>This is some text inside an Accordion</Text>
		</Box>
	</Accordion>
);

export const AccordionOnDark: ComponentStory<typeof Accordion> = () => (
	<Accordion palette="dark" title="Accordion test">
		<Box padding={1}>
			<Text>This is some text inside an Accordion</Text>
		</Box>
	</Accordion>
);

export const AccordionGroupOnLight: ComponentStory<typeof Accordion> = () => (
	<Box>
		<Accordion title="Accordion 1" id="one">
			<Box padding={1}>
				<Text>This is some text inside an Accordion</Text>
			</Box>
		</Accordion>

		<Accordion title="Accordion 2" id="two">
			<Box padding={1}>
				<Text>This is some text inside an Accordion</Text>
			</Box>
		</Accordion>

		<Accordion title="Accordion 3" id="three">
			<Box padding={1}>
				<Text>This is some text inside an Accordion</Text>
			</Box>
		</Accordion>
	</Box>
);
