import { ReactNode, useRef } from 'react';
import { ExampleMedium } from '../TableFiltering/ExampleMedium';
import { generateTableCaption, useData } from '../TableFiltering/lib/utils';
import { useSortAndFilter } from '../TableFiltering/lib/useSortAndFilter';
import { AuthenticatedAppShell } from './AuthenticatedAppShell';
import { FormExampleMultiStep } from '../../../example-site/components/FormExampleMultiStep/FormExampleMultiStep';
import {
	FactoryIcon,
	HomeIcon,
	ChartLineIcon,
	EmailIcon,
	HelpIcon,
	SuccessIcon,
	AvatarIcon,
} from '@ag.ds-next/react/icon';

export default {
	title: 'Testing/Authenticated App Shell (WIP)',
	parameters: {
		layout: 'fullscreen',
	},
};

const primaryNavItems = [
	{ label: 'Dashboard', icon: HomeIcon, href: '#home' },
	{
		label: 'Establishments',
		icon: FactoryIcon,
		href: '#establishments',
	},
	{
		label: 'Data and Insights',
		icon: ChartLineIcon,
		href: '#data',
	},
	{
		label: 'Compliance',
		icon: SuccessIcon,
		href: '#compliance',
	},
];
const secondaryNavItems = [
	{
		label: 'Messages',
		icon: EmailIcon,
		href: '#messages',
		badgeCount: 3,
	},
	{ label: 'Help', icon: HelpIcon, href: '#help' },
];

const AuthenticatedAppShellCommon = ({
	children,
	isFocusMode,
}: {
	children: ReactNode;
	isFocusMode?: boolean;
}) => {
	return (
		<AuthenticatedAppShell
			siteTitle="Export Service"
			siteSubtitle="Supporting Australian agricultural exports"
			userMenu={{
				name: 'Toto Wolff',
				organisation: 'Orange Meat Works',
				items: [
					{
						label: 'Account settings',
						href: '#account',
					},
					{
						label: 'Sign out',
						onClick: () => console.log('sign out'),
						icon: AvatarIcon,
					},
				],
			}}
			mainNavItems={{ primary: primaryNavItems, secondary: secondaryNavItems }}
			isFocusMode={isFocusMode}
			activePath="#home"
		>
			{children}
		</AuthenticatedAppShell>
	);
};

export const Main = () => {
	return (
		<AuthenticatedAppShellCommon>
			<h1>Authenticated App Shell</h1>
			<p>Some content</p>
		</AuthenticatedAppShellCommon>
	);
};

export const Table = () => {
	const tableRef = useRef<HTMLTableElement>(null);
	const {
		filters,
		pagination,
		resetFilters,
		removeFilter,
		setFilters,
		setPagination,
		setSort,
		sort,
	} = useSortAndFilter({
		tableRef,
	});

	const { loading, data, totalPages, totalItems } = useData({
		filters,
		pagination,
		sort,
	});

	const tableCaption = generateTableCaption({
		loading,
		totalItems,
		pagination,
	});

	return (
		<AuthenticatedAppShellCommon>
			<ExampleMedium
				data={data}
				filters={filters}
				loading={loading}
				pagination={pagination}
				resetFilters={resetFilters}
				setFilters={setFilters}
				removeFilter={removeFilter}
				setPagination={setPagination}
				setSort={setSort}
				sort={sort}
				tableRef={tableRef}
				tableCaption={tableCaption}
				totalPages={totalPages}
				totalItems={totalItems}
			/>
		</AuthenticatedAppShellCommon>
	);
};

export const MultiPageForm = () => {
	return (
		<AuthenticatedAppShellCommon isFocusMode={true}>
			<FormExampleMultiStep />
		</AuthenticatedAppShellCommon>
	);
};
