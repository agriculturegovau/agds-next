type Action =
	| {
			type: 'OPEN_MENU';
	  }
	| {
			type: 'CLOSE_MENU';
	  }
	| {
			type: 'SET_DESCENDANT_NODES';
			payload: { nodes: NodeListOf<HTMLDivElement> | undefined };
	  }
	| {
			type: 'ACTIVATE_FIRST_DESCENDANT';
	  }
	| {
			type: 'ACTIVATE_LAST_DESCENDANT';
	  }
	| {
			type: 'ACTIVATE_NEXT_DESCENDANT';
	  }
	| {
			type: 'ACTIVATE_PREVIOUS_DESCENDANT';
	  }
	| {
			type: 'UPDATE_DESCENDANT_SEARCH_TERM';
			payload: { eventKey: string };
	  };

type State = {
	/**
	 * The index of the active descendantIndex.
	 * -1 means there is no active descendant.
	 *
	 * @default -1
	 */
	activeDescendantIndex: number;

	/** The HTML node elements containing each menu item (`DropdownMenuItem`, `DropdownMenuLInk` etc). */
	descendantNodes: NodeListOf<HTMLDivElement> | undefined;

	/**
	 * The count of descendant nodes.
	 *
	 * @default 0
	 */
	descendantCount: number;

	/**
	 * Typing any a-z character should focus the menu item with a label that starts
	 * with the typed character (if exists).
	 * @see https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/examples/menu-button-actions-active-descendant/
	 */
	descendantSearchTerm: string;

	/**
	 * Indicates if the menu is open.
	 *
	 * @default false
	 */
	isMenuOpen: boolean;

	/**
	 * Time of the last key press for handling quick successive key presses.
	 * Value is a timestamp in milliseconds.
	 *
	 * @default 0
	 */
	lastKeyPressTime: number;
};

export const initialState: State = {
	activeDescendantIndex: -1,
	descendantCount: 0,
	descendantNodes: undefined,
	descendantSearchTerm: '',
	isMenuOpen: false,
	lastKeyPressTime: 0,
};

export function reducer(state: State, action: Action): State {
	const currentTime = new Date().getTime();

	switch (action.type) {
		case 'OPEN_MENU': {
			return {
				...state,
				isMenuOpen: true,
			};
		}

		case 'CLOSE_MENU': {
			// When the menu closes, the state of the dropdown menu should be reset
			return initialState;
		}

		case 'SET_DESCENDANT_NODES': {
			return {
				...state,
				descendantCount: action.payload.nodes?.length ?? 0,
				descendantNodes: action.payload.nodes,
				descendantSearchTerm: '',
				lastKeyPressTime: 0,
			};
		}

		case 'ACTIVATE_FIRST_DESCENDANT': {
			return {
				...state,
				activeDescendantIndex: 0,
				descendantSearchTerm: '',
				lastKeyPressTime: 0,
			};
		}

		case 'ACTIVATE_LAST_DESCENDANT': {
			return {
				...state,
				activeDescendantIndex: state.descendantCount - 1,
				descendantSearchTerm: '',
				lastKeyPressTime: 0,
			};
		}

		case 'ACTIVATE_NEXT_DESCENDANT': {
			// If current active descendant is not the last, increment index by 1
			const newActiveDescendantIndex =
				state.activeDescendantIndex < state.descendantCount - 1
					? state.activeDescendantIndex + 1
					: // If last descendant is currently active, loop back to the first
					  0;

			// Update the state with the new active descendant index and clear search term
			return {
				...state,
				activeDescendantIndex: newActiveDescendantIndex,
				descendantSearchTerm: '',
				lastKeyPressTime: 0,
			};
		}

		case 'ACTIVATE_PREVIOUS_DESCENDANT': {
			// If current active descendant is not the first, decrement index by 1
			const newActiveDescendantIndex =
				state.activeDescendantIndex > 0
					? state.activeDescendantIndex - 1
					: // If first descendant is currently active, loop to the last
					  state.descendantCount - 1;

			// Update the state with the new active descendant index and clear search term
			return {
				...state,
				activeDescendantIndex: newActiveDescendantIndex,
				descendantSearchTerm: '',
				lastKeyPressTime: 0,
			};
		}

		case 'UPDATE_DESCENDANT_SEARCH_TERM': {
			// Calculate the time difference between the last key press and the current time
			const timeDiff = currentTime - state.lastKeyPressTime;

			// Determine if this was a quick key press to continue typing a search term
			const quickPress = timeDiff < 350;

			// Update the search term based on whether it's a continuation of the last search term
			const newSearchTerm = quickPress
				? state.descendantSearchTerm + action.payload.eventKey.toLowerCase()
				: action.payload.eventKey.toLowerCase();

			// Get the index of the current active descendant
			const currentIndex =
				state.activeDescendantIndex >= 0 ? state.activeDescendantIndex : -1;

			// Decide whether to start the search from the current index or the next one
			const offset = quickPress ? 0 : 1;

			// Convert descendant nodes to lowercase text array
			const items = Array.from(state.descendantNodes ?? []).map((node) =>
				// As some labels can have multiple lines, remove any line breaks
				node.innerText.toLowerCase().replace(/(\r\n|\n|\r)/gm, '')
			);

			// Re-order items to start the search from the current active index + offset
			const reOrderedItems = items
				.slice(currentIndex + offset)
				.concat(items.slice(0, currentIndex + offset));

			// Find the index of the first matching item
			const matchingItem = reOrderedItems.find((item) =>
				item.startsWith(newSearchTerm)
			);

			// Find the index of the matching item in the original items list
			const matchIndex = matchingItem
				? items.indexOf(matchingItem)
				: currentIndex;

			return {
				...state,
				descendantSearchTerm: newSearchTerm,
				activeDescendantIndex: matchIndex,
				lastKeyPressTime: currentTime,
			};
		}

		default: {
			throw new Error(`Unhandled action type: ${(action as Action).type}`);
		}
	}
}
