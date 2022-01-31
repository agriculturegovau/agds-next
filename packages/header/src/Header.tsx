import { Flex } from '@ag.ds-next/box';
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
	return (
		<HeaderContainer variant={variant}>
			<HeaderBrand
				logo={logo}
				href={href}
				heading={heading}
				subline={subline}
			/>
			<HeaderRight>{rightContent}</HeaderRight>
		</HeaderContainer>
	);
}

const HeaderRight = ({ children }: { children: ReactNode }) => {
	return (
		<Flex width={{ xs: '100%', md: '33.33%' }} alignItems="flex-end">
			{children}
		</Flex>
	);
};
