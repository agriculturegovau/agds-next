import { useRouter } from 'next/router';
import { Logo } from '@ag.ds-next/react/ag-branding';
import { Stack } from '@ag.ds-next/react/stack';
import { Header } from '@ag.ds-next/react/header';
import { AvatarIcon } from '@ag.ds-next/react/icon';
import { MainNav } from '@ag.ds-next/react/main-nav';
import { SiteHeaderSearch } from './SiteHeaderSearch';

const NAV_ITEMS = {
	primary: [
		{ label: 'Home', href: '/' },
		{ label: 'Category 1', href: '/category' },
	],
	secondary: [
		{
			label: 'Sign In',
			href: '/sign-in-form',
			endElement: <AvatarIcon />,
		},
	],
};

export const SiteHeader = ({ focusMode }: { focusMode: boolean }) => {
	const router = useRouter();
	return (
		<Stack palette="dark">
			<Header
				background="bodyAlt"
				heading="Export Service"
				logo={<Logo />}
				rightContent={<SiteHeaderSearch />}
				subline="Supporting Australian agricultural exports"
			/>

			<MainNav
				activePath={router.asPath}
				focusMode={focusMode}
				id="main-nav"
				items={NAV_ITEMS.primary}
				secondaryItems={NAV_ITEMS.secondary}
			/>
		</Stack>
	);
};
