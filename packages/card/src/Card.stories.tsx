import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { Heading } from '@ag.ds-next/heading';

import { Card } from './Card';
import { CardInner } from './CardInner';

export default {
	title: 'layout/Card',
	component: Card,
} as ComponentMeta<typeof Card>;

export const Basic: ComponentStory<typeof Card> = (args) => (
	<Box theme="light" background="page">
		<Card {...args}>
			<CardInner>
				<Heading>Card heading</Heading>
			</CardInner>
		</Card>
	</Box>
);
