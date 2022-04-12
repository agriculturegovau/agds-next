import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
	SearchBox,
	SearchBoxInput,
	SearchBoxButton,
} from '@ag.ds-next/search-box';
import { Heading } from '@ag.ds-next/heading';
import { Box, Flex, Stack } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { HeroBanner } from './HeroBanner';
import { tokens } from '@ag.ds-next/core';
import { Button } from '@ag.ds-next/button';

export default {
	title: 'layout/HeroBanner',
	component: HeroBanner,
} as ComponentMeta<typeof HeroBanner>;

const Template: ComponentStory<typeof HeroBanner> = (args) => (
	<HeroBanner {...args} />
);

const commonArgs = {
	mobileImage: (
		<img
			src="https://steelthreads.github.io/export-landing/homepage-harvest-medium.jpg"
			style={{ display: 'block', width: '100%', height: 'auto' }}
			alt="Hero image"
		/>
	),
	backgroundImageSrc:
		'https://steelthreads.github.io/export-landing/homepage-harvest-medium.jpg',
	children: (
		<Box
			width="100%"
			maxWidth={[null, '66%', '66%', tokens.maxWidth.bodyText]}
			paddingY={[0, 1, 1, 2]}
		>
			<Stack gap={[1.5, 2]}>
				<Stack gap={[0.5, 1]}>
					<Heading type="h1" fontSize="xxxl">
						Hero banner title
					</Heading>
					<Text as="p" fontSize="md">
						Hero banner paragraph text
					</Text>
				</Stack>
				<SearchBox onSubmit={console.log}>
					<SearchBoxInput label="Search this website" />
					<SearchBoxButton>Search</SearchBoxButton>
				</SearchBox>
			</Stack>
		</Box>
	),
};

export const LightVariant = Template.bind({});
LightVariant.args = {
	...commonArgs,
	variant: 'light',
};

export const LightAlt = Template.bind({});
LightAlt.args = {
	...commonArgs,
	variant: 'lightAlt',
};

export const Dark = Template.bind({});
Dark.args = {
	...commonArgs,
	variant: 'dark',
};

export const DarkAlt = Template.bind({});
DarkAlt.args = {
	...commonArgs,
	variant: 'darkAlt',
};

export const Buttons = Template.bind({});
Buttons.args = {
	children: (
		<Box
			maxWidth={tokens.maxWidth.bodyText}
			width="100%"
			paddingY={[0, 1, 1, 2]}
		>
			<Stack gap={[1.5, 2]}>
				<Stack gap={[0.5, 1]}>
					<Heading type="h1" fontSize="xxxl">
						Hero banner title
					</Heading>
					<Text as="p" fontSize="md">
						Hero banner paragraph text
					</Text>
				</Stack>
				<Flex flexDirection={['column', 'row']} gap={1}>
					<Button>Primary button</Button>
					<Button variant="secondary">Secondary button</Button>
				</Flex>
			</Stack>
		</Box>
	),
};

export const Centered = Template.bind({});
Centered.args = {
	children: (
		<Flex
			flexDirection="column"
			alignItems="center"
			maxWidth={tokens.maxWidth.bodyText}
			width="100%"
			paddingY={[0, 1, 1, 2]}
			css={{ margin: '0 auto', textAlign: 'center' }}
		>
			<Stack gap={[1.5, 2]}>
				<Stack gap={[0.5, 1]}>
					<Heading type="h1" fontSize="xxxl">
						Hero banner title
					</Heading>
					<Text as="p" fontSize="md">
						Hero banner paragraph text
					</Text>
				</Stack>
				<Flex flexDirection={['column', 'row']} gap={1}>
					<Button>Primary button</Button>
					<Button variant="secondary">Secondary button</Button>
				</Flex>
			</Stack>
		</Flex>
	),
};
