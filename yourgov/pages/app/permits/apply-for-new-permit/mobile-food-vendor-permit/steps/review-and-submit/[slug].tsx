import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Fragment, ReactElement } from 'react';
import { PageContent } from '@ag.ds-next/react/content';
import { DocumentTitle } from '../../../../../../../components/DocumentTitle';
import { AppLayout } from '../../../../../../../components/Layout/AppLayout';
import {
	GlobalFormProvider,
	FormProvider,
	StepOwnerDetailsForm,
	StepBusinessDetailsForm,
	StepBusinessAddressForm,
	StepVehicleRegistrationForm,
	StepTradingTimeForm,
	StepFoodServedForm,
	StepEmployeesForm,
	StepFoodSafetySupervisorForm,
	StepUploadDocumentsForm,
	stepsData,
	useGlobalForm,
} from '../../../../../../../components/FormMobileFoodVendorPermit';

const substepToFormMap = {
	'owner-details': StepOwnerDetailsForm,
	'business-details': StepBusinessDetailsForm,
	'business-address': StepBusinessAddressForm,
	'vehicle-registration': StepVehicleRegistrationForm,
	'trading-time': StepTradingTimeForm,
	'food-served': StepFoodServedForm,
	employees: StepEmployeesForm,
	'food-safety-supervisor': StepFoodSafetySupervisorForm,
	documents: StepUploadDocumentsForm,
};

export default function EditStepFromReview({
	substep,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const { formTitle } = useGlobalForm();
	// const substepIndex = Number(substep.split('-').at(-1)) - 1;

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
	{ slug: string }
> = async ({ params }) => {
	const { slug } = params ?? {};

	console.log(`slug`, slug);

	if (!isKeyofSubsteps(slug)) {
		return { notFound: true };
	}

	return {
		props: {
			substep: slug,
		},
	};
};

export const getStaticPaths = async () => {
	const steps = stepsData.map(
		({ href }) => `${href.slice(href.lastIndexOf('/') + 1)}`
	);

	console.log(`steps`, steps);
	return {
		paths: steps.map((slug) => ({
			params: { slug },
		})),
		fallback: false,
	};
};

const isKeyofSubsteps = (
	substep: string | undefined
): substep is keyof typeof substepToFormMap =>
	!!substep && substep in substepToFormMap;
