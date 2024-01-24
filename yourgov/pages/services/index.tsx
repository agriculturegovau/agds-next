import { Fragment, ReactElement } from 'react';
import { SectionContent } from '@ag.ds-next/react/content';
import {
	HeroCategoryBanner,
	HeroCategoryBannerTitle,
	HeroCategoryBannerSubtitle,
} from '@ag.ds-next/react/hero-banner';
import { Stack } from '@ag.ds-next/react/stack';
import { H2, H3 } from '@ag.ds-next/react/heading';
import { Text } from '@ag.ds-next/react/text';
import { CallToActionLink } from '@ag.ds-next/react/call-to-action';
import { Card, CardInner, CardLink } from '@ag.ds-next/react/card';
import { Columns } from '@ag.ds-next/react/columns';
import { SiteLayout } from '../../components/Layout/SiteLayout';
import { DocumentTitle } from '../../components/DocumentTitle';

export default function Page() {
	return (
		<Fragment>
			<DocumentTitle title="Services" />
			<HeroCategoryBanner>
				<HeroCategoryBannerTitle>Services</HeroCategoryBannerTitle>
				<HeroCategoryBannerSubtitle>
					An easier and faster way to connect with government services
				</HeroCategoryBannerSubtitle>
			</HeroCategoryBanner>
			<SectionContent>
				<Stack gap={4}>
					<Stack gap={1.5}>
						<H2>Popular for businesses</H2>
						<Columns as="ul" cols={{ xs: 1, sm: 2, md: 3 }}>
							<ServiceCard
								href="/not-found"
								title="Link a business"
								description="Link a business to access services online. You will need to use Relationship Authorisation Manager (RAM)."
							/>
							<ServiceCard
								href="/services/food-drink-hospitality/operate-a-food-truck-van-or-stall-on-public-areas"
								title="Operate a food truck, van or stall on public areas"
								description="Food trucks, vans and stalls must be registered to operate on public areas."
							/>
							<ServiceCard
								href="/not-found"
								title="Business parking permits"
								description="Your business may be eligible for a business parking permit if it requires a vehicle for carrying goods or equipment"
							/>
						</Columns>
						<CallToActionLink href="/not-found">
							Browse all business services
						</CallToActionLink>
					</Stack>
					<Stack gap={1.5}>
						<H2>Popular for individuals</H2>
						<Columns as="ul" cols={{ xs: 1, sm: 2, md: 3 }}>
							<ServiceCard
								href="/not-found"
								title="Change my address"
								description="You can update your rates mailing address by using our online form."
							/>
							<ServiceCard
								href="/not-found"
								title="Pay my rates"
								description="You can pay rates online by cheque, money order or BPAY, or set up a direct debit."
							/>
							<ServiceCard
								href="/not-found"
								title="Apply for a parking permit"
								description="Parking permits are issued to eligible residents for the parking area where they live."
							/>
						</Columns>
						<CallToActionLink href="/not-found">
							Browse all services for individuals
						</CallToActionLink>
					</Stack>
					<Stack gap={1.5}>
						<H2>Browse services by industry</H2>
						<Columns as="ul" cols={{ xs: 1, sm: 2, md: 3 }}>
							<ServiceCard href="/not-found" title="Agriculture and farming" />
							<ServiceCard
								href="/not-found"
								title="Arts, culture and entertainment"
							/>
							<ServiceCard
								href="/not-found"
								title="Building and construction"
							/>
							<ServiceCard href="/not-found" title="Cleaning" />
							<ServiceCard
								href="/services/food-drink-hospitality"
								title="Food, drink and hospitality"
							/>
							<ServiceCard
								href="/not-found"
								title="Motor vehicle and road transport"
							/>
							<ServiceCard href="/not-found" title="Private healthcare" />
							<ServiceCard href="/not-found" title="Real estate and property" />
							<ServiceCard href="/not-found" title="Retail" />
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
