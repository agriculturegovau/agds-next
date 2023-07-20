import { useRef } from 'react';
import { packs, useId } from '../core';
import { Box } from '../box';
import { SideBar } from '../side-bar';
import { SideBarTitle } from '../side-bar/SideBarTitle';
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
	const ref = useRef<HTMLUListElement>(null);
	const stepsCompleted = items.filter((item) => item.status === 'done').length;
	const totalSteps = items.length;
	const subHeading = `${stepsCompleted} of ${totalSteps} steps completed`;

	return (
		<SideBar
			as="section"
			collapseButtonLabel={subHeading}
			background={background}
		>
			<Box
				css={{
					...packs.print.visible,
				}}
			>
				<SideBarTitle title="Progress" subtitle={subHeading} />
				<ProgressIndicatorList ref={ref}>
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
			</Box>
		</SideBar>
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
