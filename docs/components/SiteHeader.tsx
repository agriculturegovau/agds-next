import { useRouter } from 'next/router';
import { Logo } from '@ag.ds-next/ag-branding';
import { Stack } from '@ag.ds-next/box';
import { Header } from '@ag.ds-next/header';
import { MainNav, MainNavLink } from '@ag.ds-next/main-nav';

const NAV_LINKS = [
	{ label: 'Home', href: '/' },
	{ label: 'Packages', href: '/packages' },
	{ label: 'Templates', href: '/templates' },
	{ label: 'Guides', href: '/guides' },
	{ label: 'Releases', href: '/releases' },
];

export const SiteHeader = () => {
	const router = useRouter();

	return (
		<Stack>
			<Header
				variant="darkAlt"
				logo={<Logo />}
				heading="Agriculture Design System"
				subline="Design System for the Export Service"
				badgeLabel="Alpha"
			/>
			<MainNav
				id="main-nav"
				variant="agriculture"
				links={NAV_LINKS}
				activePath={router.asPath}
				rightContent={
					<MainNavLink
						label="GitHub"
						href="https://github.com/steelthreads/agds-next"
					/>
				}
			/>
		</Stack>
	);
};
