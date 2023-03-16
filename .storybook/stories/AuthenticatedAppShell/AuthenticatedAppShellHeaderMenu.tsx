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

const links = [
	{ label: 'Account', href: '#account' },
	{ label: 'Settings', href: '#settings' },
	{ label: 'Messages', href: '#messages' },
];

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
		<Flex gap={0.5}>
			<Avatar name={userName} tone="action" />
			<Stack>
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
				<Box
					ref={setPopperEl}
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
					<Stack as="ul" role="menu">
						{links.map(({ label, href }, key) => (
							<LinkItem href={href} key={key}>
								{label}
							</LinkItem>
						))}
					</Stack>
				</Box>
			)}
		</div>
	);
};

const LinkItem = ({ children, href }) => (
	<Box as="li">
		<Box as="a" display="block" role="menuitem" padding={1} href={href} link>
			{children}
		</Box>
	</Box>
);

const Html = () => {
	return (
		<div className="menu-button-links">
			<button
				type="button"
				id="menubutton"
				aria-haspopup="true"
				aria-controls="menu2"
			>
				WAI-ARIA Quick Links
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="12"
					height="9"
					viewBox="0 0 12 9"
				>
					<polygon points="1 0, 11 0, 6 8"></polygon>
				</svg>
			</button>
			<ul role="menu" id="menu2" aria-labelledby="menubutton">
				<li role="none">
					<a role="menuitem" href="https://www.w3.org/">
						W3C Home Page
					</a>
				</li>
				<li role="none">
					<a
						role="menuitem"
						href="https://www.w3.org/standards/webdesign/accessibility"
					>
						W3C Web Accessibility Initiative
					</a>
				</li>
				<li role="none">
					<a role="menuitem" href="https://www.w3.org/TR/wai-aria/">
						Accessible Rich Internet Application Specification
					</a>
				</li>
				<li role="none">
					<a role="menuitem" href="https://www.w3.org/TR/wai-aria-practices/">
						WAI-ARIA Authoring Practices
					</a>
				</li>
				<li role="none">
					<a
						role="menuitem"
						href="https://www.w3.org/TR/wai-aria-implementation/"
					>
						WAI-ARIA Implementation Guide
					</a>
				</li>
				<li role="none">
					<a role="menuitem" href="https://www.w3.org/TR/accname-aam-1.1/">
						Accessible Name and Description
					</a>
				</li>
			</ul>
		</div>
	);
};
