import { Stack } from '@ag.ds-next/box';
import { SectionContent } from '@ag.ds-next/content';
import { H2, H3 } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import {
	HeroCategoryBanner,
	HeroCategoryBannerTitle,
} from '@ag.ds-next/hero-banner';
import { Card, CardInner, CardLink, CardList } from '@ag.ds-next/card';
import { AppLayout } from '../../components/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';

export default function CategoryPage() {
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
						Category banner title - xxl/display (H1)
					</HeroCategoryBannerTitle>
				</HeroCategoryBanner>
				<SectionContent>
					<Stack gap={1.5}>
						<H2>Subcategory pages (H2)</H2>
						<CardList templateColumns={{ xs: 1, sm: 2, md: 3 }}>
							{Array.from(Array(6).keys()).map((idx) => (
								<Card key={idx} shadow clickable>
									<CardInner>
										<Stack gap={1}>
											<H3>
												<CardLink href="/category/subcategory">
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
					</Stack>
				</SectionContent>
			</AppLayout>
		</>
	);
}
