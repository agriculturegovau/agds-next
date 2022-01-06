import type { ReactNode } from 'react';
import { Logo } from '@ag.ds-next/ag-branding';
import { Stack } from '@ag.ds-next/box';
import { Header } from '@ag.ds-next/header';
import { MainNav } from '@ag.ds-next/main-nav';

import { useRouter } from 'next/router';
import Link from 'next/link';

const NAV_LINKS = [
	{ label: 'Home', href: '/' },
	{ label: 'Packages', href: '/packages' },
	{ label: 'Releases', href: '/releases' },
];

const SECONDARY_LINKS = [
	{ label: 'Storybook', href: '/storybook/index.html' },
	{ label: 'Playroom', href: '/playroom/index.html' },
	{ label: 'GitHub', href: 'https://github.com/steelthreads/agds-next' },
];

const NavLink = ({ href, label }: { href: string; label: ReactNode }) => (
	<Link href={href}>
		<a>{label}</a>
	</Link>
);

export const SiteHeader = () => {
	const router = useRouter();

	return (
		<Stack>
			<Header
				variant="dark"
				logo={<Logo />}
				heading="AG Design-System"
				subline="Welcome to the AG Design-System"
			/>
			<MainNav
				variant="darkAlt"
				links={NAV_LINKS}
				secondaryLinks={SECONDARY_LINKS}
				activePath={router.asPath}
				linkComponent={NavLink}
			/>
		</Stack>
	);
};
