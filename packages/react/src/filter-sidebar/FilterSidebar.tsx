import { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/react/box';
import { Button } from '@ag.ds-next/react/button';
import { Flex } from '@ag.ds-next/react/flex';
import { CloseIcon } from '@ag.ds-next/react/icon';
import { Text } from '@ag.ds-next/react/text';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { CollapsingSideBar } from '../_collapsing-side-bar';

export type FilterSidebarProps = PropsWithChildren<{
	activeFiltersCount?: number;
	/** The aria-label for the Filter sidebar. */
	'aria-label'?: string;
	/** Shown at the top of Filter sidebar. */
	title?: string;
	/** Called when the user clicks the "Clear filters" button. */
	onClearFilters: () => void;
}>;

export type FilterSidebarTitleProps = {
	title: string;
	onClearFilters?: () => void;
};

export function FilterSidebar({
	activeFiltersCount,
	'aria-label': ariaLabel = 'filters',
	onClearFilters,
	children,
	title = 'Filter by',
}: FilterSidebarProps) {
	const collapseButtonLabel = `Filters${
		activeFiltersCount ? ` (${activeFiltersCount})` : ''
	}`;

	return (
		<CollapsingSideBar
			title={
				<Flex
					display={{ xs: 'none', md: 'flex' }}
					flexDirection="row"
					justifyContent="space-between"
					gap={0.5}
				>
					<Text
						as="h2"
						color="text"
						fontSize="md"
						fontWeight="bold"
						lineHeight="heading"
					>
						{title}
					</Text>
					{onClearFilters && (
						<Button
							variant="text"
							iconAfter={() => <CloseIcon size="sm" />}
							onClick={onClearFilters}
						>
							Clear filters
						</Button>
					)}
				</Flex>
			}
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
