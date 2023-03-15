import { ReactNode, useRef } from 'react';
import { ExampleMedium } from '../TableFiltering/ExampleMedium';
import { generateTableCaption, useData } from '../TableFiltering/lib/utils';
import { useSortAndFilter } from '../TableFiltering/lib/useSortAndFilter';
import { AuthenticatedAppShell } from './AuthenticatedAppShell';
import { FormExampleMultiStep } from '../../../example-site/components/FormExampleMultiStep/FormExampleMultiStep';
import {
	ChartIcon,
	FactoryIcon,
	HomeIcon,
	MailIcon,
	QuestionIcon,
	TickIcon,
} from './icons';

export default {
	title: 'Testing/Authenticated App Shell (WIP)',
	parameters: {
		layout: 'fullscreen',
	},
};

const AuthenticatedAppShellCommon = ({
	children,
	collapseByDefault,
}: {
	children: ReactNode;
	collapseByDefault?: boolean;
}) => {
	const navItems = [
		{ label: 'Dashboard', active: true, icon: HomeIcon, href: '#home' },
		{
			label: 'Establishments',
			active: false,
			icon: FactoryIcon,
			href: '#establishments',
		},
		{
			label: 'Data and Insights',
			active: false,
			icon: ChartIcon,
			href: '#data',
		},
		{
			label: 'Compliance',
			active: false,
			icon: TickIcon,
			href: '#compliance',
		},
		{ isSeperator: true },
		{ label: 'Messages', active: false, icon: MailIcon, href: '#messages' },
		{ label: 'Help', active: false, icon: QuestionIcon, href: '#help' },
	];

	const signOut = () => {
		console.log('sign out');
	};

	return (
		<AuthenticatedAppShell
			siteTitle="Export Service"
			siteSubtitle="Supporting Australian agricultural exports"
			collapseByDefault={collapseByDefault}
			navItems={navItems}
			signOut={signOut}
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
		<AuthenticatedAppShellCommon collapseByDefault={true}>
			<FormExampleMultiStep />
		</AuthenticatedAppShellCommon>
	);
};
