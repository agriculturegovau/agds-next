import { PropsWithChildren } from 'react';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { Box } from '@ag.ds-next/react/box';
import { CollapsingSideBar } from '../_collapsing-side-bar';

export type FilterSidebarProps = PropsWithChildren<{
	activeFiltersCount?: number;
	/** The aria-label for the Filter sidebar. */
	'aria-label'?: string;
	/** Shown at the top of Filter sidebar. */
	title?: string;
}>;

export function FilterSidebar({
	activeFiltersCount,
	'aria-label': ariaLabel = 'filters',
	children,
	title = 'Filter by',
}: FilterSidebarProps) {
	const collapseButtonLabel = `Filters${
		activeFiltersCount ? ` (${activeFiltersCount})` : ''
	}`;

	return (
		<CollapsingSideBar
			title={title}
			collapseButtonLabel={collapseButtonLabel}
			as="aside"
			aria-label={ariaLabel}
		>
			<Box
				background={{
					xs: 'shade',
					md: 'body',
				}}
				borderTop
				borderTopWidth={{
					xs: 'none',
					md: 'sm',
				}}
				padding={{
					xs: 1,
					md: 0,
				}}
				paddingTop={{ xs: 1, md: 2 }}
			>
				<FormStack>{children}</FormStack>
			</Box>
		</CollapsingSideBar>
	);
}
