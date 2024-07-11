import { Prose } from '@ag.ds-next/react/prose';
import { H1 } from '@ag.ds-next/react/heading';
import { PageContent, ContentBleed } from '@ag.ds-next/react/content';
import { Columns, Column } from '@ag.ds-next/react/columns';
import { SideNav } from '@ag.ds-next/react/side-nav';
import { Breadcrumbs } from '@ag.ds-next/react/breadcrumbs';
import { Stack } from '@ag.ds-next/react/stack';
import { InpageNav } from '@ag.ds-next/react/inpage-nav';
import { DirectionLink } from '@ag.ds-next/react/direction-link';
import { Callout } from '@ag.ds-next/react/callout';
import { Text } from '@ag.ds-next/react/text';
import {
	Accordion,
	AccordionItem,
	AccordionItemContent,
} from '@ag.ds-next/react/accordion';
export function ContentWithSideNav() {
	return (
		<PageContent>
			<Columns>
				<Column columnSpan={{ xs: 12, md: 4, lg: 3 }}>
					<ContentBleed visible={{ md: false }}>
						<SideNav
							title="Category 1"
							titleLink="#"
							activePath="#activePath"
							items={sideNavItems}
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
								{ href: '#', label: 'Home' },
								{ href: '#', label: 'Category 1' },
								{ href: '#', label: 'Subcategory page' },
								{ label: 'Content page' },
							]}
						/>
						<Stack gap={1.5}>
							<H1>Content page heading - xxl/display (H1)</H1>
							<Text as="p" fontSize="md" color="muted">
								Introductory paragraph providing context for this content page -
								md/default (P).
							</Text>
						</Stack>
						<InpageNav
							title="On this page"
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
								<Prose>
									<h2>Content page section heading - xl/display (H2)</h2>
									<p>
										This is a standard paragraph - sm/default (P). This is a
										standard paragraph - sm/default (P). This is a standard
										paragraph - sm/default (P). This is a standard paragraph -
										sm/default (P). This is a standard paragraph - sm/default
										(P). This is a standard paragraph - sm/default (P).
									</p>
								</Prose>
								{idx === 2 && (
									<Accordion>
										<AccordionItem title="Accordion 1">
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
										<AccordionItem title="Accordion 2">
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
										<AccordionItem title="Accordion 3">
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
	);
}

const sideNavItems = [
	{
		href: '#',
		label: 'Content page',
	},
	{
		href: '#activePath',
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
];
