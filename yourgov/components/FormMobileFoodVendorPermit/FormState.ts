import { type FieldErrors, type FieldValues } from 'react-hook-form';
import { DeepPartial } from '../../lib/types';
import {
	task1DefaultFormState,
	type Task1FormState,
} from './task1/FormTask1FormState';
import { type Task1StepNumber } from './task1/FormTask1Provider';

export type Completion = {
	completed: boolean;
	started?: boolean;
};

interface TaskCompletion extends Completion {
	completedRecently: boolean;
}

// TODO Create task 2 of the form
export type Task2FormState = {
	started: boolean;
	completed: boolean;
	[1]: { started: boolean; completed: boolean };
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
	task1: Partial<Task1FormState> & TaskCompletion;
	task2: Partial<Task2FormState> & TaskCompletion;
	task3: Partial<Task3FormState> & TaskCompletion;
	task4: Partial<Task4FormState> & TaskCompletion;
	type: string;
};

export const defaultFormState: DeepPartial<FormState> = {
	task1: task1DefaultFormState,
	task2: { started: false, completed: false },
	task3: { started: false, completed: false },
	task4: { started: false, completed: false },
};

export type TaskKey = 'task1' | 'task2' | 'task3' | 'task4';

export interface FormStep<StepNumber extends AnyStepNumber = AnyStepNumber> {
	label: string;
	href: string;
	formStateKey: StepNumber;
	items?: Array<{
		href: string;
		label: string;
	}>;
}

export type AnyStepNumber = Task1StepNumber; // | Task2StepNumber | Task3StepNumber;

/**
 * React Form does not apply the errors types correctly to fields stored as objects.
 * This type treats those object fields as simple boolean fields as a workaround.
 */
// Not actually boolean but it doesn't need to be any more complex than this for our purposes
export type ShallowErrors<Schema extends FieldValues> = FieldErrors<
	Record<keyof Schema, boolean>
>;
