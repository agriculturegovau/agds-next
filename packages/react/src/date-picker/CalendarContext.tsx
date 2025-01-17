import {
	createContext,
	MutableRefObject,
	PropsWithChildren,
	useContext,
	useRef,
} from 'react';
import { DebouncedState } from 'use-debounce';

type ContextType = {
	clearHoveredDay: CalendarProviderProps['clearHoveredDay'];
	onHover: CalendarProviderProps['onHover'];
	yearsVisitedRef: MutableRefObject<Map<number, true>>;
	yearRange: CalendarProviderProps['yearRange'];
};

const Context = createContext<ContextType | undefined>(undefined);

export type CalendarProviderProps = PropsWithChildren<{
	clearHoveredDay?: DebouncedState<() => void>;
	onHover?: (date: Date) => void;
	yearRange: { from: number; to: number } | undefined;
}>;

export function CalendarProvider({
	children,
	clearHoveredDay,
	onHover,
	yearRange,
}: CalendarProviderProps) {
	const yearsVisitedRef = useRef(new Map<number, true>());
	return (
		<Context.Provider
			value={{ clearHoveredDay, onHover, yearRange, yearsVisitedRef }}
		>
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
