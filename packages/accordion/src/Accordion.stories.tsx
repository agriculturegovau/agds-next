import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { Body } from '@ag.ds-next/body';
import { Text } from '@ag.ds-next/text';
import { AccordionItem, AccordionGroup } from './Accordion';

export default {
	title: 'Layout/Accordion',
	component: AccordionItem,
} as ComponentMeta<typeof AccordionItem>;

export const AccordionOnLight: ComponentStory<typeof AccordionItem> = () => (
	<AccordionItem title="Accordion test" id="light">
		<Box padding={1}>
			<Text>This is some text inside an Accordion</Text>
		</Box>
	</AccordionItem>
);

export const AccordionOnDark: ComponentStory<typeof AccordionItem> = () => (
	<Box padding={1} palette="dark" background="body">
		<AccordionItem title="Accordion test" id="dark">
			<Box padding={1}>
				<Text>This is some text inside an Accordion</Text>
			</Box>
		</AccordionItem>
	</Box>
);

export const AccordionGroupOnLight: ComponentStory<typeof AccordionItem> =
	() => (
		<AccordionGroup>
			<AccordionItem title="Accordion 1" id="one">
				<Box padding={1}>
					<Text>This is some text inside an Accordion</Text>
				</Box>
			</AccordionItem>

			<AccordionItem title="Accordion 2" id="two">
				<Box padding={1}>
					<Body>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
							libero vel dolor sollicitudin pretium quis quis mi. Fusce sapien
							mi, efficitur sit amet ex et, bibendum efficitur odio. Ut nec
							gravida metus, nec suscipit nulla. Donec est nulla, dictum sed
							ultricies congue, suscipit at velit. Integer ut leo lectus. Nullam
							volutpat ex quis imperdiet scelerisque. Etiam ultrices et nisi
							eget pulvinar. Cras ultrices lectus ut nisl gravida, eu rutrum sem
							luctus. Praesent vulputate eu dolor commodo tempor. Sed nec lorem
							consectetur, maximus justo at, tincidunt quam. Suspendisse
							pellentesque accumsan accumsan. Cras in odio leo. Nam pharetra,
							lorem eget aliquam gravida, felis ex tempor sapien, a ornare leo
							nulla eget magna. Quisque tempus ipsum eu elit bibendum, nec
							bibendum ligula posuere. Nam porttitor est eros, ac maximus nisl
							euismod nec.
						</p>
						<p>
							Curabitur urna erat, ornare in nulla vitae, tempor porttitor
							dolor. Nam luctus fermentum tellus, vitae maximus turpis viverra
							eget. Phasellus hendrerit tortor eu mauris ultricies congue.
							Suspendisse cursus, purus quis viverra pharetra, purus quam
							hendrerit magna, condimentum cursus massa nisi ut est. Mauris in
							tristique augue. Phasellus tellus ante, fermentum eget fringilla
							eget, tempor nec nunc. Ut nec dui vitae ex dignissim tempus ac et
							ante. Donec imperdiet suscipit leo. Suspendisse mattis quis nisl
							id mattis. Sed dictum tempus nibh, quis feugiat magna efficitur
							in. Sed vulputate et dui eu malesuada.
						</p>
					</Body>
				</Box>
			</AccordionItem>

			<AccordionItem title="Accordion 3" id="three">
				<Box padding={1}>
					<Text>This is some text inside an Accordion</Text>
				</Box>
			</AccordionItem>
		</AccordionGroup>
	);
