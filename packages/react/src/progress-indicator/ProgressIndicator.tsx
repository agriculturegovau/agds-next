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

	const subtitle = (function getSubtitle() {
		if (hideSubtitle) return;
		const totalSteps = items.length;
		const stepsCompleted = items.filter(
			(item) => item.status === 'done'
		).length;
		return `${stepsCompleted} of ${totalSteps} steps completed`;
	})();

	return (
		<CollapsingSideBar
			as="section"
			background={background}
			title={<CollapsingSideBarTitle title={title} subtitle={subtitle} />}
			// When `hideTitles` is true, the mobile button label should be "Progress" instead of "x of y steps completed"
			collapseButtonLabel={subtitle || title}
		>
			<ProgressIndicatorList>
				{items.map(({ label, ...props }, index) => {
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
