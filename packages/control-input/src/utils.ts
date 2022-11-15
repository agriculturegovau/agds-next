import { createContext, useContext } from 'react';
import { packs } from '@ag.ds-next/core';

const sizes = {
	sm: packs.control.sm,
	md: packs.control.md,
};

export type ControlSize = keyof typeof sizes;

export const iconSize = {
	sm: 1,
	md: 1.5,
} as const;

type ControlGroupContextType = {
	describedBy?: string;
	invalid?: boolean;
};

export const ControlGroupContext = createContext<
	ControlGroupContextType | undefined
>(undefined);

export const useControlGroupContext = () => useContext(ControlGroupContext);
