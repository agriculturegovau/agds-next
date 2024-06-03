import type { ReactNode } from 'react';
import { Column } from '../columns';
import { packs } from '../core';
import { HeaderBrand } from './HeaderBrand';
import { HeaderContainer } from './HeaderContainer';

export type HeaderProps = {
	/** When using two logos, position the horizontal dividing line 'between' the logos or 'after' them. */
	dividerPosition?: 'after' | 'between';
	/** The logo to display. */
	logo?: JSX.Element;
	/** The second logo to display for co-branding. */
	secondLogo?: JSX.Element;
	/** The heading should be set to the website or service title. */
	heading: string;
	/** Used to provide additional information to describe your website or service. */
	subline?: string;
	/** Used to indicate if an application is in a prerelease state. */
	badgeLabel?: string;
	/** The href to link to, for example "/". */
	href?: string;
	/** The href to link to, for example "/". */
	secondHref?: string;
	/** Content to placed on the right side of the Header. */
	rightContent?: ReactNode;
	/** The size of the Header controls the vertical height. */
	size?: 'sm' | 'md';
	/** The background color of the Header. */
	background?: 'body' | 'bodyAlt';
};

export function Header({
	badgeLabel,
	dividerPosition = 'after',
	logo,
	secondLogo,
	heading,
	rightContent,
	subline,
	size = 'md',
	background = 'body',
	href = '/',
	secondHref,
}: HeaderProps) {
	const hasRightContent = !!rightContent;

	return (
		<HeaderContainer background={background} size={size}>
			<Column columnSpan={{ xs: 12, lg: hasRightContent ? 8 : 12 }}>
				<HeaderBrand
					badgeLabel={badgeLabel}
					dividerPosition={dividerPosition}
					href={href}
					logo={logo}
					secondLogo={secondLogo}
					secondHref={secondHref}
					size={size}
					heading={heading}
					subline={subline}
				/>
			</Column>

			{hasRightContent && (
				<Column
					alignSelf="start"
					columnSpan={{ xs: 12, lg: 4 }}
					css={packs.print.hidden}
				>
					{rightContent}
				</Column>
			)}
		</HeaderContainer>
	);
}
