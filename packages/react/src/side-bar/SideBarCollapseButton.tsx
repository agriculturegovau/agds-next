import { PropsWithChildren } from 'react';
import { BaseButton } from '../button';
import { tokens } from '../core';
import { Flex } from '../flex';
import { ChevronDownIcon } from '../icon';
import { sideBarLocalPalette } from './utils';

type SideBarCollapseButtonProps = PropsWithChildren<{
	ariaControls: string;
	id: string;
	isOpen: boolean;
	onClick: () => void;
}>;

/** Button that toggles the SideBar. */
export const SideBarCollapseButton = ({
	ariaControls,
	children,
	id,
	isOpen,
	onClick,
}: SideBarCollapseButtonProps) => {
	return (
		<Flex
			as={BaseButton}
			aria-controls={ariaControls}
			aria-expanded={isOpen}
			onClick={onClick}
			id={id}
			color="action"
			fontSize="md"
			lineHeight="heading"
			fontWeight="bold"
			paddingY={1}
			paddingX={{
				xs: 0.75,
				md: 0,
			}}
			justifyContent="space-between"
			alignItems="center"
			width="100%"
			link
			focus
			borderTop
			borderBottom
			css={{
				'&:hover': {
					background: sideBarLocalPalette.hover,
				},
				[tokens.mediaQuery.min.md]: {
					display: 'none',
				},
			}}
		>
			{children}
			<ChevronDownIcon
				size="sm"
				weight="bold"
				css={{
					transition: `transform ${tokens.transition.duration}ms ${tokens.transition.timingFunction}`,
					transform: `rotate(${isOpen ? 180 : 0}deg)`,
				}}
			/>
		</Flex>
	);
};
