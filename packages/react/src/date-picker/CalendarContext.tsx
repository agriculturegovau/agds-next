import {
	createContext,
	MutableRefObject,
	PropsWithChildren,
	useContext,
	useRef,
} from 'react';

type ContextType = {
	yearsVisitedRef: MutableRefObject<Map<number, true>>;
	yearRange: CalendarProviderProps['yearRange'];
};

const Context = createContext<ContextType | undefined>(undefined);

export type CalendarProviderProps = PropsWithChildren<{
	yearRange: { from: number; to: number } | undefined;
}>;

export function CalendarProvider({
	children,
	yearRange,
}: CalendarProviderProps) {
	const yearsVisitedRef = useRef(new Map<number, true>());
	return (
		<Context.Provider value={{ yearsVisitedRef, yearRange }}>
			{children}
		</Context.Provider>
	);
}

export function useCalendar() {
	const context = useContext(Context);

	if (!context) {
		throw new Error('Context not found.');
	}

	return context;
}
