import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Body } from '@ag.ds-next/body';
import { Stack } from '@ag.ds-next/box';
import { SkipLinkItem } from './SkipLinkItem';
import { SkipLinks } from './SkipLinks';
import { SkipLinkContainer } from './SkipLinkContainer';

export default {
	title: 'navigation/SkipLinks',
	component: SkipLinks,
	subcomponents: { SkipLinkContainer, SkipLinkItem },
} as ComponentMeta<typeof SkipLinkItem>;

export const Basic = () => (
	<>
		<SkipLinks
			links={[
				{ href: '#main-content', label: 'Skip to main content' },
				{ href: '#main-nav', label: 'Skip to main navigation' },
			]}
		/>
		<ExampleContent />
	</>
);

export const Modular = () => (
	<>
		<SkipLinkContainer aria-label="skip links navigation">
			<SkipLinkItem href="#main-content">Skip to main content</SkipLinkItem>
			<SkipLinkItem href="#main-nav">Skip to main navigation</SkipLinkItem>
		</SkipLinkContainer>
		<ExampleContent />
	</>
);

const ExampleContent = () => (
	<Body>
		<Stack gap={4}>
			<p>This example space contains a visually hidden feature.</p>
			<nav id="main-nav">
				<ul>
					<li>
						<a href="#">Some navigation</a>
					</li>
				</ul>
			</nav>
			<main id="main-content">
				Some content here with <a href="#">an example link</a>
			</main>
		</Stack>
	</Body>
);
