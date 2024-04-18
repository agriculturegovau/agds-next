import { DeepPartial } from '../../lib/types';
import {
	task1DefaultFormState,
	Task1FormState,
} from './task1/FormTask1FormState';
import {
	task2DefaultFormState,
	Task2FormState,
} from './task2/FormTask2FormState';
import {
	task3DefaultFormState,
	Task3FormState,
} from './task3/FormTask3FormState';
import { Task4FormState } from './task4/FormTask4FormState';

export type Completion = {
	started?: boolean;
	completed: boolean;
};

interface TaskCompletion extends Completion {
	completedRecently: boolean;
}

export type FormState = {
	task1: Partial<Task1FormState> & TaskCompletion;
	task2: Partial<Task2FormState> & TaskCompletion;
	task3: Partial<Task3FormState> & TaskCompletion;
	task4: Partial<Task4FormState> & TaskCompletion;
};

export const defaultFormState: DeepPartial<FormState> = {
	task1: task1DefaultFormState,
	task2: task2DefaultFormState,
	task3: task3DefaultFormState,
	task4: { started: false, completed: false },
};

export type TaskKey = 'task1' | 'task2' | 'task3' | 'task4';
