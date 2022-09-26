import {
	createContext,
	ReactNode,
	useCallback,
	useContext,
	useMemo,
	useState,
} from 'react';
import { FormState as Task1FormState } from './FormRegisterPetDetails/FormRegisterPetDetails';
import { FormState as Task2FormState } from './FormRegisterPetPersonalDetails/FormRegisterPetPersonalDetails';

type ContextType = {
	/** When called, the user will be taken forward to the the next step */
	submitStep: (stepFormState: StepFormState) => void;
	/** The current step of the form */
	currentStep: number;
	/** If true, the user has completed the previous step of the form */
	hasCompletedPreviousSteps: boolean;
	/** The state of the entire form */
	formState: FormState;
	/** The state of the form of the current step */
	stepFormState: StepFormState;
};

const context = createContext<ContextType | undefined>(undefined);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type StepFormState = Record<string, any>;

type FormState = Partial<{
	[0]: Task1FormState;
	[1]: Task2FormState;
}>;

const TOTAL_STEPS = 1;

export const FormRegisterPetContext = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [currentStep, setCurrentStep] = useState(0);
	const [formState, setFormState] = useState<FormState>({});

	/** When called, the user will be taken forward to the the next step */
	const submitStep = useCallback(
		(formState: StepFormState) => {
			setFormState((current) => ({ ...current, [currentStep]: formState }));
			if (currentStep === TOTAL_STEPS) {
				return;
			} else {
				setCurrentStep(currentStep + 1);
			}
		},
		[currentStep]
	);

	/** If true, the user has completed the previous step of the form */
	const hasCompletedPreviousSteps = useMemo(() => {
		if (currentStep === 0) return true;
		const previousStep = currentStep - 1;
		return Boolean(previousStep in formState);
	}, [formState, currentStep]);

	const contextValue = {
		submitStep,
		currentStep,
		hasCompletedPreviousSteps,
		formState,
		stepFormState:
			(currentStep in formState &&
				formState[currentStep as keyof typeof formState]) ||
			{},
	};

	return <context.Provider value={contextValue}>{children}</context.Provider>;
};

export const useFormRegisterPet = () => {
	const value = useContext(context);

	if (!value) {
		throw new Error('Context provider not found');
	}

	return value;
};
