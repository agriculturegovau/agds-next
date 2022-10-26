import {
	Stack,
	SectionContent,
	H2,
	H3,
	Text,
	HeroCategoryBanner,
	HeroCategoryBannerTitle,
	Card,
	CardInner,
	CardLink,
	Columns,
} from '@ag.ds-next/react';
import { AppLayout } from '../../components/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';

export default function CategoryPage() {
	return (
		<>
			<DocumentTitle title="Category" />
			<AppLayout template={{ name: 'Category', slug: 'category' }}>
				<HeroCategoryBanner
					image={
						<img
							src="/agds-next/example-site/placeholder/hero-banner.jpeg"
							role="presentation"
							alt=""
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
						<Columns as="ul" cols={{ xs: 1, sm: 2, md: 3 }}>
							{Array.from(Array(6).keys()).map((idx) => (
								<Card as="li" key={idx} shadow clickable>
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
						</Columns>
					</Stack>
				</SectionContent>
			</AppLayout>
		</>
	);
}
