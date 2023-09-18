import { PropsWithChildren } from 'react';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { CollapsingSideBar } from '../_collapsing-side-bar';

export type FilterSidebarProps = PropsWithChildren<{
	/** The aria-label for the FilterSidebar. */
	'aria-label'?: string;
	activeFiltersCount?: number;
}>;

export function FilterSidebar({
	'aria-label': ariaLabel = 'filters',
	children,
	activeFiltersCount,
}: FilterSidebarProps) {
	const collapseButtonLabel = `Filters${
		activeFiltersCount ? ` (${activeFiltersCount})` : ''
	}`;

	return (
		<CollapsingSideBar
			title="Filters"
			collapseButtonLabel={collapseButtonLabel}
			as="aside"
			aria-label={ariaLabel}
		>
			<FormStack>{children}</FormStack>
		</CollapsingSideBar>
	);
}
