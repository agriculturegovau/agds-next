import { useRouter } from 'next/router';
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
	const router = useRouter();
	const [selectedBusinessState, setSelectedBusinessState] =
		useState<Business | null>(null);

	useEffect(() => {
		if (typeof sessionStorage === undefined) return;
		const value = sessionStorage.getItem('selectedBusiness');
		const parsedValue = value ? (JSON.parse(value) as Business) : null;
		setSelectedBusinessState(parsedValue);
	}, []);

	function setSelectedBusiness(business: Business) {
		sessionStorage.setItem('selectedBusiness', JSON.stringify(business));
		setSelectedBusinessState(business);
		// Always navigate to the dashboard when switching businesses
		router.push('/app/dashboard');
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
