import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import {
	SectionContent,
	HeroSubcategoryBanner,
	HeroSubcategoryBannerTitle,
	PageAlert,
	Text,
	Breadcrumbs,
	Stack,
} from '@ag.ds-next/react';
import { AppLayout } from '../../../components/AppLayout';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { RegistrationsCardList } from '../../../components/RegistrationsCardList';

export default function RegistrationsPage() {
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
			<AppLayout>
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
								title="Your pet registration has been submitted"
								tone="success"
								tabIndex={-1}
							>
								<Text as="p">
									Registration application number {registrationId}
								</Text>
							</PageAlert>
						)}
						<RegistrationsCardList />
					</Stack>
				</SectionContent>
			</AppLayout>
		</>
	);
}
