import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Columns, Column } from '@ag.ds-next/columns';
import { Box } from '@ag.ds-next/box';
import { Heading } from '@ag.ds-next/heading';
import { Icon } from '@ag.ds-next/icon';
import { Body } from '@ag.ds-next/body';

import { Card } from './Card';
import { CardInner } from './CardInner';
import { CardLink } from '.';

export default {
	title: 'layout/Card',
	component: Card,
} as ComponentMeta<typeof Card>;

export const OnLight: ComponentStory<typeof Card> = (args) => (
	<Box maxWidth={300}>
		<Card {...args}>
			<CardInner>
				<Heading as="h2" type="h3" paddingBottom={1}>
					Card heading
				</Heading>
				<CardLink href="http://google.com" target="_blank">
					Linking out
					<Icon icon="chevronRight" size={1} />
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
						<Icon icon="chevronRight" size={1} />
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

export const CardList: ComponentStory<typeof Card> = (args) => (
	<Box palette="light" background="body">
		<Columns>
			{[
				'Mollis Tristique',
				'Sollicitudin Ornare',
				'Fermentum',
				'Vehicula Fringilla',
				'Ridiculus Malesuada',
			].map((title) => (
				<Column columnSpan={3} key={title}>
					<Card {...args}>
						<CardInner>
							<Heading as="h2" type="h3">
								{title}
							</Heading>
							<CardLink href="#">
								More information
								<Icon icon="chevronRight" size={1} />
							</CardLink>
						</CardInner>
					</Card>
				</Column>
			))}
		</Columns>
	</Box>
);

CardList.args = {
	shadow: true,
	clickable: true,
};
