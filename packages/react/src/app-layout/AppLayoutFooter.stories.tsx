import type { Meta, StoryObj } from '@storybook/react';
import { useMemo } from 'react';
import { tokens } from '../core';
import { LinkList } from '../link-list';
import { Text } from '../text';
import { AppLayoutFooter, AppLayoutFooterDivider } from './AppLayoutFooter';

const meta: Meta<typeof AppLayoutFooter> = {
	title: 'Layout/AppLayout/AppLayoutFooter',
	component: AppLayoutFooter,
	render: function Render(props) {
		const year = useMemo(() => new Date().getFullYear(), []);
		return (
			<AppLayoutFooter {...props}>
				<nav aria-label="footer">
					<LinkList
						links={[
							{ label: 'Home', href: '/' },
							{
								label: 'Storybook',
								href: 'https://design-system.agriculture.gov.au/storybook/index.html',
							},
							{
								label: 'Playroom',
								href: 'https://design-system.agriculture.gov.au/playroom',
							},
							{
								label: 'Starter kit',
								href: 'https://github.com/agriculturegovau/agds-starter-kit',
							},
						]}
						horizontal
					/>
				</nav>
				<AppLayoutFooterDivider />
				<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
					We acknowledge the traditional owners of country throughout Australia
					and recognise their continuing connection to land, waters and culture.
					We pay our respects to their Elders past, present and emerging.
				</Text>
				<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
					&copy; {year} Department of Agriculture, Fisheries and Forestry
				</Text>
			</AppLayoutFooter>
		);
	},
};

export default meta;

type Story = StoryObj<typeof AppLayoutFooter>;

export const Basic: Story = {};

export const BodyAltBackground: Story = {
	args: {
		background: 'bodyAlt',
	},
};
