import { useEffect, useRef } from 'react';
import { Breadcrumbs } from '@ag.ds-next/react/breadcrumbs';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { PageAlert, PageAlertTitle } from '@ag.ds-next/react/page-alert';
import { PageContent } from '@ag.ds-next/react/content';
import { Prose } from '@ag.ds-next/react/prose';
import { Text } from '@ag.ds-next/react/text';
import { Stack } from '@ag.ds-next/react/stack';
import { DocumentTitle } from '../../../../components/DocumentTitle';
import { FormHelpCallout } from '../../../../components/FormHelpCallout';
import { PageTitle } from '../../../../components/PageTitle';
import { SiteLayout } from '../../../../components/SiteLayout';
import { H2 } from '@ag.ds-next/react/heading';

export default function FormMultiPageFormPage() {
	const successPageAlertRef = useRef<HTMLDivElement>(null);

	// Users are redirected to this page when the form is submitted successfully
	// So when this page renders, focus the success page alert
	useEffect(() => {
		successPageAlertRef.current?.focus();
	}, []);

	return (
		<>
			<DocumentTitle title="Success | Multi-page form example" />
			<SiteLayout
				template={{ name: 'Multi-page form', slug: 'multi-page-form' }}
			>
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
									<Text as="p">
										Supporting paragraph for the success message
									</Text>
									<Text as="p" fontWeight="bold">
										Reference: 00000000
									</Text>
								</PageAlert>
								<Prose>
									<h2>What happens next? (H2)</h2>
									<p>
										Short paragraph to describe what a user can anticipate next.
										Use a short paragraph to reduce cognitive load.
									</p>
								</Prose>
								<FormHelpCallout />
							</Stack>
						</Column>
					</Columns>
				</PageContent>
			</SiteLayout>
		</>
	);
}
