import { PropsWithChildren } from 'react';
import { VisuallyHidden } from '../a11y';
import { Avatar } from '../avatar';
import { BaseButton } from '../button';
import { boxPalette, mq, packs } from '../core';
import {
	useDropdownMenuButton,
	useDropdownMenuContext,
	DropdownMenu,
} from '../dropdown-menu';
import { Flex } from '../flex';
import { ChevronDownIcon, ChevronUpIcon } from '../icon';
import { Text } from '../text';

export type AppLayoutHeaderAccountDropdownProps = PropsWithChildren<{
	name: string;
	secondaryText?: string;
}>;

export function AppLayoutHeaderAccountDropdown({
	children,
	name,
	secondaryText,
}: AppLayoutHeaderAccountDropdownProps) {
	return (
		<DropdownMenu popoverPlacement="bottom-end" popoverOffset={-8}>
			<AppLayoutHeaderAccountDropdownButton
				name={name}
				secondaryText={secondaryText}
			/>
			{children}
		</DropdownMenu>
	);
}

type AppLayoutHeaderAccountDropdownButtonProps = {
	name: string;
	secondaryText?: string;
};

function AppLayoutHeaderAccountDropdownButton({
	name,
	secondaryText,
}: AppLayoutHeaderAccountDropdownButtonProps) {
	const { isMenuOpen } = useDropdownMenuContext();
	const { ref, ...buttonProps } = useDropdownMenuButton();
	return (
		<Flex
			as={BaseButton}
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			ref={ref}
			{...buttonProps}
			background={isMenuOpen ? 'shade' : undefined}
			alignItems="center"
			justifyContent="space-between"
			padding={1}
			gap={1}
			color="action"
			focusFor="keyboard"
			css={mq({
				height: '100%',
				maxWidth: ['16rem', '18rem'],
				overflow: 'hidden',
				'&:hover': {
					backgroundColor: boxPalette.backgroundShade,
					// Underline the name + secondary text
					'& > span:last-of-type > span:last-of-type': packs.underline,
				},
			})}
		>
			<VisuallyHidden>Account menu</VisuallyHidden>
			<Flex
				as="span"
				gap={0.5}
				alignItems="center"
				width="100%"
				aria-hidden
				css={{ overflow: 'hidden' }}
			>
				<Avatar name={name} tone="action" size="md" />
				<Flex
					as="span"
					flexDirection="column"
					width="100%"
					css={{ overflow: 'hidden' }}
				>
					<Text
						color="action"
						fontWeight="bold"
						fontSize="xs"
						css={packs.truncate}
					>
						{name}
					</Text>
					{secondaryText ? (
						<Text color="muted" fontSize="xs" css={packs.truncate}>
							{secondaryText}
						</Text>
					) : null}
				</Flex>
			</Flex>
			{isMenuOpen ? (
				<ChevronUpIcon size="sm" weight="bold" css={{ flexShrink: 0 }} />
			) : (
				<ChevronDownIcon size="sm" weight="bold" css={{ flexShrink: 0 }} />
			)}
		</Flex>
	);
}
