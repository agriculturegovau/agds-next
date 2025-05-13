import { PropsWithChildren, useEffect, useRef } from 'react';
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
import { ChevronDownIcon } from '../icon';
import { scaleIconOnHover } from '../icon/Icon';
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
		<DropdownMenu popoverOffset={-8} popoverPlacement="bottom-end">
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
	const scrollbarWidthRef = useRef(0);
	const scaleIconCSS = scaleIconOnHover('sm');

	useEffect(() => {
		scrollbarWidthRef.current =
			window.innerWidth - document.documentElement.offsetWidth;
	}, []);
	return (
		<Flex
			as={BaseButton}
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			ref={ref}
			{...buttonProps}
			alignItems="center"
			background={isMenuOpen ? 'shade' : undefined}
			color="action"
			css={mq({
				marginLeft: 'auto',
				// 17.625rem is the available space beside the hamburger at 375px
				maxWidth: `calc(17.625rem - ${scrollbarWidthRef.current}px)`,
				overflow: 'hidden',
				svg: {
					transform: isMenuOpen ? 'rotate(180deg)' : undefined,
					transition: scaleIconCSS.transition,
				},
				':hover': {
					backgroundColor: boxPalette.backgroundShade,
					// Underline the name + secondary text
					'& > span:last-of-type > span:last-of-type': packs.underline,
					svg: {
						transform: isMenuOpen
							? `rotate(180deg) ${scaleIconCSS.transform}`
							: scaleIconCSS.transform,
					},
				},
			})}
			focusRingFor="keyboard"
			gap={1}
			justifyContent="space-between"
			minHeight="5.25rem"
			padding={1}
		>
			<VisuallyHidden>Account menu</VisuallyHidden>
			<Flex
				alignItems="center"
				aria-hidden
				as="span"
				css={{ overflow: 'hidden' }}
				gap={0.5}
				width="100%"
			>
				<Avatar name={name} size="md" tone="action" />
				<Flex
					as="span"
					css={{ overflow: 'hidden' }}
					flexDirection="column"
					width="100%"
				>
					<Text
						color="action"
						css={packs.truncate}
						fontSize="xs"
						fontWeight="bold"
					>
						{name}
					</Text>
					{secondaryText ? (
						<Text color="muted" css={packs.truncate} fontSize="xs">
							{secondaryText}
						</Text>
					) : null}
				</Flex>
			</Flex>
			<ChevronDownIcon css={{ flexShrink: 0 }} size="sm" weight="bold" />
		</Flex>
	);
}
