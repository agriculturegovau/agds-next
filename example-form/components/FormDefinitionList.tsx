import { ReactNode } from 'react';
import { VisuallyHidden } from '@ag.ds-next/a11y';
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
					<DefinitionTerm>
						<VisuallyHidden>{'Question '}</VisuallyHidden>
						{item.label}
					</DefinitionTerm>
					<DefinitionDescription>
						<VisuallyHidden>{'Answer '}</VisuallyHidden>
						{item.value}
					</DefinitionDescription>
				</DefinitionListItem>
			))}
		</DefinitionList>
	);
}
