import { useEffect, useRef } from 'react';
import { Breadcrumbs } from '@ag.ds-next/react/breadcrumbs';
import { Callout } from '@ag.ds-next/react/callout';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { PageAlert, PageAlertTitle } from '@ag.ds-next/react/page-alert';
import { PageContent } from '@ag.ds-next/react/content';
import { Prose } from '@ag.ds-next/react/prose';
import { Text } from '@ag.ds-next/react/text';
import { Stack } from '@ag.ds-next/react/stack';
import { PageTitle } from '../../../components/PageTitle';

export function MultiPageFormSuccess() {
	const successPageAlertRef = useRef<HTMLDivElement>(null);

	// Users are redirected to this page when the form is submitted successfully
	// So when this page renders, focus the success page alert
	useEffect(() => {
		successPageAlertRef.current?.focus();
	}, []);

	return (
		<PageContent>
			<Columns>
				<Column columnSpan={{ xs: 12, md: 8 }}>
					<Stack gap={3}>
						<Breadcrumbs
							links={[
								{ href: '#', label: 'Home' },
								{ href: '#', label: 'Parent' },
								{
									href: '#',
									label: 'Child',
								},
								{ label: 'Current page' },
							]}
						/>
						<PageTitle
							pretext="Title of multi-page form"
							title="Multi-page form title (H1)"
						/>
						<PageAlert
							ref={successPageAlertRef}
							tabIndex={-1}
							tone="success"
							title={
								<PageAlertTitle as="h2">
									Descriptive success message (H2)
								</PageAlertTitle>
							}
						>
							<Text as="p">Supporting paragraph for the success message</Text>
							<Text as="p" fontWeight="bold">
								Reference: 00000000
							</Text>
						</PageAlert>
						<Prose>
							<h2>What happens next? (H2)</h2>
							<p>
								Short paragraph to describe what a user can anticipate next. Use
								a short paragraph to reduce cognitive load.
							</p>
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
