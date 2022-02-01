/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Logo } from '@ag.ds-next/ag-branding';
import { Box, Divider, Stack } from '@ag.ds-next/box';
import { tokens } from '@ag.ds-next/core';
import { H3 } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import { TextLink } from '@ag.ds-next/text-link';
import { LinkList } from '@ag.ds-next/link-list';
import { Footer } from './Footer';

export default {
	title: 'layout/Footer',
	component: Footer,
} as ComponentMeta<typeof Footer>;

const AgSimpleFooter: ComponentStory<typeof Footer> = (args) => {
	return (
		<Footer variant={args.variant}>
			<LinkList
				horizontal
				links={[
					{ href: '#', label: 'Link 1' },
					{ href: '#', label: 'Link 2' },
					{ href: '#', label: 'Link 3' },
				]}
			/>
			<Divider accent />

			<Text>
				<small>
					&copy; Commonwealth of Australia,{' '}
					<TextLink
						href="https://github.com/govau/design-system-components/blob/master/LICENSE.md"
						rel="external license"
					>
						MIT licensed
					</TextLink>
				</small>
			</Text>
		</Footer>
	);
};

export const SimpleFooterLight = AgSimpleFooter.bind({});
SimpleFooterLight.args = {
	variant: 'light',
};

export const SimpleFooterLightAlt = AgSimpleFooter.bind({});
SimpleFooterLight.args = {
	variant: 'lightAlt',
};

export const SimpleFooterDark = AgSimpleFooter.bind({});
SimpleFooterDark.args = {
	variant: 'dark',
};

export const SimpleFooterDarkAlt = AgSimpleFooter.bind({});
SimpleFooterDark.args = {
	variant: 'darkAlt',
};

const AgComplexFooter: ComponentStory<typeof Footer> = (args) => {
	return (
		<Footer variant={args.variant}>
			<Box
				aria-label="footer"
				css={{
					display: 'grid',
					gridGap: '1.5rem',

					[tokens.mediaQuery.min.sm]: {
						gridTemplateColumns: 'repeat(2, [col-start] 1fr)',
					},

					[tokens.mediaQuery.min.lg]: {
						gridTemplateColumns: 'repeat(4, [col-start] 1fr)',
					},
				}}
			>
				<Stack gap={0.5}>
					<H3>Section</H3>
					<LinkList
						links={[
							{ href: '#', label: 'Link 1' },
							{ href: '#', label: 'Link 2' },
							{ href: '#', label: 'Link 3' },
						]}
					/>
				</Stack>
				<Stack gap={0.5}>
					<H3>Section</H3>
					<LinkList
						links={[
							{ href: '#', label: 'Link 1' },
							{ href: '#', label: 'Link 2' },
							{ href: '#', label: 'Link 3' },
						]}
					/>
				</Stack>
				<Stack gap={0.5}>
					<H3>Section</H3>
					<LinkList
						links={[
							{ href: '#', label: 'Link 1' },
							{ href: '#', label: 'Link 2' },
							{ href: '#', label: 'Link 3' },
						]}
					/>
				</Stack>
				<Stack gap={0.5}>
					<H3>Section</H3>
					<LinkList
						links={[
							{ href: '#', label: 'Link 1' },
							{ href: '#', label: 'Link 2' },
							{ href: '#', label: 'Link 3' },
						]}
					/>
				</Stack>
			</Box>
			<Divider />
			<Text as="p">Footer text</Text>

			<Box maxWidth="240px">
				<Logo />
			</Box>

			<Divider />
			<Text>
				<small>
					&copy; Commonwealth of Australia,{' '}
					<TextLink
						href="https://github.com/govau/design-system-components/blob/master/LICENSE.md"
						rel="external license"
					>
						MIT licensed
					</TextLink>
				</small>
			</Text>
		</Footer>
	);
};

export const ComplexFooterLight = AgComplexFooter.bind({});
ComplexFooterLight.args = {
	variant: 'light',
};

export const ComplexFooterLightAlt = AgComplexFooter.bind({});
ComplexFooterLight.args = {
	variant: 'lightAlt',
};

export const ComplexFooterDark = AgComplexFooter.bind({});
ComplexFooterDark.args = {
	variant: 'dark',
};

export const ComplexFooterDarkAlt = AgComplexFooter.bind({});
ComplexFooterDark.args = {
	variant: 'darkAlt',
};
