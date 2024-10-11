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

type TaskCompletion = Completion & {
	completedRecently: boolean;
};

export type FormState = {
	task1: Partial<Task1FormState> & TaskCompletion;
	type: string;
};

export const defaultFormState: DeepPartial<FormState> = {
	task1: task1DefaultFormState,
};

export type TaskKey = 'task1';

export type FormStep<StepNumber extends AnyStepNumber = AnyStepNumber> = {
	label: string;
	href: string;
	formStateKey: StepNumber;
	items?: Array<{
		href: string;
		label: string;
	}>;
};

export type AnyStepNumber = Task1StepNumber; // | Task2StepNumber | Task3StepNumber;

/**
 * React Form does not apply the errors types correctly to fields stored as objects.
 * This type treats those object fields as simple boolean fields as a workaround.
 */
// Not actually boolean but it doesn't need to be any more complex than this for our purposes
export type ShallowErrors<Schema extends FieldValues> = FieldErrors<
	Record<keyof Schema, boolean>
>;
