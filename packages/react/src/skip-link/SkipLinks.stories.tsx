import { Fragment } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Prose } from '../prose';
import { Stack } from '../stack';
import { SkipLinkItem } from './SkipLinkItem';
import { SkipLinks } from './SkipLinks';
import { SkipLinkContainer } from './SkipLinkContainer';

const meta: Meta<typeof SkipLinks> = {
	title: 'navigation/SkipLinks',
	component: SkipLinks,
};

export default meta;

type Story = StoryObj<typeof SkipLinks>;

export const Basic: Story = {
	args: {
		links: [
			{ href: '#main-content', label: 'Skip to main content' },
			{ href: '#main-nav', label: 'Skip to main navigation' },
		],
	},
	render: (args) => (
		<Fragment>
			<SkipLinks {...args} />
			<ExampleContent />
		</Fragment>
	),
};

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
			<nav css={{ '&:focus': { outline: 'none' } }} id="main-nav" tabIndex={-1}>
				<ul>
					<li>
						<a href="#">Some navigation</a>
					</li>
				</ul>
			</nav>
			<main
				css={{ '&:focus': { outline: 'none' } }}
				id="main-content"
				tabIndex={-1}
			>
				Some content here with <a href="#">an example link</a>
			</main>
		</Stack>
	</Prose>
);
