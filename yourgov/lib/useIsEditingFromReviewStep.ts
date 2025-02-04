import { useRouter } from 'next/router';
import { stepsData } from '../components/FormMobileFoodVendorPermit';

export const useIsEditingFromReviewStep = () => {
	const { asPath } = useRouter();
	const lastStepHref = stepsData.at(-1)?.href;
	const isEditingFromReviewStep = new RegExp(
		lastStepHref + '\\/substep-\\d+'
	).test(asPath);

	return isEditingFromReviewStep;
};
