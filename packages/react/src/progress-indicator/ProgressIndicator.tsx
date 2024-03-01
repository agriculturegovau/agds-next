import { useId } from '../core';
import {
	CollapsingSideBar,
	CollapsingSideBarTitle,
} from '../_collapsing-side-bar';
import {
	ProgressIndicatorItem,
	ProgressIndicatorItemButton,
	ProgressIndicatorItemLink,
	ProgressIndicatorItemLinkProps,
} from './ProgressIndicatorItem';
import { ProgressIndicatorList } from './ProgressIndicatorList';

export type ProgressIndicatorProps = {
	/** If the ProgressIndicator is placed on a page with 'bodyAlt' background, please set this to "bodyAlt". */
	background?: 'body' | 'bodyAlt';
	/** The list of items to display. */
	items: ProgressIndicatorItem[];
	/** If true, the `subTitle` above the list of items will not be rendered. */
	hideSubtitle?: boolean;
};

export const ProgressIndicator = ({
	background,
	items,
	hideSubtitle = false,
}: ProgressIndicatorProps) => {
	// The title in this component is not configurable
	const title = 'Progress';

	const subTitle = hideSubtitle
		? undefined
		: `${items.filter(({ status }) => status === 'done').length} of ${
				items.length
		  } steps completed`;

	const hasExplicitActiveDeclared =
		items.filter(({ isActive }) => isActive).length > 0;

	// If no explicit active items are declared, the 'doing' status item receives active state by default
	const itemsWithDefaultActive: ProgressIndicatorItem[] =
		hasExplicitActiveDeclared
			? items
			: items.map((item) => ({
					...item,
					isActive: item.status === 'doing',
			  }));

	return (
		<CollapsingSideBar
			as="section"
			background={background}
			title={<CollapsingSideBarTitle title={title} subtitle={subTitle} />}
			// When `hideTitles` is true, the mobile button label should be "Progress" instead of "x of y steps completed"
			collapseButtonLabel={subTitle || title}
		>
			<ProgressIndicatorList>
				{itemsWithDefaultActive.map(({ label, ...props }, index) => {
					if (isItemLink(props)) {
						return (
							<ProgressIndicatorItemLink
								key={index}
								background={background}
								{...props}
							>
								{label}
							</ProgressIndicatorItemLink>
						);
					}
					return (
						<ProgressIndicatorItemButton
							key={index}
							background={background}
							{...props}
						>
							{label}
						</ProgressIndicatorItemButton>
					);
				})}
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
