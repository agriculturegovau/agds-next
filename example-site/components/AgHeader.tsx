import { Logo } from '@ag.ds-next/ag-branding';
import { Stack } from '@ag.ds-next/box';
import { Header } from '@ag.ds-next/header';
import { MainNav } from '@ag.ds-next/main-nav';

import { useRouter } from 'next/router';

const NAV_LINKS = [
	{ label: 'Home', href: '/' },
	{ label: 'Content', href: '/content' },
	{ label: 'Form example', href: '/form' },
];

export const AgHeader = () => {
	const router = useRouter();

	return (
		<Stack>
			<Header
				variant="dark"
				logo={<Logo />}
				heading="AG Design-System"
				subline="Welcome to the AG Design-System"
			/>
			<MainNav variant="darkAlt" links={NAV_LINKS} activePath={router.asPath} />
		</Stack>
	);
};
