import { Fragment, ReactElement } from 'react';
import { PageContent } from '@ag.ds-next/react/content';
import { Stack } from '@ag.ds-next/react/stack';
import { Breadcrumbs } from '@ag.ds-next/react/breadcrumbs';
import { Flex } from '@ag.ds-next/react/flex';
import { SearchInput } from '@ag.ds-next/react/search-input';
import { PaginationButtons } from '@ag.ds-next/react/pagination';
import { Button } from '@ag.ds-next/react/button';
import { Select } from '@ag.ds-next/react/select';
import { Text } from '@ag.ds-next/react/text';
import { FilterIcon } from '@ag.ds-next/react/icon';
import { Divider } from '@ag.ds-next/react/divider';
import { H2, H3 } from '@ag.ds-next/react/heading';
import { Card, CardInner, CardLink } from '@ag.ds-next/react/card';
import { DocumentTitle } from '../../../../components/DocumentTitle';
import { AppLayout } from '../../../../components/Layout/AppLayout';
import type { NextPageWithLayout } from '../../../_app';
import { PageTitle } from '../../../../components/PageTitle';

const Page: NextPageWithLayout = () => {
	return (
		<Fragment>
			<DocumentTitle title="Manage permits" />
			<PageContent>
				<Stack gap={3}>
					<Breadcrumbs
						links={[
							{ label: 'Dashboard', href: '/app/dashboard' },
							{
								label: 'Permits',
								href: '/app/licences-and-permits',
							},
							{ label: 'Apply for a new permit' },
						]}
					/>
					<PageTitle title="Apply for a new permit" />
					<Stack gap={1}>
						<Flex
							gap={1}
							justifyContent="space-between"
							flexDirection={['column', 'row']}
						>
							<Flex
								flexDirection={['column', 'row']}
								gap={1}
								alignItems={['flex-start', 'flex-end']}
							>
								<SearchInput label="Search" hideOptionalLabel />
								<Button variant="secondary" iconAfter={FilterIcon}>
									Show filters
								</Button>
							</Flex>
							<Select
								label="Sort by"
								hideOptionalLabel
								options={[
									{ value: 'newest', label: 'Newest to oldest' },
									{ value: 'old', label: 'Oldest to newest' },
								]}
							/>
						</Flex>

						<Divider />
					</Stack>
					<Stack gap={1}>
						<H2>1 result</H2>

						<Card shadow clickable>
							<CardInner>
								<Stack gap={1}>
									<H3>
										<CardLink href="/app/licences-and-permits/apply/mobile-food-vendor-permit">
											Apply for a mobile food vendor permit
										</CardLink>
									</H3>
									<Text as="p">
										If you are preparing and or handling food for retail sale
										from a vehicle or stall, you must have approval to operate
										on public areas.
									</Text>
								</Stack>
							</CardInner>
						</Card>
					</Stack>
					<PaginationButtons
						currentPage={1}
						totalPages={1}
						onChange={(page) => console.log(page)}
					/>
				</Stack>
			</PageContent>
		</Fragment>
	);
};

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
	return <AppLayout>{page}</AppLayout>;
};
