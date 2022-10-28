import type { ReactNode } from 'react';
import { Column } from '../columns';
import { packs } from '../core';
import { HeaderBrand } from './HeaderBrand';
import { HeaderContainer } from './HeaderContainer';

export type HeaderProps = {
	badgeLabel?: string;
	heading: string;
	logo?: JSX.Element;
	rightContent?: ReactNode;
	subline?: string;
	size?: 'sm' | 'md';
	background?: 'body' | 'bodyAlt';
	href?: string;
};

export function Header({
	badgeLabel,
	logo,
	heading,
	rightContent,
	subline,
	size = 'md',
	background = 'body',
	href = '/',
}: HeaderProps) {
	const hasRightContent = !!rightContent;
	return (
		<HeaderContainer background={background} size={size}>
			<Column columnSpan={{ xs: 12, md: hasRightContent ? 8 : 12 }}>
				<HeaderBrand
					badgeLabel={badgeLabel}
					logo={logo}
					size={size}
					href={href}
					heading={heading}
					subline={subline}
				/>
			</Column>
			{hasRightContent && (
				<Column columnSpan={{ xs: 12, md: 4 }} css={packs.print.hidden}>
					{rightContent}
				</Column>
			)}
		</HeaderContainer>
	);
}
