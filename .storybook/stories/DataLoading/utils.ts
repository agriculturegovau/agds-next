import useSWR from 'swr';

export const numberFormatter = new Intl.NumberFormat();

// Taken from https://swapi.dev
export const apiData = {
	results: [
		{ name: 'Tatooine', climate: 'arid', population: '200000' },
		{ name: 'Alderaan', climate: 'temperate', population: '2000000000' },
		{ name: 'Yavin IV', climate: 'temperate, tropical', population: '1000' },
		{ name: 'Hoth', climate: 'frozen', population: 'unknown' },
		{ name: 'Dagobah', climate: 'murky', population: 'unknown' },
		{ name: 'Bespin', climate: 'temperate', population: '6000000' },
		{ name: 'Endor', climate: 'temperate', population: '30000000' },
		{ name: 'Naboo', climate: 'temperate', population: '4500000000' },
		{ name: 'Coruscant', climate: 'temperate', population: '1000000000000' },
	],
};

export type ApiData = typeof apiData;

async function fetcher() {
	// Fake a slow network
	await new Promise((resolve) => setTimeout(resolve, 2500));
	return apiData;
}

export function useFetchStarWarsAPI() {
	const { data, error, mutate } = useSWR<ApiData>(
		'start-wars-planets',
		fetcher
	);
	return {
		loading: !data && !error,
		data,
		error,
		retry: () => mutate(),
	};
}
