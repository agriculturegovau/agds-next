/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Divider, Flex } from '@ag.ds-next/box';
import { Heading } from '@ag.ds-next/heading';
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
				inline
				links={[
					{ href: '#', label: 'Link 1' },
					{ href: '#', label: 'Link 2' },
					{ href: '#', label: 'Link 3' },
				]}
			/>
			<Divider accent />

			<p>
				<small>
					&copy; Commonwealth of Australia,{' '}
					<TextLink
						href="https://github.com/govau/design-system-components/blob/master/LICENSE.md"
						rel="external license"
					>
						MIT licensed
					</TextLink>
				</small>
			</p>
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
			<Flex
				className="au-footer__navigation row"
				aria-label="footer"
				gap={1}
				css={{
					display: 'grid',
					gridTemplateColumns: 'repeat(4, [col-start] 1fr)',
				}}
			>
				<div>
					<Heading type="h3">Section</Heading>
					<LinkList
						links={[
							{ href: '#', label: 'Link 1' },
							{ href: '#', label: 'Link 2' },
							{ href: '#', label: 'Link 3' },
						]}
					/>
				</div>
				<div>
					<Heading type="h3">Section</Heading>
					<LinkList
						links={[
							{ href: '#', label: 'Link 1' },
							{ href: '#', label: 'Link 2' },
							{ href: '#', label: 'Link 3' },
						]}
					/>
				</div>
			</Flex>
			<Divider />
			<Text as="p">Footer text</Text>
			<img
				className="au-responsive-media-img"
				src="https://designsystem.gov.au/assets/img/placeholder/157X80.png"
				alt="Placeholder image"
				width="240px"
			/>
			<Divider />
			<p>
				<small>
					&copy; Commonwealth of Australia,{' '}
					<TextLink
						href="https://github.com/govau/design-system-components/blob/master/LICENSE.md"
						rel="external license"
					>
						MIT licensed
					</TextLink>
				</small>
			</p>
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
