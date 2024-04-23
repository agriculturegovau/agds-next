import { Fragment, ReactElement, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { PageContent } from '@ag.ds-next/react/content';
import { H1, H2, Heading } from '@ag.ds-next/react/heading';
import { Card, CardInner, CardLink } from '@ag.ds-next/react/card';
import { Stack } from '@ag.ds-next/react/stack';
import { NotificationBadge } from '@ag.ds-next/react/notification-badge';
import { Text } from '@ag.ds-next/react/text';
import { Columns } from '@ag.ds-next/react/columns';
import { Tag } from '@ag.ds-next/react/tags';
import { Divider } from '@ag.ds-next/react/divider';
import { CallToActionLink } from '@ag.ds-next/react/call-to-action';
import { Avatar } from '@ag.ds-next/react/src/avatar';
import { Flex } from '@ag.ds-next/react/flex';
import { AvatarIcon, EmailIcon } from '@ag.ds-next/react/icon';
import { Callout } from '@ag.ds-next/react/callout';
import { TextLink } from '@ag.ds-next/react/text-link';
import { AppLayout } from '../../components/Layout/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { useLinkedBusinesses } from '../../lib/useLinkedBusinesses';
import { useAuth } from '../../lib/useAuth';
import type { NextPageWithLayout } from '../_app';
import { PageAlert } from '@ag.ds-next/react/page-alert';

const Page: NextPageWithLayout = () => {
	const searchParams = useSearchParams();
	const { user } = useAuth();
	const { linkedBusinesses, setSelectedBusiness } = useLinkedBusinesses();
	const [isAlertVisible, setIsAlertVisible] = useState(true);

	const redirectToParam = searchParams.get('redirectTo');
	const businessHref = redirectToParam ?? '/app/dashboard';

	if (!user) return null;

	return (
		<Fragment>
			<DocumentTitle title="Account" />
			{isAlertVisible && (
				<PageAlert
					tone="info"
					title="We are planning a maintenance outage to upgrade the service on 25 May 2024 from 12pm to 5pm AEDT."
					onClose={() => {
						setIsAlertVisible(false);
					}}
				>
					<Text as="p">
						You won't be able to access yourGov during that time. We apologise
						for any inconvenience.
					</Text>
				</PageAlert>
			)}
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
					<Callout title="Need help?">
						<Text as="p">
							Call <strong>000 000 000</strong> (9am to 5pm AEST Monday to
							Friday)
							<br />
							Email{' '}
							<TextLink href="mailto:emailaccount@yourgov.gov.au">
								emailaccount@yourgov.gov.au
							</TextLink>
						</Text>
					</Callout>
				</Stack>
			</PageContent>
		</Fragment>
	);
};

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
	return <AppLayout focusMode>{page}</AppLayout>;
};
