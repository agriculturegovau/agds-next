import { Columns } from '@ag.ds-next/react/columns';
import { SectionContent } from '@ag.ds-next/react/content';
import { Stack } from '@ag.ds-next/react/box';
import { CallToActionLink } from '@ag.ds-next/react/call-to-action';
import { Prose } from '@ag.ds-next/react/prose';
import { TextLink } from '@ag.ds-next/react/text-link';
import {
	HeroBanner,
	HeroBannerTitleContainer,
	HeroBannerTitle,
	HeroBannerSubtitle,
} from '@ag.ds-next/react/hero-banner';
import { AppLayout } from '../components/AppLayout';
import { PictogramCard } from '../components/PictogramCard';
import { DocumentTitle } from '../components/DocumentTitle';

const description =
	'AgDS provides a framework and a set of tools to help designers and developers build the steel threads of the Export Service quickly, efficiently and consistently.';

export default function Homepage() {
	return (
		<>
			<DocumentTitle description={description} />
			<AppLayout>
				<main
					id="main-content"
					tabIndex={-1}
					css={{ '&:focus': { outline: 'none' } }}
				>
					<HeroBanner>
						<HeroBannerTitleContainer>
							<HeroBannerTitle>
								Welcome to the Agriculture Design System (AgDS)
							</HeroBannerTitle>
							<HeroBannerSubtitle>{description}</HeroBannerSubtitle>
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
									title="Foundations"
									pictogram="text"
									href="/foundations"
								/>
								<PictogramCard
									title="Components"
									pictogram="components"
									href="/components"
								/>
								<PictogramCard
									title="Guides"
									pictogram="guides"
									href="/guides"
								/>
								<PictogramCard
									title="Starter kit"
									pictogram="starter"
									href="https://github.com/steelthreads/agds-starter-kit"
								/>
							</Columns>
						</Stack>
					</SectionContent>
				</main>
			</AppLayout>
		</>
	);
}
