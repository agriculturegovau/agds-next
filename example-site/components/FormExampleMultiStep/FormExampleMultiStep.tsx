import { Column, Columns } from '@ag.ds-next/columns';
import { ContentBleed } from '@ag.ds-next/content';
import { ProgressIndicator } from '@ag.ds-next/progress-indicator';
import { useRouter } from 'next/router';
import {
	createContext,
	ReactNode,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';

import { FormExampleMultiStep0 } from './FormExampleMultiStep0';
import { FormExampleMultiStep1 } from './FormExampleMultiStep1';
import { FormExampleMultiStep2 } from './FormExampleMultiStep2';
import { FormExampleMultiStep3 } from './FormExampleMultiStep3';
import { FormExampleMultiStep4 } from './FormExampleMultiStep4';

export const FORM_STEPS = [
	{
		label: 'Conditional fork',
		component: FormExampleMultiStep0,
	},
	{
		label: 'Submit evidence',
		component: FormExampleMultiStep1,
	},
	{
		label: 'Select date',
		component: FormExampleMultiStep2,
	},
	{
		label: 'Conditional reveal',
		component: FormExampleMultiStep3,
	},
	{
		label: 'Confirm and submit',
		component: FormExampleMultiStep4,
	},
];

type ContextType = {
	hasCompletedPreviousSteps: boolean;
	submittingStep: boolean;
	next: (formState: Record<string, unknown>) => void;
	back: () => void;
	formState: Record<string, unknown>;
	cancel: () => void;
	saving: boolean;
	saveAndExit: () => void;
};

const context = createContext<ContextType | undefined>(undefined);

export type FormExampleMultiStepProdiverProps = { children: ReactNode };

type FormState = Record<number, Record<string, unknown>>;

export const FormExampleMultiStep = () => {
	const router = useRouter();
	const [saving, setSaving] = useState(false);
	const [submittingStep, setSubmittingStep] = useState(false);
	const [formState, setFormState] = useState<FormState>({});
	const [currentStep, setCurrentStep] = useState(0);

	const next = useCallback(
		(formState: Record<string, unknown>) => {
			setSubmittingStep(true);
			setTimeout(() => {
				setCurrentStep(currentStep + 1);
				setSubmittingStep(false);
				setFormState((current) => ({ ...current, [currentStep]: formState }));
			}, 3000);
		},
		[currentStep]
	);

	const back = useCallback(() => {
		setCurrentStep((x) => x - 1);
	}, []);

	const cancel = useCallback(() => {
		router.push('/form-multi-step');
	}, [router]);

	const saveAndExit = useCallback(() => {
		setSaving(true);
		setTimeout(() => {
			router.push('/form-multi-step');
			setSaving(false);
		}, 3000);
	}, [router]);

	const Comp = useMemo(() => FORM_STEPS[currentStep].component, [currentStep]);

	const hasCompletedPreviousSteps = useMemo(() => {
		if (currentStep === 0) return true;
		const previousStep = currentStep - 1;
		return Boolean(formState[previousStep]);
	}, [formState, currentStep]);

	console.log({ formState });

	return (
		<context.Provider
			value={{
				hasCompletedPreviousSteps,
				next,
				back,
				formState: formState[currentStep],
				submittingStep,
				cancel,
				saving,
				saveAndExit,
			}}
		>
			<Columns>
				<Column columnSpan={{ xs: 12, md: 3 }}>
					<ContentBleed visible={{ md: false }}>
						<ProgressIndicator
							items={FORM_STEPS.map(({ label }, idx) => ({
								label,
								status: idx === currentStep ? 'doing' : 'todo',
								onClick: () => setCurrentStep(idx),
							}))}
						/>
					</ContentBleed>
				</Column>
				<Column columnSpan={{ xs: 12, md: 8 }} columnStart={{ md: 5 }}>
					<Comp />
				</Column>
			</Columns>
		</context.Provider>
	);
};

export const useFormExampleMultiStepProdiver = () => {
	const value = useContext(context);

	if (!value) {
		throw new Error('Context not found');
	}

	return value;
};
