import { type FieldErrors, type FieldValues } from 'react-hook-form';
import { DeepPartial } from '../../lib/types';
import {
	defaultFormState as defaultTaskFormState,
	type FormState as TaskFormState,
} from './task/FormState';
import { type StepNumber } from './task/FormProvider';

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
	task: defaultTaskFormState,
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

export type AnyStepNumber = StepNumber;

/**
 * React Form does not apply the errors types correctly to fields stored as objects.
 * This type treats those object fields as simple boolean fields as a workaround.
 */
// Not actually boolean but it doesn't need to be any more complex than this for our purposes
export type ShallowErrors<Schema extends FieldValues> = FieldErrors<
	Record<keyof Schema, boolean>
>;
