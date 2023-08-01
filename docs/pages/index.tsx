import { tokens } from '@ag.ds-next/react/core';
import { Columns } from '@ag.ds-next/react/columns';
import { SectionContent } from '@ag.ds-next/react/content';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { TextLink } from '@ag.ds-next/react/text-link';
import {
	HeroBanner,
	HeroBannerTitleContainer,
	HeroBannerTitle,
	HeroBannerSubtitle,
} from '@ag.ds-next/react/hero-banner';
import { ButtonLink } from '@ag.ds-next/react/button';
import { SiteLayout } from '../components/SiteLayout';
import { PictogramCard } from '../components/PictogramCard';
import { DocumentTitle } from '../components/DocumentTitle';
import { withBasePath } from '../lib/img';

const description =
	'AgDS is a suite of tools and guidelines to help designers and developers build the steel threads of the Export Service with efficiency and consistency.';

export default function Homepage() {
	return (
		<>
			<DocumentTitle description={description} />
			<SiteLayout>
				<HeroBanner
					image={
						<img
							src={withBasePath('/img/agds-hero.webp')}
							role="presentation"
							alt=""
						/>
					}
				>
					<HeroBannerTitleContainer>
						<HeroBannerTitle>
							Build an accessible and user-friendly Export Service
						</HeroBannerTitle>
						<HeroBannerSubtitle>{description}</HeroBannerSubtitle>
					</HeroBannerTitleContainer>
					<div>
						<ButtonLink href="/guides/getting-started">Get started</ButtonLink>
					</div>
				</HeroBanner>
				<SectionContent>
					<Stack gap={3}>
						<Stack gap={2}>
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
						<Text as="p" maxWidth={tokens.maxWidth.bodyText}>
							<TextLink href="/about">
								The Agriculture Design System (AgDS)
							</TextLink>{' '}
							enables the development of consistent, intuitive and accessible
							applications with efficiency, scale and collaboration, in line
							with the{' '}
							<TextLink href="https://www.dta.gov.au/help-and-advice/about-digital-service-standard">
								Digital Service Standard
							</TextLink>
							.
						</Text>
					</Stack>
				</SectionContent>
			</SiteLayout>
		</>
	);
}
