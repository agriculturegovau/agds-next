import { HeaderContainer } from './HeaderContainer';
import { HeaderBrand } from './HeaderBrand';

export type HeaderProps = {
	heading: string;
	logo?: JSX.Element;
	subline?: string;
	variant?: 'light' | 'lightAlt' | 'dark' | 'darkAlt';
	href?: string;
};

export function Header({
	logo,
	heading,
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
		</HeaderContainer>
	);
}
