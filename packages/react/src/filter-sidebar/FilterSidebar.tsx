import { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/react/box';
import { Button } from '@ag.ds-next/react/button';
import { Flex } from '@ag.ds-next/react/flex';
import { CloseIcon } from '@ag.ds-next/react/icon';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { CollapsingSideBar } from '../_collapsing-side-bar';

export type FilterSidebarProps = PropsWithChildren<{
	/** The number of active filters. */
	activeFiltersCount?: number;
	/** @deprecated: Unused. The aria-label for the Filter sidebar. */
	'aria-label'?: string;
	/** Shown at the top of Filter sidebar. */
	title?: string;
	/** Called when the user clicks the "Clear filters" button. */
	onClearFilters?: () => void;
}>;

export type FilterSidebarTitleProps = {
	onClearFilters?: () => void;
	title: string;
};

export function FilterSidebar({
	activeFiltersCount,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	'aria-label': ariaLabel,
	onClearFilters,
	children,
	title = 'Filters',
}: FilterSidebarProps) {
	return (
		<CollapsingSideBar
			title={`${title}${activeFiltersCount ? ` (${activeFiltersCount})` : ''}`}
			as="aside"
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
								variant="text"
								onClick={onClearFilters}
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
