import { forwardRef, useCallback, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import { useClickOutside, useTernaryState } from '@ag.ds-next/react/core';
import { Button } from '@ag.ds-next/react/button';
import { Box, Stack } from '@ag.ds-next/react/box';

const MenuButton = ({ children, onClick }) => (
	<Button variant="secondary" onClick={onClick}>
		{children}
	</Button>
);

const MenuList = forwardRef(({ children, ...props }, ref) => {
	const { styles, attributes } = usePopper(refEl, popperEl, {
		placement: 'bottom-start',
		modifiers: [{ name: 'offset', options: { offset: [0, 8] } }],
	});

	return (
		<Box
			ref={ref}
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
				{children}
			</Stack>
		</Box>
	);
});

const Dropdown = ({ children }) => {
	// Pop-up menu state
	const [isOpen, open, close] = useTernaryState(false);
	const [refEl, setRefEl] = useState<HTMLDivElement | null>(null);
	const [popperEl, setPopperEl] = useState<HTMLDivElement | null>(null);
	const { styles, attributes } = usePopper(refEl, popperEl, {
		placement: 'bottom-start',
		modifiers: [{ name: 'offset', options: { offset: [0, 8] } }],
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
			<MenuButton onClick={onButtonClick}>Menu</MenuButton>

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
						{children}
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

export const Menu = ({ links }) => {
	const [open, setOpen] = useState(false);
	return (
		<Dropdown
			open={open}
			onOpenChange={setOpen}
			trigger={<Button>Open menu</Button>}
			triggerType="link"
			placement="bottom"
			portal
		>
			{links.map(({ label, href }, key) => (
				<LinkItem href={href} key={key}>
					{label}
				</LinkItem>
			))}
		</Dropdown>
	);
};

// const DropdownButtonMenu = () => {
// 	const [open, setOpen] = useState(false);
// 	return (
// 		<Dropdown
// 			open={open}
// 			onOpenChange={setOpen}
// 			trigger={<Button>Open menu</Button>}
// 			triggerType="button"
// 			placement="bottom"
// 			portal
// 		>
// 			<DropdownItem>Item 1</DropdownItem>
// 			<DropdownItem>Item 2</DropdownItem>
// 			<DropdownItem>Item 3</DropdownItem>
// 		</Dropdown>
// 	);
// };

// export const Buttons = () => <DropdownButtonMenu />;

const Html = () => {
	return (
		<div className="menu-popup group">
			<button
				type="button"
				aria-haspopup="true"
				aria-controls="menu1"
				className="item menu-button"
				aria-label="Font: Sans-serif"
			>
				SANS-SERIF
				<span></span>
			</button>
			<ul role="menu" id="menu1" aria-label="Font Family">
				<li role="menuitemradio" aria-checked="true">
					Sans-serif
				</li>
				<li role="menuitemradio" aria-checked="false">
					Serif
				</li>
				<li role="menuitemradio" aria-checked="false">
					Monospace
				</li>
				<li role="menuitemradio" aria-checked="false">
					Fantasy
				</li>
				<li role="menuitemradio" aria-checked="false">
					Cursive
				</li>
			</ul>
		</div>
	);
};
