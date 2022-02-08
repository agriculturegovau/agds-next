import { Logo } from '@ag.ds-next/ag-branding';
import { Stack } from '@ag.ds-next/box';
import { Header } from '@ag.ds-next/header';
import { MainNav } from '@ag.ds-next/main-nav';

import { useRouter } from 'next/router';

const NAV_LINKS = [
	{ label: 'Home', href: '/' },
	{ label: 'Packages', href: '/packages' },
	{ label: 'Releases', href: '/releases' },
	{ label: 'Guides', href: '/guides' },
];

const SECONDARY_LINKS = [
	{ label: 'GitHub', href: 'https://github.com/steelthreads/agds-next' },
];

export const SiteHeader = () => {
	const router = useRouter();

	return (
		<Stack>
			<Header
				variant="dark"
				logo={<Logo />}
				heading="Agriculture Design System"
				subline="Design System (alpha) for the Export Service"
			/>
			<MainNav
				variant="agriculture"
				links={NAV_LINKS}
				secondaryLinks={SECONDARY_LINKS}
				activePath={router.asPath}
			/>
		</Stack>
	);
};
