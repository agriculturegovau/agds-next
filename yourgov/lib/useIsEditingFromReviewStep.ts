import { useRouter } from 'next/router';
import { stepsData } from '../components/FormMobileFoodVendorPermit';
import { StepsData } from '../components/FormMobileFoodVendorPermit/steps/stepsData';

export const useIsEditingFromReviewStep = () => {
	const { asPath } = useRouter();
	console.log(`asPath`, asPath);
	const isChangeHrefMatch = (steps, asPath) => {
		for (const step of steps) {
			if (step.changeHref === asPath) {
				return step;
			}

			if (step.items && isChangeHrefMatch(step.items, asPath)) {
				return step.items;
			}
		}

		return undefined;
	};

	return isChangeHrefMatch(stepsData, asPath);
	// const lastStepHref = stepsData.at(-1)?.href;
	// console.log(`lastStepHref`, lastStepHref);
	// const isEditingFromReviewStep = new RegExp(
	// 	lastStepHref + '\\/substep-\\d+'
	// ).test(asPath);

	// return isEditingFromReviewStep;
};

export const useIsEditingFromReviewStep2 = (): [boolean, StepsData] => {
	const { asPath } = useRouter();
	let matchedStep = {};

	const isChangeHrefMatch = (steps: StepsData, asPath: string) => {
		for (const step of steps) {
			if (step.changeHref === asPath) {
				matchedStep = step;
				return true;
			}

			if (step.items && isChangeHrefMatch(step.items, asPath)) {
				return true;
			}
		}

		return false;
	};

	return [isChangeHrefMatch(stepsData, asPath), matchedStep];
};
