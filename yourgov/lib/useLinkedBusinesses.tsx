import {
	useEffect,
	useState,
	createContext,
	useContext,
	PropsWithChildren,
} from 'react';
import { mockBusinesses } from '../data/mockBusinesses';
import { safeSessionStorage } from './useSessionFormState';

export type Business = {
	name: string;
	abn: string;
	role: string;
};

type LinkedBusinessesType = {
	linkedBusinesses: Business[];
	selectedBusiness: Business | null;
	setSelectedBusiness: (business: Business) => void;
};

const LinkedBusinesses = createContext<LinkedBusinessesType | undefined>(
	undefined
);

export function useLinkedBusinesses() {
	const context = useContext(LinkedBusinesses);

	if (!context) {
		throw Error('LinkedBusinesses not found');
	}

	return context;
}

export function LinkedBusinessesProvider({ children }: PropsWithChildren<{}>) {
	const [selectedBusinessState, setSelectedBusinessState] =
		useState<Business | null>(null);

	useEffect(() => {
		if (!safeSessionStorage) return;

		// MAINTENANCE MODE: Bypass auth to allow navigating through the app
		setSelectedBusiness(mockBusinesses[0]);

		const value = safeSessionStorage.getItem('selectedBusiness');
		const parsedValue = value ? (JSON.parse(value) as Business) : null;
		setSelectedBusinessState(parsedValue);
	}, []);

	function setSelectedBusiness(business: Business) {
		if (!safeSessionStorage) return;
		safeSessionStorage.setItem('selectedBusiness', JSON.stringify(business));
		setSelectedBusinessState(business);
	}

	return (
		<LinkedBusinesses.Provider
			value={{
				linkedBusinesses: mockBusinesses,
				selectedBusiness: selectedBusinessState,
				setSelectedBusiness,
			}}
		>
			{children}
		</LinkedBusinesses.Provider>
	);
}
