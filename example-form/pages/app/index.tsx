import { Fragment, ReactElement } from 'react';
import { PageContent } from '@ag.ds-next/react/content';
import { H1, H2, H3 } from '@ag.ds-next/react/heading';
import { Card, CardInner } from '@ag.ds-next/react/card';
import { Button } from '@ag.ds-next/react/button';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { Columns } from '@ag.ds-next/react/columns';
import { AppLayout } from '../../components/Layout/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { useLinkedBusinesses } from '../../lib/useLinkedBusinesses';
import { useAuth } from '../../lib/useAuth';
import type { NextPageWithLayout } from '../_app';

const Page: NextPageWithLayout = () => {
	const { user } = useAuth();
	const { linkedBusinesses, setSelectedBusiness } = useLinkedBusinesses();
	return (
		<Fragment>
			<DocumentTitle title="Account" />
			<PageContent>
				<Stack gap={3}>
					<H1>Hi, {user?.displayName}</H1>
					<Stack as="section" gap={1.5}>
						<H2>Linked businesses</H2>
						<Columns as="ul" cols={[1, 2, 3]}>
							{linkedBusinesses.map((b, idx) => (
								<Card as="li" key={idx}>
									<CardInner>
										<Stack gap={1} alignItems="flex-start">
											<H3>{b.name}</H3>
											<Text as="p" color="muted">
												ABN {b.abn}
											</Text>
											<Button
												variant="text"
												onClick={() => setSelectedBusiness(b)}
											>
												Go to business
											</Button>
										</Stack>
									</CardInner>
								</Card>
							))}
						</Columns>
					</Stack>
				</Stack>
			</PageContent>
		</Fragment>
	);
};

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
	return <AppLayout focusMode>{page}</AppLayout>;
};
