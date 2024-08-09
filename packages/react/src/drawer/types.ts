import { type SpringValue } from '@react-spring/web';
import { type PropsWithChildren, type ReactNode } from 'react';

export type DrawerProps = PropsWithChildren<{
	/** The actions to display at the bottom of the drawer. Typically a `ButtonGroup`. */
	actions?: ReactNode;
	/** On close of the drawer, this element will be focused, rather than the trigger element. */
	elementToFocusOnClose?: HTMLElement | null;
	/** If true, the drawer will be displayed. */
	isOpen?: boolean;
	/** Lighten the overlay so that the main content underneath is more visible while the draw is open. */
	mutedOverlay?: boolean;
	/** Function to be called when the 'Close' button is pressed. */
	onClose?: () => void;
	/** @deprecated use `onClose` instead */
	onDismiss?: () => void;
	/** The title of the drawer. It can span lines but should not be too long. */
	title: string;
	/** The width of the drawer. */
	width?: DrawerDialogWidth;
}>;

export type DrawerDialogProps = PropsWithChildren<{
	/** Used to render buttons at the bottom of the draw. */
	actions?: ReactNode;
	/** On close of the drawer, this element will be focused, rather than the trigger element. */
	elementToFocusOnClose?: DrawerProps['elementToFocusOnClose'];
	/** @deprecated use `onClose` instead. */
	onDismiss?: () => void;
	/** Function to be called when the 'Close' button is pressed. */
	onClose?: () => void;
	style: { translateX: SpringValue<string> };
	/** The title displayed at the top of the draw. */
	title: string;
	/** The width of the draw. */
	width: DrawerDialogWidth;
}>;

const WIDTH_MAP = {
	md: '32rem', // 512px
	lg: '45rem', // 720px
};

export type DrawerDialogWidth = keyof typeof WIDTH_MAP;
