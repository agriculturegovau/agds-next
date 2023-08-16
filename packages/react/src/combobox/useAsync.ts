import { useCallback, useReducer, useRef, Reducer, useMemo } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { DefaultComboboxOption, filterOptions } from './utils';

type Action<Option> =
	| { type: 'START_LOADING' }
	| { type: 'SET_ERROR' }
	| { type: 'SET_INPUT_ITEMS'; payload: { items: Option[] } }
	| { type: 'RESET_INPUT_ITEMS' };

type State<Option> = {
	loading: boolean;
	networkError: boolean;
	inputItems: Option[];
};

const initialState = {
	loading: false,
	networkError: false,
	inputItems: [],
};

function reducer<Option>(
	state: State<Option>,
	action: Action<Option>
): State<Option> {
	switch (action.type) {
		case 'START_LOADING':
			return {
				loading: true,
				networkError: false,
				inputItems: [],
			};
		case 'SET_ERROR':
			return {
				loading: false,
				networkError: true,
				inputItems: [],
			};
		case 'SET_INPUT_ITEMS':
			return {
				loading: false,
				networkError: false,
				inputItems: action.payload.items,
			};
		case 'RESET_INPUT_ITEMS':
			return initialState;
		default:
			return state;
	}
}

export function useAsync<Option extends DefaultComboboxOption>(
	loadOptionsProp: (inputValue: string) => Promise<Option[]>
) {
	const [{ loading, networkError, inputItems }, dispatch] = useReducer<
		Reducer<State<Option>, Action<Option>>
	>(reducer, initialState);

	const lastRequest = useRef<unknown>();

	// Keep track of search terms/loaded options to prevent unnecessary network requests
	const cache = useRef<Record<string, Option[]>>({});

	const fetchOptions = useMemo(() => {
		return async function fetchOptions(inputValue: string) {
			console.log({ inputValue });
			const request = (lastRequest.current = {});
			try {
				// Load the options
				const inputItems = await loadOptionsProp(inputValue);
				const filteredInputItems = filterOptions(inputItems, inputValue);

				// Update the cache
				cache.current[inputValue] = filteredInputItems;

				// Don't update "stale" requests
				if (request !== lastRequest.current) return;

				// Update the UI
				lastRequest.current = undefined;
				dispatch({
					type: 'SET_INPUT_ITEMS',
					payload: { items: filteredInputItems },
				});
			} catch (e) {
				// An error occurred while loading options
				dispatch({ type: 'SET_ERROR' });
			}
		};
	}, [loadOptionsProp]);

	const debouncedFetchOptions = useDebouncedCallback(fetchOptions, 200);

	const loadOptions = useMemo(() => {
		return function loadOptions(searchTerm: string) {
			// sanitize the input value
			searchTerm = searchTerm?.toLowerCase() ?? '';

			// If there are cached options for the search term, use that
			const cachedInputItems = cache.current[searchTerm];

			if (cachedInputItems) {
				dispatch({
					type: 'SET_INPUT_ITEMS',
					payload: { items: cachedInputItems },
				});
				return;
			}

			// No cached options found - so kick off the loading state and start fetching
			dispatch({ type: 'START_LOADING' });
			debouncedFetchOptions(searchTerm);
		};
	}, [debouncedFetchOptions]);

	const onInputValueChange = useCallback(
		({
			isOpen,
			inputValue = '',
		}: {
			isOpen?: boolean;
			inputValue?: string;
		}) => {
			if (!isOpen) return;
			loadOptions(inputValue);
		},
		[loadOptions]
	);

	const onIsOpenChange = useCallback(
		({
			isOpen,
			inputValue = '',
		}: {
			isOpen?: boolean;
			inputValue?: string;
		}) => {
			if (!isOpen) return;
			loadOptions(inputValue);
		},
		[loadOptions]
	);

	return {
		loading,
		networkError,
		inputItems,
		onInputValueChange,
		onIsOpenChange,
	};
}
