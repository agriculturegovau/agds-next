import { useEffect, useState } from 'react';
import { Combobox, DefaultComboboxOption } from '@ag.ds-next/react/combobox';

interface ComponentQuickNavProps {
	options: Array<DefaultComboboxOption> | undefined;
}

export function ComponentQuickNav({ options }: ComponentQuickNavProps) {
	const [quickNavigateSelection, setQuickNavigateSelection] =
		useState<DefaultComboboxOption | null>(null);

	useEffect(() => {
		if (quickNavigateSelection) {
			window.location.pathname = quickNavigateSelection.value;
		}
	}, [quickNavigateSelection]);

	return (
		<Combobox
			label="Quick navigate to a component"
			hint="Search for a component by name. Selecting that component will navigate immediately."
			value={quickNavigateSelection}
			onChange={setQuickNavigateSelection}
			options={options || []}
			hideOptionalLabel
		/>
	);
}
