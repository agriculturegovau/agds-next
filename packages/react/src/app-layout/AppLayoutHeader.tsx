import { ReactNode } from 'react';
import { Box, type BorderColor } from '../box';
import { Flex } from '../flex';
import { tokens, type BoxPalette, type ResponsiveProp } from '../core';
import { AppLayoutHeaderBrand } from './AppLayoutHeaderBrand';
import { AppLayoutHeaderAccount } from './AppLayoutHeaderAccount';
import { AppLayoutHeaderNav } from './AppLayoutHeaderNav';
import { APP_LAYOUT_DESKTOP_BREAKPOINT } from './utils';

export type AppLayoutHeaderProps = {
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
	background?: 'body' | 'bodyAlt';
	/** Used to indicate if an application is in a prerelease state. */
	badgeLabel?: string;
	borderColor?: ResponsiveProp<BorderColor>;
	/** The heading should be set to the website or service title. */
	heading: string;
	/**  The href to link to, for example "/". */
	href: string;
	/** Defines an identifier (ID) which must be unique. */
	id?: string;
	/** The logo to display. */
	logo: JSX.Element;
	palette?: ResponsiveProp<BoxPalette>;
	/** Used to provide additional information to describe your website or service. */
	subLine?: string;
};

export function AppLayoutHeader({
	accountDetails,
	background = 'bodyAlt',
	badgeLabel,
	borderColor = 'accent',
	heading,
	href,
	id,
	logo,
	palette = 'dark',
	subLine,
}: AppLayoutHeaderProps) {
	return (
		<Flex
			as="header"
			borderBottom
			borderBottomWidth="xxl"
			borderColor={borderColor}
			css={{
				[tokens.mediaQuery.min[APP_LAYOUT_DESKTOP_BREAKPOINT]]: {
					gridColumnStart: 1,
					gridColumnEnd: 3,
				},
			}}
			flexDirection="column"
			id={id}
			palette={palette}
		>
			<Flex
				alignItems="center"
				background={background}
				gap={1}
				justifyContent="space-between"
				paddingX={tokens.containerPadding}
				width="100%"
			>
				<AppLayoutHeaderBrand
					badgeLabel={badgeLabel}
					heading={heading}
					href={href}
					logo={logo}
					subLine={subLine}
				/>
				<Box
					display={{ xs: 'none', [APP_LAYOUT_DESKTOP_BREAKPOINT]: 'flex' }}
					height="100%"
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
