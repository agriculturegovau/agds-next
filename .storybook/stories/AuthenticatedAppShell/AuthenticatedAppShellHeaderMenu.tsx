import { useCallback, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import {
	boxPalette,
	useClickOutside,
	useTernaryState,
} from '@ag.ds-next/react/core';
import { BaseButton } from '@ag.ds-next/react/button';
import { Box, Flex, Stack } from '@ag.ds-next/react/box';
import { Avatar } from '@ag.ds-next/react/avatar';
import { Text } from '@ag.ds-next/react/text';
import { ChevronDownIcon } from '@ag.ds-next/react/icon';
import { authenticatedAppShellHeaderHeight } from './utils';

const menuId = 'authenticatedAppShellHeaderMenu';
const buttonId = 'authenticatedAppShellHeaderMenuButton';

const AuthenticatedAppShellHeaderMenuButton = ({
	userName,
	role,
	onClick,
	isOpen,
}: {
	userName: string;
	role: string;
	onClick: () => void;
	isOpen: boolean;
}) => (
	<Flex
		as={BaseButton}
		id={buttonId}
		type="button"
		aria-haspopup="true"
		aria-controls={menuId}
		aria-label={`User menu, ${userName}`}
		onClick={onClick}
		gap={1}
		paddingX={1}
		height={authenticatedAppShellHeaderHeight}
		css={{
			'&:hover': {
				background: boxPalette.backgroundShade,
			},
			...(isOpen && {
				background: boxPalette.backgroundShade,
			}),
		}}
		alignItems="center"
	>
		<Flex gap={0.5} as="span">
			<Avatar name={userName} tone="action" aria-hidden />
			<Stack as="span" display={{ xs: 'none', lg: 'flex' }}>
				<Text color="action" fontWeight="bold">
					{userName}
				</Text>
				<Text color="muted" fontSize="sm">
					{role}
				</Text>
			</Stack>
		</Flex>
		<ChevronDownIcon color="action" />
	</Flex>
);

export const AuthenticatedAppShellHeaderMenu = () => {
	// Pop-up menu state
	const [isOpen, open, close] = useTernaryState(false);
	const [refEl, setRefEl] = useState<HTMLDivElement | null>(null);
	const [popperEl, setPopperEl] = useState<HTMLDivElement | null>(null);
	const { styles, attributes } = usePopper(refEl, popperEl, {
		placement: 'bottom-end',
		// modifiers: [{ name: 'offset', options: { offset: [0, 8] } }],
	});

	// Close the  when the user clicks outside
	const clickOutsideRef = useRef(popperEl);
	clickOutsideRef.current = popperEl;
	const onButtonClick = useCallback(() => {
		if (isOpen) {
			close();
		} else {
			open();
		}
	}, [isOpen, open, close]);

	const handleClickOutside = useCallback(() => {
		if (isOpen) close();
	}, [isOpen, close]);

	useClickOutside(clickOutsideRef, handleClickOutside);

	return (
		<div ref={setRefEl}>
			<AuthenticatedAppShellHeaderMenuButton
				userName="Toto Wolff"
				role="Team Principal"
				onClick={onButtonClick}
				isOpen={isOpen}
			/>

			{isOpen && (
				<Stack
					as="ul"
					ref={setPopperEl}
					role="menu"
					aria-labelledby={buttonId}
					id={menuId}
					palette="light"
					background="body"
					rounded
					style={{
						...styles.popper,
						// copied from Card
						boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
						maxHeight: 200,
						overflowY: 'scroll',
					}}
					{...attributes.popper}
					css={{ zIndex: 1 }}
				>
					{[
						{ label: 'Account', href: '#account' },
						{ label: 'Settings', href: '#settings' },
						{ label: 'Messages', href: '#messages' },
					].map(({ label, href }, key) => (
						<Box as="li" key={key} role="none">
							<Box
								as="a"
								display="block"
								role="menuitem"
								padding={1}
								href={href}
								link
							>
								{label}
							</Box>
						</Box>
					))}
				</Stack>
			)}
		</div>
	);
};
