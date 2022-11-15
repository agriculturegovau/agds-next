import { createContext, PropsWithChildren, useContext } from 'react';

type ControlGroupContextType = {
	/** The ID of the `ControlGroup` message element. */
	messageId?: string;
	/** The value of the `invalid` prop from the `ControlGroup` component. */
	invalid?: boolean;
};

const ControlGroupContext = createContext<ControlGroupContextType | undefined>(
	undefined
);

export const useControlGroupContext = () => useContext(ControlGroupContext);

export function ControlGroupProvider({
	children,
	messageId,
	invalid,
}: PropsWithChildren<ControlGroupContextType>) {
	return (
		<ControlGroupContext.Provider value={{ messageId, invalid }}>
			{children}
		</ControlGroupContext.Provider>
	);
}
