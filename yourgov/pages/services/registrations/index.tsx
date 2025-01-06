import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { SectionContent } from '@ag.ds-next/react/content';
import {
	HeroSubcategoryBanner,
	HeroSubcategoryBannerTitle,
} from '@ag.ds-next/react/hero-banner';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { Text } from '@ag.ds-next/react/text';
import { Breadcrumbs } from '@ag.ds-next/react/breadcrumbs';
import { Stack } from '@ag.ds-next/react/stack';
import { SiteLayout } from '../../../components/Layout/SiteLayout';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { RegistrationsCardList } from '../../../components/RegistrationsCardList';

export default function Page() {
	const pageAlertRef = useRef<HTMLDivElement>(null);
	const router = useRouter();
	const registrationId = router.query.registrationId;

	useEffect(() => {
		if (!registrationId) return;
		pageAlertRef.current?.focus();
	}, [registrationId]);

	return (
		<>
			<DocumentTitle
				title={
					registrationId ? 'Successfully registered pet ' : 'Registrations'
				}
			/>
			<SiteLayout>
				<HeroSubcategoryBanner>
					<Breadcrumbs
						links={[
							{ href: '/', label: 'Home' },
							{ href: '/services', label: 'Services' },
							{ label: 'Registrations' },
						]}
					/>
					<HeroSubcategoryBannerTitle>Registrations</HeroSubcategoryBannerTitle>
				</HeroSubcategoryBanner>
				<SectionContent>
					<Stack gap={1.5}>
						{registrationId && (
							<PageAlert
								ref={pageAlertRef}
								tabIndex={-1}
								title="Your pet registration has been submitted"
								tone="success"
							>
								<Text as="p">
									Registration application number {registrationId}
								</Text>
							</PageAlert>
						)}
						<RegistrationsCardList />
					</Stack>
				</SectionContent>
			</SiteLayout>
		</>
	);
}
