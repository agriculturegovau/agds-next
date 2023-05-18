import { ReactNode } from 'react';
import { SectionContent } from '@ag.ds-next/react/content';
import {
	HeroSubcategoryBanner,
	HeroSubcategoryBannerTitle,
} from '@ag.ds-next/react/hero-banner';
import { Flex, Stack } from '@ag.ds-next/react/box';
import { Breadcrumbs, BreadcrumbsProps } from '@ag.ds-next/react/breadcrumbs';
import { SiteLayout } from './SiteLayout';
import { EditPage } from './EditPage';

export const SubcategoryPageTemplate = ({
	title,
	breadcrumbs,
	children,
	editPath,
}: {
	title: string;
	breadcrumbs?: BreadcrumbsProps['links'];
	children: ReactNode;
	editPath?: string;
}) => {
	return (
		<SiteLayout>
			<HeroSubcategoryBanner>
				{breadcrumbs?.length ? <Breadcrumbs links={breadcrumbs} /> : null}
				<HeroSubcategoryBannerTitle>{title}</HeroSubcategoryBannerTitle>
			</HeroSubcategoryBanner>
			<SectionContent>
				<Stack flexGrow={1} gap={3}>
					{children}
					{editPath && (
						<Flex justifyContent="flex-start">
							<EditPage path={editPath} />
						</Flex>
					)}
				</Stack>
			</SectionContent>
		</SiteLayout>
	);
};
