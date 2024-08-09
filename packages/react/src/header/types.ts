import { type ReactElement, type ReactNode } from 'react';

export type HeaderProps = {
	/** The background color of the Header. */
	background?: 'body' | 'bodyAlt';
	/** Used to indicate if an application is in a prerelease state. */
	badgeLabel?: string;
	/** When using two logos, position the horizontal dividing line 'between' the logos or 'after' them. */
	dividerPosition?: 'after' | 'between';
	/** The heading should be set to the website or service title. */
	heading: string;
	/** The href to link to, for example "/". */
	href?: string;
	/** The logo to display. */
	logo?: ReactElement;
	/** Content to placed on the right side of the Header. */
	rightContent?: ReactNode;
	/** The href to link to, for example "/". */
	secondHref?: string;
	/** The second logo to display for co-branding. */
	secondLogo?: ReactElement;
	/** The size of the Header controls the vertical height. */
	size?: 'sm' | 'md';
	/** Used to provide additional information to describe your website or service. */
	subline?: string;
};
