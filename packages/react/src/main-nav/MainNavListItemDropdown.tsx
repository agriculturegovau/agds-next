import { type ReactNode, useEffect, useRef } from 'react';
import { BaseButton, scaleIconOnHover } from '../button';
import { boxPalette, packs } from '../core';
import {
	DropdownMenu,
	useDropdownMenuButton,
	useDropdownMenuContext,
} from '../dropdown-menu';
import { Flex } from '../flex';
import { ChevronDownIcon } from '../icon';
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
			<DropdownMenu popoverOffset={-8} popoverPlacement="bottom-end">
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
	const scaleIconCSS = scaleIconOnHover('sm');

	useEffect(() => {
		scrollbarWidthRef.current =
			window.innerWidth - document.documentElement.offsetWidth;
	}, []);

	return (
		<Flex
			alignItems="center"
			as={BaseButton}
			color="action"
			css={[
				isMenuOpen ? { background: localPalette.linkHoverBg } : undefined,
				{
					overflow: 'hidden',
					':hover': {
						color: boxPalette.foregroundText,
						backgroundColor: localPalette.linkHoverBg,
						'& > span[data-main-nav-list-item-label]': packs.underline,
					},
					svg: {
						transform: isMenuOpen ? 'rotate(180deg)' : undefined,
						transition: scaleIconCSS.transition,
					},
					':hover svg': {
						transform: isMenuOpen
							? `rotate(180deg) ${scaleIconCSS.transform}`
							: scaleIconCSS.transform,
					},
				},
			]}
			focusRingFor="keyboard"
			fontSize={{ xs: 'xs', lg: 'sm' }}
			gap={0.5}
			height="100%"
			justifyContent="center"
			maxWidth={{
				// 17.625rem is the available space beside the hamburger at 375px
				xs: `calc(17.625rem - ${scrollbarWidthRef.current}px)`,
				// It's then reduced slightly to give more room for the nav items
				lg: `calc(16rem - ${scrollbarWidthRef.current}px)`,
			}}
			paddingLeft={1}
			paddingRight={1}
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			ref={ref}
			{...buttonProps}
		>
			{beforeElement}
			<span css={packs.truncate} data-main-nav-list-item-label>
				{label}
			</span>
			{endElement}
			<ChevronDownIcon css={{ flexShrink: 0 }} size="sm" weight="bold" />
		</Flex>
	);
}
