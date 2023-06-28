import useSWR from 'swr';

export const numberFormatter = new Intl.NumberFormat();

// Taken from https://swapi.dev
export const apiData = {
	results: [
		{ id: 1, name: 'Tatooine', climate: 'Arid', population: 200000 },
		{ id: 2, name: 'Alderaan', climate: 'Temperate', population: 2000000000 },
		{
			id: 3,
			name: 'Yavin IV',
			climate: 'Temperate, Tropical',
			population: 1000,
		},
		{ id: 4, name: 'Hoth', climate: 'Frozen', population: 'unknown' },
		{ id: 5, name: 'Dagobah', climate: 'Murky', population: 'unknown' },
		{ id: 6, name: 'Bespin', climate: 'Temperate', population: 6000000 },
		{ id: 7, name: 'Endor', climate: 'Temperate', population: 30000000 },
		{ id: 8, name: 'Naboo', climate: 'Temperate', population: 4500000000 },
		{
			id: 9,
			name: 'Coruscant',
			climate: 'Temperate',
			population: 1000000000000,
		},
	],
};

export type ApiData = typeof apiData;

async function fetcher() {
	// Fake a slow network
	await new Promise((resolve) => setTimeout(resolve, 2500));
	return apiData;
}

export function useFetchStarWarsAPI() {
	const { data, error } = useSWR<ApiData>('/api/star-wars-planets', fetcher);
	return {
		data,
		loading: !data && !error,
		error,
	};
}
