import { type ButtonHTMLAttributes, type PropsWithChildren } from 'react';
import { type LinkProps } from '../core';
import {
	ProgressIndicatorBackground,
	ProgressIndicatorItemStatus,
} from './utils';

export type ProgressIndicatorProps = {
	/** Used for highlighting the active step. This should match the active item's `href` (or label if no href is supplied). */
	activePath?: string;
	/** If the ProgressIndicator is placed on a page with 'bodyAlt' background, please set this to "bodyAlt". */
	background?: 'body' | 'bodyAlt';
	/** If true, the `subTitle` above the list of items will not be rendered. */
	hideSubtitle?: boolean;
	/** The list of items, including level 2 items, to display. Use in conjunction with `activePath`. Note level 2 items are only available when using links. */
	items: (ProgressIndicatorItem | ProgressIndicatorItemWithLevelTwoItems)[];
};

export type ProgressIndicatorListProps = PropsWithChildren<{}>;

export type ProgressIndicatorItemLinkProps = LinkProps & {
	/** Determines what style the item displays as.
	 *
	 * `blocked` = This step is not yet available for the user to start.
	 *
	 * `doing` = **(deprecated)** This step has been started and the user is actively working on this step.
	 *
	 * `done` = This step is complete. The user has submitted valid data and it has been verified (where necessary).
	 *
	 * `error` = This step has an error that requires attention.
	 *
	 * `saved` = This step has valid saved data that can still be changed.
	 *
	 * `started` = This step has been started and still needs to be completed.
	 *
	 * `todo` = This step is available for the user to start.
	 */
	status: ProgressIndicatorItemStatus;
	/** Determines the background colour of the progress indicator item. */
	background?: ProgressIndicatorBackground;
	/** @deprecated use `activePath`. */
	isActive?: boolean;
};

export type ProgressIndicatorItem<
	TLevelTwoItems extends { isActive?: boolean; items?: LevelTwoItem[] } = {},
> = (ProgressIndicatorItemButtonProps | ProgressIndicatorItemLinkProps) & {
	label: string;
	/** @deprecated use `activePath` in the parent component, `<ProgressIndicator />`. */
	isActive?: boolean;
} & TLevelTwoItems;

// Level two items

type LevelTwoItem = {
	label: string;
} & LinkProps;

export type ProgressIndicatorItemWithLevelTwoItems<
	T extends { isActive?: boolean } = {},
> = ProgressIndicatorItem<{
	items?: (LevelTwoItem & T)[];
}>;

export type ProgressIndicatorItemButtonProps =
	ButtonHTMLAttributes<HTMLButtonElement> & {
		status: ProgressIndicatorItemStatus;
		background?: ProgressIndicatorBackground;
		isActive?: boolean;
	};
