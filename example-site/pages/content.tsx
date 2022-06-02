import type { NextPage } from 'next';
import { Body } from '@ag.ds-next/body';
import { PageContent, ContentBleed } from '@ag.ds-next/content';
import { Columns, Column } from '@ag.ds-next/columns';
import { SideNav } from '@ag.ds-next/side-nav';
import { AppLayout } from '../components/AppLayout';
import { DocumentTitle } from '../components/DocumentTitle';
import { Breadcrumbs } from '@ag.ds-next/breadcrumbs';
import { PageTitle } from '../components/PageTitle';
import { Stack } from '@ag.ds-next/box';
import { InpageNav } from '@ag.ds-next/inpage-nav';
import { DirectionLink } from '@ag.ds-next/direction-link';
import { Callout } from '@ag.ds-next/callout';
import { Text } from '@ag.ds-next/text';
import {
	Accordion,
	AccordionItem,
	AccordionItemContent,
} from '@ag.ds-next/accordion';

const ContentPage: NextPage = () => {
	return (
		<>
			<DocumentTitle title="Content page example" />
			<AppLayout template={{ name: 'Content', slug: 'content' }}>
				<PageContent>
					<Columns>
						<Column columnSpan={{ xs: 12, md: 3 }}>
							<ContentBleed visible={{ md: false }}>
								<SideNav
									collapseTitle="In this section"
									title="Lodging your tax return"
									variant="light"
									titleLink="#welcome"
									activePath="#in-detail/record-keeping/incorrect-amounts"
									items={sideNavItems}
								/>
							</ContentBleed>
						</Column>
						<Column columnSpan={{ xs: 12, md: 8 }} columnStart={{ md: 5 }}>
							<Stack gap={3}>
								<Breadcrumbs
									links={[
										{ href: '#', label: 'Section 1' },
										{ href: '#', label: 'Category page' },
										{ label: 'Subcategory page' },
									]}
								/>
								<PageTitle
									title="Content page heading - xxl/display (H1)"
									introduction="Introductory paragraph providing context for this content page - md/default (P)."
								/>
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
												paragraph - sm/default (P). This is a standard paragraph
												- sm/default (P). This is a standard paragraph -
												sm/default (P). This is a standard paragraph -
												sm/default (P).
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
			</AppLayout>
		</>
	);
};

const sideNavItems = [
	{
		href: '#welcome',
		label: 'Welcome',
	},
	{
		href: '#one',
		label: 'Do you need to lodge a tax return?',
	},
	{
		href: '#two',
		label: 'Lodge online',
		items: [
			{
				href: '#three',
				label: 'Pre-filling your online tax return',
			},
		],
	},
	{ href: '#four', label: "What's new for individuals" },
	{ href: '#five', label: 'Why you may receive a tax bill' },
	{
		href: '#in-detail',
		label: 'In detail',
		items: [
			{
				href: '#in-detail/record-keeping',
				label: 'Record keeping',
				items: [
					{
						href: '#in-detail/record-keeping/tax',
						label: 'Keeping your tax records',
					},
					{
						href: '#in-detail/record-keeping/incorrect-amounts',
						label: 'Incorrect amounts',
					},
				],
			},
			{
				href: '#ten',
				label: 'Tax receipt',
			},
			{
				href: '#eleven',
				label: 'Pre-fill availability',
			},
		],
	},
];

export default ContentPage;
