import { Task2StepNumber } from './task2/Task2Types';
import { Task1StepNumber } from './task1/Task1Types';

export interface FormStep<StepNumber extends AnyStepNumber> {
	label: string;
	href: string;
	formStateKey: StepNumber;
}

export type AnyStepNumber = Task1StepNumber | Task2StepNumber;
