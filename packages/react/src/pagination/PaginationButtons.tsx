import { useRef, useState } from 'react';
import { Text } from '../text';
import { usePagination } from './usePagination';
import {
	PaginationItemContainer,
	PaginationContainer,
	PaginationSecondaryControlContainer,
} from './PaginationContainer';
import { PaginationItemDirectionButton } from './PaginationItemDirection';
import { PaginationItemPageButton } from './PaginationItemPage';
import { PaginationItemSeparator } from './PaginationItemSeparator';
import { PaginationItemsPerPageSelect } from './PaginationItemsPerPageSelect';

export type PaginationButtonsProps = {
	/** Describes the navigation element to assistive technologies. */
	'aria-label'?: string;
	/** The current page number. */
	currentPage: number;
	/** Text to describe the range of items shown. */
	itemRangeText?: string;
	/** The selected number of items per page. */
	itemsPerPage?: number;
	/** The options for the items per page select. */
	itemsPerPageOptions?: number[];
	/** Callback for when a list item is pressed. */
	onChange: (pageNumber: number) => void;
	/** Callback when the items per page is changed. */
	onItemsPerPageChange?: (itemsPerPage: number) => void;
	/** The total number of pages. */
	totalPages: number;
	/** Controls how many list items are shown. */
	windowLimit?: number;
};

export function PaginationButtons({
	'aria-label': ariaLabel = 'Pagination',
	currentPage,
	itemRangeText,
	itemsPerPage,
	itemsPerPageOptions,
	onChange,
	onItemsPerPageChange,
	totalPages,
	windowLimit = 3,
}: PaginationButtonsProps) {
	const [isRemovingPreviousButton, setIsRemovingPreviousButton] =
		useState(false);
	const firstButtonRef = useRef<HTMLButtonElement>(null);
	const pagination = usePagination({ currentPage, totalPages, windowLimit });
	const hasRightArea = Boolean(
		(itemsPerPage && onItemsPerPageChange) || itemRangeText
	);

	// When the "Previous" button is being removed, wait until the `currentPage` ticks over to `1`, then focus the page 1 button
	if (isRemovingPreviousButton && currentPage === 1) {
		firstButtonRef.current?.focus();
		setIsRemovingPreviousButton(false);
	}

	return (
		<PaginationContainer hasRightArea={hasRightArea}>
			<PaginationItemContainer aria-label={ariaLabel}>
				{pagination.map((item, index) => {
					switch (item.type) {
						case 'direction':
							return (
								<PaginationItemDirectionButton
									key={item.direction}
									direction={item.direction}
									onClick={() => {
										onChange(item.pageNumber);

										// When the "Previous" button is pointed at page 1, we'll trigger the process of focusing the `1` button
										if (item.pageNumber === 1) {
											setIsRemovingPreviousButton(true);
										}
									}}
								/>
							);
						case 'page':
							return (
								<PaginationItemPageButton
									key={item.pageNumber}
									pageNumber={item.pageNumber}
									onClick={() => onChange(item.pageNumber)}
									isActive={item.isActive}
									{...(item.pageNumber === 1 && { ref: firstButtonRef })}
								/>
							);
						case 'separator':
							return (
								<PaginationItemSeparator
									isLinks={false}
									missingRightPageNumber={pagination[index + 1].pageNumber - 1}
									missingLeftPageNumber={pagination[index - 1].pageNumber + 1}
									key={`${index}-separator`}
								/>
							);
						default:
							return null;
					}
				})}
			</PaginationItemContainer>
			{hasRightArea && (
				<PaginationSecondaryControlContainer>
					{itemRangeText && <Text role="status">{itemRangeText}</Text>}
					{itemsPerPage && onItemsPerPageChange && (
						<PaginationItemsPerPageSelect
							value={itemsPerPage}
							options={itemsPerPageOptions}
							onChange={onItemsPerPageChange}
						/>
					)}
				</PaginationSecondaryControlContainer>
			)}
		</PaginationContainer>
	);
}
