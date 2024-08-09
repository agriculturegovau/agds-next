import { Box } from '../box';
import { Flex } from '../flex';
import { tokens } from '../core';
import { AppLayoutHeaderBrand } from './AppLayoutHeaderBrand';
import { AppLayoutHeaderAccount } from './AppLayoutHeaderAccount';
import { AppLayoutHeaderNav } from './AppLayoutHeaderNav';
import { APP_LAYOUT_DESKTOP_BREAKPOINT } from './utils';
import { AppLayoutHeaderProps } from './types';

export function AppLayoutHeader({
	accountDetails,
	background = 'bodyAlt',
	badgeLabel,
	borderColor = 'accent',
	dividerPosition = 'after',
	heading,
	href,
	id,
	logo,
	palette = 'dark',
	secondHref,
	secondLogo,
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
					dividerPosition={dividerPosition}
					hasAccountDetails={Boolean(accountDetails)}
					heading={heading}
					href={href}
					logo={logo}
					secondHref={secondHref}
					secondLogo={secondLogo}
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
