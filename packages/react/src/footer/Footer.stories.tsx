import { useMemo } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { tokens } from '../core';
import { Logo } from '../ag-branding';
import { Box } from '../box';
import { Stack } from '../stack';
import { Columns, Column } from '../columns';
import { Heading } from '../heading';
import { Text } from '../text';
import { LinkList } from '../link-list';
import { Footer, FooterDivider } from './';

const meta: Meta<typeof Footer> = {
	title: 'layout/Footer',
	component: Footer,
	render: function Render(props) {
		const year = useMemo(() => new Date().getFullYear(), []);
		return (
			<Footer {...props}>
				<nav aria-label="footer">
					<LinkList
						horizontal
						links={[
							{ href: '#', label: 'Home' },
							{ href: '#', label: 'Terms and conditions' },
							{ href: '#', label: 'Privacy policy' },
							{ href: '#', label: 'A really long link title' },
						]}
					/>
				</nav>
				<FooterDivider />
				<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
					We acknowledge the traditional owners of country throughout Australia
					and recognise their continuing connection to land, waters and culture.
					We pay our respects to their Elders past, present and emerging.
				</Text>
				<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
					&copy; {year} Department of Agriculture, Fisheries and Forestry
				</Text>
			</Footer>
		);
	},
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const BodyBackground: Story = {
	name: 'Body background',
	args: {
		background: 'body',
	},
};

export const BodyAltBackground: Story = {
	name: 'BodyAlt background',
	args: {
		background: 'bodyAlt',
	},
};

export const ComplexContent: Story = {
	args: {
		background: 'bodyAlt',
	},
	render: function Render() {
		const year = useMemo(() => new Date().getFullYear(), []);
		const columnSpanning = { xs: 12, sm: 6, lg: 3 } as const;
		return (
			<Footer>
				<nav aria-label="footer">
					<Columns>
						<Column columnSpan={columnSpanning}>
							<Stack gap={0.5}>
								<Heading as="h2" type="h3">
									Section
								</Heading>
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
								<Heading as="h2" type="h3">
									Section
								</Heading>
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
								<Heading as="h2" type="h3">
									Section
								</Heading>
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
								<Heading as="h2" type="h3">
									Section
								</Heading>
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
				</nav>
				<FooterDivider />
				<Text as="p">Footer text</Text>
				<Box maxWidth="240px">
					<Logo />
				</Box>
				<FooterDivider />
				<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
					We acknowledge the traditional owners of country throughout Australia
					and recognise their continuing connection to land, waters and culture.
					We pay our respects to their Elders past, present and emerging.
				</Text>
				<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
					&copy; {year} Department of Agriculture, Fisheries and Forestry
				</Text>
			</Footer>
		);
	},
};
