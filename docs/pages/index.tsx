import {
	CallToActionLink,
	Columns,
	HeroBanner,
	HeroBannerSubtitle,
	HeroBannerTitle,
	HeroBannerTitleContainer,
	Prose,
	SectionContent,
	Stack,
	TextLink,
} from '@ag.ds-next/design-system';
import { AppLayout } from '../components/AppLayout';
import { DocumentTitle } from '../components/DocumentTitle';
import { PictogramCard } from '../components/PictogramCard';

export default function Homepage() {
	return (
		<>
			<DocumentTitle />
			<AppLayout>
				<main id="main-content">
					<HeroBanner>
						<HeroBannerTitleContainer>
							<HeroBannerTitle>
								Welcome to the Agriculture Design System (AgDS)
							</HeroBannerTitle>
							<HeroBannerSubtitle>
								AgDS provides a framework and a set of tools to help designers
								and developers build the steel threads of the Export Service
								quickly, efficiently and consistently.
							</HeroBannerSubtitle>
						</HeroBannerTitleContainer>
						<CallToActionLink href="/guides/getting-started">
							Get started
						</CallToActionLink>
					</HeroBanner>
					<SectionContent>
						<Stack gap={3}>
							<Prose>
								<p>
									AgDS is based on the{' '}
									<TextLink href="https://gold.designsystemau.org/">
										GOLD Design System
									</TextLink>{' '}
									which incorporates the highest usability and accessibility
									standards, helping us to deliver a consistent experience for
									all users, in line with the{' '}
									<TextLink href="https://www.dta.gov.au/help-and-advice/about-digital-service-standard">
										Digital Service Standard
									</TextLink>
									.
								</p>
								<p>
									The system is in early development right now. Feel free to
									look around and leave feedback or suggestions if you like but
									please do not depend on these components just yet. We&apos;re
									working hard to get a stable release out as soon as we can.
								</p>
							</Prose>
							<Columns
								as="ul"
								cols={{
									xs: 1,
									sm: 2,
									lg: 3,
									xl: 4,
								}}
							>
								<PictogramCard
									title="Packages"
									pictogram="packages"
									href="/packages"
								/>

								<PictogramCard
									title="Guides"
									pictogram="guides"
									href="/guides"
								/>

								<PictogramCard
									title="Starter kit"
									pictogram="starter"
									href="https://github.com/steelthreads/agds-next-starter-kit"
								/>
							</Columns>
						</Stack>
					</SectionContent>
				</main>
			</AppLayout>
		</>
	);
}
