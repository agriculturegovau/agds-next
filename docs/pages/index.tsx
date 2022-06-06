import { Columns, Column } from '@ag.ds-next/columns';
import { SectionContent } from '@ag.ds-next/content';
import { Stack } from '@ag.ds-next/box';
import { CallToActionLink } from '@ag.ds-next/call-to-action';
import { Body } from '@ag.ds-next/body';
import { AppLayout } from '../components/AppLayout';
import { PictogramCard } from '../components/PictogramCard';
import { DocumentTitle } from '../components/DocumentTitle';
import { TextLinkExternal } from '@ag.ds-next/text';
import {
	HeroBanner,
	HeroBannerTitleContainer,
	HeroBannerTitle,
	HeroBannerSubtitle,
} from '@ag.ds-next/hero-banner';

export default function Homepage() {
	return (
		<>
			<DocumentTitle />
			<AppLayout>
				<HeroBanner variant="lightAlt">
					<HeroBannerTitleContainer>
						<HeroBannerTitle>
							Welcome to the Agriculture Design System (AgDS)
						</HeroBannerTitle>
						<HeroBannerSubtitle>
							AgDS provides a framework and a set of tools to help designers and
							developers build the steel threads of the Export Service quickly,
							efficiently and consistently.
						</HeroBannerSubtitle>
					</HeroBannerTitleContainer>
					<CallToActionLink href="/guides/getting-started">
						Get started
					</CallToActionLink>
				</HeroBanner>
				<SectionContent>
					<Stack gap={3}>
						<Body>
							<p>
								AgDS is based on the{' '}
								<TextLinkExternal href="https://gold.designsystemau.org/">
									GOLD Design System
								</TextLinkExternal>{' '}
								which incorporates the highest usability and accessibility
								standards, helping us to deliver a consistent experience for all
								users, in line with the{' '}
								<TextLinkExternal href="https://www.dta.gov.au/help-and-advice/about-digital-service-standard">
									Digital Service Standard
								</TextLinkExternal>
								.
							</p>
							<p>
								The system is in early development right now. Feel free to look
								around and leave feedback or suggestions if you like but please
								do not depend on these components just yet. We&apos;re working
								hard to get a stable release out as soon as we can.
							</p>
						</Body>
						<Columns gap={1} as="ul">
							<Column
								as="li"
								columnSpan={{ xs: 1, sm: 12, sm: 6, md: 6, lg: 4, xl: 3 }}
							>
								<PictogramCard
									title="Packages"
									pictogram="packages"
									href="/packages"
								/>
							</Column>
							<Column
								as="li"
								columnSpan={{ xs: 1, sm: 12, sm: 6, md: 6, lg: 4, xl: 3 }}
							>
								<PictogramCard
									title="Guides"
									pictogram="guides"
									href="/guides"
								/>
							</Column>
							<Column
								as="li"
								columnSpan={{ xs: 1, sm: 12, sm: 6, md: 6, lg: 4, xl: 3 }}
							>
								<PictogramCard
									title="Starter kit"
									pictogram="starter"
									href="https://github.com/steelthreads/agds-next-starter-kit"
									target="_blank"
									rel="noopener noreferrer"
								/>
							</Column>
						</Columns>
					</Stack>
				</SectionContent>
			</AppLayout>
		</>
	);
}
