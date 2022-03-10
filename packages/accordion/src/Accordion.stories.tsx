import { useState } from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { Box, Stack } from '@ag.ds-next/box';
import { useToggleState } from '@ag.ds-next/core';
import { Body } from '@ag.ds-next/body';
import { Button } from '@ag.ds-next/button';
import { Text } from '@ag.ds-next/text';
import { Accordion } from './Accordion';
import { AccordionItem, AccordionItemContent } from './AccordionItem';

export default {
	title: 'Layout/Accordion',
	component: Accordion,
	argTypes: {
		boxBackground: {
			options: ['body', 'bodyAlt'],
			control: { type: 'select' },
		},
		boxPalette: {
			options: ['light', 'dark'],
			control: { type: 'select' },
		},
	},
} as ComponentMeta<typeof Accordion>;

type AccordionExampleProps = {
	boxBackground: 'body' | 'bodyAlt';
	boxPalette: 'light' | 'dark';
};

const AccordionBasicExample: Story<AccordionExampleProps> = ({
	boxBackground,
	boxPalette,
}: AccordionExampleProps) => (
	<Box padding={1.5} palette={boxPalette} background={boxBackground}>
		<Accordion>
			<AccordionItem title="Accordion test">
				<AccordionItemContent>
					<Text>This is some text inside an Accordion</Text>
				</AccordionItemContent>
			</AccordionItem>
		</Accordion>
	</Box>
);

export const OnLight = AccordionBasicExample.bind({});
OnLight.args = {
	boxBackground: 'body',
	boxPalette: 'light',
};
export const OnDark = AccordionBasicExample.bind({});
OnDark.args = {
	boxBackground: 'body',
	boxPalette: 'dark',
};

const AccordionGroupExample: Story<AccordionExampleProps> = ({
	boxBackground,
	boxPalette,
}: AccordionExampleProps) => (
	<Box padding={1.5} palette={boxPalette} background={boxBackground}>
		<Accordion>
			<AccordionItem title="Accordion 1">
				<AccordionItemContent>
					<Text>This is some text inside an Accordion</Text>
				</AccordionItemContent>
			</AccordionItem>

			<AccordionItem title="Accordion 2">
				<AccordionItemContent>
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
				</AccordionItemContent>
			</AccordionItem>

			<AccordionItem title="Accordion 3">
				<AccordionItemContent>
					<Text>This is some text inside an Accordion</Text>
				</AccordionItemContent>
			</AccordionItem>
		</Accordion>
	</Box>
);

export const GroupOnLight = AccordionGroupExample.bind({});
GroupOnLight.args = {
	boxBackground: 'body',
	boxPalette: 'light',
};
export const GroupOnDark = AccordionGroupExample.bind({});
GroupOnDark.args = {
	boxBackground: 'body',
	boxPalette: 'dark',
};

export const Controlled = () => {
	const [isOpen, onToggle] = useToggleState(false, true);
	return (
		<Stack gap={1} alignItems="flex-start">
			<Button variant="tertiary" onClick={onToggle} aria-expanded={isOpen}>
				{isOpen ? 'Close section' : 'Open section'}
			</Button>
			<Accordion>
				<AccordionItem
					isOpen={isOpen}
					onToggle={onToggle}
					title="Controlled Accordion"
				>
					<AccordionItemContent>
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
					</AccordionItemContent>
				</AccordionItem>
			</Accordion>
		</Stack>
	);
};

const controlledGroupExampleLength = 3;
type ControlledGroupAccordion = 1 | 2 | 3;

const AccordionControlledGroupExample = ({
	openAccordions,
	toggle,
}: {
	openAccordions: ControlledGroupAccordion[];
	toggle: (accordionIndex: ControlledGroupAccordion) => void;
}) => {
	return (
		<Accordion>
			<AccordionItem
				title="Accordion 1"
				isOpen={openAccordions.includes(1)}
				onToggle={() => toggle(1)}
			>
				<AccordionItemContent>
					<Text>This is some text inside an Accordion</Text>
				</AccordionItemContent>
			</AccordionItem>
			<AccordionItem
				title="Accordion 2"
				isOpen={openAccordions.includes(2)}
				onToggle={() => toggle(2)}
			>
				<AccordionItemContent>
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
				</AccordionItemContent>
			</AccordionItem>

			<AccordionItem
				title="Accordion 3"
				isOpen={openAccordions.includes(3)}
				onToggle={() => toggle(3)}
			>
				<AccordionItemContent>
					<Text>This is some text inside an Accordion</Text>
				</AccordionItemContent>
			</AccordionItem>
		</Accordion>
	);
};

export const ControlledGroup = () => {
	const [openAccordions, setOpenAccordions] = useState<
		ControlledGroupAccordion[]
	>([1]);

	const openAll = () => setOpenAccordions([1, 2, 3]);
	const closeAll = () => setOpenAccordions([]);

	const toggle = (item: ControlledGroupAccordion) => {
		setOpenAccordions((openAccordions) => {
			if (openAccordions.includes(item)) {
				return openAccordions.filter((acc) => acc !== item);
			}
			return [...openAccordions, item];
		});
	};

	const isAllOpen = openAccordions.length === controlledGroupExampleLength;

	return (
		<Stack gap={1} alignItems="flex-start">
			<Button
				size="sm"
				variant="tertiary"
				onClick={isAllOpen ? closeAll : openAll}
				aria-expanded={isAllOpen}
			>
				{isAllOpen ? 'Hide all sections' : 'Show all sections'}
			</Button>
			<AccordionControlledGroupExample
				openAccordions={openAccordions}
				toggle={toggle}
			/>
		</Stack>
	);
};

export const InitiallyOpened = () => (
	<Accordion>
		<AccordionItem title="Initially opened" isInitiallyOpen>
			<AccordionItemContent>
				<Text>
					This is some text inside an Accordion, which is opened at time of page
					render.
				</Text>
			</AccordionItemContent>
		</AccordionItem>
	</Accordion>
);

export const EdgeToEdgeImage = () => (
	<Accordion>
		<AccordionItem title="Edge-to-edge image" isInitiallyOpen>
			<img
				src="http://placehold.it/800x200"
				alt="Placeholder image"
				style={{ width: '100%' }}
			/>
			<AccordionItemContent>
				<Text>
					In this example, we remove the default padding from the AccordionItem,
					in order to achieve the edge-to-edge image above. This Text is wrapped
					in the AccordionItemContent component.
				</Text>
			</AccordionItemContent>
		</AccordionItem>
	</Accordion>
);
