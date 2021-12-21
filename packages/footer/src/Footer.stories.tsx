/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Divider, Flex } from '@ag.ds-next/box';
import { Heading } from '@ag.ds-next/heading';
import { TextLink } from '@ag.ds-next/text-link';
import { LinkList } from '@ag.ds-next/link-list';
import { Footer, FooterContainer } from './Footer';

export default {
	title: 'layout/Footer',
	component: Footer,
	// subcomponents: [FooterContainer],
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => {
	return <Footer {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
	variant: 'dark',
};
Primary.parameters = {
	variant: {
		values: ['dark', 'darkAlt', 'light', 'lightAlt'],
	},
	layout: 'fullscreen',
};

export const AgComplexFooter = (args) => {
	return (
		<FooterContainer variant={args.variant}>
			<Flex
				className="au-footer__navigation row"
				aria-label="footer"
				gap={1}
				css={{
					display: 'grid',
					gridTemplateColumns: 'repeat(12, [col-start] 1fr)',
				}}
			>
				<div className="col-md-3 col-sm-6">
					<Heading type="h3">Section</Heading>
					<LinkList
						links={[
							{ link: '#', text: 'Link 1' },
							{ link: '#', text: 'Link 2' },
							{ link: '#', text: 'Link 3' },
						]}
					/>
				</div>
				<div className="col-md-3 col-sm-6">
					<Heading type="h3">Section</Heading>
					<LinkList
						links={[
							{ link: '#', text: 'Link 1' },
							{ link: '#', text: 'Link 2' },
							{ link: '#', text: 'Link 3' },
						]}
					/>
				</div>
			</Flex>
			<Divider />
			<p>Footer text</p>
			<Divider />
			<img
				className="au-responsive-media-img"
				src="https://designsystem.gov.au/assets/img/placeholder/157X80.png"
				alt="Placeholder image"
				width="240px"
			/>
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
		</FooterContainer>
	);
};

AgComplexFooter.parameters = {
	layout: 'fullscreen',
};

export const AgSimpleFooter = (args) => {
	return (
		<FooterContainer variant={args.variant}>
			<LinkList
				inline
				links={[
					{ link: '#', text: 'Link 1' },
					{ link: '#', text: 'Link 2' },
					{ link: '#', text: 'Link 3' },
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
		</FooterContainer>
	);
};
AgSimpleFooter.parameters = {
	layout: 'fullscreen',
};
