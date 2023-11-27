import { DeepPartial } from '../../lib/types';
import { task1DefaultFormState, Task1FormState } from './FormTask1FormState';

export type Task2FormState = {
	[1]: { started: boolean; completed: boolean };
};

export type Task3FormState = {
	[1]: { started: boolean; completed: boolean };
};

export type Tas42FormState = {
	[1]: { started: boolean; completed: boolean };
};

export type FormState = {
	task1: Partial<Task1FormState> & { completed: boolean };
	task2: Record<string, unknown> & { completed: boolean };
	task3: Record<string, unknown> & { completed: boolean };
	task4: Record<string, unknown> & { completed: boolean };
};

export const defaultFormState: DeepPartial<FormState> = {
	task1: task1DefaultFormState,
	task2: { started: false, completed: false },
	task3: { started: false, completed: false },
	task4: { started: false, completed: false },
};

export type TaskKey = 'task1' | 'task2' | 'task3' | 'task4';
