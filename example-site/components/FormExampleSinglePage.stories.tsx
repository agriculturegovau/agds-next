import { Stack } from '@ag.ds-next/react/box';
import { Breadcrumbs } from '@ag.ds-next/react/breadcrumbs';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { PageContent } from '@ag.ds-next/react/content';
import { Text } from '@ag.ds-next/react/text';
import { AppShell } from '../../.storybook/components/ExampleShell';
import { FormExampleSinglePage } from './FormExampleSinglePage';
import { PageTitle } from './PageTitle';

export default {
	title: 'Examples/Single Page Form',
};

export const SinglePageForm = () => {
	return (
		<AppShell>
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
									{ label: 'Single-page form' },
								]}
							/>
							<PageTitle
								title="Single-page form (multi-question) xxl/display (H1)"
								introduction="Introductory paragraph providing context for this single
                  page of the multi-step form. All questions on page must be
                  related - md/default (P)"
							/>
							<Text fontSize="xs" color="muted">
								All fields are required unless marked optional.
							</Text>

							<FormExampleSinglePage
								navigateToSuccessPage={() =>
									console.log('navigate to success page')
								}
							/>
						</Stack>
					</Column>
				</Columns>
			</PageContent>
		</AppShell>
	);
};
