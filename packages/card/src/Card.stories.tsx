import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { Heading } from '@ag.ds-next/heading';
import { ChevronRightIcon } from '@ag.ds-next/icon';
import { Body } from '@ag.ds-next/body';

import { Card } from './Card';
import { CardInner } from './CardInner';
import { CardLink } from './CardLink';
import { CardList } from './CardList';
import { CardHeader } from './CardHeader';
import { CardFooter } from './CardFooter';

export default {
	title: 'layout/Card',
	component: Card,
	subcomponents: { CardInner, CardLink, CardList, CardHeader, CardFooter },
} as ComponentMeta<typeof Card>;

export const OnLight: ComponentStory<typeof Card> = (args) => (
	<Box maxWidth={300}>
		<Card {...args}>
			<CardInner>
				<Heading as="h2" type="h3" paddingBottom={1}>
					Card heading
				</Heading>
				<CardLink href="#">
					Linking out
					<ChevronRightIcon weight="bold" size="sm" />
				</CardLink>
			</CardInner>
		</Card>
	</Box>
);

export const OnDark: ComponentStory<typeof Card> = (args) => (
	<Box palette="dark" background="body" padding={1.5}>
		<Box maxWidth={300}>
			<Card {...args}>
				<CardInner>
					<Heading as="h2" type="h3" paddingBottom={1}>
						Card heading
					</Heading>
					<CardLink href="#">
						Linking out
						<ChevronRightIcon weight="bold" size="sm" />
					</CardLink>
				</CardInner>
			</Card>
		</Box>
	</Box>
);

export const WithBody: ComponentStory<typeof Card> = (args) => (
	<Box palette="light" background="body" maxWidth={300}>
		<Card {...args}>
			<CardInner>
				<Body>
					<h2>Card heading</h2>
					<h3>Some more information</h3>
					<p>
						Cum sociis natoque penatibus et magnis dis parturient montes,
						nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor
						fringilla.{' '}
					</p>
				</Body>
			</CardInner>
		</Card>
	</Box>
);

export const Link: ComponentStory<typeof Card> = (args) => (
	<Box maxWidth={300}>
		<Card shadow clickable {...args}>
			<CardInner>
				<Heading as="h2" type="h3" paddingBottom={1}>
					Card heading
				</Heading>
				<CardLink href="#">
					Linking out
					<ChevronRightIcon weight="bold" size="sm" />
				</CardLink>
			</CardInner>
		</Card>
	</Box>
);

export const FeatureHeader: ComponentStory<typeof CardHeader> = (args) => (
	<Card>
		<CardHeader {...args}>
			<Body>
				<h4>Feature card title</h4>
			</Body>
		</CardHeader>
		<CardInner>
			<Body>
				<p>Additional conent relating to the card</p>
			</Body>
		</CardInner>
	</Card>
);
FeatureHeader.args = {
	background: 'body',
};

export const FeatureFooter: ComponentStory<typeof CardFooter> = (args) => (
	<Card>
		<CardInner>
			<Body>
				<h3>Card title</h3>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
					voluptatibus.
				</p>
			</Body>
		</CardInner>
		<CardFooter {...args}>
			<a href="#">Action</a>
		</CardFooter>
	</Card>
);
FeatureFooter.args = {
	background: 'body',
};

export const CardListStory: ComponentStory<typeof CardList> = (args) => (
	<CardList {...args}>
		<Card shadow clickable>
			<CardInner>
				<Body>
					<h2>Card Title</h2>
					<p>Some content</p>
				</Body>
			</CardInner>
		</Card>
		<Card shadow clickable>
			<CardInner>
				<Body>
					<h2>Card Title</h2>
					<p>Some content</p>
					<p>Additional content</p>
				</Body>
			</CardInner>
		</Card>
		<Card shadow clickable>
			<CardInner>
				<Body>
					<h2>Card Title</h2>
					<p>Some content</p>
				</Body>
			</CardInner>
		</Card>
		<Card shadow clickable>
			<CardInner>
				<Body>
					<h2>Card Title</h2>
					<p>Some content</p>
				</Body>
			</CardInner>
		</Card>
		<Card shadow clickable>
			<CardInner>
				<Body>
					<h2>Card Title</h2>
					<p>Some content</p>
				</Body>
			</CardInner>
		</Card>
		<Card shadow clickable>
			<CardInner>
				<Body>
					<h2>Card Title</h2>
					<p>Some content</p>
				</Body>
			</CardInner>
		</Card>
		<Card shadow clickable>
			<CardInner>
				<Body>
					<h2>Card Title</h2>
					<p>Some content</p>
				</Body>
			</CardInner>
		</Card>
	</CardList>
);
CardListStory.storyName = 'Card list';
CardListStory.args = {
	gap: 1,
	templateColumns: [1, 2, 4],
};
