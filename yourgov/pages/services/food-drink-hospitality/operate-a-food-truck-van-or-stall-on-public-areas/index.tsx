import { useRouter } from 'next/router';
import Link from 'next/link';
import {
	Accordion,
	AccordionItem,
	AccordionItemContent,
} from '@ag.ds-next/react/accordion';
import { Breadcrumbs } from '@ag.ds-next/react/breadcrumbs';
import { ButtonGroup, ButtonLink } from '@ag.ds-next/react/button';
import { Columns, Column } from '@ag.ds-next/react/columns';
import { ContentBleed, PageContent } from '@ag.ds-next/react/content';
import { Divider } from '@ag.ds-next/react/divider';
import { H1 } from '@ag.ds-next/react/heading';
import { InpageNav } from '@ag.ds-next/react/inpage-nav';
import { Prose } from '@ag.ds-next/react/prose';
import { SideNav } from '@ag.ds-next/react/side-nav';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { DocumentTitle } from '../../../../components/DocumentTitle';
import { HelpCallout } from '../../../../components/HelpCallout';
import { SiteLayout } from '../../../../components/Layout/SiteLayout';

export default function Page() {
	const router = useRouter();
	return (
		<>
			<DocumentTitle title="Operate a food truck, van or stall on public areas | Services" />
			<SiteLayout applyMainElement={false}>
				<PageContent>
					<Columns>
						<Column columnSpan={{ xs: 12, md: 4, lg: 3 }}>
							<ContentBleed visible={{ md: false }}>
								<SideNav
									activePath={router.asPath}
									title="Services"
									titleLink="/services"
									items={[
										{
											href: '/not-found',
											label: 'Agriculture and farming ',
										},
										{
											href: '/not-found',
											label: 'Arts, culture and entertainment',
										},
										{
											href: '/not-found',
											label: 'Building and construction',
										},
										{
											href: '/not-found',
											label: 'Cleaning',
										},
										{
											href: '/not-found',
											label: 'Food, drink and hospitality',
											items: [
												{
													href: '/not-found',
													label: 'Food safety certificates',
												},
												{
													href: '/services/food-drink-hospitality/operate-a-food-truck-van-or-stall-on-public-areas',
													label:
														'Operate a food truck, van or stall on public areas',
												},
												{
													href: '/not-found',
													label: 'Serve alcohol on premises',
												},
												{
													href: '/not-found',
													label: 'Outdoor dining approval',
												},
												{
													href: '/not-found',
													label: 'Development applications',
												},
												{
													href: '/not-found',
													label: 'Approval to host musical performances',
												},
											],
										},
										{
											href: '/not-found',
											label: 'Motor vehicle and road transport',
										},
										{
											href: '/not-found',
											label: 'Private healthcare',
										},
										{
											href: '/not-found',
											label: 'Real estate and property',
										},
									]}
								/>
							</ContentBleed>
						</Column>

						<Column
							as="main"
							id="main-content"
							tabIndex={-1}
							css={{ '&:focus': { outline: 'none' } }}
							columnSpan={{ xs: 12, md: 8 }}
							columnStart={{ lg: 5 }}
						>
							<Stack gap={3}>
								<Breadcrumbs
									links={[
										{ href: '/', label: 'Home' },
										{ href: '/services', label: 'Services' },
										{
											href: '/services/food-drink-hospitality',
											label: 'Food, drink and hospitality',
										},
										{
											label:
												'Operate a food truck, van or stall on public areas',
										},
									]}
								/>
								<Stack gap={1.5}>
									<H1>Operate a food truck, van or stall on public areas</H1>
									<Text as="p" fontSize="md" color="muted">
										If you are preparing and or handling food for retail sale
										from a vehicle or stall, you must have approval to operate
										on public areas.
									</Text>
								</Stack>
								<InpageNav
									title="On this page"
									links={[
										{
											href: '#who-needs-to-do-this',
											label: 'Who needs to do this',
										},
										{
											href: '#what-you-will-need',
											label: 'What you will need',
										},
										{ href: '#how-to-apply', label: 'How to apply' },
										{ href: '#more-information', label: 'More information' },
									]}
								/>

								<Stack alignItems="flex-start" gap={1.5}>
									<Prose>
										<h2 id="who-needs-to-do-this">Who needs to do this</h2>
										<p>
											If you are preparing and or handling food for retail sale
											from a vehicle or stall, you must obtain one of the
											following permits to operate in this area:
										</p>
									</Prose>
									<Accordion>
										<AccordionItem title="Food truck permit">
											<AccordionItemContent>
												<Prose>
													<p>
														This is a standard paragraph - sm/default (P). This
														is a standard paragraph - sm/default (P). This is a
														standard paragraph - sm/default (P). This is a
														standard paragraph - sm/default (P). This is a
														standard paragraph - sm/default (P). This is a
														standard paragraph - sm/default (P).
													</p>
												</Prose>
											</AccordionItemContent>
										</AccordionItem>
										<AccordionItem title="Ice-cream van permit">
											<AccordionItemContent>
												<Prose>
													<p>
														This is a standard paragraph - sm/default (P). This
														is a standard paragraph - sm/default (P). This is a
														standard paragraph - sm/default (P). This is a
														standard paragraph - sm/default (P). This is a
														standard paragraph - sm/default (P). This is a
														standard paragraph - sm/default (P).
													</p>
												</Prose>
											</AccordionItemContent>
										</AccordionItem>
										<AccordionItem title="Market stall permit">
											<AccordionItemContent>
												<Prose>
													<p>
														This is a standard paragraph - sm/default (P). This
														is a standard paragraph - sm/default (P). This is a
														standard paragraph - sm/default (P). This is a
														standard paragraph - sm/default (P). This is a
														standard paragraph - sm/default (P). This is a
														standard paragraph - sm/default (P).
													</p>
												</Prose>
											</AccordionItemContent>
										</AccordionItem>
									</Accordion>
								</Stack>

								<Stack alignItems="flex-start" gap={1.5}>
									<Prose>
										<h2 id="what-you-will-need">What you will need</h2>
										<p>
											To complete this application you will need to provide:
										</p>
										<ul>
											<li>vehicle registration details and vehicle plans</li>
											<li>operational plan of management</li>
											<li>food safety supervisor certificate</li>
											<li>names of any employees who will be handling food.</li>
										</ul>
									</Prose>
								</Stack>

								<Stack alignItems="flex-start" gap={1.5}>
									<Prose>
										<h2 id="how-to-apply">How to apply</h2>
										<p>
											You’ll be asked to sign in or create an account to apply
											online.
										</p>
									</Prose>
									<ButtonGroup>
										<ButtonLink
											href="/sign-in?redirectTo=/app/permits/apply-for-new-permit/mobile-food-vendor-permit"
											variant="primary"
										>
											Sign in to apply
										</ButtonLink>
										<ButtonLink href="/not-found" variant="secondary">
											Create account
										</ButtonLink>
									</ButtonGroup>
								</Stack>

								<Divider />

								<Stack alignItems="flex-start" gap={1.5}>
									<Prose>
										<h2 id="more-information">More information</h2>
										<h3>Links</h3>
										<p>
											To complete this application you will need to provide:
										</p>
										<ul>
											<li>
												<Link href="/not-found">
													Understand food safety requirements
												</Link>
											</li>
											<li>
												<Link href="/not-found">
													New laws for food businesses
												</Link>
											</li>
											<li>
												<Link href="/not-found">
													Restricted areas and exclusion zones
												</Link>
											</li>
											<li>
												<Link href="/not-found">Hours of operation</Link>
											</li>
										</ul>
										<h3>Related approvals</h3>
										<ul>
											<li>
												<Link href="/not-found">Serve alcohol on premises</Link>
											</li>
											<li>
												<Link href="/not-found">Outdoor dining approval</Link>
											</li>
										</ul>
									</Prose>
								</Stack>

								<HelpCallout />
							</Stack>
						</Column>
					</Columns>
				</PageContent>
			</SiteLayout>
		</>
	);
}
