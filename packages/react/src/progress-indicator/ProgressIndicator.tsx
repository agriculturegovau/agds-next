import { useId } from '../core';
import {
	CollapsingSideBar,
	CollapsingSideBarTitle,
} from '../_collapsing-side-bar';
import { UnorderedList } from '../list';
import { ReplyIcon } from '../icon';
import { Flex } from '../flex';
import { Text } from '../text';
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

	// If no explicit active items are declared, the 'started' status item receives active state by default
	const itemsWithDefaultActive: ProgressIndicatorItem[] =
		hasExplicitActiveDeclared
			? items
			: items.map((item) => ({
					...item,
					isActive: item.status === 'started', // TODO: test this?
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
				{itemsWithDefaultActive.map(
					({ label, levelTwoItem, ...props }, index) => {
						if (isItemLink(props)) {
							return (
								<ProgressIndicatorItemLink
									key={index}
									background={background}
									{...props}
								>
									{label}
									{levelTwoItem && (
										<Flex
											alignItems="center"
											paddingTop={1}
											gap={0.5}
											css={{ fontWeight: 'normal' }}
										>
											<ReplyIcon color="selected" />
											<Text color="muted" fontSize="xs">
												{levelTwoItem.label}
											</Text>
										</Flex>
									)}
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
								{levelTwoItem && (
									<Flex
										alignItems="center"
										paddingTop={1}
										gap={0.5}
										css={{ fontWeight: 'normal' }}
									>
										<ReplyIcon color="selected" />
										<Text color="muted" fontSize="xs">
											{levelTwoItem.label}
										</Text>
									</Flex>
								)}
							</ProgressIndicatorItemButton>
						);
					}
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
