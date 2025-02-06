import { useRouter } from 'next/router';
import { stepsData } from '../components/FormMobileFoodVendorPermit';
import { type FormStep } from '../components/FormMobileFoodVendorPermit/steps/stepsData';

export const useIsEditingFromReviewStep = () => {
	const { asPath } = useRouter();

	const isChangeHrefMatch = (
		steps: FormStep[],
		asPath: string,
		// depth currently is not used because of the way sub steps are structured
		depth = 0
	): { match: FormStep; depth: number } | undefined => {
		for (const step of steps) {
			if (step.changeHref === asPath) {
				return { depth, match: step };
			}

			if (step.items) {
				const result = isChangeHrefMatch(step.items, asPath, depth + 1);
				if (result) {
					return result;
				}
			}
		}

		return undefined;
	};

	return isChangeHrefMatch(stepsData, asPath);
};
