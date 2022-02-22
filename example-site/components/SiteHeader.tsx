import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Logo } from '@ag.ds-next/ag-branding';
import { Stack } from '@ag.ds-next/box';
import { Header } from '@ag.ds-next/header';
import { MainNav } from '@ag.ds-next/main-nav';
import {
	SearchBoxForm,
	SearchBoxInput,
	SearchBoxButton,
} from '@ag.ds-next/search-box';

const NAV_LINKS = [
	{ label: 'Home', href: '/' },
	{ label: 'Content', href: '/content' },
	{ label: 'Form example', href: '/form' },
];

// TODO: example links when authenticated / not authenticated
const SECONDARY_LINKS = [{ label: 'Sign in', href: '/sign-in' }];

export const SiteHeader = () => {
	const router = useRouter();

	return (
		<Stack>
			<Header
				variant="dark"
				logo={<Logo />}
				heading="Export Service"
				subline="Supporting Australian agricultural exports"
				rightContent={<SiteHeaderSearch />}
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

type SearchFormInput = {
	search: string;
};

const SiteHeaderSearch = () => {
	const { register, handleSubmit } = useForm<SearchFormInput>();

	const onSubmit: SubmitHandler<SearchFormInput> = ({ search }) => {
		console.log(search);
	};

	return (
		<SearchBoxForm aria-label="Sitewide" onSubmit={handleSubmit(onSubmit)}>
			<SearchBoxInput {...register('search')} />
			<SearchBoxButton
				iconOnly={{ xs: true, sm: false, md: true, lg: false, xl: false }}
			>
				Search
			</SearchBoxButton>
		</SearchBoxForm>
	);
};
