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
	size?: 'small' | 'medium';
	variant?: 'light' | 'lightAlt' | 'dark' | 'darkAlt';
	href?: string;
};

export function Header({
	badgeLabel,
	logo,
	heading,
	rightContent,
	subline,
	size = 'medium',
	variant = 'darkAlt',
	href = '/',
}: HeaderProps) {
	const hasRightContent = !!rightContent;
	return (
		<HeaderContainer variant={variant} size={size}>
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
