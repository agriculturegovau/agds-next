import { PropsWithChildren } from 'react';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { CollapsingSideBar } from '../_collapsing-side-bar';

export type FilterSidebarProps = PropsWithChildren<{
	/** The aria-label for the FilterSidebar. */
	'aria-label'?: string;
	numberOfActiveFilters?: number;
}>;

export function FilterSidebar({
	'aria-label': ariaLabel = 'filters',
	children,
	numberOfActiveFilters,
}: FilterSidebarProps) {
	const collapseButtonLabel = `Filters ${
		numberOfActiveFilters ? `(${numberOfActiveFilters})` : ''
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
