import { useRouter } from 'next/router';
import {
	Logo,
	Stack,
	Header,
	AvatarIcon,
	MainNav,
	MainNavBottomBar,
} from '@ag.ds-next/react';
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
				logo={<Logo />}
				heading="Export Service"
				subline="Supporting Australian agricultural exports"
				rightContent={<SiteHeaderSearch />}
			/>

			{!focusMode ? (
				<MainNav
					id="main-nav"
					activePath={router.asPath}
					items={NAV_ITEMS.primary}
					secondaryItems={NAV_ITEMS.secondary}
				/>
			) : (
				<MainNavBottomBar />
			)}
		</Stack>
	);
};
