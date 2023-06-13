import { PageContent } from '@ag.ds-next/react/content';
import { Columns, Column } from '@ag.ds-next/react/columns';
import { ButtonLink } from '@ag.ds-next/react/button';
import { Prose } from '@ag.ds-next/react/prose';
import { Breadcrumbs } from '@ag.ds-next/react/breadcrumbs';
import { Stack } from '@ag.ds-next/react/stack';
import { H2 } from '@ag.ds-next/react/heading';
import { Text } from '@ag.ds-next/react/text';
import { Divider } from '@ag.ds-next/react/divider';
import { FormHelpCallout } from '../FormHelpCallout';
import { PageTitle } from '../PageTitle';

export function MultiPageFormIntro() {
	return (
		<PageContent>
			<Columns>
				<Column columnSpan={{ xs: 12, md: 8 }}>
					<Stack gap={3}>
						<Breadcrumbs
							links={[
								{ href: '/', label: 'Home' },
								{ href: '/category', label: 'Category 1' },
								{
									href: '/category/subcategory',
									label: 'Subcategory page',
								},
								{ label: 'Multi-page form' },
							]}
						/>
						<PageTitle
							title="Multi-page form title (H1)"
							introduction="The introductory paragraph provides context about the entire multi-page form. Use a short paragraph to reduce cognitive load."
							callToAction={
								<Text as="p" color="muted">
									Takes around 10 minutes.
								</Text>
							}
						/>
						<Stack gap={1.5}>
							<H2>Form requirements section heading (H2)</H2>
							<Prose>
								<p>
									To speed up the process of this form you will need to provide:
								</p>
								<ul>
									<li>Requirement list item</li>
									<li>Requirement list item</li>
								</ul>
							</Prose>
						</Stack>
						<div>
							<ButtonLink href="/category/subcategory/multi-page-form/form">
								Get started
							</ButtonLink>
						</div>
						<Divider />
						<Prose>
							<h2>More information section heading (H2)</h2>
							<h3>More information link list heading (H3)</h3>
							<ul>
								<li>
									<a href="#">Meaningful link label that shows link purpose</a>
								</li>
								<li>
									<a href="#">Meaningful link label that shows link purpose</a>
								</li>
								<li>
									<a href="#">Meaningful link label that shows link purpose</a>
								</li>
							</ul>
						</Prose>
						<FormHelpCallout />
					</Stack>
				</Column>
			</Columns>
		</PageContent>
	);
}
