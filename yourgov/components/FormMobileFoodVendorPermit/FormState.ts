import { DeepPartial } from '../../lib/types';
import { FormSchema as Task1Step1FormSchema } from './FormTask1Step1';
import { FormSchema as Task1Step2FormSchema } from './FormTask1Step2';
import { FormSchema as Task1Step3FormSchema } from './FormTask1Step3';
import { FormSchema as Task1Step4FormSchema } from './FormTask1Step4';
import { FormSchema as Task1Step5FormSchema } from './FormTask1Step5';
import { FormSchema as Task1Step6FormSchema } from './FormTask1Step6';

export type Task1FormState = {
	step1: Task1Step1FormSchema & { completed: boolean };
	step2: Task1Step2FormSchema & { completed: boolean };
	step3: Task1Step3FormSchema & { completed: boolean };
	step4: Task1Step4FormSchema & { completed: boolean };
	step5: Task1Step5FormSchema & { completed: boolean };
	step6: Task1Step6FormSchema & { completed: boolean };
	step7: { completed: boolean };
};

export type Task2FormState = {
	[1]: { completed: boolean };
};

export type Task3FormState = {
	[1]: { completed: boolean };
};

export type Tas42FormState = {
	[1]: { completed: boolean };
};

export type FormState = {
	task1: Partial<Task1FormState> & { completed: boolean };
	task2: Record<string, unknown> & { completed: boolean };
	task3: Record<string, unknown> & { completed: boolean };
	task4: Record<string, unknown> & { completed: boolean };
};

export const defaultFormState: DeepPartial<FormState> = {
	task1: {
		step1: {
			firstName: 'Barney',
			lastName: 'Gumble',
			email: 'gumble@email.com',
			completed: false,
		},
		step3: {
			isPostalAddressSameAsStreetAddress: true,
			completed: false,
		},
		step5: {
			tradingPeriod: { from: undefined, to: undefined },
			completed: false,
		},
	},
	task2: { completed: false },
	task3: { completed: false },
	task4: { completed: false },
};
