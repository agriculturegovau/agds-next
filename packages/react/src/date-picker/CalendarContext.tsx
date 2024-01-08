import {
	createContext,
	PropsWithChildren,
	useContext,
	useRef,
	MutableRefObject,
} from 'react';

const CalendarContext = createContext<
	{ yearsVisitedRef: MutableRefObject<Map<number, boolean>> } | undefined
>(undefined);

export function CalendarProvider({ children }: PropsWithChildren<{}>) {
	const yearsVisitedRef = useRef(new Map<number, boolean>());
	return (
		<CalendarContext.Provider value={{ yearsVisitedRef }}>
			{children}
		</CalendarContext.Provider>
	);
}

export function useCalendarContext() {
	const context = useContext(CalendarContext);

	if (!context) {
		throw new Error('CalendarProvider not found');
	}

	return context;
}
