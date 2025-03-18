import { type FieldErrors, type FieldValues } from 'react-hook-form';
import { DeepPartial } from '../../lib/types';
import {
	defaultFormState as defaultStepsFormState,
	GlobalStaffState,
	type FormState as StepsFormState,
} from './steps/FormState';

export type Status = {
	completed: boolean;
	// Used by review and edit states only
	edited?: boolean;
	started?: boolean;
};

export type FormState = {
	id: string;
	lastUpdated: number;
	staff: Partial<GlobalStaffState>;
	steps: Partial<StepsFormState>;
	type: string;
} & Status;

export const defaultFormState: DeepPartial<FormState> = {
	steps: defaultStepsFormState,
};

/**
 * React Form does not apply the errors types correctly to fields stored as objects.
 * This type treats those object fields as simple boolean fields as a workaround.
 */
// Not actually boolean but it doesn't need to be any more complex than this for our purposes
export type ShallowErrors<Schema extends FieldValues> = FieldErrors<
	Record<keyof Schema, boolean>
>;
