import { Fragment, ReactElement } from 'react';
import { SectionContent } from '@ag.ds-next/react/content';
import {
	HeroSubcategoryBanner,
	HeroSubcategoryBannerTitle,
} from '@ag.ds-next/react/hero-banner';
import { Stack } from '@ag.ds-next/react/stack';
import { H2, H3 } from '@ag.ds-next/react/heading';
import { Text } from '@ag.ds-next/react/text';
import { Breadcrumbs } from '@ag.ds-next/react/breadcrumbs';
import { Card, CardInner, CardLink } from '@ag.ds-next/react/card';
import { Columns } from '@ag.ds-next/react/columns';
import { SiteLayout } from '../../../components/Layout/SiteLayout';
import { DocumentTitle } from '../../../components/DocumentTitle';

export default function Page() {
	return (
		<Fragment>
			<DocumentTitle title="Services" />
			<HeroSubcategoryBanner>
				<Breadcrumbs
					links={[
						{ href: '/', label: 'Home' },
						{ href: '/services', label: 'Services' },
						{ label: 'Food, drink and hospitality' },
					]}
				/>
				<HeroSubcategoryBannerTitle>
					Food, drink and hospitality
				</HeroSubcategoryBannerTitle>
			</HeroSubcategoryBanner>
			<SectionContent>
				<Stack gap={4}>
					<Stack gap={1.5}>
						<H2>Licences and permits </H2>
						<Columns as="ul" cols={{ xs: 1, sm: 2, md: 3 }}>
							<ServiceCard
								href="/not-found"
								title="Food safety certificates"
								description="Businesses that service food and drink must appoint a certified food safety supervisor (FSS)."
							/>
							<ServiceCard
								href="/services/food-drink-hospitality/operate-a-food-truck-van-or-stall-on-public-areas"
								title="Operate a food truck, van or stall on public areas"
								description="Food trucks, vans and stalls must be registered to operate on public areas."
							/>
							<ServiceCard
								href="/not-found"
								title="Serve alcohol on premises"
								description="Businesses must have a current liquor licence to serve liquor on premises."
							/>

							<ServiceCard
								href="/not-found"
								title="Outdoor dining approval"
								description="Register to serve food in a streetside setting outdoor."
							/>
							<ServiceCard
								href="/not-found"
								title="Development applications"
								description="Get approval for a range of construction developments."
							/>
							<ServiceCard
								href="/not-found"
								title="Approval to host musical performances"
								description="Venues that sell ticketed admission to music performances are required to have an appropriate licence."
							/>
						</Columns>
					</Stack>
					<Stack gap={1.5}>
						<H2>Other services</H2>
						<Columns as="ul" cols={{ xs: 1, sm: 2, md: 3 }}>
							<ServiceCard
								href="/not-found"
								title="Link a business"
								description="Link a business to access services online. You will need to use Relationship Authorisation Manager (RAM)."
							/>
							<ServiceCard
								href="/not-found"
								title="Report a case of food borne illness"
								description="Make a complaint if you have experienced food poisoning."
							/>
							<ServiceCard
								href="/not-found"
								title="Check a business licence"
								description="Search for business licences, permits and certificates online."
							/>
							<ServiceCard
								href="/not-found"
								title="Declare an ownership change"
								description="Confirm a change in business ownership and notify government agencies."
							/>
						</Columns>
					</Stack>
					<Stack gap={1.5}>
						<H2>Guides</H2>
						<Columns as="ul" cols={{ xs: 1, sm: 2, md: 3 }}>
							<ServiceCard
								href="/not-found"
								title="Understand food safety requirements"
								description="Learn about your obligations as a food handler and a food handling business."
							/>
							<ServiceCard
								href="/not-found"
								title="Opening a small bar in NSW"
								description="Get an overview of what’s required to open a small bar in NSW."
							/>
							<ServiceCard
								href="/not-found"
								title="Prepare for a food safety inspection"
								description="Understand how food safety is assessed and how you can be prepared."
							/>
						</Columns>
					</Stack>
				</Stack>
			</SectionContent>
		</Fragment>
	);
}

Page.getLayout = function getLayout(page: ReactElement) {
	return <SiteLayout>{page}</SiteLayout>;
};

function ServiceCard({
	href,
	title,
	description,
}: {
	href: string;
	title: string;
	description?: string;
}) {
	return (
		<Card as="li" shadow clickable>
			<CardInner>
				<Stack gap={1}>
					<H3>
						<CardLink href={href}>{title}</CardLink>
					</H3>
					{description ? <Text as="p">{description}</Text> : null}
				</Stack>
			</CardInner>
		</Card>
	);
}
