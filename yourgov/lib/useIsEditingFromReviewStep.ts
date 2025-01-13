import { useRouter } from 'next/router';
import { formSteps } from '../components/FormMobileFoodVendorPermit';

export const useIsEditingFromReviewStep = () => {
	const { asPath } = useRouter();
	const lastStepHref = formSteps.at(-1)?.href;
	const isEditingFromReviewStep = new RegExp(
		lastStepHref + '\\/substep-\\d+'
	).test(asPath);

	return isEditingFromReviewStep;
};
