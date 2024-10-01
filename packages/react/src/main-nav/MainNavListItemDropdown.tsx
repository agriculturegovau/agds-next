import { ReactNode, useEffect, useRef } from 'react';
import { BaseButton } from '../button';
import { boxPalette, packs } from '../core';
import {
	DropdownMenu,
	useDropdownMenuButton,
	useDropdownMenuContext,
} from '../dropdown-menu';
import { Flex } from '../flex';
import { ChevronDownIcon, ChevronUpIcon } from '../icon';
import { localPalette } from './localPalette';

export type MainNavListDropdown = {
	label: ReactNode;
	endElement?: ReactNode;
	beforeElement?: ReactNode;
	dropdown: ReactNode;
};

export function MainNavListItemDropdown(props: MainNavListDropdown) {
	return (
		<li>
			<DropdownMenu popoverPlacement="bottom-end" popoverOffset={-8}>
				<MainNavListItemDropdownButton {...props} />
				{props.dropdown}
			</DropdownMenu>
		</li>
	);
}

function MainNavListItemDropdownButton({
	label,
	beforeElement,
	endElement,
}: MainNavListDropdown) {
	const { isMenuOpen } = useDropdownMenuContext();
	const { ref, ...buttonProps } = useDropdownMenuButton();
	const scrollbarWidthRef = useRef(0);

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
			fontSize={{ xs: 'xs', lg: 'sm' }}
			justifyContent="center"
			alignItems="center"
			gap={0.5}
			paddingLeft={1}
			paddingRight={1}
			color="action"
			height="100%"
			maxWidth={{
				// 17.625rem is the available space beside the hamburger at 375px
				xs: `calc(17.625rem - ${scrollbarWidthRef.current}px)`,
				// It's then reduced slightly to give more room for the nav items
				lg: `calc(16rem - ${scrollbarWidthRef.current}px)`,
			}}
			focusRingFor="keyboard"
			css={[
				isMenuOpen ? { background: localPalette.linkHoverBg } : undefined,
				{
					overflow: 'hidden',
					'&:hover': {
						color: boxPalette.foregroundText,
						backgroundColor: localPalette.linkHoverBg,
						'& > span[data-main-nav-list-item-label]': packs.underline,
					},
				},
			]}
			{...buttonProps}
		>
			{beforeElement}
			<span data-main-nav-list-item-label css={packs.truncate}>
				{label}
			</span>
			{endElement}
			{isMenuOpen ? (
				<ChevronUpIcon size="sm" weight="bold" css={{ flexShrink: 0 }} />
			) : (
				<ChevronDownIcon size="sm" weight="bold" css={{ flexShrink: 0 }} />
			)}
		</Flex>
	);
}
