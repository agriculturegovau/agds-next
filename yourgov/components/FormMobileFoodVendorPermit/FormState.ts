import { type FieldErrors, type FieldValues } from 'react-hook-form';
import { DeepPartial } from '../../lib/types';
import {
	taskDefaultFormState,
	type TaskFormState,
} from './task/FormTaskFormState';
import { type TaskStepNumber } from './task/FormTaskProvider';

export type Completion = {
	completed: boolean;
	started?: boolean;
};

type TaskCompletion = Completion & {
	completedRecently: boolean;
};

export type FormState = {
	task: Partial<TaskFormState> & TaskCompletion;
	type: string;
};

export const defaultFormState: DeepPartial<FormState> = {
	task: taskDefaultFormState,
};

export type TaskKey = 'task';

export type FormStep<StepNumber extends AnyStepNumber = AnyStepNumber> = {
	label: string;
	href: string;
	formStateKey: StepNumber;
	items?: Array<{
		href: string;
		label: string;
	}>;
};

export type AnyStepNumber = TaskStepNumber;

/**
 * React Form does not apply the errors types correctly to fields stored as objects.
 * This type treats those object fields as simple boolean fields as a workaround.
 */
// Not actually boolean but it doesn't need to be any more complex than this for our purposes
export type ShallowErrors<Schema extends FieldValues> = FieldErrors<
	Record<keyof Schema, boolean>
>;
