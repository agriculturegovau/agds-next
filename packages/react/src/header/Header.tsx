import type { ReactElement, ReactNode } from 'react';
import { Column } from '../columns';
import { packs } from '../core';
import { HeaderBrand } from './HeaderBrand';
import { HeaderContainer } from './HeaderContainer';

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
	/** The maximum width of the container. */
	maxWidth?: 'container' | 'containerLg';
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

export function Header({
	background = 'body',
	badgeLabel,
	dividerPosition = 'after',
	heading,
	href = '/',
	logo,
	maxWidth = 'container',
	rightContent,
	secondHref,
	secondLogo,
	size = 'md',
	subline,
}: HeaderProps) {
	const hasRightContent = !!rightContent;

	return (
		<HeaderContainer background={background} maxWidth={maxWidth} size={size}>
			<Column columnSpan={{ xs: 12, lg: hasRightContent ? 8 : 12 }}>
				<HeaderBrand
					badgeLabel={badgeLabel}
					dividerPosition={dividerPosition}
					hasRightContent={hasRightContent}
					heading={heading}
					href={href}
					logo={logo}
					secondHref={secondHref}
					secondLogo={secondLogo}
					size={size}
					subline={subline}
				/>
			</Column>

			{hasRightContent && (
				<Column
					alignSelf="start"
					columnSpan={{ xs: 12, lg: 4 }}
					css={[
						{
							height: '100%',
						},
						packs.print.hidden,
					]}
				>
					{rightContent}
				</Column>
			)}
		</HeaderContainer>
	);
}
