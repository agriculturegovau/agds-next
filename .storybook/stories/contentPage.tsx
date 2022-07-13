import React, { useMemo } from 'react';
import { Logo } from '@ag.ds-next/ag-branding';
import { Header } from '@ag.ds-next/header';
import { AvatarIcon } from '@ag.ds-next/icon';
import { MainNav, MainNavLink } from '@ag.ds-next/main-nav';
import { Footer, FooterDivider } from '@ag.ds-next/footer';
import { LinkList } from '@ag.ds-next/link-list';
import { tokens } from '@ag.ds-next/core';
import { Body } from '@ag.ds-next/body';
import { PageContent, ContentBleed } from '@ag.ds-next/content';
import { Columns, Column } from '@ag.ds-next/columns';
import { SideNav } from '@ag.ds-next/side-nav';
import { Breadcrumbs } from '@ag.ds-next/breadcrumbs';
import { Box, Stack } from '@ag.ds-next/box';
import { InpageNav } from '@ag.ds-next/inpage-nav';
import { DirectionLink } from '@ag.ds-next/direction-link';
import { Callout } from '@ag.ds-next/callout';
import { Text } from '@ag.ds-next/text';
import { H1 } from '@ag.ds-next/heading';
import {
	Accordion,
	AccordionItem,
	AccordionItemContent,
} from '@ag.ds-next/accordion';

export default {
	title: 'Pages/Content Page',
};

function ContentPageTemplate() {
	return (
		<Box>
			<Stack>
				<Header
					variant="dark"
					logo={<Logo />}
					heading="Export Service"
					subline="Supporting Australian agricultural exports"
				/>
				<MainNav
					id="main-nav"
					variant="agriculture"
					links={[
						{ label: 'Home', href: '/' },
						{ label: 'Category 1', href: '/category' },
					]}
					activePath={'/'}
					rightContent={
						<MainNavLink
							label="Sign in"
							href="/sign-in-form"
							icon={AvatarIcon}
						/>
					}
				/>
			</Stack>
			<PageContent>
				<Columns>
					<Column columnSpan={{ xs: 12, md: 3 }}>
						<ContentBleed visible={{ md: false }}>
							<SideNav
								collapseTitle="In this section"
								title="Category 1"
								titleLink="/"
								activePath="/category/subcategory/content"
								items={[
									{
										href: '#',
										label: 'Content page',
									},
									{
										href: '/category/subcategory/content',
										label: 'Content page',
										items: [
											{
												href: '#',
												label: 'Side nav item level 3',
											},
											{
												href: '#',
												label: 'Side nav item level 3',
											},
										],
									},
									{
										href: '#',
										label: 'Content page',
									},
									{
										href: '#',
										label: 'Content page',
									},
									{
										href: '#',
										label: 'Content page',
									},
									{
										href: '#',
										label: 'Content page',
									},
									{
										href: '#',
										label: 'Content page',
									},
									{
										href: '#',
										label: 'Content page',
									},
									{
										href: '#',
										label: 'Content page',
									},
								]}
							/>
						</ContentBleed>
					</Column>
					<Column columnSpan={{ xs: 12, md: 8 }} columnStart={{ md: 5 }}>
						<Stack gap={3}>
							<Breadcrumbs
								links={[
									{ href: '/', label: 'Home' },
									{ href: '/category', label: 'Category 1' },
									{
										href: '/category/subcategory',
										label: 'Subcategory page',
									},
									{ label: 'Content page' },
								]}
							/>

							<Stack gap={1.5}>
								<Stack>
									<Text
										fontSize="sm"
										color="muted"
										fontWeight="bold"
										lineHeight="heading"
									>
										Pretext
									</Text>

									<H1>Content page heading - xxl/display (H1)</H1>
								</Stack>

								<Text as="p" fontSize="md" color="muted">
									Introductory paragraph providing context for this content page
									- md/default (P).
								</Text>
							</Stack>

							<InpageNav
								title="Content"
								links={[
									{ href: '#section-1', label: 'Section 1' },
									{ href: '#section-2', label: 'Section 2' },
									{ href: '#section-3', label: 'Section 3' },
									{ href: '#section-4', label: 'Section 4' },
								]}
							/>
							{Array.from(Array(4).keys()).map((idx) => (
								<Stack
									key={idx}
									id={`section-${idx + 1}`}
									alignItems="flex-start"
									gap={1.5}
								>
									<Body>
										<h2>Content page section heading - xl/display (H2)</h2>
										<p>
											This is a standard paragraph - sm/default (P). This is a
											standard paragraph - sm/default (P). This is a standard
											paragraph - sm/default (P). This is a standard paragraph -
											sm/default (P). This is a standard paragraph - sm/default
											(P). This is a standard paragraph - sm/default (P).
										</p>
									</Body>
									{idx === 2 && (
										<Accordion>
											<AccordionItem title="Accordion 1">
												<AccordionItemContent>
													<Body>
														<p>
															This is a standard paragraph - sm/default (P).
															This is a standard paragraph - sm/default (P).
															This is a standard paragraph - sm/default (P).
															This is a standard paragraph - sm/default (P).
															This is a standard paragraph - sm/default (P).
															This is a standard paragraph - sm/default (P).
														</p>
													</Body>
												</AccordionItemContent>
											</AccordionItem>
											<AccordionItem title="Accordion 2">
												<AccordionItemContent>
													<Body>
														<p>
															This is a standard paragraph - sm/default (P).
															This is a standard paragraph - sm/default (P).
															This is a standard paragraph - sm/default (P).
															This is a standard paragraph - sm/default (P).
															This is a standard paragraph - sm/default (P).
															This is a standard paragraph - sm/default (P).
														</p>
													</Body>
												</AccordionItemContent>
											</AccordionItem>
											<AccordionItem title="Accordion 3">
												<AccordionItemContent>
													<Body>
														<p>
															This is a standard paragraph - sm/default (P).
															This is a standard paragraph - sm/default (P).
															This is a standard paragraph - sm/default (P).
															This is a standard paragraph - sm/default (P).
															This is a standard paragraph - sm/default (P).
															This is a standard paragraph - sm/default (P).
														</p>
													</Body>
												</AccordionItemContent>
											</AccordionItem>
										</Accordion>
									)}
									<DirectionLink direction="up" href="#main-content">
										Back to top
									</DirectionLink>
								</Stack>
							))}
							<Callout title="Call out title - md/display (H3)">
								<Text as="p">Description - sm/default (P)</Text>
							</Callout>
						</Stack>
					</Column>
				</Columns>
			</PageContent>
			<Footer variant="agriculture">
				<nav aria-label="footer">
					<LinkList
						links={[
							{ label: 'Home', href: '/' },
							{
								label: 'Storybook',
								href: 'https://steelthreads.github.io/agds-next/storybook/index.html',
							},
							{
								label: 'Playroom',
								href: 'https://steelthreads.github.io/agds-next/playroom/index.html',
							},
							{
								label: 'Starter kit',
								href: 'https://github.com/steelthreads/agds-next-starter-kit',
							},
						]}
						horizontal
					/>
				</nav>
				<FooterDivider />
				<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
					We acknowledge the traditional owners of country throughout Australia
					and recognise their continuing connection to land, waters and culture.
					We pay our respects to their Elders past, present and emerging.
				</Text>
				<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
					&copy; 2022 Department of Agriculture, Fisheries and Forestry
				</Text>
			</Footer>
		</Box>
	);
}

export const ContentPage = () => <ContentPageTemplate />;
