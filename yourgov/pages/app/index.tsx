import { type ReactElement } from 'react';
import { useSearchParams } from 'next/navigation';
import { Avatar } from '@ag.ds-next/react/src/avatar';
import { AvatarIcon, EmailIcon } from '@ag.ds-next/react/icon';
import { CallToActionLink } from '@ag.ds-next/react/call-to-action';
import { Card, CardInner, CardLink } from '@ag.ds-next/react/card';
import { Columns } from '@ag.ds-next/react/columns';
import { Divider } from '@ag.ds-next/react/divider';
import { Flex } from '@ag.ds-next/react/flex';
import { H1, H2, Heading } from '@ag.ds-next/react/heading';
import { NotificationBadge } from '@ag.ds-next/react/notification-badge';
import { PageContent } from '@ag.ds-next/react/content';
import { Stack } from '@ag.ds-next/react/stack';
import { Tag } from '@ag.ds-next/react/tags';
import { Text } from '@ag.ds-next/react/text';
import { AppLayout } from '../../components/Layout/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { useLinkedBusinesses } from '../../lib/useLinkedBusinesses';
import { useAuth } from '../../lib/useAuth';
import type { NextPageWithLayout } from '../_app';
import { HelpCallout } from '../../components/HelpCallout';

const Page: NextPageWithLayout = () => {
	const searchParams = useSearchParams();
	const { user } = useAuth();
	const { linkedBusinesses, setSelectedBusiness } = useLinkedBusinesses();

	const redirectToParam = searchParams.get('redirectTo');
	const businessHref = redirectToParam ?? '/app/dashboard';

	if (!user) return null;

	return (
		<>
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
							<H1>Hi, {user.firstName}</H1>
						</Stack>
					</Flex>

					<Columns as="ul" cols={[1, 2]}>
						<Card as="li">
							<CardInner>
								<Stack gap={1}>
									<EmailIcon color="action" size="lg" />
									<Heading
										as="h2"
										type="h3"
										css={{
											display: 'flex',
											gap: '0.5em',
											alignItems: 'center',
										}}
									>
										<CardLink href="/not-found">Messages</CardLink>
										<NotificationBadge tone="action" value={5} />
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
					<HelpCallout />
				</Stack>
			</PageContent>
		</>
	);
};

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
	return <AppLayout focusMode>{page}</AppLayout>;
};
