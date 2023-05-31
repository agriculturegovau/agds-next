import { packs } from '../core';

export type RadioSize = keyof typeof packs.control;

export const iconSize = {
	sm: 1,
	md: 1.5,
} as const;
