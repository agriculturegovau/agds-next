import { Fragment, ReactElement } from 'react';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { PageContent } from '@ag.ds-next/react/content';
import { H1, H2, H3 } from '@ag.ds-next/react/heading';
import { Card, CardInner } from '@ag.ds-next/react/card';
import { Button } from '@ag.ds-next/react/button';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { Columns } from '@ag.ds-next/react/columns';
import { AppLayout } from '../../components/Layout/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { Business, useLinkedBusinesses } from '../../lib/useLinkedBusinesses';
import { useAuth } from '../../lib/useAuth';
import type { NextPageWithLayout } from '../_app';

const Page: NextPageWithLayout = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const { user } = useAuth();
	const { linkedBusinesses, setSelectedBusiness } = useLinkedBusinesses();

	function goToBusiness(business: Business) {
		setSelectedBusiness(business);
		const redirectTo = searchParams.get('redirectTo');
		router.push(redirectTo ?? '/app/dashboard');
	}

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
											<Button variant="text" onClick={() => goToBusiness(b)}>
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
