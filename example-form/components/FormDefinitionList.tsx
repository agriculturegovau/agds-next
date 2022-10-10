import { ReactNode } from 'react';
import {
	DefinitionList,
	DefinitionListItem,
	DefinitionDescription,
	DefinitionTerm,
} from './DefinitionList';

export function FormDefinitionList({
	items,
}: {
	items: { label: string; value: ReactNode }[];
}) {
	return (
		<DefinitionList>
			{items.map((item, idx) => (
				<DefinitionListItem key={`${item.label}-${idx}`}>
					<DefinitionTerm>{item.label}</DefinitionTerm>
					<DefinitionDescription>{item.value}</DefinitionDescription>
				</DefinitionListItem>
			))}
		</DefinitionList>
	);
}
