import { Column } from '@ag.ds-next/columns';
import { HeaderContainer } from './HeaderContainer';
import { HeaderBrand } from './HeaderBrand';
import type { ReactNode } from 'react';

export type HeaderProps = {
	heading: string;
	logo?: JSX.Element;
	rightContent?: ReactNode;
	subline?: string;
	variant?: 'light' | 'lightAlt' | 'dark' | 'darkAlt';
	href?: string;
};

export function Header({
	logo,
	heading,
	rightContent,
	subline,
	variant = 'dark',
	href = '/',
}: HeaderProps) {
	const hasRightContent = !!rightContent;
	return (
		<HeaderContainer variant={variant}>
			<Column columnSpan={{ xs: 12, md: hasRightContent ? 8 : 12 }}>
				<HeaderBrand
					logo={logo}
					href={href}
					heading={heading}
					subline={subline}
				/>
			</Column>

			{hasRightContent && (
				<Column columnSpan={{ xs: 12, md: 4 }}>{rightContent}</Column>
			)}
		</HeaderContainer>
	);
}
