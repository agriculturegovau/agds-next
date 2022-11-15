import { createContext, useContext } from 'react';

type ControlGroupContextType = {
	describedBy?: string;
	invalid?: boolean;
	valid?: boolean;
};

export const ControlGroupContext = createContext<
	ControlGroupContextType | undefined
>(undefined);

export const useControlGroupContext = () => useContext(ControlGroupContext);
