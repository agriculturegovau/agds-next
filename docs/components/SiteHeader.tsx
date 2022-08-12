import { useRouter } from 'next/router';
import { Logo } from '@ag.ds-next/ag-branding';
import { Stack } from '@ag.ds-next/box';
import { Header } from '@ag.ds-next/header';
import { MainNav } from '@ag.ds-next/main-nav';

const NAV_ITEMS = {
	primary: [
		{ label: 'Home', href: '/' },
		{ label: 'Packages', href: '/packages' },
		{ label: 'Templates', href: '/templates' },
		{ label: 'Guides', href: '/guides' },
		{ label: 'Releases', href: '/releases' },
	],
	secondary: [
		{
			label: 'GitHub',
			href: 'https://github.com/steelthreads/agds-next',
		},
	],
};

export const SiteHeader = () => {
	const router = useRouter();
	return (
		<Stack palette="dark">
			<Header
				variant="darkAlt"
				logo={<Logo />}
				heading="Agriculture Design System"
				subline="Design System for the Export Service"
				badgeLabel="Alpha"
			/>
			<MainNav
				id="main-nav"
				activePath={router.asPath}
				items={NAV_ITEMS.primary}
				secondaryItems={NAV_ITEMS.secondary}
			/>
		</Stack>
	);
};
