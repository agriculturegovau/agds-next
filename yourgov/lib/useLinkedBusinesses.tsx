import {
	useEffect,
	useState,
	createContext,
	useContext,
	PropsWithChildren,
} from 'react';
import { mockBusinesses } from '../data/mockBusinesses';

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
		// AUDIT: Temporary setting of default business
		setSelectedBusiness(mockBusinesses[0]);
		if (typeof sessionStorage === undefined) return;
		const value = sessionStorage.getItem('selectedBusiness');
		const parsedValue = value ? (JSON.parse(value) as Business) : null;
		setSelectedBusinessState(parsedValue);
	}, []);

	function setSelectedBusiness(business: Business) {
		sessionStorage.setItem('selectedBusiness', JSON.stringify(business));
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
