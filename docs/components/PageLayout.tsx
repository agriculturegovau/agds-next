import { ComponentProps, PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import { PageContent, ContentBleed } from '@ag.ds-next/react/content';
import { Flex } from '@ag.ds-next/react/flex';
import { Stack } from '@ag.ds-next/react/stack';
import { Columns, Column } from '@ag.ds-next/react/columns';
import { SideNav } from '@ag.ds-next/react/side-nav';
import { Breadcrumbs, BreadcrumbsProps } from '@ag.ds-next/react/breadcrumbs';
import { DefaultComboboxOption } from '@ag.ds-next/react/combobox';
import { EditPage } from './EditPage';
import { ComponentQuickNav } from './ComponentQuickNav';

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
	const quickNavOptions: Array<DefaultComboboxOption> | undefined =
		sideNav?.items
			.map((item) =>
				item.href
					? {
							label: item.label,
							value: item.href,
					  }
					: undefined
			)
			.filter(isTruthy);
	return (
		<PageContent>
			<Columns>
				{sideNav && (
					<Column columnSpan={{ xs: 12, md: 4, lg: 3 }}>
						<ContentBleed visible={{ md: false }}>
							<ComponentQuickNav options={quickNavOptions} />
							<SideNav
								collapseTitle="In this section"
								activePath={router.asPath}
								title={sideNav.title}
								titleLink={sideNav.titleLink}
								items={sideNav.items}
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
