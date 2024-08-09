import { Column } from '../columns';
import { packs } from '../core';
import { HeaderBrand } from './HeaderBrand';
import { HeaderContainer } from './HeaderContainer';
import { HeaderProps } from './types';

export function Header({
	background = 'body',
	badgeLabel,
	dividerPosition = 'after',
	heading,
	href = '/',
	logo,
	rightContent,
	secondHref,
	secondLogo,
	size = 'md',
	subline,
}: HeaderProps) {
	const hasRightContent = !!rightContent;

	return (
		<HeaderContainer background={background} size={size}>
			<Column columnSpan={{ xs: 12, lg: hasRightContent ? 8 : 12 }}>
				<HeaderBrand
					badgeLabel={badgeLabel}
					dividerPosition={dividerPosition}
					hasRightContent={hasRightContent}
					heading={heading}
					href={href}
					logo={logo}
					secondLogo={secondLogo}
					secondHref={secondHref}
					size={size}
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
