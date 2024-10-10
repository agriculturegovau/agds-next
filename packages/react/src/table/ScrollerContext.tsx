import { createContext, Dispatch, SetStateAction, useContext } from 'react';

type OverlayOffsets = {
	date: number;
	bottom?: 0 | `${number}rem`;
	left?: 0 | `${number}rem`;
	right?: 0 | `${number}rem`;
	top?: 0 | `${number}rem`;
};

export type ScrollerContextType = {
	setOverlayOffsets?: Dispatch<SetStateAction<OverlayOffsets | undefined>>;
	overlayOffsets?: OverlayOffsets;
};

export const ScrollerContext = createContext<ScrollerContextType | undefined>(
	undefined
);

export function useScrollerContext() {
	const context = useContext(ScrollerContext);

	if (typeof context === 'undefined') {
		throw Error(
			'ScrollerContext not found. If using a Table, ensure it is wrapped with <TableWrapper>.'
		);
	}

	return context;
}
