import { Stack } from '@ag.ds-next/box';
import { SectionContent } from '@ag.ds-next/content';
import { H2, H3 } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import {
	HeroSubcategoryBanner,
	HeroSubcategoryBannerTitle,
} from '@ag.ds-next/hero-banner';
import { Breadcrumbs } from '@ag.ds-next/breadcrumbs';
import { Card, CardInner, CardLink } from '@ag.ds-next/card';
import { Columns } from '@ag.ds-next/columns';
import { AppLayout } from '../../../components/AppLayout';
import { DocumentTitle } from '../../../components/DocumentTitle';

export default function SubcategoryPage() {
	return (
		<>
			<DocumentTitle title="Subcategory" />
			<AppLayout>
				<HeroSubcategoryBanner>
					<Breadcrumbs
						links={[
							{ href: '/', label: 'Home' },
							{ href: '/category', label: 'Category 1' },
							{ label: 'Subcategory page' },
						]}
					/>
					<HeroSubcategoryBannerTitle>
						Subcategory banner title - xxl/display (H1)
					</HeroSubcategoryBannerTitle>
				</HeroSubcategoryBanner>
				<SectionContent>
					<Stack gap={1.5}>
						<H2>Subcategory content pages (H2)</H2>
						<Columns as="ul" cols={{ xs: 1, sm: 2, md: 3 }}>
							<Card as="li" shadow clickable>
								<CardInner>
									<Stack gap={1}>
										<H3>
											<CardLink href="/category/subcategory/content">
												Content - lg / display / underline (H3)
											</CardLink>
										</H3>
										<Text as="p">
											Short descriptive paragraph designed to fit in this space
											- sm/default (P).
										</Text>
									</Stack>
								</CardInner>
							</Card>
							<Card as="li" shadow clickable>
								<CardInner>
									<Stack gap={1}>
										<H3>
											<CardLink href="/category/subcategory/single-page-form">
												Single-page form - lg / display / underline (H3)
											</CardLink>
										</H3>
										<Text as="p">
											Short descriptive paragraph designed to fit in this space
											- sm/default (P).
										</Text>
									</Stack>
								</CardInner>
							</Card>
							<Card as="li" shadow clickable>
								<CardInner>
									<Stack gap={1}>
										<H3>
											<CardLink href="/category/subcategory/multi-page-form">
												Multi-page form - lg / display / underline (H3)
											</CardLink>
										</H3>
										<Text as="p">
											Short descriptive paragraph designed to fit in this space
											- sm/default (P).
										</Text>
									</Stack>
								</CardInner>
							</Card>
							{Array.from(Array(3).keys()).map((idx) => (
								<Card as="li" key={idx} shadow clickable>
									<CardInner>
										<Stack gap={1}>
											<H3>
												<CardLink href="#">
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
