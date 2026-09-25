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
				heading="Agriculture Design System"
				logo={<Logo />}
				subline="Design System for import and export services"
			/>
			<MainNav
				activePath={router.asPath}
				id="main-nav"
				items={NAV_ITEMS.primary}
				secondaryItems={NAV_ITEMS.secondary}
			/>
		</Stack>
	);
};
