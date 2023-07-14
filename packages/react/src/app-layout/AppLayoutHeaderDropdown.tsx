import { Avatar } from '../avatar';
import { BaseButton } from '../button';
import {
	useDropdownMenuButton,
	useDropdownMenuContext,
} from '../dropdown-menu';
import { Flex } from '../flex';
import { ChevronDownIcon, ChevronUpIcon } from '../icon';
import { Text } from '../text';

export function AppLayoutDropdownMenuButton({
	name,
	secondaryText,
}: {
	name: string;
	secondaryText?: string;
}) {
	const { isMenuOpen } = useDropdownMenuContext();
	const buttonProps = useDropdownMenuButton(null);
	return (
		<Flex
			as={BaseButton}
			alignItems="center"
			gap={0.5}
			{...buttonProps}
			color="action"
			focus
			css={{
				'&:hover': {
					'& > span:first-of-type': {
						textDecoration: 'underline',
					},
				},
			}}
		>
			<Flex
				as="span"
				flexDirection="column"
				css={{
					textAlign: 'right',
					// Wrap long names at a sensible width
					maxWidth: '16rem',
				}}
			>
				<Text color="action" fontWeight="bold" fontSize="xs">
					{name}
				</Text>
				{secondaryText ? (
					<Text color="muted" fontSize="xs">
						{secondaryText}
					</Text>
				) : null}
			</Flex>
			<Avatar name={name} tone="action" aria-hidden size="md" />
			{isMenuOpen ? (
				<ChevronUpIcon size="sm" weight="bold" />
			) : (
				<ChevronDownIcon size="sm" weight="bold" />
			)}
		</Flex>
	);
}
