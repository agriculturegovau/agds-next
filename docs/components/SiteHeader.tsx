import { useRouter } from 'next/router';
import { Logo } from '@ag.ds-next/react/ag-branding';
import { Stack } from '@ag.ds-next/react/stack';
import { Header } from '@ag.ds-next/react/header';
import { MainNav } from '@ag.ds-next/react/main-nav';
import { GithubIcon } from './GithubLogo';

const NAV_ITEMS = {
	primary: [
		{ label: 'Home', href: '/' },
		{ label: 'Foundations', href: '/foundations' },
		{ label: 'Components', href: '/components' },
		{ label: 'Patterns', href: '/patterns' },
		{ label: 'Templates', href: '/templates' },
		{ label: 'Content', href: '/content' },
		{ label: 'Guides', href: '/guides' },
	],
	secondary: [
		{
			label: 'GitHub',
			href: 'https://github.com/agriculturegovau/agds-next',
			endElement: <GithubIcon />,
		},
	],
};

export const SiteHeader = () => {
	const router = useRouter();
	return (
		<Stack palette="dark">
			<Header
				background="bodyAlt"
				logo={<Logo />}
				heading="Agriculture Design System"
				subline="Design System for the Export Service"
				badgeLabel="Beta"
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
