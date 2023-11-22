import { DeepPartial } from 'react-hook-form';
import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useSessionFormState } from '../../lib/useSessionFormState';
import { FormState, defaultFormState } from './FormState';

type ContextType = {
	formTitle: string;
	typeSearchParm: string;
	homePageUrl: string;
	// Side flow
	isSideFlow: boolean;
	setIsSideFlow: (isSideFlow: boolean) => void;
	// Form state
	formState: DeepPartial<FormState>;
	setFormState: (formState: DeepPartial<FormState>) => void;
	// Is submitting step
	isSubmittingStep: boolean;
	setIsSubmittingStep: (value: boolean) => void;
};

const context = createContext<ContextType | undefined>(undefined);

type FormMobileFoodVendorPermitProps = PropsWithChildren<{}>;

export function GlobalFormProvider({
	children,
}: FormMobileFoodVendorPermitProps) {
	const [formState, setFormState] = useSessionFormState(
		'FormMobileFoodVendorPermit',
		defaultFormState as DeepPartial<FormState>
	);

	const searchParams = useSearchParams();
	const typeSearchParm = searchParams.get('type') ?? '';

	const formTitle = `Apply for a ${typeSearchParm} permit`;
	const homePageUrl = `/app/licences-and-permits/apply/mobile-food-vendor-permit/form?type=${typeSearchParm}`;

	const [isSideFlow, setIsSideFlow] = useState(false);

	const [isSubmittingStep, setIsSubmittingStep] = useState(false);

	const contextValue: ContextType = {
		formTitle,
		typeSearchParm,
		homePageUrl,
		// Side flow
		isSideFlow,
		setIsSideFlow,
		// Form state
		formState,
		setFormState,
		// Submitting step
		isSubmittingStep,
		setIsSubmittingStep,
	};

	return <context.Provider value={contextValue}>{children}</context.Provider>;
}

export function useGlobalForm() {
	const value = useContext(context);

	if (!value) {
		throw new Error('Context provider not found');
	}

	return value;
}
