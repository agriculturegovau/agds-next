import { Prose } from '@ag.ds-next/react/prose';
import { PageContent } from '@ag.ds-next/react/content';
import { Columns, Column } from '@ag.ds-next/react/columns';
import { Breadcrumbs } from '@ag.ds-next/react/breadcrumbs';
import { Stack } from '@ag.ds-next/react/stack';
import { H1 } from '@ag.ds-next/react/heading';
import { InpageNav } from '@ag.ds-next/react/inpage-nav';
import { DirectionLink } from '@ag.ds-next/react/direction-link';
import { Callout } from '@ag.ds-next/react/callout';
import { Text } from '@ag.ds-next/react/text';
import {
	Accordion,
	AccordionItem,
	AccordionItemContent,
} from '@ag.ds-next/react/accordion';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { SiteLayout } from '../../../components/SiteLayout';

export default function ContentPage() {
	return (
		<>
			<DocumentTitle title="Content page example" />
			<SiteLayout
				applyMainElement={false}
				template={{ name: 'Content', slug: 'content' }}
			>
				<PageContent>
					<Columns>
						<Column
							as="main"
							columnSpan={{ xs: 12, md: 8 }}
							css={{ '&:focus': { outline: 'none' } }}
							id="main-content"
							tabIndex={-1}
						>
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
									<H1>Content page heading - xxl/display (H1)</H1>
									<Text as="p" color="muted" fontSize="md">
										Introductory paragraph providing context for this content
										page - md/default (P).
									</Text>
								</Stack>
								<InpageNav
									links={[
										{ href: '#section-1', label: 'Section 1' },
										{ href: '#section-2', label: 'Section 2' },
										{ href: '#section-3', label: 'Section 3' },
										{ href: '#section-4', label: 'Section 4' },
									]}
									title="On this page"
								/>
								{Array.from(Array(4).keys()).map((idx) => (
									<Stack
										alignItems="flex-start"
										gap={1.5}
										id={`section-${idx + 1}`}
										key={idx}
									>
										<Prose>
											<h2>Content page section heading - xl/display (H2)</h2>
											<p>
												This is a standard paragraph - sm/default (P). This is a
												standard paragraph - sm/default (P). This is a standard
												paragraph - sm/default (P). This is a standard paragraph
												- sm/default (P). This is a standard paragraph -
												sm/default (P). This is a standard paragraph -
												sm/default (P).
											</p>
										</Prose>
										{idx === 2 && (
											<Accordion>
												<AccordionItem title="Accordion 1">
													<AccordionItemContent>
														<Prose>
															<p>
																This is a standard paragraph - sm/default (P).
																This is a standard paragraph - sm/default (P).
																This is a standard paragraph - sm/default (P).
																This is a standard paragraph - sm/default (P).
																This is a standard paragraph - sm/default (P).
																This is a standard paragraph - sm/default (P).
															</p>
														</Prose>
													</AccordionItemContent>
												</AccordionItem>
												<AccordionItem title="Accordion 2">
													<AccordionItemContent>
														<Prose>
															<p>
																This is a standard paragraph - sm/default (P).
																This is a standard paragraph - sm/default (P).
																This is a standard paragraph - sm/default (P).
																This is a standard paragraph - sm/default (P).
																This is a standard paragraph - sm/default (P).
																This is a standard paragraph - sm/default (P).
															</p>
														</Prose>
													</AccordionItemContent>
												</AccordionItem>
												<AccordionItem title="Accordion 3">
													<AccordionItemContent>
														<Prose>
															<p>
																This is a standard paragraph - sm/default (P).
																This is a standard paragraph - sm/default (P).
																This is a standard paragraph - sm/default (P).
																This is a standard paragraph - sm/default (P).
																This is a standard paragraph - sm/default (P).
																This is a standard paragraph - sm/default (P).
															</p>
														</Prose>
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
			</SiteLayout>
		</>
	);
}
