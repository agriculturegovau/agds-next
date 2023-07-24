import { Flex } from '../flex';
import { tokens } from '../core';
import { AppLayoutHeaderBrand } from './AppLayoutHeaderBrand';
import { AppLayoutHeaderAccount } from './AppLayoutHeaderAccount';
import { AppLayoutHeaderNav } from './AppLayoutHeaderNav';
import { APP_LAYOUT_DESKTOP_BREAKPOINT } from './utils';

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
		href: string;
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
	return (
		<Flex
			as="header"
			id={id}
			palette="dark"
			flexDirection="column"
			borderBottom
			borderBottomWidth="xxl"
			borderColor="accent"
			css={{
				[tokens.mediaQuery.min[APP_LAYOUT_DESKTOP_BREAKPOINT]]: {
					gridColumnStart: 1,
					gridColumnEnd: 3,
				},
			}}
		>
			<Flex
				gap={1}
				paddingY={1}
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
				{accountDetails ? (
					<AppLayoutHeaderAccount
						display={{ xs: 'none', [APP_LAYOUT_DESKTOP_BREAKPOINT]: 'flex' }}
						{...accountDetails}
					/>
				) : null}
			</Flex>
			<AppLayoutHeaderNav accountDetails={accountDetails} />
		</Flex>
	);
}
