import { LinkProps } from '../core';
import { TextLink } from '../text-link';
import { ProgressIndicatorProps } from './ProgressIndicator';
import { ProgressIndicatorItem } from './ProgressIndicatorItem';
import {
	ProgressIndicatorBackground,
	ProgressIndicatorItemStatus,
} from './utils';

export type ProgressIndicatorItemLinkProps = LinkProps & {
	/** Determines what style the item displays as.
	 *
	 * `blocked` = This step is not yet available for the user to start.
	 *
	 * `doing` = **(deprecated)** This step has been started and the user is actively working on this step (Use `started` with `isActive: true` instead).
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
	/** Used for highlighting the active step. */
	activePath?: ProgressIndicatorProps['activePath'];
	/** Determines the background colour of the progress indicator item. */
	background?: ProgressIndicatorBackground;
	/** @deprecated use `activePath`. */
	isActive?: boolean;
};

export const ProgressIndicatorItemLink = ({
	children,
	isActive,
	status,
	...props
}: ProgressIndicatorItemLinkProps) => (
	<ProgressIndicatorItem
		as={TextLink}
		isActive={Boolean(isActive)}
		status={status}
		{...props}
	>
		{children}
	</ProgressIndicatorItem>
);
