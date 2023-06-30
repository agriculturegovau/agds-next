import { Meta, StoryObj } from '@storybook/react';
import { Fragment, useState } from 'react';
import { Box } from '../box';
import { Button } from '../button';
import { useToggleState } from '../core';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { Text } from '../text';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from './index';

const meta: Meta = {
	title: 'layout/Tabs',
};

export default meta;

export const Basic: StoryObj = {
	render: function Render() {
		return (
			<Tabs>
				<TabList>
					<Tab>Tab 1</Tab>
					<Tab>Tab 2</Tab>
					<Tab>Tab 3</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<Text as="p">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Pellentesque fermentum lacus ac magna elementum, ac laoreet leo
							facilisis. Nulla at bibendum diam. Pellentesque vel accumsan eros,
							nec egestas leo. Etiam lacinia, ligula non cursus sodales, diam
							odio posuere eros, pharetra convallis lacus magna in urna. Etiam
							condimentum iaculis mattis. Vestibulum eget felis in orci eleifend
							vulputate vestibulum id mi. Curabitur at lacus vitae urna
							tincidunt vehicula at quis nibh. Quisque id aliquet sapien.
							Quisque ultricies nibh nisl, eu pellentesque dui semper a. Aliquam
							vestibulum justo vitae feugiat sodales. Aenean efficitur sodales
							diam, et volutpat enim faucibus a. Nulla mollis est eu velit
							malesuada ornare ultrices in neque.
						</Text>
					</TabPanel>
					<TabPanel>
						<Text as="p">
							Praesent metus leo, ultrices porta sodales quis, molestie vitae
							nisl. Fusce at eros ultricies, pharetra eros id, faucibus dolor.
							Nam et nibh lacus. Etiam pellentesque eros finibus ultricies
							malesuada. Sed eget libero suscipit, dictum lacus sit amet,
							venenatis dolor. Sed porttitor lorem turpis, ac suscipit lacus
							vehicula id. Aliquam id venenatis augue. Orci varius natoque
							penatibus et magnis dis parturient montes, nascetur ridiculus mus.
							Integer viverra metus sed dolor euismod consectetur. Cras mauris
							nisi, elementum vel eros sed, faucibus rhoncus mauris. Phasellus
							eu ante vehicula, luctus libero in, malesuada nulla.
						</Text>
					</TabPanel>
					<TabPanel>
						<Text as="p">
							Duis eu bibendum urna. Integer nisl massa, aliquam scelerisque
							hendrerit at, ullamcorper quis turpis. Proin vulputate tincidunt
							neque ut sollicitudin. In ullamcorper neque justo, vitae euismod
							ante aliquam eget. Orci varius natoque penatibus et magnis dis
							parturient montes, nascetur ridiculus mus. Donec eu purus ac ante
							tempus vulputate ac vel mauris. Duis congue augue augue, quis
							elementum nisl ultricies fermentum. Sed pellentesque leo ut est
							semper vulputate.
						</Text>
					</TabPanel>
				</TabPanels>
			</Tabs>
		);
	},
};

export const OnBodyAlt: StoryObj = {
	name: 'On bodyAlt background',
	render: function Render() {
		return (
			<Box padding={1.5} background="bodyAlt">
				<Tabs>
					<TabList>
						<Tab>Tab 1</Tab>
						<Tab>Tab 2</Tab>
						<Tab>Tab 3</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>Tab panel 1.</TabPanel>
						<TabPanel>Tab panel 2.</TabPanel>
						<TabPanel>Tab panel 3.</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
		);
	},
};

export const FlatChildren: StoryObj = {
	render: function Render() {
		const [show, toggle] = useToggleState(false, true);
		return (
			<Stack gap={2}>
				<div>
					<Button variant="text" onClick={toggle}>
						Toggle conditional tag
					</Button>
				</div>
				<Tabs>
					<TabList>
						<Fragment>
							<Tab>Tab 1</Tab>
						</Fragment>
						{[2, 3].map((i) => (
							<Tab key={i}>Tab {i}</Tab>
						))}
						{show && <Tab>Tab 4</Tab>}
					</TabList>
					<TabPanels>
						<Fragment>
							<TabPanel>Tab panel 1.</TabPanel>
						</Fragment>
						{[2, 3].map((i) => (
							<TabPanel key={i}>Tab panel {i}.</TabPanel>
						))}
						{show && <TabPanel>Tab panel 4.</TabPanel>}
					</TabPanels>
				</Tabs>
			</Stack>
		);
	},
};

export const Controlled: StoryObj = {
	render: function Render() {
		const [activeTabIndex, setActiveIndex] = useState(0);
		return (
			<Stack gap={2}>
				<Text>Current tab index: {activeTabIndex}</Text>
				<Flex gap={0.5}>
					<Button variant="text" onClick={() => setActiveIndex(0)}>
						Go to first tab
					</Button>
					<Button variant="text" onClick={() => setActiveIndex(1)}>
						Go to second tab
					</Button>
					<Button variant="text" onClick={() => setActiveIndex(2)}>
						Go to third tab
					</Button>
				</Flex>
				<Tabs activeIndex={activeTabIndex} onChange={setActiveIndex}>
					<TabList>
						<Tab>Tab 1</Tab>
						<Tab>Tab 2</Tab>
						<Tab>Tab 3</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>Tab panel 1.</TabPanel>
						<TabPanel>Tab panel 2.</TabPanel>
						<TabPanel>Tab panel 3.</TabPanel>
					</TabPanels>
				</Tabs>
			</Stack>
		);
	},
};

export const MultiplePerPage: StoryObj = {
	render: function Render() {
		return (
			<Stack gap={2}>
				<Tabs>
					<TabList>
						<Tab>Tab 1</Tab>
						<Tab>Tab 2</Tab>
						<Tab>Tab 3</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>Tab panel 1.</TabPanel>
						<TabPanel>Tab panel 2.</TabPanel>
						<TabPanel>Tab panel 3.</TabPanel>
					</TabPanels>
				</Tabs>
				<Tabs>
					<TabList>
						<Tab>Tab 1</Tab>
						<Tab>Tab 2</Tab>
						<Tab>Tab 3</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>Tab panel 1.</TabPanel>
						<TabPanel>Tab panel 2.</TabPanel>
						<TabPanel>Tab panel 3.</TabPanel>
					</TabPanels>
				</Tabs>
				<Tabs>
					<TabList>
						<Tab>Tab 1</Tab>
						<Tab>Tab 2</Tab>
						<Tab>Tab 3</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>Tab panel 1.</TabPanel>
						<TabPanel>Tab panel 2.</TabPanel>
						<TabPanel>Tab panel 3.</TabPanel>
					</TabPanels>
				</Tabs>
			</Stack>
		);
	},
};

export const LotsOfItems: StoryObj = {
	render: function Render() {
		return (
			<Tabs>
				<TabList>
					{Array.from(Array(20).keys()).map((i) => (
						<Tab key={i}>Tab {i + 1}</Tab>
					))}
				</TabList>
				<TabPanels>
					{Array.from(Array(20).keys()).map((i) => (
						<TabPanel key={i}>Tab panel {i + 1}.</TabPanel>
					))}
				</TabPanels>
			</Tabs>
		);
	},
};
