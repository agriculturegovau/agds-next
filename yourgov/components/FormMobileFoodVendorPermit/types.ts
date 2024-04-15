import { FieldErrors, FieldValues } from 'react-hook-form';
import { Dispatch, SetStateAction } from 'react';
import { Task2StepNumber } from './task2/Task2Types';
import { Task1StepNumber } from './task1/Task1Types';

export interface FormStep<StepNumber extends AnyStepNumber> {
	label: string;
	href: string;
	formStateKey: StepNumber;
}

export type AnyStepNumber = Task1StepNumber | Task2StepNumber;

/**
 * React Form does not apply the errors types correctly to fields stored as objects.
 * This type treats those object fields as simple boolean fields as a work around.
 */
// Not actually boolean but it doesn't need to be any more complex than this for our purposes
export type ShallowErrors<Schema extends FieldValues> = FieldErrors<Record<keyof Schema, boolean>>

export type SetStateFn<T> = Dispatch<SetStateAction<T>>