/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Logo } from '@ag.ds-next/ag-branding';
import { Box, Stack } from '@ag.ds-next/box';
import { Columns, Column } from '@ag.ds-next/columns';
import { H3 } from '@ag.ds-next/heading';
import { Text, TextLink } from '@ag.ds-next/text';
import { LinkList } from '@ag.ds-next/link-list';
import { Footer } from './Footer';
import { FooterDivider } from '.';

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
					{ href: '#', label: 'Home' },
					{ href: '#', label: 'Terms and conditions' },
					{ href: '#', label: 'Privacy policy' },
					{ href: '#', label: 'A really long link title' },
				]}
			/>
			<FooterDivider />

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

export const AgricultureVariant = AgSimpleFooter.bind({});
AgricultureVariant.args = {
	variant: 'agriculture',
};
export const LightVariant = AgSimpleFooter.bind({});
LightVariant.args = {
	variant: 'light',
};

export const LightAltVariant = AgSimpleFooter.bind({});
LightAltVariant.args = {
	variant: 'lightAlt',
};

export const DarkVariant = AgSimpleFooter.bind({});
DarkVariant.args = {
	variant: 'dark',
};

export const DarkAltVariant = AgSimpleFooter.bind({});
DarkAltVariant.args = {
	variant: 'darkAlt',
};

const AgComplexFooter: ComponentStory<typeof Footer> = (args) => {
	const columnSpanning = { xs: 12, sm: 6, md: 4, lg: 3 } as const;
	return (
		<Footer variant={args.variant}>
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
			<FooterDivider />
			<Text as="p">Footer text</Text>

			<Box maxWidth="240px">
				<Logo />
			</Box>

			<FooterDivider />
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

export const ComplexContent = AgComplexFooter.bind({});
ComplexContent.args = {
	variant: 'agriculture',
};
