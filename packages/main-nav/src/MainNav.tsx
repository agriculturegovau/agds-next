import { NavContainer, NavContainerProps } from './NavContainer';
import { NavList, NavListProps } from './NavList';

export function MainNav({
	variant,
	links,
	secondaryLinks,
	activePath,
}: React.PropsWithChildren<{
	variant: NavContainerProps['variant'];
	links: NavListProps['links'];
	secondaryLinks?: NavListProps['links'];
	activePath?: string;
}>) {
	return (
		<NavContainer variant={variant}>
			<NavList links={links} activePath={activePath} />
			{secondaryLinks?.length ? (
				<NavList links={secondaryLinks} activePath={activePath} />
			) : null}
		</NavContainer>
	);
}
