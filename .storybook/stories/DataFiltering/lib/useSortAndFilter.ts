import { useReducer } from 'react';
import { GetDataFilters, GetDataPagination, GetDataSort } from './getData';

export type SortAndFilter = ReturnType<typeof useSortAndFilter>;

const defaultFilters: GetDataFilters = {
	assignee: undefined,
	businessName: undefined,
	state: undefined,
	status: undefined,
	requestDate: {
		from: undefined,
		to: undefined,
	},
};

export const useSortAndFilter = (
	args: {
		filters?: Partial<GetDataFilters>;
		itemsPerPage?: number;
	} = {}
) => {
	const [state, dispatch] = useReducer(sortFilterReducer, {
		pagination: {
			page: 1,
			perPage: args.itemsPerPage || 10,
		},
		sort: {
			field: 'businessName',
			order: 'ASC',
		},
		filters: {
			...defaultFilters,
			...args.filters,
		},
	});

	const { sort, filters, pagination } = state;

	function setSort(sort: GetDataSort) {
		dispatch({
			type: 'SET_SORT',
			payload: sort,
		});

		dispatch({
			type: 'RESET_PAGINATION',
		});
	}

	function setPagination(pagination: GetDataPagination) {
		dispatch({
			type: 'SET_PAGINATION',
			payload: pagination,
		});
	}

	function setFilter(filters: Partial<GetDataFilters>) {
		dispatch({
			type: 'SET_FILTER',
			payload: filters,
		});

		dispatch({
			type: 'RESET_PAGINATION',
		});
	}

	function setFilters(filters: GetDataFilters) {
		dispatch({
			type: 'SET_FILTERS',
			payload: filters,
		});

		dispatch({
			type: 'RESET_PAGINATION',
		});
	}

	function resetFilters() {
		dispatch({ type: 'RESET_FILTERS' });
		dispatch({ type: 'RESET_PAGINATION' });
	}

	function removeFilter(key: keyof GetDataFilters) {
		dispatch({
			type: 'REMOVE_FILTER',
			payload: key,
		});

		dispatch({
			type: 'RESET_PAGINATION',
		});
	}

	return {
		// sort
		sort,
		setSort,
		// filter
		filters,
		setFilter,
		setFilters,
		removeFilter,
		resetFilters,
		// pagination
		pagination,
		setPagination,
	};
};

type SortFilterState = {
	sort: GetDataSort;
	filters: GetDataFilters;
	pagination: GetDataPagination;
};

type SortFilterReducerAction =
	| { type: 'SET_SORT'; payload: GetDataSort }
	| { type: 'SET_FILTERS'; payload: GetDataFilters }
	| { type: 'SET_FILTER'; payload: Partial<GetDataFilters> }
	| { type: 'REMOVE_FILTER'; payload: keyof GetDataFilters }
	| { type: 'RESET_FILTERS' }
	| { type: 'SET_PAGINATION'; payload: GetDataPagination }
	| { type: 'RESET_PAGINATION' };

export function sortFilterReducer(
	state: SortFilterState,
	action: SortFilterReducerAction
) {
	switch (action.type) {
		case 'SET_SORT':
			return {
				...state,
				sort: action.payload,
			};
		case 'SET_FILTERS':
			return {
				...state,
				filters: action.payload,
			};
		case 'SET_FILTER':
			return {
				...state,
				filters: {
					...state.filters,
					...action.payload,
				},
			};
		case 'REMOVE_FILTER':
			return {
				...state,
				filters: {
					...state.filters,
					[action.payload]:
						action.payload === 'requestDate'
							? { from: undefined, to: undefined }
							: undefined,
				},
			};
		case 'RESET_FILTERS':
			return {
				...state,
				filters: defaultFilters,
			};
		case 'SET_PAGINATION':
			return {
				...state,
				pagination: action.payload,
			};
		case 'RESET_PAGINATION':
			return {
				...state,
				pagination: {
					...state.pagination,
					page: 1,
				},
			};
		default:
			return state;
	}
}
