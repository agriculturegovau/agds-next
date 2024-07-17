import { PropsWithChildren } from 'react';
import { Box } from '../box';
import { Button } from '../button';
import { CollapsingSideBar } from '../_collapsing-side-bar';
import { Stack } from '../stack';

export type FilterSidebarProps = PropsWithChildren<{
	/** The number of active filters. Rendered after the title when > 0. */
	activeFiltersCount?: number;
	/** @deprecated: Unused. */
	'aria-label'?: string;
	/** Called when the user clicks the "Clear filters" button. */
	onClearFilters?: () => void;
	/** @deprecated Unused. Title is now hardcoded to Filters. */
	title?: string;
}>;

export type FilterSidebarTitleProps = {
	onClearFilters?: () => void;
	title: string;
};

export function FilterSidebar({
	activeFiltersCount,
	'aria-label': ariaLabel,
	children,
	onClearFilters,
	title,
}: FilterSidebarProps) {
	// deprecation warnings
	if (process.env.NODE_ENV !== 'production') {
		if (ariaLabel) {
			console.warn('FilterSidebar: The `aria-label` prop is now unused.');
		}

		if (title) {
			console.warn('FilterSidebar: The `title` prop is now unused.');
		}
	}

	return (
		<CollapsingSideBar
			title={`Filters${activeFiltersCount ? ` (${activeFiltersCount})` : ''}`}
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
				paddingBottom={{ xs: onClearFilters ? 2 : 1, md: 2 }}
				paddingTop={{ xs: 1, md: 2 }}
				paddingX={{
					xs: 1,
					md: 0,
				}}
			>
				<Stack gap={2}>
					{children}
					{onClearFilters && (
						<>
							<Box borderTop />
							<Button
								alignSelf={{ xs: 'center', md: 'start' }}
								onClick={onClearFilters}
								variant="text"
							>
								Clear filters
							</Button>
						</>
					)}
				</Stack>
			</Box>
		</CollapsingSideBar>
	);
}
