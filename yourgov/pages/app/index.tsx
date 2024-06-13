import { Fragment, ReactElement } from 'react';
import { useSearchParams } from 'next/navigation';
import { PageContent } from '@ag.ds-next/react/content';
import { H1, H2, Heading } from '@ag.ds-next/react/heading';
import { Card, CardInner, CardLink } from '@ag.ds-next/react/card';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { Columns } from '@ag.ds-next/react/columns';
import { Tag } from '@ag.ds-next/react/tags';
import { Divider } from '@ag.ds-next/react/divider';
import { CallToActionLink } from '@ag.ds-next/react/call-to-action';
import { Avatar } from '@ag.ds-next/react/avatar';
import { Flex } from '@ag.ds-next/react/flex';
import { AvatarIcon, EmailIcon } from '@ag.ds-next/react/icon';
import { AppLayout } from '../../components/Layout/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { useLinkedBusinesses } from '../../lib/useLinkedBusinesses';
import { useAuth } from '../../lib/useAuth';
import type { NextPageWithLayout } from '../_app';

const Page: NextPageWithLayout = () => {
	const searchParams = useSearchParams();
	const { user } = useAuth();
	const { linkedBusinesses, setSelectedBusiness } = useLinkedBusinesses();

	const redirectToParam = searchParams.get('redirectTo');
	const businessHref = redirectToParam ?? '/app/dashboard';

	if (!user) return null;

	return (
		<Fragment>
			<DocumentTitle title="Account" />
			<PageContent>
				<Stack gap={3}>
					<Flex gap={1} alignItems="center">
						<Avatar
							aria-hidden
							name={user.displayName}
							size="xl"
							tone="action"
						/>
						<Stack>
							<Text fontSize="md" color="muted">
								My account
							</Text>
							<H1>Hi, {user.displayName}</H1>
						</Stack>
					</Flex>

					<Columns as="ul" cols={[1, 2]}>
						<Card as="li">
							<CardInner>
								<Stack gap={1}>
									<EmailIcon color="action" size="lg" />
									<Heading as="h2" type="h3">
										<CardLink href="/not-found">Messages</CardLink>
									</Heading>
									<Text as="p" color="muted">
										View all messages
									</Text>
								</Stack>
							</CardInner>
						</Card>

						<Card as="li">
							<CardInner>
								<Stack gap={1}>
									<AvatarIcon color="action" size="lg" />
									<Heading as="h2" type="h3">
										<CardLink href="/not-found">Profile</CardLink>
									</Heading>
									<Text as="p" color="muted">
										Manage your details and preferences
									</Text>
								</Stack>
							</CardInner>
						</Card>
					</Columns>

					<Divider />

					<Stack as="section" gap={1.5}>
						<Stack gap={0.5}>
							<H2>Your linked businesses</H2>
							<Text as="p" color="muted">
								You can manage or act on behalf of the following businesses.
							</Text>
						</Stack>
						<Columns as="ul" cols={[1, 2]}>
							{linkedBusinesses.map((b, idx) => (
								<Card as="li" key={idx}>
									<CardInner>
										<Stack gap={1}>
											<Flex gap={0.5}>
												<Tag>{b.abn}</Tag>
												<Text>ABN</Text>
											</Flex>
											<Heading as="h2" type="h3">
												<CardLink
													href={businessHref}
													// eslint-disable-next-line @typescript-eslint/ban-ts-comment
													// @ts-ignore
													onClick={() => setSelectedBusiness(b)}
												>
													{b.name}
												</CardLink>
											</Heading>
											<Text>Role: {b.role}</Text>
										</Stack>
									</CardInner>
								</Card>
							))}
						</Columns>
						<CallToActionLink href="/not-found">
							Link another business
						</CallToActionLink>
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
