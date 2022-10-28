import { ReactNode } from 'react';
import {
	SummaryList,
	SummaryListItem,
	SummaryListItemDescription,
	SummaryListItemTerm,
} from '@ag.ds-next/react/summary-list';

export function FormDefinitionList({
	items,
}: {
	items: { label: string; value: ReactNode }[];
}) {
	return (
		<SummaryList>
			{items.map((item, idx) => (
				<SummaryListItem key={`${item.label}-${idx}`}>
					<SummaryListItemTerm>{item.label}</SummaryListItemTerm>
					<SummaryListItemDescription>{item.value}</SummaryListItemDescription>
				</SummaryListItem>
			))}
		</SummaryList>
	);
}
