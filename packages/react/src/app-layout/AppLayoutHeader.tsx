import { ReactNode } from 'react';
import { BorderColor, Box } from '../box';
import { BoxPalette, tokens } from '../core';
import { Flex } from '../flex';
import { AppLayoutPallet, useAppLayoutContext } from './AppLayoutContext';
import { AppLayoutHeaderAccount } from './AppLayoutHeaderAccount';
import { AppLayoutHeaderBrand } from './AppLayoutHeaderBrand';
import { AppLayoutHeaderNav } from './AppLayoutHeaderNav';
import { APP_LAYOUT_DESKTOP_BREAKPOINT } from './utils';

interface Theming {
	palette: BoxPalette;
	borderColor: BorderColor;
}

const themes: Record<AppLayoutPallet, Theming> = {
	dark: {
		borderColor: 'accent',
		palette: 'dark',
	},
	light: {
		borderColor: 'selected',
		palette: 'light',
	},
};

export type AppLayoutHeaderProps = {
	/** Defines an identifier (ID) which must be unique. */
	id?: string;
	/** The logo to display. */
	logo: JSX.Element;
	/**  The href to link to, for example "/". */
	href: string;
	/** The heading should be set to the website or service title. */
	heading: string;
	/** Used to provide additional information to describe your website or service. */
	subLine?: string;
	/** Used to indicate if an application is in a prerelease state. */
	badgeLabel?: string;
	/** Details for the authenticated account. */
	accountDetails?: {
		/** The name of the authenticated user. */
		name: string;
		/** Displayed under the users name if needed e.g. to show the business name. */
		secondaryText?: string;
		/** The href to link to, for example "/account". */
		href?: string;
		/** Dropdown menu for account switching. */
		dropdown?: ReactNode;
	};
};

export function AppLayoutHeader({
	id,
	heading,
	href,
	logo,
	subLine,
	badgeLabel,
	accountDetails,
}: AppLayoutHeaderProps) {
	const { pallet } = useAppLayoutContext();
	const { borderColor, palette } = themes[pallet] || {};

	return (
		<Flex
			as="header"
			id={id}
			palette={palette}
			flexDirection="column"
			borderBottom
			borderBottomWidth="xxl"
			borderColor={borderColor}
			css={{
				[tokens.mediaQuery.min[APP_LAYOUT_DESKTOP_BREAKPOINT]]: {
					gridColumnStart: 1,
					gridColumnEnd: 3,
				},
			}}
		>
			<Flex
				gap={1}
				paddingX={tokens.containerPadding}
				justifyContent="space-between"
				background="bodyAlt"
				alignItems="center"
				width="100%"
			>
				<AppLayoutHeaderBrand
					heading={heading}
					href={href}
					logo={logo}
					subLine={subLine}
					badgeLabel={badgeLabel}
				/>
				<Box
					height="100%"
					display={{ xs: 'none', [APP_LAYOUT_DESKTOP_BREAKPOINT]: 'flex' }}
				>
					{accountDetails ? (
						<AppLayoutHeaderAccount {...accountDetails} />
					) : null}
				</Box>
			</Flex>
			<AppLayoutHeaderNav accountDetails={accountDetails} />
		</Flex>
	);
}
