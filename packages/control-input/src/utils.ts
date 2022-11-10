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

export const ControlGroupContext = createContext<{
	groupMessageId?: string;
}>({
	groupMessageId: undefined,
});

export const useControlGroupContext = () => {
	return useContext(ControlGroupContext);
};
