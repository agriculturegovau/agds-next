import { useId } from '../core';
import { CollapsingSideBar } from '../_collapsing-side-bar';
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
	items: ProgressIndicatorItem[];
};

export const ProgressIndicator = ({
	background,
	items,
}: ProgressIndicatorProps) => {
	const stepsCompleted = items.filter((item) => item.status === 'done').length;
	const totalSteps = items.length;
	const subTitle = `${stepsCompleted} of ${totalSteps} steps completed`;

	return (
		<CollapsingSideBar
			as="section"
			collapseButtonLabel={subTitle}
			background={background}
			title="Progress"
			subTitle={subTitle}
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
