import { useCallback, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import {
	boxPalette,
	tokens,
	useClickOutside,
	useTernaryState,
} from '@ag.ds-next/react/core';
import { BaseButton } from '@ag.ds-next/react/button';
import { Box, Flex, Stack } from '@ag.ds-next/react/box';
import { Avatar } from '@ag.ds-next/react/avatar';
import { Text } from '@ag.ds-next/react/text';
import { ChevronDownIcon } from '@ag.ds-next/react/icon';
import { useLinkComponent } from '@ag.ds-next/react/core';
import { authenticatedAppShellHeaderHeight } from './utils';
import { useAuthenticatedAppShellContext } from './AuthenticatedAppShellContext';

const menuId = 'authenticatedAppShellHeaderMenu';
const buttonId = 'authenticatedAppShellHeaderMenuButton';

export const AuthenticatedAppShellHeaderMenu = () => {
	const { userMenu } = useAuthenticatedAppShellContext();
	const Link = useLinkComponent();

	// Pop-up menu state
	const [isOpen, open, close] = useTernaryState(false);
	const [refEl, setRefEl] = useState<HTMLDivElement | null>(null);
	const [popperEl, setPopperEl] = useState<HTMLUListElement | null>(null);
	const { styles, attributes } = usePopper(refEl, popperEl, {
		placement: 'bottom-end',
		modifiers: [{ name: 'offset', options: { offset: [0, 4] } }],
	});

	// Close the  when the user clicks outside
	const clickOutsideRef = useRef(popperEl);
	clickOutsideRef.current = popperEl;

	const onButtonClick = useCallback(() => {
		isOpen ? close() : open();
	}, [isOpen, open, close]);

	const handleClickOutside = useCallback(() => {
		if (isOpen) close();
	}, [isOpen, close]);

	useClickOutside(clickOutsideRef, handleClickOutside);

	const menuButtonWidth = refEl?.clientWidth;

	return (
		<div ref={setRefEl}>
			<AuthenticatedAppShellHeaderMenuButton
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
					style={styles.popper}
					{...attributes.popper}
					css={{
						width: menuButtonWidth,
						borderBottomLeftRadius: tokens.borderRadius,
						borderBottomRightRadius: tokens.borderRadius,
						zIndex: 1,
						// copied from Card
						boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
						maxHeight: 200,
						overflowY: 'scroll',
					}}
				>
					{userMenu.items.map((item, key) => {
						const { icon: Icon } = item;
						return (
							<Box key={key} as="li" role="none">
								{'href' in item ? (
									<Box
										as={Link}
										href={item.href}
										display="block"
										// @ts-ignore
										role="menuitem"
										padding={1}
										link
										width="100%"
									>
										{item.label}
										{Icon && <Icon />}
									</Box>
								) : (
									<Box
										as={BaseButton}
										onClick={item.onClick}
										display="block"
										// @ts-ignore
										role="menuitem"
										padding={1}
										link
										width="100%"
									>
										{item.label}
										{Icon && <Icon />}
									</Box>
								)}
							</Box>
						);
					})}
				</Stack>
			)}
		</div>
	);
};

const AuthenticatedAppShellHeaderMenuButton = ({
	onClick,
	isOpen,
}: {
	onClick: () => void;
	isOpen: boolean;
}) => {
	const { userMenu } = useAuthenticatedAppShellContext();
	return (
		<Flex
			as={BaseButton}
			id={buttonId}
			alignItems="center"
			paddingX={1}
			gap={1}
			height={authenticatedAppShellHeaderHeight}
			aria-haspopup="true"
			aria-controls={menuId}
			aria-label={`User menu, ${userMenu.name}`}
			onClick={onClick}
			css={{
				'&:hover': {
					background: boxPalette.backgroundShade,
				},
				...(isOpen && {
					background: boxPalette.backgroundShade,
				}),
			}}
			focus
		>
			<Flex as="span" gap={0.5}>
				<Avatar name={userMenu.name} tone="action" aria-hidden />
				<Box
					as="span"
					display={{ xs: 'none', lg: 'flex' }}
					flexDirection="column"
				>
					<Text color="action" fontWeight="bold" fontSize="xs">
						{userMenu.name}
					</Text>
					<Text color="muted" fontSize="xs">
						{userMenu.organisation}
					</Text>
				</Box>
			</Flex>
			<ChevronDownIcon color="action" weight="bold" size="sm" />
		</Flex>
	);
};
