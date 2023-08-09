import { useCallback, useReducer, useRef, Reducer } from 'react';
import { DefaultComboboxOption, filterOptions } from './utils';

type Action<Option> =
	| { type: 'SET_LOADING' }
	| { type: 'SET_ERROR' }
	| { type: 'SET_ITEMS'; payload: { items: Option[] } }
	| { type: 'RESET_ITEMS' };

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
		case 'SET_LOADING':
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
		case 'SET_ITEMS':
			return {
				loading: false,
				networkError: false,
				inputItems: action.payload.items,
			};
		case 'RESET_ITEMS':
			return initialState;
		default:
			return state;
	}
}

export function useLoadOptions<Option extends DefaultComboboxOption>(
	loadOptionsProp: (inputValue: string) => Promise<Option[]>
) {
	const [{ loading, networkError, inputItems }, dispatch] = useReducer<
		Reducer<State<Option>, Action<Option>>
	>(reducer, initialState);

	const lastRequest = useRef<unknown>();

	// Keep track of search terms/loaded options to prevent unnecessary network requests
	const cache = useRef<Record<string, Option[]>>({});

	const loadOptions = useCallback(
		async function loadOptions(searchTerm: string) {
			// sanitize the input value
			const inputValue = searchTerm?.toLowerCase() ?? '';

			console.log({ inputValue });

			// If there are cached options for the search term, use that
			const cachedInputItems = cache.current[inputValue];
			if (cachedInputItems) {
				dispatch({ type: 'SET_ITEMS', payload: { items: cachedInputItems } });
				return;
			}

			lastRequest.current = inputValue;

			// No cached options found, so kick off the loading state
			dispatch({ type: 'SET_LOADING' });
			try {
				const request = (lastRequest.current = {});
				// Load the options
				const inputItems = await loadOptionsProp(inputValue);
				const filteredInputItems = filterOptions(inputItems, inputValue);
				// Update the cache
				cache.current[inputValue] = filteredInputItems;
				// Update the UI
				if (request !== lastRequest.current) return;
				lastRequest.current = undefined;

				dispatch({
					type: 'SET_ITEMS',
					payload: { items: filteredInputItems },
				});
			} catch (e) {
				console.log({ e });
				// An error occurred while loading options
				dispatch({ type: 'SET_ERROR' });
			}
		},
		[loadOptionsProp]
	);

	const onInputValueChange = useCallback(
		({ inputValue = '' }: { inputValue?: string }) => {
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
		dispatch,
		onInputValueChange,
		onIsOpenChange,
	};
}
