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
	/** The visibility of the dropdown menu. */
	isMenuOpen: boolean;
	/** The index of the active descendantIndex. -1 means there is no active descendant. */
	activeDescendantIndex: number;
	/** The HTML node elements containing each menu item (`DropdownMenuItem`, `DropdownMenuLInk` etc). */
	descendantNodes: NodeListOf<HTMLDivElement> | undefined;
	/** The count of descendant nodes. */
	descendantCount: number;
	/**
	 * Typing any a-z character should focus the menu item with a label that starts with the typed character (if exists)
	 * https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/examples/menu-button-actions-active-descendant/
	 */
	itemSearchTerm: string;
};

export const initialState: State = {
	isMenuOpen: false,
	activeDescendantIndex: -1,
	descendantNodes: undefined,
	descendantCount: 0,
	itemSearchTerm: '',
};

export function reducer(state: State, action: Action): State {
	switch (action.type) {
		case 'OPEN_MENU':
			return {
				...state,
				isMenuOpen: true,
				activeDescendantIndex: 0,
			};
		case 'CLOSE_MENU':
			// When the menu closes, the state of the dropdown menu should be reset
			return {
				...state,
				isMenuOpen: false,
				activeDescendantIndex: -1,
				itemSearchTerm: '',
			};
		case 'SET_DESCENDANT_NODES':
			return {
				...state,
				descendantNodes: action.payload.nodes,
				descendantCount: action.payload.nodes?.length
					? action.payload.nodes.length - 1
					: 0,
			};
		case 'ACTIVATE_FIRST_DESCENDANT':
			return {
				...state,
				activeDescendantIndex: 0,
			};
		case 'ACTIVATE_LAST_DESCENDANT':
			return {
				...state,
				activeDescendantIndex: state.descendantCount,
			};
		case 'ACTIVATE_NEXT_DESCENDANT':
			if (
				state.activeDescendantIndex === -1 ||
				state.activeDescendantIndex === state.descendantCount
			) {
				// Activate the first menu item if the active descendant index hasn't been set yet
				// OR the last menu item is currently active
				return { ...state, activeDescendantIndex: 0 };
			}
			return {
				...state,
				activeDescendantIndex: state.activeDescendantIndex + 1,
			};
		case 'ACTIVATE_PREVIOUS_DESCENDANT':
			if (
				state.activeDescendantIndex === -1 ||
				state.activeDescendantIndex === 0
			) {
				// Activate the last menu item if the active descendant index hasn't been set yet
				// OR the first menu item is currently active
				return { ...state, activeDescendantIndex: state.descendantCount };
			}
			return {
				...state,
				activeDescendantIndex: state.activeDescendantIndex - 1,
			};
		case 'UPDATE_DESCENDANT_SEARCH_TERM':
			return {
				...state,
				itemSearchTerm:
					state.itemSearchTerm + action.payload.eventKey.toLowerCase(),
				activeDescendantIndex: Array.from(state.descendantNodes ?? [])
					.map((node) => node.innerText.toLowerCase())
					.findIndex((label) =>
						label.startsWith(
							state.itemSearchTerm + action.payload.eventKey.toLowerCase()
						)
					),
			};
		default:
			return state;
	}
}
