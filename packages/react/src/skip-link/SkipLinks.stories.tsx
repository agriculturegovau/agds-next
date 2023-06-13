import { Fragment } from 'react';
import { ComponentMeta } from '@storybook/react';
import { Prose } from '../prose';
import { Stack } from '../stack';
import { SkipLinkItem } from './SkipLinkItem';
import { SkipLinks } from './SkipLinks';
import { SkipLinkContainer } from './SkipLinkContainer';

export default {
	title: 'navigation/SkipLinks',
	component: SkipLinks,
	subcomponents: { SkipLinkContainer, SkipLinkItem },
} as ComponentMeta<typeof SkipLinks>;

export const Basic = () => (
	<Fragment>
		<SkipLinks
			links={[
				{ href: '#main-content', label: 'Skip to main content' },
				{ href: '#main-nav', label: 'Skip to main navigation' },
			]}
		/>
		<ExampleContent />
	</Fragment>
);

export const Modular = () => (
	<Fragment>
		<SkipLinkContainer aria-label="skip links">
			<SkipLinkItem href="#main-content">Skip to main content</SkipLinkItem>
			<SkipLinkItem href="#main-nav">Skip to main navigation</SkipLinkItem>
		</SkipLinkContainer>
		<ExampleContent />
	</Fragment>
);

const ExampleContent = () => (
	<Prose>
		<Stack gap={4}>
			<p>This example space contains a visually hidden feature.</p>
			<nav id="main-nav" tabIndex={-1} css={{ '&:focus': { outline: 'none' } }}>
				<ul>
					<li>
						<a href="#">Some navigation</a>
					</li>
				</ul>
			</nav>
			<main
				id="main-content"
				tabIndex={-1}
				css={{ '&:focus': { outline: 'none' } }}
			>
				Some content here with <a href="#">an example link</a>
			</main>
		</Stack>
	</Prose>
);
