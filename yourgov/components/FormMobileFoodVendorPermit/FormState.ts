import { DeepPartial } from '../../lib/types';
import { task1DefaultFormState, Task1FormState } from './task1/FormTask1FormState';
import { Task2Step1FormSchema } from './task2/FormTask2FormState';

// TODO Create task 2 of the form
export type Task2FormState = {
	started: boolean;
	completed: boolean;
	step1: Task2Step1FormSchema & { completed: boolean };
};

// TODO Create task 3 of the form
export type Task3FormState = {
	started: boolean;
	completed: boolean;
	[1]: { started: boolean; completed: boolean };
};

// TODO Create task 4 of the form
export type Task4FormState = {
	started: boolean;
	completed: boolean;
	[1]: { started: boolean; completed: boolean };
};

export type FormState = {
	task1: Partial<Task1FormState> & { completed: boolean };
	task2: Partial<Task2FormState> & { completed: boolean };
	task3: Partial<Task3FormState> & { completed: boolean };
	task4: Partial<Task4FormState> & { completed: boolean };
};

export const defaultFormState: DeepPartial<FormState> = {
	task1: task1DefaultFormState,
	task2: { started: false, completed: false },
	task3: { started: false, completed: false },
	task4: { started: false, completed: false },
};

export type TaskKey = 'task1' | 'task2' | 'task3' | 'task4';
