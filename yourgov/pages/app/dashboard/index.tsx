import { Fragment, ReactElement } from 'react';
import { PageContent } from '@ag.ds-next/react/content';
import { H1, H2, Heading } from '@ag.ds-next/react/heading';
import { Stack } from '@ag.ds-next/react/stack';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { Card, CardInner, CardLink } from '@ag.ds-next/react/card';
import { Text } from '@ag.ds-next/react/text';
import { Divider } from '@ag.ds-next/react/divider';
import { FeatureLinkList } from '@ag.ds-next/react/feature-link-list';
import { PermitIcon } from '@ag.ds-next/react/icon';
import { TextLink } from '@ag.ds-next/react/text-link';
import { Tag } from '@ag.ds-next/react/tags';
import { Flex } from '@ag.ds-next/react/flex';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { AppLayout } from '../../../components/Layout/AppLayout';
import type { NextPageWithLayout } from '../../_app';
import { HelpCallout } from '../../../components/HelpCallout';
import { IconUsers } from '../../../components/CustomIcons';
import { useLinkedBusinesses } from '../../../lib/useLinkedBusinesses';

const Page: NextPageWithLayout = () => {
	const { selectedBusiness } = useLinkedBusinesses();
	if (!selectedBusiness) return null;
	return (
		<Fragment>
			<DocumentTitle title={`Dashboard | ${selectedBusiness.name}`} />
			<PageContent>
				<Stack gap={3}>
					<Stack alignItems="flex-start" gap={1}>
						<Flex gap={0.5}>
							<Tag>{selectedBusiness.abn}</Tag>
							<Text>ABN</Text>
						</Flex>
						<H1>{selectedBusiness.name}</H1>
						<TextLink href="/not-found">View business details</TextLink>
					</Stack>

					<Columns as="ul" cols={{ xs: 1, sm: 2 }}>
						<Card as="li" clickable shadow>
							<CardInner>
								<Stack gap={1}>
									<PermitIcon color="action" size="xl" />
									<Heading as="h2" type="h3">
										<CardLink href="/app/permits">Manage permits</CardLink>
									</Heading>
									<Text>Apply for and manage your business approvals</Text>
								</Stack>
							</CardInner>
						</Card>
						<Card as="li" clickable shadow>
							<CardInner>
								<Stack gap={1}>
									<IconUsers color="action" size="xl" />
									<Heading as="h2" type="h3">
										<CardLink href="/app/staff">Manage staff access</CardLink>
									</Heading>
									<Text>
										Manage people who can act on behalf of the business and
										assign roles based on tasks and information they need to
										access.
									</Text>
								</Stack>
							</CardInner>
						</Card>
					</Columns>

					<Divider />

					<Stack gap={1.5}>
						<H2>Popular links</H2>
						<Columns cols={{ xs: 1, md: 4 }}>
							<Column columnSpan={{ xs: 1, md: 3 }}>
								<FeatureLinkList
									links={[
										{
											description:
												'Explore hundreds of training courses offered by TAFE and other training providers.',
											href: '/not-found',
											label: 'Industry-specific training courses',
										},
										{
											description:
												'Businesses that sell food to the public need to be registered before opening.',
											href: '/app/permits/apply-for-new-permit/mobile-food-vendor-permit',
											label: 'Apply for a mobile food vendor permit',
										},
									]}
								/>
							</Column>
						</Columns>
					</Stack>

					<Divider />

					<Columns cols={{ xs: 1, sm: 4 }}>
						<Column columnSpan={{ xs: 1, sm: 3 }}>
							<HelpCallout />
						</Column>
					</Columns>
				</Stack>
			</PageContent>
		</Fragment>
	);
};

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
	return <AppLayout>{page}</AppLayout>;
};
