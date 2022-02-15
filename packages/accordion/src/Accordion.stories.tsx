import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, Stack } from '@ag.ds-next/box';
import { useToggleState } from '@ag.ds-next/core';
import { Body } from '@ag.ds-next/body';
import { Button } from '@ag.ds-next/button';
import { Text } from '@ag.ds-next/text';
import { AccordionItem, AccordionGroup, useAccordionIds } from './Accordion';
import { AccordionBody } from './AccordionBody';
import { AccordionTitle } from './AccordionTitle';

export default {
	title: 'Layout/Accordion',
	component: AccordionItem,
} as ComponentMeta<typeof AccordionItem>;

const AccordionBasicExample = ({ palette }: { palette: 'light' | 'dark' }) => (
	<Box padding={1} palette={palette} background="body">
		<AccordionItem title="Accordion test">
			<Text>This is some text inside an Accordion</Text>
		</AccordionItem>
	</Box>
);

export const BasicOnLight: ComponentStory<typeof AccordionItem> = () => (
	<AccordionBasicExample palette="light" />
);

export const BasicOnDark: ComponentStory<typeof AccordionItem> = () => (
	<AccordionBasicExample palette="dark" />
);

const AccordionGroupExample = ({ palette }: { palette: 'light' | 'dark' }) => (
	<Box padding={1} palette={palette} background="body">
		<AccordionGroup>
			<AccordionItem title="Accordion 1" id="one">
				<Text>This is some text inside an Accordion</Text>
			</AccordionItem>

			<AccordionItem title="Accordion 2" id="two">
				<Body>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
						libero vel dolor sollicitudin pretium quis quis mi. Fusce sapien mi,
						efficitur sit amet ex et, bibendum efficitur odio. Ut nec gravida
						metus, nec suscipit nulla. Donec est nulla, dictum sed ultricies
						congue, suscipit at velit. Integer ut leo lectus. Nullam volutpat ex
						quis imperdiet scelerisque. Etiam ultrices et nisi eget pulvinar.
						Cras ultrices lectus ut nisl gravida, eu rutrum sem luctus. Praesent
						vulputate eu dolor commodo tempor. Sed nec lorem consectetur,
						maximus justo at, tincidunt quam. Suspendisse pellentesque accumsan
						accumsan. Cras in odio leo. Nam pharetra, lorem eget aliquam
						gravida, felis ex tempor sapien, a ornare leo nulla eget magna.
						Quisque tempus ipsum eu elit bibendum, nec bibendum ligula posuere.
						Nam porttitor est eros, ac maximus nisl euismod nec.
					</p>
					<p>
						Curabitur urna erat, ornare in nulla vitae, tempor porttitor dolor.
						Nam luctus fermentum tellus, vitae maximus turpis viverra eget.
						Phasellus hendrerit tortor eu mauris ultricies congue. Suspendisse
						cursus, purus quis viverra pharetra, purus quam hendrerit magna,
						condimentum cursus massa nisi ut est. Mauris in tristique augue.
						Phasellus tellus ante, fermentum eget fringilla eget, tempor nec
						nunc. Ut nec dui vitae ex dignissim tempus ac et ante. Donec
						imperdiet suscipit leo. Suspendisse mattis quis nisl id mattis. Sed
						dictum tempus nibh, quis feugiat magna efficitur in. Sed vulputate
						et dui eu malesuada.
					</p>
				</Body>
			</AccordionItem>

			<AccordionItem title="Accordion 3" id="three">
				<Text>This is some text inside an Accordion</Text>
			</AccordionItem>
		</AccordionGroup>
	</Box>
);

export const GroupOnLight: ComponentStory<typeof AccordionItem> = () => (
	<AccordionGroupExample palette="light" />
);

export const GroupOnDark: ComponentStory<typeof AccordionItem> = () => (
	<AccordionGroupExample palette="dark" />
);

export const Controlled = () => {
	const [isOpen, onToggle] = useToggleState(false, true);
	const { titleId, bodyID } = useAccordionIds('controlled');

	return (
		<Stack gap={1} alignItems="flex-start">
			<Button onClick={onToggle}>{isOpen ? 'Close' : 'Open'}</Button>
			<AccordionGroup>
				<Box border>
					<AccordionTitle
						title="Controlled Accordion"
						id={titleId}
						ariaControls={bodyID}
						isOpen={isOpen}
						onToggle={onToggle}
					/>
					<AccordionBody isOpen={isOpen} id={bodyID} ariaLabelledBy={titleId}>
						<Body>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
								libero vel dolor sollicitudin pretium quis quis mi. Fusce sapien
								mi, efficitur sit amet ex et, bibendum efficitur odio. Ut nec
								gravida metus, nec suscipit nulla. Donec est nulla, dictum sed
								ultricies congue, suscipit at velit. Integer ut leo lectus.
								Nullam volutpat ex quis imperdiet scelerisque. Etiam ultrices et
								nisi eget pulvinar. Cras ultrices lectus ut nisl gravida, eu
								rutrum sem luctus. Praesent vulputate eu dolor commodo tempor.
								Sed nec lorem consectetur, maximus justo at, tincidunt quam.
								Suspendisse pellentesque accumsan accumsan. Cras in odio leo.
								Nam pharetra, lorem eget aliquam gravida, felis ex tempor
								sapien, a ornare leo nulla eget magna. Quisque tempus ipsum eu
								elit bibendum, nec bibendum ligula posuere. Nam porttitor est
								eros, ac maximus nisl euismod nec.
							</p>
						</Body>
					</AccordionBody>
				</Box>
			</AccordionGroup>
		</Stack>
	);
};

export const InitiallyOpened = () => (
	<AccordionItem title="Initially opened" id="initiallyOpened" isInitiallyOpen>
		<Text>
			This is some text inside an Accordion, which is opened at time of page
			render.
		</Text>
	</AccordionItem>
);

export const NoPadding = () => (
	<AccordionItem title="No padding" id="noPadding" isInitiallyOpen noPadding>
		<img
			src="http://placehold.it/800x200"
			alt="Placeholder image"
			style={{ width: '100%' }}
		/>

		<Box padding={1}>
			<Text>
				In this example, we remove the default padding from the AccordionItem,
				in order to achieve the edge-to-edge image above. This Text is wrapped
				in a Box, with padding applied.
			</Text>
		</Box>
	</AccordionItem>
);
