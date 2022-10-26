import { useMemo } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { tokens } from '../../core/src';
import { Logo } from '../../ag-branding/src';
import { Box, Stack } from '../../box/src';
import { Columns, Column } from '../../columns/src';
import { Heading } from '../../heading/src';
import { Text } from '../../text/src';
import { LinkList } from '../../link-list/src';
import { Footer, FooterDivider } from './';

export default {
	title: 'layout/Footer',
	component: Footer,
} as ComponentMeta<typeof Footer>;

const AgSimpleFooter: ComponentStory<typeof Footer> = (args) => {
	const year = useMemo(() => new Date().getFullYear(), []);
	return (
		<Footer background={args.background}>
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
};

export const BodyBackground = AgSimpleFooter.bind({});
BodyBackground.storyName = 'Body background';
BodyBackground.args = {
	background: 'body',
};

export const BodyAltBackground = AgSimpleFooter.bind({});
BodyAltBackground.storyName = 'BodyAlt background';
BodyAltBackground.args = {
	background: 'bodyAlt',
};

const AgComplexFooter: ComponentStory<typeof Footer> = (args) => {
	const year = useMemo(() => new Date().getFullYear(), []);
	const columnSpanning = { xs: 12, sm: 6, lg: 3 } as const;
	return (
		<Footer background={args.background}>
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
};

export const ComplexContent = AgComplexFooter.bind({});
ComplexContent.args = {
	background: 'bodyAlt',
};
