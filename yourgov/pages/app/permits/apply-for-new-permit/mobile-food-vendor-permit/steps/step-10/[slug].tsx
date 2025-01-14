import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Fragment, ReactElement } from 'react';
import { PageContent } from '@ag.ds-next/react/content';
import { DocumentTitle } from '../../../../../../../components/DocumentTitle';
import { AppLayout } from '../../../../../../../components/Layout/AppLayout';
import {
	GlobalFormProvider,
	FormProvider,
	FormStep1,
	FormStep2,
	FormStep3,
	FormStep4,
	FormStep5,
	FormStep6,
	FormStep7,
	FormStep8,
	FormStep9,
	formSteps,
	useGlobalForm,
} from '../../../../../../../components/FormMobileFoodVendorPermit';

const substepToFormMap = {
	'substep-1': FormStep1,
	'substep-2': FormStep2,
	'substep-3': FormStep3,
	'substep-4': FormStep4,
	'substep-5': FormStep5,
	'substep-6': FormStep6,
	'substep-7': FormStep7,
	'substep-8': FormStep8,
	'substep-9': FormStep9,
};

export default function EditStepFromReview({
	substep,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const { formTitle } = useGlobalForm();
	const substepIndex = Number(substep.split('-').at(-1)) - 1;

	const Form = substepToFormMap[substep];

	return (
		<Fragment>
			<DocumentTitle
				title={`${formSteps[substepIndex].labelWhenChanging} | ${formTitle}`}
			/>
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
	const steps = formSteps.map(
		({ href }) => `sub${href.slice(href.lastIndexOf('/') + 1)}`
	);

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
