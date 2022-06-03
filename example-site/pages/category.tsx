import type { NextPage } from 'next';
import { Stack } from '@ag.ds-next/box';
import { SectionContent } from '@ag.ds-next/content';
import { H2, H3 } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import { CallToActionLink } from '@ag.ds-next/call-to-action';
import {
	HeroCategoryBanner,
	HeroCategoryBannerTitle,
} from '@ag.ds-next/hero-banner';
import { AppLayout } from '../components/AppLayout';
import { DocumentTitle } from '../components/DocumentTitle';
import { Card, CardInner, CardLink, CardList } from '@ag.ds-next/card';

const Home: NextPage = () => {
	return (
		<>
			<DocumentTitle title="Category" />
			<AppLayout template={{ name: 'Category', slug: 'category' }}>
				<HeroCategoryBanner
					variant="lightAlt"
					image={
						<img
							alt="Harvester in a golden field of wheat emptying grain into a chaser bin moving alongside it."
							src="/agds-next/example-site/placeholder/hero-banner.png"
						/>
					}
				>
					<HeroCategoryBannerTitle>
						Website hero banner title - xxl/display (H1)
					</HeroCategoryBannerTitle>
				</HeroCategoryBanner>
				<SectionContent>
					<Stack gap={2}>
						<H2>Subcategory pages (H2)</H2>
						<CardList templateColumns={{ xs: 1, sm: 2, md: 4 }}>
							{Array.from(Array(8).keys()).map((idx) => (
								<Card key={idx} shadow clickable>
									<CardInner>
										<Stack gap={1}>
											<H3>
												<CardLink href="/subcategory">
													Card title - lg / display / underline (H3)
												</CardLink>
											</H3>
											<Text as="p">
												Short descriptive paragraph designed to fit in this
												space - sm/default (P).
											</Text>
										</Stack>
									</CardInner>
								</Card>
							))}
						</CardList>
						<CallToActionLink href="/subcategory">
							See more subcategory pages
						</CallToActionLink>
					</Stack>
				</SectionContent>
			</AppLayout>
		</>
	);
};

export default Home;
