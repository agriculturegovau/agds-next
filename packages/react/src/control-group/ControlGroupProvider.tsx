import { createContext, PropsWithChildren, useContext, useId } from 'react';

type ControlGroupContextType = {
	/** The value of the `invalid` prop from the `ControlGroup` component. */
	invalid?: boolean;
	/** The ID of the `ControlGroup` message element. */
	messageId?: string;
	/** The value of the `name` prop from the `ControlGroup` component. */
	name?: string;
	/** The value of the `required` prop from the `ControlGroup` component. */
	required?: boolean;
};

const ControlGroupContext = createContext<ControlGroupContextType | undefined>(
	undefined
);

export const useControlGroupContext = () => useContext(ControlGroupContext);

export function ControlGroupProvider({
	children,
	invalid,
	messageId,
	name,
	required,
}: PropsWithChildren<ControlGroupContextType>) {
	const autoName = useId();

	return (
		<ControlGroupContext.Provider
			value={{ invalid, name: name || autoName, messageId, required }}
		>
			{children}
		</ControlGroupContext.Provider>
	);
}
