/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Logo } from '@ag.ds-next/ag-branding';
import { Box, Divider, Stack } from '@ag.ds-next/box';
import { Columns, Column } from '@ag.ds-next/columns';
import { H3 } from '@ag.ds-next/heading';
import { Text, TextLink } from '@ag.ds-next/text';
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
	const columnSpanning = { xs: 12, sm: 6, md: 4, lg: 3 } as const;
	return (
		<Footer variant={args.variant} aria-label="footer">
			<Columns>
				<Column columnSpan={columnSpanning}>
					<Stack gap={0.5}>
						<H3>Section</H3>
						<LinkList
							links={[
								{ href: '#', label: 'A really long link title' },
								{ href: '#', label: 'Terms and conditions' },
								{ href: '#', label: 'Another really long link title' },
							]}
						/>
					</Stack>
				</Column>
				<Column columnSpan={columnSpanning}>
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
				</Column>
				<Column columnSpan={columnSpanning}>
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
				</Column>
				<Column columnSpan={columnSpanning}>
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
				</Column>
			</Columns>
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
