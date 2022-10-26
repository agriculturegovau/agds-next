import { useRouter } from 'next/router';
import {
	Logo,
	Stack,
	Header,
	AvatarIcon,
	MainNav,
	MainNavBottomBar,
} from '@ag.ds-next/react';

const NAV_ITEMS = {
	primary: [
		{
			label: 'Home',
			href: '/',
		},
		{
			label: 'Services',
			href: '/services',
		},
	],
	secondary: [
		{
			label: 'Sign out',
			href: '/not-found',
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
				heading="yourGov"
				subline="Access government services from one place"
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
