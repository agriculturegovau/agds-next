import { useState } from 'react';
import { Columns } from '@ag.ds-next/react/columns';
import { mq, mapResponsiveProp } from '@ag.ds-next/react/core';
import { SkipLinks } from '@ag.ds-next/react/skip-link';
import { useSortAndFilter } from '../DataFiltering/lib/useSortAndFilter';
import { useData } from '../DataFiltering/lib/utils';
import {
	DataProvider,
	SortAndFilterProvider,
} from '../DataFiltering/lib/contexts';
import { AppFrame } from './components/AppFrame';
import { DenseDashboardTable } from './components/DenseDashboardTable';
import { ItemDetailsPanel } from './components/ItemDetailsPanel';
import { ITEM_SECTION_ID } from './lib/utils';
import { SelectedItemContext } from './lib/context';

export const DenseDashboard = () => {
	const sortAndFilter = useSortAndFilter({
		itemsPerPage: 20,
	});
	const { filters, pagination, sort } = sortAndFilter;
	const data = useData({ filters, pagination, sort });
	const [selectedItemIndex, setSelectedItemIndex] = useState(0);

	return (
		<SelectedItemContext.Provider
			value={{
				selectedItemIndex,
				setSelectedItemIndex,
			}}
		>
			<SortAndFilterProvider value={sortAndFilter}>
				<DataProvider value={data}>
					<AppFrame focusMode={false}>
						<SkipLinks
							links={[{ href: `#${ITEM_SECTION_ID}`, label: 'Skip to item' }]}
						/>
						<Columns
							gap={0}
							cols={{
								xs: 1,
								xxl: 2,
							}}
							css={mq({
								overflow: 'hidden',
								height: mapResponsiveProp({
									xs: 'calc(100vh - 498px)',
									md: 'calc(100vh - 184px)',
									lg: 'calc(100vh - 100px)',
								}),
							})}
						>
							<DenseDashboardTable />
							<ItemDetailsPanel />
						</Columns>
					</AppFrame>
				</DataProvider>
			</SortAndFilterProvider>
		</SelectedItemContext.Provider>
	);
};
