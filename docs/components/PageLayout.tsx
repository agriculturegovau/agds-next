import { ComponentProps, PropsWithChildren, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { PageContent, ContentBleed } from '@ag.ds-next/react/content';
import { Flex } from '@ag.ds-next/react/flex';
import { Stack } from '@ag.ds-next/react/stack';
import { Columns, Column } from '@ag.ds-next/react/columns';
import { SideNav } from '@ag.ds-next/react/side-nav';
import { Breadcrumbs, BreadcrumbsProps } from '@ag.ds-next/react/breadcrumbs';
import { EditPage } from './EditPage';
import { SearchInput } from './designSystemComponents';
import { getPictogram, pictograms } from './pictograms';

type PageLayoutProps = PropsWithChildren<{
	/** If true, the main content area will be a 'main' element with the ID of 'main-content' applied (used for skip links). */
	applyMainElement?: boolean;
	/** The breadcrumbs to render at the top of the page. */
	breadcrumbs?: BreadcrumbsProps['links'];
	/** Path to the file containing the content for the page. Used for 'Edit this page' link. */
	editPath?: string;
	/** Configuration for the `SideNav` component. */
	sideNav?: {
		title: string;
		titleLink: string;
		items: ComponentProps<typeof SideNav>['items'];
	};
}>;

// https://stackoverflow.com/a/58110124/1611058
/**
 * A strongly typed version of `Boolean()`
 *
 * When using this, TS understands that you are using it to guard against false values.
 *
 * @param value - Any value you want to test the truthiness of
 * @returns Boolean
 */
export function isTruthy<Test>(value: Test): value is Truthy<Test> {
	return Boolean(value);
}
type Falsy = false | '' | 0 | null | undefined;
type Truthy<T> = T extends Falsy ? never : T; // from lodash

export function PageLayout({
	applyMainElement = false,
	breadcrumbs,
	children,
	editPath,
	sideNav,
}: PageLayoutProps) {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState('');

	const filteredItems =
		useMemo(
			() =>
				sideNav?.items
					.map((item) => {
						const slug = item.href?.replace('/components/', '');
						const icon = slug ? getPictogram(slug) : undefined;
						return {
							...item,
							label: slug ? (
								<Flex alignItems={'center'} gap={0.5}>
									{icon && (
										<img
											src={icon.src}
											alt=""
											aria-hidden="true"
											height={20}
											width={20}
										/>
									)}
									{/* <Icon /> */}
									{item.label}
								</Flex>
							) : (
								item.label
							),
						};
					})
					.filter((item) =>
						searchTerm ? item.href?.includes(searchTerm.toLowerCase()) : true
					),
			[searchTerm, sideNav?.items]
		) || [];

	return (
		<PageContent>
			<Columns>
				{sideNav && (
					<Column columnSpan={{ xs: 12, md: 4, lg: 3 }}>
						<ContentBleed visible={{ md: false }}>
							<div role="search" aria-label="components">
								<SearchInput
									label="Filter navigation"
									value={searchTerm}
									onChange={setSearchTerm}
									maxWidth="xl"
									hideOptionalLabel
								/>
							</div>
							<SideNav
								collapseTitle="In this section"
								activePath={router.asPath}
								title={sideNav.title}
								titleLink={sideNav.titleLink}
								items={filteredItems}
							/>
						</ContentBleed>
					</Column>
				)}
				<Column
					{...(applyMainElement && {
						as: 'main',
						id: 'main-content',
						tabIndex: -1,
						css: { '&:focus': { outline: 'none' } },
					})}
					columnSpan={{ xs: 12, md: 8 }}
					columnStart={{ lg: sideNav ? 5 : 1 }}
				>
					<Stack flexGrow={1} gap={3}>
						{breadcrumbs?.length ? <Breadcrumbs links={breadcrumbs} /> : null}
						{children}
						{editPath && (
							<Flex justifyContent="flex-start">
								<EditPage path={editPath} />
							</Flex>
						)}
					</Stack>
				</Column>
			</Columns>
		</PageContent>
	);
}
