import type { ReactNode } from 'react';
import { Column } from '@ag.ds-next/columns';
import { packs } from '@ag.ds-next/core';
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
			<Column columnSpan={{ xs: 12, lg: hasRightContent ? 8 : 12 }}>
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
				<Column columnSpan={{ xs: 12, lg: 4 }} css={packs.print.hidden}>
					{rightContent}
				</Column>
			)}
		</HeaderContainer>
	);
}
