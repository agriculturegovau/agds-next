import { type FieldErrors, type FieldValues } from 'react-hook-form';
import { DeepPartial } from '../../lib/types';
import {
	defaultFormState as defaultStepsFormState,
	GlobalStaffState,
	type FormState as StepsFormState,
} from './steps/FormState';
import { type StepNumber } from './steps/FormProvider';

export type Completion = {
	completed: boolean;
	started?: boolean;
};

export type FormState = {
	id: string;
	lastUpdated: number;
	staff: Partial<GlobalStaffState>;
	steps: Partial<StepsFormState>;
	type: string;
} & Completion;

export const defaultFormState: DeepPartial<FormState> = {
	steps: defaultStepsFormState,
};

export type FormStep<StepNum extends StepNumber = StepNumber> = {
	editLinkLabel: string;
	label: string;
	href: string;
	formStateKey: StepNum;
	items?: Array<{
		href: string;
		label: string;
	}>;
};

/**
 * React Form does not apply the errors types correctly to fields stored as objects.
 * This type treats those object fields as simple boolean fields as a workaround.
 */
// Not actually boolean but it doesn't need to be any more complex than this for our purposes
export type ShallowErrors<Schema extends FieldValues> = FieldErrors<
	Record<keyof Schema, boolean>
>;
