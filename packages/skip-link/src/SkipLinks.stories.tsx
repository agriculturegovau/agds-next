import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Body } from '@ag.ds-next/body';
import { Stack } from '@ag.ds-next/box';
import { SkipLink } from './SkipLink';
import { SkipLinks } from './SkipLinks';
import { SkipLinkContainer } from './SkipLinkContainer';

export default {
	title: 'navigation/SkipLink',
	component: SkipLinks,
	subcomponents: { SkipLinkContainer, SkipLink },
} as ComponentMeta<typeof SkipLink>;

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
		<SkipLinkContainer>
			<SkipLink href="#main-content">Skip to main content</SkipLink>
			<SkipLink href="#main-nav">Skip to main navigation</SkipLink>
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
