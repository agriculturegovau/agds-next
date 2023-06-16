import { PageContent } from '@ag.ds-next/react/content';
import { Columns, Column } from '@ag.ds-next/react/columns';
import { ButtonLink } from '@ag.ds-next/react/button';
import { H1 } from '@ag.ds-next/react/heading';
import { Prose } from '@ag.ds-next/react/prose';
import { Breadcrumbs } from '@ag.ds-next/react/breadcrumbs';
import { Stack } from '@ag.ds-next/react/stack';
import { H2 } from '@ag.ds-next/react/heading';
import { Text } from '@ag.ds-next/react/text';
import { Divider } from '@ag.ds-next/react/divider';
import { Callout } from '@ag.ds-next/react/callout';

export function MultiPageFormIntroduction() {
	return (
		<PageContent>
			<Columns>
				<Column columnSpan={{ xs: 12, md: 8 }}>
					<Stack gap={3}>
						<Breadcrumbs
							links={[
								{ href: '#', label: 'Home' },
								{ href: '#', label: 'Parent' },
								{ href: '#', label: 'Child' },
								{ label: 'Current page' },
							]}
						/>
						<Stack gap={1.5}>
							<H1>Multi-page form title (H1)</H1>
							<Text as="p" fontSize="md" color="muted">
								The introductory paragraph provides context about the entire
								multi-page form. Use a short paragraph to reduce cognitive load.
							</Text>
							<Text as="p" color="muted">
								Takes around 10 minutes.
							</Text>
						</Stack>

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
							<ButtonLink href="#">Get started</ButtonLink>
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
						<Callout title="Need help?">
							<Prose>
								<p>
									Call <strong>000 000 000</strong> (9am to 5pm AEST Monday to
									Friday)
									<br />
									Email{' '}
									<a href="mailto:emailaccount@agriculture.gov.au">
										emailaccount@agriculture.gov.au
									</a>
								</p>
							</Prose>
						</Callout>
					</Stack>
				</Column>
			</Columns>
		</PageContent>
	);
}
