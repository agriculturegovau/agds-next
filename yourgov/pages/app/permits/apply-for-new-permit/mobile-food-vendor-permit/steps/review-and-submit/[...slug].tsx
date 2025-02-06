import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Fragment, ReactElement } from 'react';
import { PageContent } from '@ag.ds-next/react/content';
import { DocumentTitle } from '../../../../../../../components/DocumentTitle';
import { AppLayout } from '../../../../../../../components/Layout/AppLayout';
import {
	FormProvider,
	GlobalFormProvider,
	StepBusinessAddressForm,
	StepBusinessDetailsForm,
	StepEmployeesAddEmployeeForm,
	StepEmployeesForm,
	StepFoodSafetySupervisorForm,
	StepFoodServedForm,
	StepOwnerDetailsChangeDetailsForm,
	StepOwnerDetailsForm,
	stepsData,
	StepTradingTimeForm,
	StepUploadDocumentsForm,
	StepVehicleRegistrationForm,
	useGlobalForm,
} from '../../../../../../../components/FormMobileFoodVendorPermit';
import { StepsData } from '../../../../../../../components/FormMobileFoodVendorPermit/steps/stepsData';

const substepToFormMap = {
	'owner-details': StepOwnerDetailsForm,
	'owner-details/change-details': StepOwnerDetailsChangeDetailsForm,
	'business-details': StepBusinessDetailsForm,
	'business-address': StepBusinessAddressForm,
	'vehicle-registration': StepVehicleRegistrationForm,
	'trading-time': StepTradingTimeForm,
	'food-served': StepFoodServedForm,
	employees: StepEmployeesForm,
	'employees/add-employee': StepEmployeesAddEmployeeForm,
	'food-safety-supervisor': StepFoodSafetySupervisorForm,
	documents: StepUploadDocumentsForm,
};

export default function EditStepFromReview({
	substep,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const { formTitle } = useGlobalForm();
	const Form = substepToFormMap[substep];

	return (
		<Fragment>
			<DocumentTitle title={`${stepsData[0].changeLabel} | ${formTitle}`} />
			<PageContent>
				<Form />
			</PageContent>
		</Fragment>
	);
}

EditStepFromReview.getLayout = function getLayout(page: ReactElement) {
	return (
		<AppLayout focusMode>
			<GlobalFormProvider>
				<FormProvider>{page}</FormProvider>
			</GlobalFormProvider>
		</AppLayout>
	);
};

export const getStaticProps: GetStaticProps<
	{ substep: keyof typeof substepToFormMap },
	{ slug: string[] }
> = async ({ params }) => {
	const { slug } = params ?? {};

	const slugAsString = slug?.join('/');

	if (!(slugAsString && slugAsString in substepToFormMap)) {
		return { notFound: true };
	}

	return {
		props: {
			substep: slugAsString as keyof typeof substepToFormMap,
		},
	};
};

const getStepSlugs = (steps: StepsData, parentSlugs: string[] = []) => {
	let slugs: string[][] = [];

	for (const step of steps) {
		const stepSegment = step.href.split('/').pop() ?? '';
		const fullSegment = [...parentSlugs, stepSegment];

		slugs.push(fullSegment);

		if (step.items) {
			slugs = [...slugs, ...getStepSlugs(step.items, fullSegment)];
		}
	}

	return slugs;
};

export const getStaticPaths = async () => {
	const steps = getStepSlugs(stepsData);
	console.log(`steps`, steps);

	const paths = steps.map((slugArray) => ({
		params: { slug: slugArray },
	}));

	console.log(`paths`, paths);

	return {
		paths,
		fallback: false,
	};
};
