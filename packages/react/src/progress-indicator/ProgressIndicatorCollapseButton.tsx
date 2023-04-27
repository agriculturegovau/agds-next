import { Flex } from '../box';
import { ChevronDownIcon } from '../icon';
import { tokens } from '../core';
import { BaseButton } from '../button';
import { hoverColorMap, ProgressIndicatorBackground } from './utils';

type ProgressIndicatorCollapseButtonProps = {
	ariaControls: string;
	background?: ProgressIndicatorBackground;
	id: string;
	isOpen: boolean;
	label: string;
	onClick: () => void;
};

export const ProgressIndicatorCollapseButton = ({
	ariaControls,
	background = 'body',
	id,
	isOpen,
	label,
	onClick,
}: ProgressIndicatorCollapseButtonProps) => {
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
			background={background}
			fontWeight="bold"
			padding={1}
			justifyContent="space-between"
			alignItems="center"
			width="100%"
			link
			focus
			css={{
				'&:hover': {
					background: hoverColorMap[background],
				},
				[tokens.mediaQuery.min.md]: {
					display: 'none',
				},
			}}
		>
			{label}
			<ChevronDownIcon
				size="sm"
				weight="bold"
				css={{
					transition: `transform ${tokens.transition.duration} ${tokens.transition.timingFunction}`,
					transform: `rotate(${isOpen ? 180 : 0}deg)`,
				}}
			/>
		</Flex>
	);
};
