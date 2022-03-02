import React from 'react';
import { Header } from '@ag.ds-next/header';
import { Body } from '@ag.ds-next/body';
import { ControlGroup, Checkbox, Radio } from '@ag.ds-next/control-input';
import { Content } from '@ag.ds-next/content';
import { Card, CardInner } from '@ag.ds-next/card';
import {
	Accordion,
	AccordionItem,
	AccordionItemContent,
} from '@ag.ds-next/accordion';
import { ProgressIndicator } from '@ag.ds-next/progress-indicator';
import { Button } from '@ag.ds-next/button';
import { Box, Stack } from '@ag.ds-next/box';
import { TextInput } from '@ag.ds-next/text-input';
import { Text } from '@ag.ds-next/text';
import { H1 } from '@ag.ds-next/heading';
import { LinkList } from '@ag.ds-next/link-list';

export default {
	title: 'Examples/Kitchen Sink',
};

const KitchenSink = () => {
	return (
		<Content>
			<Stack gap={1} alignItems="flex-start">
				<H1>Kitchen Sink</H1>
				<Text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
					at arcu eleifend, varius enim non, eleifend nibh. Quisque ac lacinia
					elit. Orci varius natoque penatibus et magnis dis parturient montes,
					nascetur ridiculus mus. Integer scelerisque at ligula tempor eleifend.
					Vestibulum volutpat, dolor eu rutrum consequat, libero justo lacinia
					tortor, id varius tortor ante sit amet nisl. Aenean at dui diam. Cras
					a ligula a ante aliquam lacinia. Ut dolor quam, gravida eu dui quis,
					molestie lacinia dolor. Fusce lacus mi, pharetra molestie tortor eu,
					finibus lacinia libero.
				</Text>

				<LinkList
					links={[
						{ href: '#', label: 'Home' },
						{ href: '#', label: 'Establishments' },
						{ href: '#', label: 'Applications' },
					]}
				/>

				<Button size="md">Submit</Button>

				<TextInput label="Name" />

				<ControlGroup>
					<Radio checked={false}>Phone</Radio>
					<Radio checked={false}>Tablet</Radio>
					<Radio checked={true}>Laptop</Radio>
				</ControlGroup>

				<Checkbox checked={false}>Label</Checkbox>

				<Accordion>
					<AccordionItem title="Accordion">
						<AccordionItemContent>
							<Text>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Pellentesque at arcu eleifend, varius enim non, eleifend nibh.
								Quisque ac lacinia elit. Orci varius natoque penatibus et magnis
								dis parturient montes, nascetur ridiculus mus. Integer
								scelerisque at ligula tempor eleifend. Vestibulum volutpat,
								dolor eu rutrum consequat, libero justo lacinia tortor, id
								varius tortor ante sit amet nisl. Aenean at dui diam. Cras a
								ligula a ante aliquam lacinia. Ut dolor quam, gravida eu dui
								quis, molestie lacinia dolor. Fusce lacus mi, pharetra molestie
								tortor eu, finibus lacinia libero.
							</Text>
						</AccordionItemContent>
					</AccordionItem>
				</Accordion>

				<ProgressIndicator
					items={[
						{ href: '#', label: 'Introduction', status: 'doing' },
						{ href: '#', label: 'Business Contacts', status: 'todo' },
						{ href: '#', label: 'Case Studies', status: 'done' },
					]}
				/>

				<Card>
					<CardInner>
						<Body>
							<h2>Card title with a longer heading</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
								non finibus leo, non rhoncus neque. Nunc et dui cursus, euismod
								felis eget, tristique augue. Praesent consequat mollis lorem id
								efficitur.
							</p>
						</Body>
					</CardInner>
				</Card>
			</Stack>
		</Content>
	);
};

export const Light = () => {
	return (
		<Box palette="light" background="body">
			<KitchenSink />
		</Box>
	);
};

export const Dark = () => {
	return (
		<Box palette="dark" background="body">
			<KitchenSink />
		</Box>
	);
};
