import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { SectionContent } from '@ag.ds-next/content';
import {
	HeroSubcategoryBanner,
	HeroSubcategoryBannerTitle,
} from '@ag.ds-next/hero-banner';
import { PageAlert } from '@ag.ds-next/page-alert';
import { Text } from '@ag.ds-next/text';
import { Breadcrumbs } from '@ag.ds-next/breadcrumbs';
import { Stack } from '@ag.ds-next/box';
import { AppLayout } from '../../../components/AppLayout';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { RegistrationsCardList } from '../../../components/RegistrationsCardList';

export default function RegistrationsPage() {
	const pageAlertRef = useRef<HTMLDivElement>(null);
	const { query } = useRouter();

	const showPageAlert = query.submitted === 'true';

	useEffect(() => {
		if (!showPageAlert) return;
		pageAlertRef.current?.focus();
	}, [showPageAlert]);

	return (
		<>
			<DocumentTitle title="Registrations" />
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
						{showPageAlert && (
							<PageAlert
								ref={pageAlertRef}
								title="Your pet registration has been submitted"
								tone="success"
								tabIndex={-1}
							>
								<Text as="p">Registration application number PET123456</Text>
							</PageAlert>
						)}
						<RegistrationsCardList />
					</Stack>
				</SectionContent>
			</AppLayout>
		</>
	);
}
