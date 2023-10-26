import { useEffect, useState } from 'react';
import { BusinessForAudit } from './generateBusinessData';

const COLUMNS_LOCAL_STORAGE_KEY = 'AgDS-user-table-column-preferences';

const defaultValue: (keyof BusinessForAudit)[] = ['assignee', 'status'];

export const useColumnPreferences = () => {
	const [columns, setColumns] =
		useState<(keyof BusinessForAudit)[]>(defaultValue);

	// On initial render, we check if the user has saved preferences.
	// We apply those preferences if they exist, otherwise we save a default value.
	useEffect(() => {
		// Get the value from local storage if it exists.
		const savedPreferences =
			localStorage.getItem(COLUMNS_LOCAL_STORAGE_KEY) || '';

		// If the value is not set, set it to false.
		if (savedPreferences === '') {
			localStorage.setItem(
				COLUMNS_LOCAL_STORAGE_KEY,
				JSON.stringify(defaultValue)
			);
		} else {
			setColumns(JSON.parse(savedPreferences));
		}
	}, []);

	// Update the local storage value when the state changes.
	useEffect(() => {
		localStorage.setItem(COLUMNS_LOCAL_STORAGE_KEY, JSON.stringify(columns));
	}, [columns]);

	return { columns, setColumns };
};
