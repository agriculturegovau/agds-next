import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box } from '../box';
import { Stack } from '../stack';
import { useToggleState } from '../core';
import { Prose } from '../prose';
import { Button } from '../button';
import { Text } from '../text';
import { Accordion } from './Accordion';
import { AccordionItem, AccordionItemContent } from './AccordionItem';

const meta: Meta<typeof Accordion> = {
	title: 'Layout/Accordion',
	component: Accordion,
};

type Story = StoryObj<typeof Accordion>;

export default meta;

type AccordionTemplateProps = {
	background: 'body' | 'bodyAlt';
};

const AccordionBasicTemplate = ({ background }: AccordionTemplateProps) => (
	<Box background={background} padding={1.5}>
		<Accordion>
			<AccordionItem background={background} title="Accordion title">
				<AccordionItemContent>
					<Text as="p">This is some text inside an Accordion</Text>
				</AccordionItemContent>
			</AccordionItem>
		</Accordion>
	</Box>
);

export const Basic: Story = {
	render: () => <AccordionBasicTemplate background="body" />,
};

export const onBodyAlt: Story = {
	render: () => <AccordionBasicTemplate background="bodyAlt" />,
	name: 'On bodyAlt background',
};

const AccordionGroupTemplate = ({ background }: AccordionTemplateProps) => (
	<Box background={background} padding={1.5}>
		<Accordion>
			<AccordionItem background={background} title="Accordion 1">
				<AccordionItemContent>
					<Text as="p">This is some text inside an Accordion</Text>
				</AccordionItemContent>
			</AccordionItem>
			<AccordionItem background={background} title="Accordion 2">
				<AccordionItemContent>
					<Prose>
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
					</Prose>
				</AccordionItemContent>
			</AccordionItem>
			<AccordionItem background={background} title="Accordion 3">
				<AccordionItemContent>
					<Text as="p">This is some text inside an Accordion</Text>
				</AccordionItemContent>
			</AccordionItem>
		</Accordion>
	</Box>
);

export const Group: Story = {
	render: () => <AccordionGroupTemplate background="body" />,
};

export const GroupOnBodyAlt: Story = {
	render: () => <AccordionGroupTemplate background="bodyAlt" />,
	name: 'Group on bodyAlt background',
};

export const Controlled = () => {
	const [isOpen, onToggle] = useToggleState(false, true);
	return (
		<Stack alignItems="flex-start" gap={1}>
			<Button aria-expanded={isOpen} onClick={onToggle} variant="tertiary">
				{isOpen ? 'Close section' : 'Open section'}
			</Button>
			<Accordion>
				<AccordionItem
					isOpen={isOpen}
					onToggle={onToggle}
					title="Controlled Accordion"
				>
					<AccordionItemContent>
						<Prose>
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
						</Prose>
					</AccordionItemContent>
				</AccordionItem>
			</Accordion>
		</Stack>
	);
};

type ControlledGroupAccordion = 1 | 2 | 3;

const AccordionControlledGroupTemplate = ({
	openAccordions,
	toggle,
}: {
	openAccordions: ControlledGroupAccordion[];
	toggle: (accordionIndex: ControlledGroupAccordion) => void;
}) => {
	return (
		<Accordion>
			<AccordionItem
				isOpen={openAccordions.includes(1)}
				onToggle={() => toggle(1)}
				title="Accordion 1"
			>
				<AccordionItemContent>
					<Text as="p">This is some text inside an Accordion</Text>
				</AccordionItemContent>
			</AccordionItem>
			<AccordionItem
				isOpen={openAccordions.includes(2)}
				onToggle={() => toggle(2)}
				title="Accordion 2"
			>
				<AccordionItemContent>
					<Prose>
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
					</Prose>
				</AccordionItemContent>
			</AccordionItem>
			<AccordionItem
				isOpen={openAccordions.includes(3)}
				onToggle={() => toggle(3)}
				title="Accordion 3"
			>
				<AccordionItemContent>
					<Text as="p">This is some text inside an Accordion</Text>
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

	const controlledGroupAccordionLength = 3;
	const isAllOpen = openAccordions.length === controlledGroupAccordionLength;

	return (
		<Stack alignItems="flex-start" gap={1}>
			<Button
				aria-expanded={isAllOpen}
				onClick={isAllOpen ? closeAll : openAll}
				size="sm"
				variant="tertiary"
			>
				{isAllOpen ? 'Hide all sections' : 'Show all sections'}
			</Button>
			<AccordionControlledGroupTemplate
				openAccordions={openAccordions}
				toggle={toggle}
			/>
		</Stack>
	);
};

export const InitiallyOpened: Story = {
	render: () => (
		<Accordion>
			<AccordionItem isInitiallyOpen title="Initially opened">
				<AccordionItemContent>
					<Text as="p">
						This is some text inside an Accordion, which is opened at time of
						page render.
					</Text>
				</AccordionItemContent>
			</AccordionItem>
		</Accordion>
	),
};

export const EdgeToEdgeImage: Story = {
	render: () => (
		<Accordion>
			<AccordionItem title="Edge-to-edge image">
				<img
					alt="Placeholder"
					src="/img/placeholder/600X260.png"
					width="100%"
				/>
				<AccordionItemContent>
					<Text as="p">
						In this example, we remove the default padding from the
						AccordionItem, in order to achieve the edge-to-edge image above.
						This Text is wrapped in the AccordionItemContent component.
					</Text>
				</AccordionItemContent>
			</AccordionItem>
		</Accordion>
	),
};
