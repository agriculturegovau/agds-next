import { useId } from '../core';
import {
	CollapsingSideBar,
	CollapsingSideBarTitle,
} from '../_collapsing-side-bar';
import {
	ProgressIndicatorItemLink,
	ProgressIndicatorItemLinkProps,
} from './ProgressIndicatorItemLink';
import { ProgressIndicatorItemButton } from './ProgressIndicatorItemButton';
import { ProgressIndicatorList } from './ProgressIndicatorList';
import {
	ProgressIndicatorItem,
	ProgressIndicatorItemWithLevelTwoItems,
} from './utils';

export type ProgressIndicatorProps = {
	/** The list of items, including level 2 items, to display. Use in conjunction with `activePath`. Note level 2 items are only available when using links. */
	items: (ProgressIndicatorItem | ProgressIndicatorItemWithLevelTwoItems)[];
	/** Used for highlighting the active step. This should match the active item's `href` (or label if no href is supplied). */
	activePath?: string;
	/** If the ProgressIndicator is placed on a page with 'bodyAlt' background, please set this to "bodyAlt". */
	background?: 'body' | 'bodyAlt';
	/** If true, the `subTitle` above the list of items will not be rendered. */
	hideSubtitle?: boolean;
};

export const ProgressIndicator = ({
	activePath,
	background,
	items,
	hideSubtitle = false,
}: ProgressIndicatorProps) => {
	// Warn when no `activePath` is defined but level two items are used.
	if (
		process.env.NODE_ENV !== 'production' &&
		activePath === undefined &&
		items.some((item) => 'items' in item && item.items?.length)
	) {
		console.warn(
			'ProgressIndicator: When using level two items, you need to define an `activePath`. Please add a value for the `activePath` prop.'
		);
	}

	// The title in this component is not configurable
	const title = 'Progress';

	const subTitle = hideSubtitle
		? undefined
		: `${items.filter(({ status }) => status === 'done').length} of ${
				items.length
		  } steps completed`;

	/* **LEGACY HANDLER**
	 * This is now legacy, please keep this for backwards compatibility.
	 */
	const hasExplicitActiveDeclared = items.some(({ isActive }) => isActive);

	if (process.env.NODE_ENV !== 'production' && hasExplicitActiveDeclared) {
		console.warn(
			'ProgressIndicator: The `isActive` key is deprecated. Please use `activePath` in the parent component, `<ProgressIndicator />`.'
		);
	}

	/* **LEGACY HANDLER**
	 * NOTE: This is for handling legacy props. We deprecated status='doing' in
	 * favour of status='started' and this code applies `isActive` to the legacy 'doing'
	 * items, enabling backwards compatibility. We then deprecated the `isActive` prop
	 * in favour of `activePath` to help manage level two active items and for
	 * consistency across other nav list components.
	 */
	const itemsWithDefaultActive = hasExplicitActiveDeclared
		? items
		: items.map((item) => {
				/* **LEGACY HANDLER**
				 * If no explicit active items are declared, the 'doing' status item receives active state by default.
				 * NOTE: this is important to keep for backwards compatibility.
				 */
				const isActiveFromLegacyDoingStatus = item.status === 'doing';

				const activePathMatcher = 'href' in item ? item.href : item.label;
				const isActivePath =
					!!activePathMatcher && activePath?.startsWith(activePathMatcher);

				const isActive = isActiveFromLegacyDoingStatus || isActivePath || false;

				const levelTwoItemsWithIsActive =
					'items' in item
						? item.items?.map((levelTwoItem) => ({
								...levelTwoItem,
								isActive:
									'href' in levelTwoItem && levelTwoItem.href === activePath,
						  }))
						: undefined;

				return {
					...item,
					isActive,
					items: levelTwoItemsWithIsActive,
				};
		  });

	return (
		<CollapsingSideBar
			as="section"
			background={background}
			collapseButtonLabel={subTitle || title} // When `hideTitles` is true, the mobile button label should be "Progress" instead of "x of y steps completed"
			title={<CollapsingSideBarTitle title={title} subtitle={subTitle} />}
		>
			<ProgressIndicatorList>
				{itemsWithDefaultActive.map(({ label, ...props }) =>
					isItemLink(props) ? (
						<ProgressIndicatorItemLink
							key={label}
							background={background}
							{...props}
						>
							{label}
						</ProgressIndicatorItemLink>
					) : (
						<ProgressIndicatorItemButton
							key={label}
							background={background}
							{...props}
						>
							{label}
						</ProgressIndicatorItemButton>
					)
				)}
			</ProgressIndicatorList>
		</CollapsingSideBar>
	);
};

export const useProgressIndicatorIds = () => {
	const autoId = useId();
	return {
		buttonId: `progress-indicator-${autoId}-button`,
		bodyId: `progress-indicator-${autoId}-body`,
	};
};

export const isItemLink = (
	item: Omit<ProgressIndicatorItem, 'label'>
): item is ProgressIndicatorItemLinkProps => 'href' in item;
