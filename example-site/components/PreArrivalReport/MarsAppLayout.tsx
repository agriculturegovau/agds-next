import { PropsWithChildren, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Box, Flex } from '@ag.ds-next/react/box';
import { SkipLinks } from '@ag.ds-next/react/skip-link';
import { Logo } from '@ag.ds-next/react/ag-branding';
import { Stack } from '@ag.ds-next/react/box';
import { Header } from '@ag.ds-next/react/header';
import { AvatarIcon } from '@ag.ds-next/react/icon';
import { MainNav, MainNavBottomBar } from '@ag.ds-next/react/main-nav';
import {
	SearchBox,
	SearchBoxInput,
	SearchBoxButton,
} from '@ag.ds-next/react/search-box';
import { Text } from '@ag.ds-next/react/text';
import { DirectionLink } from '@ag.ds-next/react/direction-link';
import { Footer, FooterDivider } from '@ag.ds-next/react/footer';
import { LinkList } from '@ag.ds-next/react/link-list';
import { tokens } from '@ag.ds-next/react/core';

export const SiteFooter = () => {
	const year = useMemo(() => new Date().getFullYear(), []);
	const footerLinks = [
		{ label: 'Home', href: '/' },
		{
			label: 'Storybook',
			href: 'https://design-system.agriculture.gov.au/storybook/index.html',
		},
		{
			label: 'Playroom',
			href: 'https://design-system.agriculture.gov.au/playroom/index.html',
		},
		{
			label: 'Starter kit',
			href: 'https://github.com/steelthreads/agds-starter-kit',
		},
		{
			label: 'Privacy',
			href: 'https://www.agriculture.gov.au/about/commitment/privacy',
		},
	];
	return (
		<Box palette="dark">
			<Footer background="bodyAlt">
				<nav aria-label="footer">
					<LinkList links={footerLinks} horizontal />
				</nav>
				<FooterDivider />
				<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
					We acknowledge the traditional owners of country throughout Australia
					and recognise their continuing connection to land, waters and culture.
					We pay our respects to their Elders past, present and emerging.
				</Text>
				<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
					&copy; {year} Department of Agriculture, Fisheries and Forestry
				</Text>
			</Footer>
		</Box>
	);
};

type SearchFormInput = {
	search: string;
};

export type TemplateBannerProps = {
	/** Pretty name of template: e.g. Multi-page form */
	name: string;
	/** Template slug in the docs site. e.g. multi-page-form */
	slug: string;
};

export const TemplateBanner = ({ name, slug }: TemplateBannerProps) => {
	return (
		<Flex
			gap={[2, 1]}
			palette="dark"
			background="body"
			padding={1}
			flexDirection={['column', 'row']}
		>
			<DirectionLink
				direction="left"
				href={`https://design-system.agriculture.gov.au/templates/${slug}`}
			>
				View {name} template overview
			</DirectionLink>
			<Text fontSize={['md', 'sm']} fontWeight="bold">
				{name}
			</Text>
		</Flex>
	);
};

export const SiteHeaderSearch = () => {
	const { register, handleSubmit } = useForm<SearchFormInput>();

	const onSubmit: SubmitHandler<SearchFormInput> = ({ search }) => {
		console.log(search);
	};

	return (
		<SearchBox onSubmit={handleSubmit(onSubmit)}>
			<SearchBoxInput {...register('search')} />
			<SearchBoxButton iconOnly={{ xs: true, sm: false, md: true, lg: false }}>
				Search
			</SearchBoxButton>
		</SearchBox>
	);
};

export const SiteHeader = ({ focusMode }: { focusMode: boolean }) => {
	const NAV_ITEMS = {
		primary: [
			{ label: 'Home', href: '/' },
			{ label: 'Applications', href: '/category' },
			{ label: 'Request a Service', href: '/request-service' },
			{ label: 'Inspections', href: '/inspections' },
			{ label: 'Administration', href: '/administration' },
		],
		secondary: [
			{
				label: 'Officer',
				href: '/sign-in-form',
				endElement: <AvatarIcon />,
			},
		],
	};

	const router = useRouter();
	return (
		<Stack palette="dark">
			<Header
				size="sm"
				background="bodyAlt"
				logo={<Logo />}
				heading="MARS"
				subline="Maritime and Aircraft Reporting System"
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

export const MarsAppLayout = ({
	children,
	template,
	focusMode = false,
}: PropsWithChildren<{
	template?: { name: string; slug: string };
	focusMode?: boolean;
}>) => {
	const skipLinks = useMemo(() => {
		const items = [{ href: '#main-content', label: 'Skip to main content' }];
		if (!focusMode) {
			items.push({ href: '#main-nav', label: 'Skip to main navigation' });
		}
		return items;
	}, [focusMode]);

	return (
		<>
			<SkipLinks links={skipLinks} />
			<Flex
				flexDirection="column"
				fontFamily="body"
				palette="light"
				minHeight="100vh"
			>
				{template ? <TemplateBanner {...template} /> : null}
				<SiteHeader focusMode={focusMode} />
				<Box
					as="main"
					id="main-content"
					flexGrow={1}
					tabIndex={-1}
					css={{ '&:focus': { outline: 'none' } }}
				>
					{children}
				</Box>
				<SiteFooter />
			</Flex>
		</>
	);
};
