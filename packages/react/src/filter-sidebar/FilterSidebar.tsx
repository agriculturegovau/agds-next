import { PropsWithChildren } from 'react';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { CollapsingSideBar } from '../_collapsing-side-bar';

export type FilterSidebarProps = PropsWithChildren<{
	numberOfActiveFilters?: number;
}>;

export function FilterSidebar({
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
		>
			<FormStack>{children}</FormStack>
		</CollapsingSideBar>
	);
}
